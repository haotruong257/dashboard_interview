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
