import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Propuesta Sanru → Promointegra",
  description: "Propuesta comercial integral: Prospección IA + CRM + WhatsApp Bot + Landing + Catalog + Radar + Make + Remarketing. 3 opciones de stack, 12 semanas, ROI 50x.",
  keywords: "B2B, CRM, prospección, comercial, automación, IA, WhatsApp, propuesta",
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
        <style>{`
          :root {
            --accent: #F96B09;
            --dark: #0a0a0a;
            --off: #f5f2ee;
            --muted: #8a857f;
            --border: rgba(249, 107, 9, 0.2);
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: var(--dark);
            color: var(--off);
            font-family: 'DM Sans', sans-serif;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className={dmSans.className} style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
