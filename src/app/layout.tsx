import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versatile — Premium Web Design & Development Agency",
  description:
    "Versatile designs and builds high-converting, premium websites for blue-collar trades and white-collar firms — sites that win the call before your competitor even answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
