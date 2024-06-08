import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS boilerplate",
  description: "Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
