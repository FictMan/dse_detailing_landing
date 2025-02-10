import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const unbounded = localFont({
    src: './fonts/Unbounded.ttf',
    variable: '--font-unbounded',
    weight: '100 900',
});

const golosRegular = localFont({
  src: "./fonts/GolosText.ttf",
  variable: "--font-golos-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DSE detailing",
  description: "Детейлінг для вашого авто - догляд без компромісів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${golosRegular.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
