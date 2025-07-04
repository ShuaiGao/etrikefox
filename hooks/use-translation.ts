"use client"

import { useEffect, useState } from "react"
import { getTranslation, type Locale } from "@/lib/translations"

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    // 检测当前域名和路径来确定语言
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname
      const pathname = window.location.pathname

      // 如果是中文子域名，设置为中文
      if (hostname.includes("cn.etrikefox.com")) {
        setLocale("zh")
      }
      // 如果路径以 /zh 开头，设置为中文
      else if (pathname.startsWith("/zh")) {
        setLocale("zh")
      }
      // 否则默认为英文
      else {
        setLocale("en")
      }
    }
  }, [])

  const t = getTranslation(locale)

  const switchLanguage = (newLocale: Locale) => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname + window.location.search

      if (newLocale === "zh") {
        // 切换到中文域名
        window.location.href = `https://cn.etrikefox.com${currentPath.replace(/^\/zh/, "")}`
      } else {
        // 切换到英文域名，移除 /zh 前缀
        const cleanPath = currentPath.replace(/^\/zh/, "") || "/"
        window.location.href = `https://etrikefox.com${cleanPath}`
      }
    }
  }

  return { t, locale, switchLanguage }
}
