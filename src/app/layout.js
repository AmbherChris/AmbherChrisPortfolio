import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // include weights you need
  variable: '--font-roboto', // required for Tailwind integration
})

export const metadata = {
  title: "Ambher Chris Narciso",
  description: "Ambher Cheis,s Portfolio",
  icons: {
    icon: "/favicon.svg", // ← this points to your SVG
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
