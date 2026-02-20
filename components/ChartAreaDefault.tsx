"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { getSubjectWiseActivityGrowth } from "@/data/subject-wise-activity-growth"

export const description = "Subject-wise Activity Growth"

const chartData = getSubjectWiseActivityGrowth()

const chartConfig = {
  Mathematics: {
    label: "Mathematics",
    color: "var(--chart-1)",
  },
  Science: {
    label: "Science",
    color: "var(--chart-2)",
  },
  English: {
    label: "English",
    color: "var(--chart-3)",
  },
  "Social Studies": {
    label: "Social Studies",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export default function ChartAreaDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject-wise Activity Growth</CardTitle>
        <CardDescription>
          Tracking activity count across subjects by date
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            />
            <YAxis
              label={{ value: "Count", angle: -90, position: "insideLeft" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="Mathematics"
              type="natural"
              fill="var(--color-Mathematics)"
              fillOpacity={0.4}
              stroke="var(--color-Mathematics)"
            />
            <Area
              dataKey="Science"
              type="natural"
              fill="var(--color-Science)"
              fillOpacity={0.4}
              stroke="var(--color-Science)"
            />
            <Area
              dataKey="English"
              type="natural"
              fill="var(--color-English)"
              fillOpacity={0.4}
              stroke="var(--color-English)"
            />
            <Area
              dataKey="Social Studies"
              type="natural"
              fill="var(--color-Social Studies)"
              fillOpacity={0.4}
              stroke="var(--color-Social Studies)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Subject-wise Activity Trends <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Mathematics, Science, English, and Social Studies
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
