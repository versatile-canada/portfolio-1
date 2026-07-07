import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Moinuddin — Frontend Engineer",
  description:
    "I build startups, accelerate growth, create empires. Frontend Engineer specializing in high-converting landing pages and web apps for SaaS, Web3 & AI startups.",
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
