/* eslint-disable @typescript-eslint/no-explicit-any */
// components/HorizontalBarChart.tsx

import { TopClients } from "../../interfaces/top-clients.interface";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface HorizontalBarChartProps {
  TopClients: TopClients[]; 
}

export default function HorizontalBarChart({
  TopClients,
}: HorizontalBarChartProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      {/* Custom Y-axis Label */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "12%",

          transform: "translate(-50%, 50%)",
          fontSize: "12px",
          color: "#667085",
        }}
      >
        Khách hàng
      </div>
      {/* Custom X-axis Label */}
      <div
        className="font-normal"
        style={{
          position: "absolute",
          bottom: "4%",
          left: "12%",
          transform: "translate(-50%, 0)",
          fontSize: "12px",
          color: "#667085",
        }}
      >
        Sản lượng
      </div>
      {TopClients ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            accessibilityLayer
            data={TopClients}
            width={1000}
            height={300}
            barSize={8}
            outerRadius={10}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              color="#9295A4"
              strokeDasharray="3 3"
              max={3200}
              fontSize={12}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
              ticks={[0, 800, 800 * 2, 800 * 3, 800 * 4]}
              domain={[0, 3200]}
            />
            <YAxis
              type="category"
              dataKey="name"
              strokeDasharray="3 3"
              fontSize={12}
              color="#9295A4"
              width={150}
              tickMargin={20}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              position={{ x: 20, y: 0 }}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="value"
              name="Sản lượng"
              fill="#3b82f6"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}

const CustomTooltip = ({ active, payload, coordinate }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          padding: "5px 10px",
          fontFamily: "Inter",
          fontSize: "14px",
          border: "none",
          transform: `translate(${coordinate.x}px, ${coordinate.y - 15}px)`,
        }}
      >
        {/* Tooltip Content */}
        <div>{payload[0].value.toLocaleString()}</div>

        {/* Left Arrow */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            left: "-8px",
            zIndex: 2,
            transform: "translateY(-50%)",
          }}
          width="12"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2 8.4C-0.4 7.2 -0.4 4.8 1.2 3.6L6 0V12L1.2 8.4Z"
            fill="#17181A"
          />
        </svg>
      </div>
    );
  }

  return null;
};
