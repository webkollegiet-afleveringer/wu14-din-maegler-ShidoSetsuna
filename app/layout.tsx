import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Din Mægler",
  description: "Find din næste bolig blandt 158 boliger til salg hos Din Mæglers 74 butikker i hele Danmark.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={roboto.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
