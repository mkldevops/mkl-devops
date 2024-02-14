import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/src/features/layout/Header";
import Footer from "@/src/features/layout/Footer";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKL DEVOPS",
  description: "A social network for developers",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-14 w-full">
              {children}
            </div>
            <Footer />
          </div>
          <Toaster />
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
