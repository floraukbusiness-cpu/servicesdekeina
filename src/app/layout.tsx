import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keinarauck.fr"),
  title: {
    default: "Keïna Rauck · Baby-sitting, garde d'animaux & cours d'anglais à Val d'Arry",
    template: "%s · Keïna Rauck",
  },
  description:
    "Bilingue après 7 ans en Angleterre, je propose du baby-sitting, de la garde d'animaux et des cours d'anglais dans le secteur de Val d'Arry. Confiance, douceur et sérieux. Contactez-moi sur WhatsApp.",
  keywords: [
    "baby-sitting Val d'Arry",
    "garde d'animaux Val d'Arry",
    "cours d'anglais Val d'Arry",
    "garde d'enfants Calvados",
    "bilingue anglais Val d'Arry",
  ],
  authors: [{ name: "Keïna Rauck" }],
  openGraph: {
    title: "Keïna Rauck · Baby-sitting, garde d'animaux & cours d'anglais à Val d'Arry",
    description:
      "Bilingue après 7 ans en Angleterre. Je m'occupe de la garde d'enfants et des animaux, et je donne des cours d'anglais dans le secteur de Val d'Arry. Contactez-moi sur WhatsApp.",
    type: "website",
    locale: "fr_FR",
    siteName: "Keïna Rauck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keïna Rauck · Baby-sitting, garde d'animaux & cours d'anglais à Val d'Arry",
    description:
      "Bilingue après 7 ans en Angleterre. Je m'occupe de la garde d'enfants et des animaux, et je donne des cours d'anglais dans le secteur de Val d'Arry.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream-50 font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
