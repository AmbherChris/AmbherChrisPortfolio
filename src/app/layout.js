import { Roboto } from "next/font/google";
import { Onest } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next'

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
  default: 'UI/UX & Multimedia Designer | Ambher',
   description: 'Explore UI/UX and multimedia design work by Ambher — clean, user-centered digital experiences.',
  keywords: 'UI/UX Designer, Multimedia Design, Web Design, Figma, Tailwind CSS, Mobile App UI',
  authors: [{ name: 'Ambher' }],
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
