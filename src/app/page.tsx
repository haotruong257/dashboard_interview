"use client";
import DropDownButton from "@/components/buttons/CalendarDropDownButton";
import { DashboardCard } from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import CalendarIcon from "@/components/icons/calendar-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { topProductsSell } from "@/lib/fakeData";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

import "@styles/globals.css";
import dynamic from "next/dynamic";
const BarChartComponent = dynamic(
  () => import("@/components/BarChartComponent"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[250px] rounded-xl" />,
  }
);

const PieChartComponent = dynamic(
  () => import("@/components/PieChartComponent"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);
const HorizontalBarChart = dynamic(
  () => import("@/components/HorizontalBarChart"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);
export default function HomePage() {
  
  return (
    <>
      <div className="p-10 min-h-screen">
        <h1 className="text-2xl font-medium mb-6">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h1>
        <div className="grid grid-cols-5 gap-4 mb-6">
          {topProductsSell.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.name}
              value={item.value}
              percentage={`${item.percentage}%`}
              trend={item.trend}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">Kế hoạch Sản Xuất</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChartComponent />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center w-full">
                <CardTitle className="font-medium">
                  Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
                </CardTitle>
                <DropDownButton
                  prefixIcon={<CalendarIcon />}
                  title="Hôm nay"
                  dropdownItems={[
                    {
                      label: "Ngày mai",
                    },
                    {
                      label: "Hôm qua",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent>
              <HorizontalBarChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center w-full">
                <CardTitle className="font-medium">
                  Tình Hình Sản Xuất
                </CardTitle>
                <DropDownButton
                  prefixIcon={<CalendarIcon />}
                  title="Hôm nay"
                  dropdownItems={[
                    {
                      label: "Ngày mai",
                    },
                    {
                      label: "Hôm qua",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="relative">
                <PieChartComponent />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-center">
                  <div className="text-lg font-bold">5</div>
                  <div className="text-sm">Chưa hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">6</div>
                  <div className="text-sm">Đang sản xuất</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">5</div>
                  <div className="text-sm">Hoàn thành</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center w-full">
                <CardTitle className="font-medium">
                  Tiến Độ Sản Xuất Theo Nhóm
                </CardTitle>
                <DropDownButton
                  title="Hoàn thành"
                  dropdownItems={[
                    {
                      label: "Chưa hoàn thành",
                    },
                    {
                      label: "Đang sản xuất",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Áo sơ mi dài tay</span>
                  <span>123 cái (50%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Áo sơ mi cộc tay</span>
                  <span>321 cái (75%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Quần baggy</span>
                  <span>231 cái (45%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Quần tây</span>
                  <span>999 cái (100%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Đầm maxi</span>
                  <span>876 cái (90%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Áo khoác bomber</span>
                  <span>543 cái (24%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center w-full">
                <CardTitle className="font-medium">
                  Nguyên Vật Liệu Cần Mua
                </CardTitle>
                <DropDownButton
                  prefixIcon={<CalendarIcon />}
                  title="Tuần này"
                  dropdownItems={[
                    {
                      label: "Tuần trước",
                    },
                    {
                      label: "Tuần sau",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent>
              <DataTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
