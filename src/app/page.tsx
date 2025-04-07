"use client";
import "@styles/globals.css";
import { DashboardCard } from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const BarChartComponent = dynamic(
  () => import("@/components/BarChartComponent"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const PieChartComponent = dynamic(
  () => import("@/components/PieChartComponent"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);
const HorizontalBarChart = dynamic(
  () => import("@/components/HorizontalBarChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);
export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h1>
        <div className="grid grid-cols-5 gap-4 mb-6">
          <DashboardCard
            title="Áo sơ mi dài tay"
            value={48}
            percentage="8.2%"
            trend="up"
          />
          <DashboardCard
            title="Quần tây"
            value={18}
            percentage="5%"
            trend="down"
          />
          <DashboardCard
            title="Áo hoodie"
            value={40}
            percentage="12%"
            trend="up"
          />
          <DashboardCard
            title="Đầm maxi"
            value={23}
            percentage="3.5%"
            trend="up"
          />
          <DashboardCard
            title="Áo thun cổ tròn"
            value={48}
            percentage="4.7%"
            trend="up"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Kênh Sản Xuất</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChartComponent />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <HorizontalBarChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Tình Hình Sản Xuất</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="relative">
                <PieChartComponent />
                {isMounted && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                    16 Lệnh sản xuất
                  </div>
                )}
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
              <CardTitle>Tiến Độ Sản Xuất Theo Nhóm</CardTitle>
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
              <CardTitle>Nguồn Vật Liệu Đã Mua</CardTitle>
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
