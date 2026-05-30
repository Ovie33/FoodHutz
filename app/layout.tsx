import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodHutz — Discover. Order. Savour Local.",
  description:
    "The best restaurants in Lagos, delivered fast or ready for you. Order food online from top-rated local restaurants.",
  keywords: "food delivery Lagos, order food online, restaurants Lagos, FoodHutz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Loading Inter (body) and Pacifico (for the handwritten logo 'F') */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Pacifico&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
