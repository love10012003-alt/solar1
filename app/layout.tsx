
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "solar.lal.vn - Điện Mặt Trời Cần Thơ | Lắp Đặt Trọn Gói An Đông",
  description: "Lắp điện mặt trời tại Cần Thơ - An Đông. Tiết kiệm 90% hóa đơn điện, bảo hành 12 năm, hòa lưới EVN. Khảo sát miễn phí 24h. 500+ mái đã lắp.",
  keywords: ["điện mặt trời Cần Thơ", "solar Cần Thơ", "lắp điện mặt trời An Đông", "đèn năng lượng mặt trời"],
  openGraph: {
    title: "solar.lal.vn - Điện Mặt Trời Cần Thơ",
    description: "Lắp đặt trọn gói từ 15tr, bảo hành 12 năm",
    type: "website",
    locale: "vi_VN"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
