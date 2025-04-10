// components/BarChartComponent.tsx
import { PlannedProduct } from "@/interfaces/planned-product";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartComponentProps {
  PlannedProduct: PlannedProduct[]; // hoặc bất kỳ kiểu dữ liệu nào bạn đang dùng
}

export default function BarChartComponent({
  PlannedProduct,
}: BarChartComponentProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <div
        style={{ top: "-4%" }}
        className="flex gap-2 items-center right-0 justify-end absolute "
      >
        <div className="flex gap-2 items-center mb-2">
          <div
            style={{ background: "#3b82f6" }}
            className="legend-pie-chart-2"
          ></div>
          <span className="fs-14 font-medium">Kế hoạch</span>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <div
            style={{ background: "#1FC583" }}
            className="legend-pie-chart-2"
          ></div>
          <span className="fs-14 font-medium">Thực hiện</span>
        </div>
      </div>
      {/* Custom Y-axis Label */}
      <div
        style={{
          position: "absolute",
          top: "-1rem", // hoặc dùng calc() để điều chỉnh nếu cần
          left: "2rem",
          fontSize: "0.75rem",
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
          bottom: "0.25rem",
          left: "0rem",
          fontSize: "0.75rem",
          color: "#667085",
        }}
      >
        Mặt hàng
      </div>

      {PlannedProduct ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            barSize={20}
            outerRadius={10}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }} //spacing bar chart
            data={PlannedProduct}
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
              color="#9295A4"
            />
            <YAxis
              ticks={[0, 20, 40, 60, 80, 100]}
              tickMargin={20}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              color="#9295A4"
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
      ) : null}
    </div>
  );
}

const CustomTooltip = ({
  active,
  payload,
  coordinate,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length && coordinate) {
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
          transform: `translate(${coordinate.x}px, ${
            (coordinate.y ?? 0) - 15
          }px)`,
        }}
      >
        <div className="font-lexend">{`${payload[0].value?.toLocaleString()} cái`}</div>

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
