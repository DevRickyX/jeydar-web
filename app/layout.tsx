import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4173"
  ),
  title: "Jeydar | El escritor musical",
  description:
    "Sitio oficial de Jeydar, artista urbano y escritor musical de regueton.",
  openGraph: {
    title: "Jeydar | El escritor musical",
    description:
      "Una experiencia visual para descubrir el universo musical de Jeydar.",
    images: ["/images/jeydar-portrait-main.jpeg"]
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
