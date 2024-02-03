import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Outerversal Gaming",
  description: "Outerversal Gaming Event Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={lato.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
