"use client";
import DropDownButton from "@/components/buttons/CalendarDropDownButton";
import CalendarIcon from "@/components/icons/calendar-icon";
import { Skeleton } from "@/components/ui/skeleton";
import {
  dataProductTable,
  pieChartValue,
  plannedProduction,
  productProgressList,
  topClients,
  topProductsSell,
} from "@/lib/fakeData";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import "@styles/globals.css";
import dynamic from "next/dynamic";

/* dynamic components */
const BarChartComponent = dynamic(
  () => import("@/components/charts/BarChartComponent"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);

const PieChartComponent = dynamic(
  () => import("@/components/charts/PieChartComponent"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);
const HorizontalBarChart = dynamic(
  () => import("@/components/charts/HorizontalBarChart"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);

const ProductProgressList = dynamic(
  () => import("@/components/charts/ProductProgressList"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
  }
);

const DataTable = dynamic(() => import("@/components/charts/DataTable"), {
  ssr: false,
  loading: () => <Skeleton className="h-[350px] w-[100%] rounded-xl" />,
});

const DashboardCard = dynamic(
  () => import("@/components/charts/DashboardCard"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[116px] w-[100%] rounded-xl" />,
  }
);

export default function HomePage() {
  return (
    <>
      <div className="p-10 min-h-screen">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-medium mb-6">
            Top Sản Phẩm Sản Xuất Nhiều Nhất
          </h1>
          <DropDownButton
            prefixIcon={<CalendarIcon />}
            title="Tháng này"
            dropdownItems={[
              {
                label: "Tháng sau",
              },
              {
                label: "Tháng trước",
              },
            ]}
          />
        </div>
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
              <div className="flex justify-between items-center w-full">
                <CardTitle className="font-medium">Kế hoạch Sản Xuất</CardTitle>
                <DropDownButton
                  prefixIcon={<CalendarIcon />}
                  title="Quý này"
                  dropdownItems={[
                    {
                      label: "Quý sau",
                    },
                    {
                      label: "Quý trước",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent>
              <BarChartComponent PlannedProduct={plannedProduction} />
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
                  title="Năm nay"
                  dropdownItems={[
                    {
                      label: "Năm sau",
                    },
                    {
                      label: "Năm trước",
                    },
                  ]}
                />
              </div>
            </CardHeader>
            <CardContent>
              <HorizontalBarChart TopClients={topClients} />
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
                <PieChartComponent PieChartProduct={pieChartValue} />
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
              <ProductProgressList ProductProgress={productProgressList} />
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
              <DataTable DataProductTable={dataProductTable} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
