import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <nav className="flex items-center gap-4 bg-accent p-4 text-accent-foreground ">
          <Link href="/">
            <Image
              src="/x-ring-logo.png"
              alt="X-Ring Supply"
              width={488}
              height={200}
              className="aspect-auto max-h-24 max-w-24"
            />
          </Link>
          <Link href="/product-editor" className="font-bold">
            Product Editor
          </Link>
          <Link href="/website/form" className="font-bold">
            Website Form
          </Link>
        </nav>
        <main className="container p-4">{children}</main>
      </body>
    </html>
  );
}
