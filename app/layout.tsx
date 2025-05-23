import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Providers from "./components/Providers";
import HookProvider from "./components/HookProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <HookProvider>
            <div className="min-h-screen bg-transparent container mx-auto px-6 sm:px-10 lg:px-12">
              <main className="flex-1 ">{children}</main>
            </div>
          </HookProvider>
        </Providers>
      </body>
    </html>
  );
}
