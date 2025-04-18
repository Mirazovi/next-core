import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'

import "./globals.css";


export const metadata: Metadata = {
  title: "Next core Concept",
  description: "Generated by create next app",
};

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
