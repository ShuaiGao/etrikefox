export function detectUserLanguage(): "en" | "zh" {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()
  const hostname = window.location.hostname

  // 如果是中文子域名，返回中文
  if (hostname.includes("cn.etrikefox.com")) {
    return "zh"
  }

  // 如果是主域名，返回英文
  if (hostname.includes("etrikefox.com")) {
    return "en"
  }

  // 根据浏览器语言判断
  if (browserLang.includes("zh")) {
    return "zh"
  }

  return "en"
}

export function getLanguageRedirectUrl(targetLang: "en" | "zh", currentPath = ""): string {
  if (targetLang === "zh") {
    return `https://cn.etrikefox.com${currentPath}`
  } else {
    return `https://etrikefox.com${currentPath}`
  }
}

export function shouldShowLanguageBanner(): boolean {
  if (typeof window === "undefined") return false

  const browserLang = navigator.language.toLowerCase()
  const hostname = window.location.hostname
  const hasSeenBanner = localStorage.getItem("language-banner-dismissed")

  if (hasSeenBanner) return false

  // 中文浏览器访问英文站点
  if (browserLang.includes("zh") && !hostname.includes("cn.etrikefox.com")) {
    return true
  }

  // 英文浏览器访问中文站点
  if (browserLang.includes("en") && hostname.includes("cn.etrikefox.com")) {
    return true
  }

  return false
}
