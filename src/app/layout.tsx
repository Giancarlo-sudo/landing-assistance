import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Meta tags básicos
  title: {
    default: "Kaia - Sistema de Asistencias | Control de Personal Inteligente",
    template: "%s | Kaia",
  },
  description:
    "Sistema de asistencias rápido, intuitivo y eficaz para tu empresa. Gestiona asistencias, permisos, vacaciones y genera reportes automatizados. Optimiza el control de personal en Perú.",

  keywords: [
    "sistema de asistencias",
    "control de asistencias",
    "gestión de permisos",
    "control de vacaciones",
    "reportes de asistencias",
    "sistema de personal Peru",
    "control horario empleados",
    "asistencia laboral",
  ],

  authors: [{ name: "Kaia" }],
  creator: "Kaia",
  publisher: "Kaia",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (para redes sociales)
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://intranet-asistencia.kaia.com.pe",
    siteName: "Kaia",
    title: "Kaia - Sistema de Asistencias | Control de Personal Inteligente",
    description:
      "Sistema de asistencias rápido, intuitivo y eficaz. Gestiona asistencias, permisos, vacaciones y reportes automatizados para tu empresa en Perú.",
    images: [
      {
        url: "https://intranet-asistencia.kaia.com.pe/logo.webp",
        width: 1200,
        height: 630,
        alt: "Kaia - Sistema de Asistencias",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Kaia - Sistema de Asistencias | Control de Personal Inteligente",
    description:
      "Sistema de asistencias rápido, intuitivo y eficaz para tu empresa. Gestiona asistencias, permisos y vacaciones.",
    images: ["https://intranet-asistencia.kaia.com.pe/logo.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://intranet-asistencia.kaia.com.pe",
  },

  category: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD para rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Kaia",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PEN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "50",
              },
              description:
                "Sistema de asistencias rápido, intuitivo y eficaz para gestionar asistencias, permisos, vacaciones y reportes automatizados.",
            }),
          }}
        />

        {/* Schema para la organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kaia",
              url: "https://intranet-asistencia.kaia.com.pe",
              logo: "https://intranet-asistencia.kaia.com.pe/logo.webp",
              description: "Sistema de asistencias para empresas en Perú",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lima",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51922929616",
                contactType: "sales",
                email: "nazareno@in-order.com.pe",
                areaServed: "PE",
                availableLanguage: ["es"],
              },
            }),
          }}
        />

        {/* Schema para el producto */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Kaia - Sistema de Asistencias",
              image: "https://intranet-asistencia.kaia.com.pe/logo.webp",
              description:
                "Sistema de asistencias rápido, intuitivo y eficaz para tu empresa. Gestiona asistencias, permisos, vacaciones y genera reportes automatizados.",
              brand: {
                "@type": "Brand",
                name: "Kaia",
              },
              offers: {
                "@type": "Offer",
                url: "https://intranet-asistencia.kaia.com.pe",
                priceCurrency: "PEN",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Favicon y App Icons */}
        <link rel="icon" href="/image/logo/logo.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/image/logo/logo.ico" />

        {/* Theme color */}
        <meta name="theme-color" content="#212120" />

        {/* Geo tags para SEO local */}
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="Lima" />
        <meta name="geo.position" content="-12.046374;-77.042793" />
        <meta name="ICBM" content="-12.046374, -77.042793" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
