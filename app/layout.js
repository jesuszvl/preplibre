import "./globals.css";
import { Arimo } from "next/font/google";

const inter = Arimo({ subsets: ["latin"] });

export const metadata = {
  title: "PREP Libre",
  description: "Un PREP de todos y para todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
