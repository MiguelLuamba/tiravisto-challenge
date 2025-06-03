import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})
const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable:"--font-plus-jakarta",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "TiraVisto",
  description: "Tire seu visto num clique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
