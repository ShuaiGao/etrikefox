import Head from "next/head"
import type { Locale } from "@/lib/types"

interface MetaTagsProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  locale?: Locale
  type?: "website" | "article" | "product"
  noindex?: boolean
}

export function MetaTags({
  title,
  description,
  keywords = [],
  image = "/images/hero-main.png",
  url = "",
  locale = "en",
  type = "website",
  noindex = false,
}: MetaTagsProps) {
  const siteUrl = "https://etrikefox.com"
  const fullTitle = `${title} | ETrike Fox`
  const fullUrl = `${siteUrl}${url}`
  const imageUrl = `${siteUrl}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="ETrike Fox" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e293b" />

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${url}`} />
      <link rel="alternate" hrefLang="zh" href={`${siteUrl}/zh${url}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${url}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="ETrike Fox" />
      <meta property="og:locale" content={locale === "zh" ? "zh_CN" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@etrikefox" />
      <meta name="twitter:creator" content="@etrikefox" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="ETrike Fox" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://embed.tawk.to" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//embed.tawk.to" />
    </Head>
  )
}
