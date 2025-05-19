import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navigation from "./components/Navigation";
import ContactSidebar from "./components/ContactSidebar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'JustPay',
  description: 'Your modern payment solutions with stablecoins',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-sans bg-brand-lightGrey flex min-h-screen pt-8 overflow-x-hidden`}>
        <div className="ml-4 h-[calc(100vh-4rem)]">
          <Navigation />
        </div>
      
        <div className=" flex flex-1 min-h-[calc(100vh-4rem)]">
          <main className="flex-1 pl-9 overflow-y-auto mb-16 md:mb-0">
            {children}
          </main> 

          <div className="mr-4 h-full w-70">
            <ContactSidebar />
          </div>          
        </div>   
    </body>
    </html>
  );
}
