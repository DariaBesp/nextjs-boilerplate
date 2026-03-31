import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import { Geist, Geist_Mono } from "next/font/google";
import { Box } from "@chakra-ui/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Management",
  description: "Restaurant reservation, management and guest ordering system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily: `${geistSans.style.fontFamily}, ${geistMono.style.fontFamily}`,
        }}
      >
        <Provider>
          <Box minH="var(--app-min-height, 100vh)">
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
