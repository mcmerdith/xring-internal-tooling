import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internal Tooling | X-Ring Supply",
  description: "Internal tooling for coreFORCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700 text-gray-200`}>
        <nav className="flex items-center gap-4 bg-slate-600 p-4 ">
          <Link href="/">
            <Image
              src="/x-ring-logo.png"
              alt="X-Ring Supply"
              width={488}
              height={200}
              className="aspect-auto max-h-24 max-w-24"
            />
          </Link>
          <Link href="/product-editor">
            <strong>Product Editor</strong>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
