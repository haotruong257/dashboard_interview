import { DataProductTable } from "@/interfaces/data-product-table";
import { PieChartProduct } from "@/interfaces/pie-chart-product";
import { PlannedProduct } from "@/interfaces/planned-product";
import { ProductProgress } from "@/interfaces/product-progress";
import { TopClients } from "@/interfaces/top-clients.interface";
import { TopProduct } from "@/interfaces/top-products.interface";

export const categoriesHeader: string[] = [
  "Danh mục",
  "Bán & Xuất hàng",
  "Mua & Nhập hàng",
  "Kho & Sản xuất",
  "Kế toán",
  "Báo cáo & Thống kê",
  "Tiện ích",
];

export const topProductsSell: TopProduct[] = [
  {
    name: "Áo sơ mi dài tay",
    value: 48,
    percentage: 8.2,
    trend: "up",
  },
  {
    name: "Quần tây",
    value: 18,
    percentage: 5,
    trend: "down",
  },
  {
    name: "Áo hoodie",
    value: 40,
    percentage: 12,
    trend: "up",
  },
  {
    name: "Đầm maxi",
    value: 23,
    percentage: 3.5,
    trend: "up",
  },
  {
    name: "Áo thun cổ tròn",
    value: 48,
    percentage: 4.7,
    trend: "up",
  },
];

export const topClients: TopClients[] = [
  { name: "Công ty Dệt may Happy Polla", value: 3100 },
  { name: "Công ty May mặc Saigon trendy", value: 3000 },
  { name: "Outlet Lemon squeeze", value: 3170 },
  { name: "Shop quần áo streetwear New", value: 2900 },
  { name: "Shop thời trang công sở Basic Office", value: 2700 },
];

export const productProgressList: ProductProgress[] = [
  { name: "Áo sơ mi dài tay", quantity: 123, percentage: 50 },
  { name: "Áo sơ mi cụt tay", quantity: 321, percentage: 75 },
  { name: "Quần baggy", quantity: 231, percentage: 45 },
  { name: "Quần tây", quantity: 999, percentage: 60 },
  { name: "Đầm maxi", quantity: 876, percentage: 90 },
  { name: "Áo hoodie", quantity: 765, percentage: 15 },
  { name: "Áo khoác bomber", quantity: 543, percentage: 24 },
];

export const plannedProduction: PlannedProduct[] = [
  { name: "Áo lẻ", planned: 80, actual: 60 },
  { name: "Áo sơ mi", planned: 50, actual: 30 },
  { name: "Áo thun polo", planned: 70, actual: 50 },
  { name: "Quần baggy", planned: 40, actual: 20 },
  { name: "Quần jogger", planned: 30, actual: 10 },
];

export const pieChartValue: PieChartProduct[] = [
  { name: "Áo sơ mi dài tay", value: 40 },
  { name: "Áo sơ mi cộc tay", value: 30 },
  { name: "Quần baggy", value: 30 },
];

export const dataProductTable: DataProductTable[] = [
  {
    stt: 1,
    source: "Chỉ Cotton",
    unit: "Cuộn",
    quantity: 8,
    prodCode: "NVL_000014",
  },
  {
    stt: 2,
    source: "Vải lụa",
    unit: "Mét",
    quantity: 8,
    prodCode: "NVL_000024",
  },
  {
    stt: 3,
    source: "Vải lót",
    unit: "Mét",
    quantity: 8,
    prodCode: "NVL_000024",
  },
  {
    stt: 4,
    source: "Chỉ thêu thô",
    unit: "Mét",
    quantity: 8,
    prodCode: "NVL_000024",
  },
  {
    stt: 5,
    source: "Vải ni",
    unit: "Mét",
    quantity: 8,
    prodCode: "NVL_000024",
  },
];
