import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UX MULTIFIT",
  description: "A maior e mais completa academia de Blumenau",
  keywords: 'academia, musculação, yoga, gap, pilates, burn, pedal cycle, fitdance, alongamento, mobilidade, funcional, fisioterapia',
  openGraph:
  {
    images: 'https://ux-multifit.vercel.app/og.png',
    title: "UX MULTIFIT",
    description: "A maior e mais completa academia de Blumenau",
    url: 'https://ux-multifit.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="scrollbar-custom overflow-y-scroll h-screen">
          <Header />
          {children}
          <WhatsappButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
