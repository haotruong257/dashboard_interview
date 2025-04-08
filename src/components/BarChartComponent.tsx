// components/BarChartComponent.tsx
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Áo lẻ", planned: 80, actual: 60 },
  { name: "Áo sơ mi", planned: 50, actual: 30 },
  { name: "Áo thun polo", planned: 70, actual: 50 },
  { name: "Quần baggy", planned: 40, actual: 20 },
  { name: "Quần jogger", planned: 30, actual: 10 },
];

export default function BarChartComponent() {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      {/* Custom Y-axis Label */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "5%",
          transform: "translate(-50%, 50%)",
          fontSize: "12px",
          color: "#667085",
        }}
      >
        Cái
      </div>
      {/* Custom X-axis Label */}
      <div
        className="font-normal"
        style={{
          position: "absolute",
          bottom: "3px",
          left: "3%",
          transform: "translate(-50%, 0)",
          fontSize: "12px",
          color: "#667085",
        }}
      >
        Mặt hàng
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          barSize={20}
          outerRadius={10}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }} //spacing bar chart
          data={data}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
          />
          <XAxis
            type="category"
            dataKey="name"
            width={200}
            fontSize={12}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 20, 40, 60, 80, 100]}
            tickMargin={20}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            position={{ x: -40, y: -25 }} // Adjust dynamically if needed
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="planned"
            name="Kế hoạch"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
          <Bar
            dataKey="actual"
            name="Thực hiện"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
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
          transform: `translate(${coordinate.x}px, ${coordinate.y - 15}px)`, // Adjust Y-axis for baseline
        }}
      >
        {/* Tooltip Content */}
        <div className="font-lexend">{`${payload[0].value.toLocaleString()} cái`}</div>

        {/* Down Arrow */}
        <svg
          style={{
            position: "absolute",
            bottom: "-45%",
            left: "24px",

            zIndex: 2,
            transform: "translateY(-50%)",
          }}
          width="12"
          height="12"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4 4.8C7.2 6.4 4.8 6.4 3.6 4.8L0 0L12 0L8.4 4.8Z"
            fill="#17181A"
          />
        </svg>
      </div>
    );
  }

  return null;
};
