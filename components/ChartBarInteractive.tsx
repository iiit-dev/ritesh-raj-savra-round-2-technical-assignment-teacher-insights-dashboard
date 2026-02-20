"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getGroupedActivityData } from "@/data/quarterly-activity-data"
// import { getGroupedActivityData } from "@/data/unmerged-quarterly-activity-data"

export const description = "An interactive bar chart"

const activityTypes = ["Quiz", "Question Paper", "Lesson Plan"] as const

const chartConfig = {
  views: {
    label: "Activity Count",
    color: "var(--chart-1)",
  },
  Quiz: {
    label: "Quiz",
    color: "var(--chart-1)",
  },
  "Question Paper": {
    label: "Exams",
    color: "var(--chart-2)",
  },
  "Lesson Plan": {
    label: "Lessons",
    color: "var(--chart-3)",
  }, 
} satisfies ChartConfig

export default function ChartBarInteractive() {
  const [activeActivity, setActiveActivity] = React.useState("Quiz")
  const [chartData, setChartData] = React.useState<
    Array<{
      date: string
      Quiz: number
      "Question Paper": number
      "Lesson Plan": number
    }>
  >([])

  React.useEffect(() => {
    const data = getGroupedActivityData()
    setChartData(data)
  }, [])

  const total = React.useMemo(() => {
    if (chartData.length === 0) {
      return { Quiz: 0, "Question Paper": 0, "Lesson Plan": 0 }
    }

    return {
      Quiz: chartData.reduce((acc, curr) => acc + curr.Quiz, 0),
      "Question Paper": chartData.reduce(
        (acc, curr) => acc + curr["Question Paper"],
        0
      ),
      "Lesson Plan": chartData.reduce((acc, curr) => acc + curr["Lesson Plan"], 0),
    }
  }, [chartData])

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Quarterly Activity Report</CardTitle>
          <CardDescription>Overview of quizzes, question papers, and lesson plans completed in the past three months.</CardDescription>
        </div>
        <div className="flex">
          {activityTypes.map((activity) => (
            <button
              key={activity}
              data-active={activeActivity === activity}
              className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
              onClick={() => setActiveActivity(activity)}
            >
              <span className="text-muted-foreground text-xs">
                {chartConfig[activity].label}
              </span>
              <span className="text-lg leading-none font-bold sm:text-3xl">
                {total[activity].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar
              dataKey={activeActivity}
              fill={chartConfig[activeActivity as keyof typeof chartConfig]?.color}
            />
          </BarChart>
        </ChartContainer> 
      </CardContent>
    </Card>
  )
}
