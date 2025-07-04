"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function TawkToConfig() {
  const { locale } = useTranslation()

  useEffect(() => {
    // 等待 Tawk.to 加载完成后进行配置
    const configureTawk = () => {
      if (window.Tawk_API && window.Tawk_API.setAttributes) {
        try {
          // 设置用户属性
          window.Tawk_API.setAttributes({
            name: "", // 可以从用户登录状态获取
            email: "", // 可以从用户登录状态获取
            language: locale === "zh" ? "zh-CN" : "en",
            customField1: "ETrike Fox Website",
            customField2: locale === "zh" ? "中文用户" : "English User",
            customField3: window.location.pathname, // 当前页面路径
          })

          // 添加标签
          if (typeof window.Tawk_API.addTags === "function") {
            window.Tawk_API.addTags([
              locale === "zh" ? "中文客户" : "English Customer",
              "Website Visitor",
              "ETrike Fox",
              `Page: ${window.location.pathname}`,
            ])
          }

          // 设置自定义样式
          const customCSS = `
            #tawk-bubble {
              background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%) !important;
              box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3) !important;
              border: none !important;
            }
            
            #tawk-bubble:hover {
              transform: scale(1.05) !important;
              transition: transform 0.3s ease !important;
            }
            
            .tawk-chat-panel {
              font-family: 'Inter', sans-serif !important;
              border-radius: 12px !important;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
            }
            
            .tawk-header {
              background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%) !important;
              border-radius: 12px 12px 0 0 !important;
            }

            .tawk-button {
              background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%) !important;
              border: none !important;
              border-radius: 6px !important;
            }

            .tawk-button:hover {
              background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%) !important;
            }
          `

          // 注入自定义样式
          const style = document.createElement("style")
          style.textContent = customCSS
          document.head.appendChild(style)

          // 设置预设消息
          const presetMessages =
            locale === "zh"
              ? [
                  "我想了解产品价格",
                  "我想预约试驾",
                  "我需要售后服务",
                  "我想了解产品参数",
                  "我想了解配送信息",
                  "我想了解分期付款",
                ]
              : [
                  "I want to know about pricing",
                  "I want to book a test drive",
                  "I need after-sales service",
                  "I want to know product specifications",
                  "I want to know about delivery",
                  "I want to know about financing",
                ]

          // 发送预设消息事件
          if (typeof window.Tawk_API.addEvent === "function") {
            window.Tawk_API.addEvent("preset_messages", {
              messages: presetMessages,
            })
          }

          console.log("Tawk.to configuration completed")
        } catch (error) {
          console.warn("Error in Tawk.to configuration:", error)
        }
      } else {
        // 如果还没加载完成，继续等待
        setTimeout(configureTawk, 500)
      }
    }

    // 延迟配置，确保 Tawk.to 已经加载
    setTimeout(configureTawk, 1000)
  }, [locale])

  return null
}
