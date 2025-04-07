// components/DashboardCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArrowDownIcon from "./icons/ArrowDown";
import ArrowUpIcon from "./icons/ArrowUp";

interface DashboardCardProps {
  title: string;
  value: number;
  percentage: string;
  trend: "up" | "down";
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  percentage,
  trend,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="text-2xl font-bold">{value}</div>
        <div
          className={`text-sm ${
            trend === "up" ? "text-green-500" : "text-red-500"
          } flex items-center`}
        >
          {trend === "down" ? <ArrowDownIcon /> : <ArrowUpIcon />} {percentage}
        </div>
      </CardContent>
    </Card>
  );
};
