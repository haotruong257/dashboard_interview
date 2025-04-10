import Header from "@/app/header";
import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Lexend_Deca } from "next/font/google";
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // select font-weight you need
  variable: "--font-lexend", // optional if you use CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${lexendDeca.className}`}>
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
