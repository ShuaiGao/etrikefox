"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function TawkToWidget() {
  const { locale } = useTranslation()

  useEffect(() => {
    // Tawk.to 免费客服集成
    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    // 设置语言
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // 根据当前语言设置客服语言
    window.Tawk_API.onLoad = () => {
      window.Tawk_API.setAttributes({
        name: "",
        email: "",
        language: locale === "zh" ? "zh-CN" : "en",
      })
    }

    document.head.appendChild(script)

    return () => {
      // 清理脚本
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [locale])

  return null // 组件不渲染任何内容，只负责加载脚本
}
