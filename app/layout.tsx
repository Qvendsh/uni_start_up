import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StockMind — точніші закупівлі для ритейлу",
    template: "%s | StockMind",
  },
  description:
    "ML-система, що прогнозує попит і підказує, скільки товару варто закупити на основі історичних даних.",
  metadataBase: new URL("https://stockmind.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
