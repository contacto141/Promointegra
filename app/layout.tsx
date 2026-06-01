import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promointegra - Máquina comercial B2B",
  description: "Infraestructura comercial completa para Promointegra. CRM, prospección, automatización e IA. Escalable y medible.",
  keywords: "B2B, CRM, prospección, comercial, automación, IA, WhatsApp",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
