import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRH - Business Review Helper | Turn Every Customer Experience Into a Review",
  description: "BRH helps businesses collect genuine customer feedback through simple QR-powered review journeys.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/Assest/logo.png" }
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased text-[#05031C] bg-white">
        {children}
      </body>
    </html>
  );
}
