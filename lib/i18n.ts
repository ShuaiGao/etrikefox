export const locales = ["en", "zh"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function getLocaleFromDomain(host: string): Locale {
  if (host.includes("cn.etrikefox.com")) {
    return "zh"
  }
  return "en"
}
