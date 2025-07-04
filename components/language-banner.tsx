"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function LanguageBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { locale, switchLanguage } = useTranslation()

  useEffect(() => {
    // 检查用户浏览器语言偏好
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase()
      const hostname = window.location.hostname
      const pathname = window.location.pathname
      const hasSeenBanner = localStorage.getItem("language-banner-dismissed")

      // 如果用户浏览器是中文，但访问的是英文站点，显示横幅
      if (
        browserLang.includes("zh") &&
        !hostname.includes("cn.etrikefox.com:3000") &&
        !pathname.startsWith("/zh") &&
        !hasSeenBanner
      ) {
        setIsVisible(true)
      }
      // 如果用户浏览器是英文，但访问的是中文站点，显示横幅
      else if (
        browserLang.includes("en") &&
        (hostname.includes("cn.etrikefox.com:3000") || pathname.startsWith("/zh")) &&
        !hasSeenBanner
      ) {
        setIsVisible(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("language-banner-dismissed", "true")
  }

  const handleSwitchLanguage = () => {
    const targetLang = locale === "zh" ? "en" : "zh"
    switchLanguage(targetLang)
  }

  if (!isVisible) return null

  return (
    <div className="bg-blue-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5" />
          <span className="text-sm">
            {locale === "zh"
              ? "We detected you might prefer English. Would you like to switch?"
              : "我们检测到您可能更喜欢中文，是否切换到中文版本？"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleSwitchLanguage}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            {locale === "zh" ? "Switch to English" : "切换到中文"}
          </Button>
          <Button size="sm" variant="ghost" onClick={handleDismiss} className="text-white hover:bg-blue-700 p-1">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
