/* eslint-disable @typescript-eslint/no-explicit-any */
// components/PieChartComponent.tsx
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Áo sơ mi dài tay", value: 60 },
  { name: "Áo sơ mi cộc tay", value: 30 },
  { name: "Quần baggy", value: 10 },
];

const COLORS = ["#3b82f6", "#10b981", "#f97316"];

// Custom label renderer for percentage labels with lines
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = outerRadius + 30; // Position the label outside the pie
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  // Calculate the position for the line connecting the label to the pie
  const lineStartX =
    cx + (outerRadius + 10) * Math.cos(-midAngle * (Math.PI / 180));
  const lineStartY =
    cy + (outerRadius + 10) * Math.sin(-midAngle * (Math.PI / 180));
  const lineEndX =
    cx + (outerRadius + 20) * Math.cos(-midAngle * (Math.PI / 180));
  const lineEndY =
    cy + (outerRadius + 20) * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <g>
      {/* Line connecting the label to the pie */}
      <line
        x1={lineStartX}
        y1={lineStartY}
        x2={lineEndX}
        y2={lineEndY}
        stroke={COLORS[index]}
        strokeWidth={1}
      />
      {/* Label background */}
      <rect
        x={x - 25}
        y={y - 15}
        width={50}
        height={30}
        fill={COLORS[index]}
        rx={15} // Rounded corners
      />
      {/* Percentage text */}
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
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
      <PieChart width={300} height={300}>
        {/* First Pie for the main chart */}
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* Second Pie for the 3D effect (slightly smaller radius) */}
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={75}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              opacity={0.8}
            />
          ))}
        </Pie>
        {/* Central text */}
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={0}
          outerRadius={0}
          dataKey="value"
        >
          <Label
            value="16 Lệnh sản xuất"
            position="center"
            fill="#000"
            fontSize={24}
            fontWeight="bold"
            dy={-10}
          />
          <Label value="" position="center" fill="#000" fontSize={16} dy={20} />
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
