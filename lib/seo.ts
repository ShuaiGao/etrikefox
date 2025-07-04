import type { Metadata } from "next"
import type { Locale } from "./types"

// SEO配置
export const seoConfig = {
  siteName: "ETrike Fox",
  siteUrl: "https://etrikefox.com",
  defaultImage: "/images/hero-main.png",
  twitterHandle: "@etrikefox",
  author: "ETrike Fox",
  keywords: {
    en: [
      "electric tricycle",
      "electric vehicle",
      "cargo tricycle",
      "passenger tricycle",
      "electric scooter",
      "new energy vehicle",
      "eco-friendly transport",
      "commercial electric vehicle",
      "urban mobility",
      "green transportation",
      "electric bike",
      "sustainable transport",
    ],
    zh: [
      "电动三轮车",
      "电动车",
      "货运三轮车",
      "客运三轮车",
      "电动踏板车",
      "新能源车",
      "环保交通",
      "商用电动车",
      "城市出行",
      "绿色交通",
      "电动自行车",
      "可持续交通",
    ],
  },
}

// 生成页面元数据
export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
  url,
  locale = "en",
  type = "website",
}: {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  locale?: Locale
  type?: "website" | "article" | "product"
}): Metadata {
  const fullTitle = `${title} | ${seoConfig.siteName}`
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
  const imageUrl = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}${seoConfig.defaultImage}`
  const allKeywords = keywords ? [...keywords, ...seoConfig.keywords[locale]] : seoConfig.keywords[locale]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.siteName,
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
      type,
      locale,
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: seoConfig.twitterHandle,
      site: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: fullUrl,
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
  }
}

// 结构化数据生成器
export function generateOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "zh" ? "黑狐电动车" : "ETrike Fox",
    alternateName: locale === "zh" ? "ETrike Fox" : "黑狐电动车",
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/images/logo.png`,
    description:
      locale === "zh"
        ? "专业的电动三轮车制造商，致力于为用户提供高品质、高性能的新能源出行解决方案。"
        : "Professional electric tricycle manufacturer, committed to providing users with high-quality, high-performance new energy transportation solutions.",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "zh" ? "工业园区创新大道88号" : "No.88 Innovation Ave, Industrial Park",
      addressLocality: locale === "zh" ? "无锡市" : "Wuxi",
      addressRegion: locale === "zh" ? "江苏省" : "Jiangsu",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-400-888-9999",
      contactType: "customer service",
      availableLanguage: ["Chinese", "English"],
    },
    sameAs: [
      "https://www.facebook.com/etrikefox",
      "https://www.twitter.com/etrikefox",
      "https://www.linkedin.com/company/etrikefox",
    ],
  }
}

export function generateProductSchema(product: any, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: locale === "zh" ? "黑狐电动车" : "ETrike Fox",
    },
    manufacturer: {
      "@type": "Organization",
      name: locale === "zh" ? "黑狐电动车" : "ETrike Fox",
    },
    image: product.images?.map((img: string) => `${seoConfig.siteUrl}${img}`),
    offers: {
      "@type": "Offer",
      price: product.price?.replace(/[¥$,]/g, ""),
      priceCurrency: locale === "zh" ? "CNY" : "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: locale === "zh" ? "黑狐电动车" : "ETrike Fox",
      },
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviews || 0,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    category: product.category,
    additionalProperty: product.specifications
      ? Object.entries(product.specifications).flatMap(([category, specs]: [string, any]) =>
          Object.entries(specs).map(([key, value]) => ({
            "@type": "PropertyValue",
            name: key,
            value: value,
          })),
        )
      : undefined,
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`,
    })),
  }
}

export function generateWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "zh" ? "黑狐电动车官网" : "ETrike Fox Official Website",
    url: seoConfig.siteUrl,
    description:
      locale === "zh"
        ? "专业的电动三轮车制造商，提供货运、客运、个人出行等多种电动车解决方案。"
        : "Professional electric tricycle manufacturer providing cargo, passenger, and personal mobility electric vehicle solutions.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: locale === "zh" ? "黑狐电动车" : "ETrike Fox",
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/images/logo.png`,
      },
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
