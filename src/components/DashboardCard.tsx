// components/DashboardCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import ArrowDownIcon from "./icons/arrow-down";
import ArrowUpIcon from "./icons/arrow-up";

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
      <CardContent className="flex items-center justify-between">
        <div className="w-full flex items-center justify-between items-start">
          <div className="inline-flex flex-col">
            <div className="light-blue-color text-2xl font-semibold">
              {value}
            </div>
            <div className="text-sm font-normal">{title}</div>
          </div>
          <div className={`text-sm flex items-center`}>
            {trend === "down" ? <ArrowDownIcon /> : <ArrowUpIcon />}{" "}
            {percentage}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
