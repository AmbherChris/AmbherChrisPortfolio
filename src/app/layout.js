import "./globals.css";
import { Roboto, Onest } from "next/font/google";

// Font: Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// Font: Onest
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
});

// SEO Metadata
export const metadata = {
  title: "Ambher Chris Narciso",
  description: "Explore UI/UX and multimedia design work by Ambher — clean, user-centered digital experiences.",
  keywords: "UI/UX Designer, Multimedia Design, Web Design, Figma, Tailwind CSS, Mobile App UI",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://ambher-chris-portfolio.vercel.app/"), // replace with your actual domain
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${onest.variable}`}>
      <head />
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
