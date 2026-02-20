"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { teacherDataSet } from "@/data/savra-teacher-data-set"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A pie chart with a label list"

// Build chart data from teacher dataset: count activities per teacher
const teacherCounts = teacherDataSet.reduce((acc, item) => {
  const name = item.Teacher_name || (item as any).teacher_name || "Unknown"
  acc[name] = (acc[name] || 0) + 1
  return acc
}, {} as Record<string, number>)

const chartData = Object.entries(teacherCounts)
  .map(([teacher, count]) => ({ teacher, visitors: count }))
  .sort((a, b) => b.visitors - a.visitors)
  .slice(0, 5)
  .map((d, i) => ({ ...d, fill: `var(--chart-${i + 1})` }))

const chartConfig = {
  visitors: {
    label: "Activities",
  },
} satisfies ChartConfig

// Top teacher (most activities) and comparison vs others
const topTeacher = chartData[0]?.teacher ?? "Unknown"
const topCount = chartData[0]?.visitors ?? 0
const otherSlices = chartData.slice(1)
const otherTotal = otherSlices.reduce((s, it) => s + (it.visitors || 0), 0)
const otherAvg = otherSlices.length ? otherTotal / otherSlices.length : 0
const percentHigher =
  otherAvg > 0 ? Number((((topCount - otherAvg) / otherAvg) * 100).toFixed(1)) : null

export default function ChartPieLabelList() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Most Active Teachers</CardTitle>
        <CardDescription>November 2025 - February 2026</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="visitors"
                  labelFormatter={(_value, payload) =>
                    payload && payload[0] && payload[0].payload
                      ? (payload[0].payload as any).teacher
                      : null
                  }
                />
              }
            />
            <Pie data={chartData} dataKey="visitors" nameKey="teacher">
              <LabelList
                dataKey="teacher"
                className="fill-background"
                stroke="none"
                position="inside"
                offset={0}
                fontSize={10}
                formatter={(value: string) =>
                  typeof value === "string" && value.length > 14
                    ? value.slice(0, 14) + "…"
                    : value
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {topTeacher}’s activity count of {topCount} is {percentHigher !== null ? `${percentHigher}% above the average.` : "above the average."} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing the most active teachers over the past 3 months.
        </div>
      </CardFooter>
    </Card>
  )
}
