"use client";
import DropDownButton from "@/components/buttons/CalendarDropDownButton";
import BarChartComponent from "@/components/charts/BarChartComponent";
import { DashboardCard } from "@/components/charts/DashboardCard";
import { DataTable } from "@/components/charts/DataTable";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import PieChartComponent from "@/components/charts/PieChartComponent";
import ProductProgressList from "@/components/charts/ProductProgressList";
import CalendarIcon from "@/components/icons/calendar-icon";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

import "@styles/globals.css";

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
          {Array.from({ length: 5 }).map((_, index) => (
            <DashboardCard
              key={index}
              title="Chưa có mặt hàng"
              value={0}
              percentage="0%"
              trend=""
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
              <BarChartComponent PlannedProduct={[]} />
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
              <HorizontalBarChart TopClients={[]} />
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
              <PieChartComponent PieChartProduct={[]} />
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
              <ProductProgressList ProductProgress={[]} />
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
              <DataTable DataProductTable={[]} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
