import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="flex bg-black h-screen w-full overflow-hidden">
          
          {/* Sidebar */}
          <div className="w-[18%] min-w-[260px]">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col">
            
            {/* Topbar */}
            <header className="h-[80px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Dashboard
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
              {children}
            </main>

          </div>

        </div>
      </body>
    </html>
  );
}