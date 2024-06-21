import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatWiki | varJonathanR",
  description: "Created by varJonathanR"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full p-4 pb-0 lg:px-10 bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
