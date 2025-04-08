/* eslint-disable @typescript-eslint/no-explicit-any */
// components/PieChartComponent.tsx
import { useEffect, useState } from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Áo sơ mi dài tay", value: 40 },
  { name: "Áo sơ mi cộc tay", value: 30 },
  { name: "Quần baggy", value: 30 },
];

const COLORS = ["#3b82f6", "#10b981", "#f97316"];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 30; // End point of the line
  const ey = my;

  return (
    <g>
      {/* Custom SVG path for the line */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={COLORS[index]}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
      {/* Rounded rectangle background for the label */}
      <rect
        x={ex - 20}
        y={ey - 12}
        rx={10}
        ry={10}
        width={40}
        height={24}
        fill={COLORS[index]}
      />
      {/* Percentage text inside the label */}
      <text
        x={ex}
        y={ey + 4}
        textAnchor="middle"
        fill="#fff"
        fontSize={12}
        fontWeight="bold"
      >{`${(percent * 100).toFixed(0)}%`}</text>
    </g>
  );
};

const CustomLabel = ({ viewBox, labelText, value }: any) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#333"
        fontSize="36"
        fontWeight="600"
      >
        {value}
      </text>
      <text
        x={cx}
        y={cy + 20}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="16"
        fill="#667085"
      >
        {labelText}
      </text>
    </g>
  );
};
const PieChartComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={300} height={300}>
          {/* First Pie for the main chart */}
          <Pie
            data={data}
            cx={170}
            cy={150}
            innerRadius={70}
            outerRadius={100}
            cornerRadius={10}
            paddingAngle={2}
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          >
            <Label
              width={30}
              position="centerTop"
              content={
                <CustomLabel
                  viewBox={{ cx: 150, cy: 150 }}
                  labelText="Lệnh sản xuất"
                  value="16"
                />
              }
            ></Label>

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                // Removed unsupported 'shape' prop
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
