"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function CrispWidget() {
  const { locale } = useTranslation()

  useEffect(() => {
    // Crisp 免费客服集成
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID"

    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.getElementsByTagName("head")[0].appendChild(script)

    // 设置语言和配置
    window.$crisp.push([
      "set",
      "session:data",
      {
        language: locale,
      },
    ])

    // 自定义样式
    window.$crisp.push(["set", "chat:color", "#3B82F6"]) // 蓝色主题

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [locale])

  return null
}
