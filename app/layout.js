import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React journey",
  description: "The journey of you react learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
