import "./globals.css";

import { Nanum_Gothic } from "next/font/google";

const namun = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={namun.className}>{children}</body>
    </html>
  );
}
