import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Flowspace",
  description: "The only place to find games and apps. That you'll ever need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <Toaster />

        <SpeedInsights />
      </body>
    </html>
  );
}
