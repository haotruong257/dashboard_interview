import Header from "@/components/header";
import "@styles/globals.css";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // chọn weight bạn cần
  variable: "--font-lexend", // optional nếu bạn dùng biến CSS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={` ${lexendDeca.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
