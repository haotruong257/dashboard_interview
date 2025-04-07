/* eslint-disable @typescript-eslint/no-explicit-any */
// components/HorizontalBarChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Công ty Dệt may Happy Polla", value: 3100 },
  { name: "Công ty May mặc Saigon trendy", value: 3000 },
  { name: "Outlet Lemon squeeze", value: 3170 },
  { name: "Shop quần áo streetwear New", value: 2900 },
  { name: "Shop thời trang công sở Basic Office", value: 2700 },
];

export default function HorizontalBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        accessibilityLayer
        width={1000}
        height={300}
        data={data}
        layout="vertical"
        barSize={8}
        outerRadius={10}
        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis
          type="number"
          max={3200}
          color="##9295A4"
          strokeDasharray="3 3"
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          ticks={[0, 800, 800 * 2, 800 * 3, 800 * 4]}
          domain={[0, 3200]}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={150}
          axisLine={false}
          strokeDasharray="3 3"
          tickMargin={20}
          tickLine={false}
        />
        <Tooltip
          content={<CustomTooltip />}
          position={{ x: 20, y: 0 }} // Adjust dynamically if needed
          cursor={{ fill: "transparent" }} // Remove hover effect
        />
        <Bar
          dataKey="value"
          name="Sản lượng"
          fill="#3b82f6"
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
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
          transform: `translate(${coordinate.x}px, ${coordinate.y - 15}px)`, // Adjust Y-axis for baseline
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
