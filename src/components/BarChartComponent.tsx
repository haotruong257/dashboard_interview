// components/BarChartComponent.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mỹ hàng", planned: 60, actual: 40 },
  { name: "Áo lẻ", planned: 80, actual: 60 },
  { name: "Áo sơ mi", planned: 50, actual: 30 },
  { name: "Áo thun polo", planned: 70, actual: 50 },
  { name: "Quần baggy", planned: 40, actual: 20 },
  { name: "Quần jogger", planned: 30, actual: 10 },
];

export default function BarChartComponent() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="planned" name="Kế hoạch" fill="#3b82f6" />
      <Bar dataKey="actual" name="Thực hiện" fill="#10b981" />
    </BarChart>
  );
}
