import { Roboto } from "next/font/google";
import { Onest } from "next/font/google";
import "./globals.css";

// Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// Onest
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest", // Tailwind will use this class
});

export const metadata = {
  title: "Ambher Chris Narciso",
  description: "Ambher Chris's Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  );
}
