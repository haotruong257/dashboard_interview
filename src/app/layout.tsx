import { Lexend_Deca, Lexend } from "next/font/google";
import "@styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lexend = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lexend_deca = Lexend_Deca({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${lexend.variable} ${lexend_deca.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
