import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeydar | El escritor musical",
  description:
    "Sitio oficial de Jeydar, artista urbano y escritor musical de regueton.",
  openGraph: {
    title: "Jeydar | El escritor musical",
    description:
      "Una experiencia visual para descubrir el universo musical de Jeydar.",
    images: ["/images/jeydar-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
