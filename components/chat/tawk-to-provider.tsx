"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { analytics } from "@/utils/analytics"

declare global {
  interface Window {
    Tawk_API: any
    Tawk_LoadStart: Date
  }
}

interface TawkToProviderProps {
  propertyId?: string
  widgetId?: string
}

export function TawkToProvider({ propertyId, widgetId }: TawkToProviderProps) {
  const { locale } = useTranslation()
  const [loadAttempted, setLoadAttempted] = useState(false)

  useEffect(() => {
    // 防止重复加载
    if (loadAttempted) return
    setLoadAttempted(true)

    // 检查是否已经加载过
    if (typeof window !== "undefined" && window.Tawk_API) {
      console.log("Tawk.to already loaded")
      return
    }

    try {
      console.log("Initializing Tawk.to...")

      // 使用您提供的 Tawk.to 脚本
      window.Tawk_API = window.Tawk_API || {}
      window.Tawk_LoadStart = new Date()

      const script = document.createElement("script")
      const firstScript = document.getElementsByTagName("script")[0]

      script.async = true
      script.src = "https://embed.tawk.to/6863957e7ae7f7190cda3364/1iv2fvu1e"
      script.charset = "UTF-8"
      script.setAttribute("crossorigin", "*")

      // 添加加载超时
      const timeoutId = setTimeout(() => {
        console.warn("Tawk.to script loading timeout")
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }, 15000) // 15秒超时

      // 添加错误处理
      script.onerror = (error) => {
        console.error("Failed to load Tawk.to script:", error)
        clearTimeout(timeoutId)
      }

      script.onload = () => {
        console.log("Tawk.to script loaded successfully")
        clearTimeout(timeoutId)
      }

      // 配置 Tawk.to
      window.Tawk_API.onLoad = () => {
        console.log("Tawk.to initialized successfully")

        try {
          // 设置语言和用户属性
          if (typeof window.Tawk_API.setAttributes === "function") {
            window.Tawk_API.setAttributes({
              name: "",
              email: "",
              language: locale === "zh" ? "zh-CN" : "en",
              customField1: "ETrike Fox Website",
              customField2: locale === "zh" ? "中文用户" : "English User",
            })
          }

          // 添加标签
          if (typeof window.Tawk_API.addTags === "function") {
            window.Tawk_API.addTags([
              locale === "zh" ? "中文客户" : "English Customer",
              "Website Visitor",
              "ETrike Fox",
            ])
          }

          // 跟踪客服系统加载
          analytics.trackCustomerService("tawk_loaded", {
            language: locale,
            timestamp: new Date().toISOString(),
          })
        } catch (error) {
          console.warn("Error configuring Tawk.to:", error)
        }
      }

      // 监听聊天状态变化
      window.Tawk_API.onStatusChange = (status: string) => {
        console.log("Tawk.to status:", status)
        analytics.trackCustomerService("status_change", { status })
      }

      // 监听聊天开始
      window.Tawk_API.onChatStarted = () => {
        console.log("Chat started")
        analytics.trackCustomerService("chat_started", {
          language: locale,
          timestamp: new Date().toISOString(),
        })
      }

      // 监听聊天结束
      window.Tawk_API.onChatEnded = () => {
        console.log("Chat ended")
        analytics.trackCustomerService("chat_ended", {
          language: locale,
          timestamp: new Date().toISOString(),
        })
      }

      // 监听未读消息
      window.Tawk_API.onUnreadCountChanged = (unreadCount: number) => {
        console.log("Unread messages:", unreadCount)
        if (unreadCount > 0) {
          analytics.trackCustomerService("unread_messages", { count: unreadCount })
        }
      }

      // 插入脚本
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      } else {
        document.head.appendChild(script)
      }

      // 清理函数
      return () => {
        try {
          clearTimeout(timeoutId)
          if (script.parentNode) {
            script.parentNode.removeChild(script)
          }
        } catch (error) {
          console.warn("Error removing Tawk.to script:", error)
        }
      }
    } catch (error) {
      console.error("Error initializing Tawk.to:", error)
    }
  }, [locale, loadAttempted])

  return null
}
