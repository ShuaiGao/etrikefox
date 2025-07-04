import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageBanner } from "@/components/language-banner"
import { TawkToProvider } from "@/components/chat/tawk-to-provider"
import { TawkToConfig } from "@/components/chat/tawk-to-config"
import { FloatingContactWidget } from "@/components/chat/floating-contact-widget"
import { StructuredData } from "@/components/seo/structured-data"
import { generateOrganizationSchema, generateWebsiteSchema, seoConfig } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    template: "%s | ETrike Fox",
    default: "ETrike Fox - Professional Electric Tricycle Manufacturer",
  },
  description:
    "ETrike Fox specializes in manufacturing high-quality electric tricycles and bicycles, providing cargo, passenger, and personal mobility solutions. Safe, reliable, green and environmentally friendly, technology-leading.",
  keywords: seoConfig.keywords.en.join(", "),
  authors: [{ name: "ETrike Fox" }],
  creator: "ETrike Fox",
  publisher: "ETrike Fox",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.siteUrl,
    title: "ETrike Fox - Professional Electric Tricycle Manufacturer",
    description:
      "Professional electric tricycle manufacturer providing high-quality electric vehicles for cargo, passenger, and personal mobility needs.",
    siteName: "ETrike Fox",
    images: [
      {
        url: "/images/hero-main.png",
        width: 1200,
        height: 630,
        alt: "ETrike Fox Electric Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETrike Fox - Professional Electric Tricycle Manufacturer",
    description: "Professional electric tricycle manufacturer providing high-quality electric vehicles.",
    images: ["/images/hero-main.png"],
    creator: "@etrikefox",
    site: "@etrikefox",
  },
  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      en: `${seoConfig.siteUrl}/en`,
      zh: `${seoConfig.siteUrl}/zh`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: "technology",
  classification: "Electric Vehicles",
  other: {
    "msapplication-TileColor": "#1e293b",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 生成结构化数据
  const organizationSchema = generateOrganizationSchema("en")
  const websiteSchema = generateWebsiteSchema("en")

  return (
    <html lang="en">
      <head>
        {/* 结构化数据 */}
        <StructuredData data={[organizationSchema, websiteSchema]} />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body className={inter.className}>
        <LanguageBanner />
        {children}
        {/* Tawk.to 客服系统 */}
        <TawkToProvider />
        <TawkToConfig />
        {/* 浮动联系组件 */}
        <FloatingContactWidget position="bottom-right" showAnimation={true} />
      </body>
    </html>
  )
}
