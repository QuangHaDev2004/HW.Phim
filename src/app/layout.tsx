import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ModalProvider } from "@/context/ModalProvider";
import { TabProvider } from "@/context/TabProvider";
import { Trending_Tabs } from "@/libs/contants";

export const metadata: Metadata = {
  title: "HW.Phim - Nền tảng xem phim trực tuyến hàng đầu",
  description: "Mô tả trang HW.Phim - Nền tảng xem phim trực tuyến hàng đầu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ModalProvider>
          <TabProvider defaultTabId={Trending_Tabs[0].id}>
            <Header />
            {children}
            <Footer />
          </TabProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
