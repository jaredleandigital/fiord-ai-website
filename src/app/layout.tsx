import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/ConvexProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiord AI — Never Miss Another Call",
  description:
    "AI-powered voice receptionist that answers, books, and captures leads 24/7 for NZ & AU small businesses. Set up in 48 hours.",
  keywords: [
    "AI receptionist",
    "voice AI",
    "missed calls",
    "small business",
    "New Zealand",
    "Australia",
    "24/7 answering",
  ],
  openGraph: {
    title: "Fiord AI — Never Miss Another Call",
    description:
      "AI-powered voice receptionist that answers, books, and captures leads 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          {children}
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "#111827",
                border: "1px solid #1e293b",
                color: "#e2e8f0",
              },
            }}
          />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
