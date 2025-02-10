import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const unbounded = localFont({
  src: [{
      path: './fonts/UnboundedMedium.ttf',
      weight: '700',
      style: 'normal',
  }, {
    path: './fonts/UnboundedRegular.ttf',
    weight: '400',
    style: 'normal',
  }],
  variable: '--font-unbounded',
});

const golosRegular = localFont({
  src: "./fonts/GolosTextRegular.ttf",
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
