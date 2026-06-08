import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HomeGlow Property Care | Professional Cleaning Services in Harrow",
  description:
    "Professional domestic, office and deep cleaning services across Harrow, Wembley, Pinner, Ruislip and surrounding areas.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


