"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, Zap } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useTawkTo } from "@/hooks/use-tawk-to"
import { analytics } from "@/utils/analytics"

interface QuickContactFabProps {
  position?: "bottom-right" | "bottom-left"
  variant?: "phone" | "chat" | "multi"
}

export function QuickContactFab({ position = "bottom-left", variant = "multi" }: QuickContactFabProps) {
  const { locale } = useTranslation()
  const { isLoaded, isOnline, utils } = useTawkTo()
  const [isHovered, setIsHovered] = useState(false)

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  }

  // 单一功能按钮
  if (variant === "phone") {
    return (
      <div className={`fixed ${positionClasses[position]} z-40`}>
        <Button
          onClick={() => {
            window.open("tel:400-888-9999")
            analytics.trackCustomerService("fab_phone_clicked")
          }}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Phone className="w-6 h-6" />
        </Button>

        {isHovered && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {locale === "zh" ? "拨打电话" : "Call Now"}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
          </div>
        )}
      </div>
    )
  }

  if (variant === "chat") {
    return (
      <div className={`fixed ${positionClasses[position]} z-40`}>
        <Button
          onClick={() => {
            if (isLoaded) {
              utils.maximize()
              analytics.trackCustomerService("fab_chat_clicked")
            }
          }}
          disabled={!isLoaded}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl transition-all duration-300 hover:scale-110 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MessageCircle className="w-6 h-6" />
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          )}
        </Button>

        {isHovered && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {locale === "zh" ? "在线客服" : "Live Chat"}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
          </div>
        )}
      </div>
    )
  }

  // 多功能展开按钮
  return (
    <div
      className={`fixed ${positionClasses[position]} z-40`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 展开的按钮组 */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {/* 邮件按钮 */}
        <Button
          onClick={() => {
            window.open("mailto:info@etrikefox.com")
            analytics.trackCustomerService("fab_email_clicked")
          }}
          className="w-12 h-12 rounded-full bg-slate-600 hover:bg-slate-700 shadow-lg"
        >
          <Mail className="w-5 h-5" />
        </Button>

        {/* 聊天按钮 */}
        {isLoaded && (
          <Button
            onClick={() => {
              utils.maximize()
              analytics.trackCustomerService("fab_chat_clicked")
            }}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg relative"
          >
            <MessageCircle className="w-5 h-5" />
            {isOnline && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-white" />
            )}
          </Button>
        )}

        {/* 电话按钮 */}
        <Button
          onClick={() => {
            window.open("tel:400-888-9999")
            analytics.trackCustomerService("fab_phone_clicked")
          }}
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <Phone className="w-5 h-5" />
        </Button>
      </div>

      {/* 主按钮 */}
      <Button
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl transition-all duration-300 ${isHovered ? "rotate-45 scale-110" : "animate-pulse"}`}
      >
        <Zap className="w-6 h-6" />
      </Button>

      {/* 提示文字 */}
      {!isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-75">
          {locale === "zh" ? "悬停查看选项" : "Hover for options"}
        </div>
      )}
    </div>
  )
}
