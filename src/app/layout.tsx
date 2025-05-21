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
      <body className={`${inter.variable} font-sans bg-brand-lightGrey flex min-h-screen p-4 overflow-x-hidden flex-nowrap`}>
        <div className="h-full flex-shrink-0">
          <Navigation />
        </div>
      
        <div className=" flex flex-1 gap-4 min-w-0 max-w-full w-full">
          <main className="flex-1 ml-12 overflow-y-auto mb-16 md:mb-0 min-w-0 overflow-x-hidden relative max-w-full">
            {children}            
          </main> 

          <div className="max-w-xs h-full flex-shrink-0">
            <ContactSidebar />           
          </div>          
        </div>   
    </body>
    </html>
  );
}
