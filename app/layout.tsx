import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen text-neutral-100 font-sans site-bg`} style={{'--accent-cyan': '#06b6d4', '--accent-cyan-light': '#22d3ee', '--accent-cyan-dark': '#0891b2'} as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
