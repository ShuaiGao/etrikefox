"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, X, Clock, Headphones, MessageSquare } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useTawkTo } from "@/hooks/use-tawk-to"
import { analytics } from "@/utils/analytics"

interface FloatingContactWidgetProps {
  position?: "bottom-right" | "bottom-left"
  showAnimation?: boolean
}

export function FloatingContactWidget({ position = "bottom-right", showAnimation = true }: FloatingContactWidgetProps) {
  const { t, locale } = useTranslation()
  const { isLoaded, isOnline, isAvailable, utils } = useTawkTo()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // 更新当前时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // 每分钟更新一次

    return () => clearInterval(timer)
  }, [])

  // 检查是否在工作时间内
  const isBusinessHours = () => {
    const hour = currentTime.getHours()
    return hour >= 8 && hour < 20 // 8:00 - 20:00
  }

  // 联系方式配置
  const contactMethods = [
    {
      id: "live-chat",
      icon: <MessageCircle className="w-5 h-5" />,
      title: locale === "zh" ? "在线客服" : "Live Chat",
      subtitle: locale === "zh" ? "即时回复" : "Instant Reply",
      status: isOnline ? "online" : "offline",
      available: isAvailable,
      action: () => {
        if (isAvailable && utils.maximize()) {
          analytics.trackCustomerService("floating_chat_clicked")
        } else {
          // 如果 Tawk.to 不可用，显示备用联系方式
          alert(
            locale === "zh"
              ? "在线客服暂时不可用，请拨打 400-888-9999 或发送邮件到 info@etrikefox.com"
              : "Live chat temporarily unavailable, please call 400-888-9999 or email info@etrikefox.com",
          )
        }
        setIsExpanded(false)
      },
      color: "bg-blue-600 hover:bg-blue-700",
      priority: 1,
    },
    {
      id: "phone-call",
      icon: <Phone className="w-5 h-5" />,
      title: locale === "zh" ? "电话咨询" : "Phone Call",
      subtitle: "400-888-9999",
      status: isBusinessHours() ? "available" : "after-hours",
      available: true,
      action: () => {
        window.open("tel:400-888-9999")
        analytics.trackCustomerService("floating_phone_clicked")
        setIsExpanded(false)
      },
      color: "bg-green-600 hover:bg-green-700",
      priority: 2,
    },
    {
      id: "whatsapp",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "WhatsApp",
      subtitle: locale === "zh" ? "海外客户" : "International",
      status: "available",
      available: true,
      action: () => {
        window.open("https://wa.me/8613800000000", "_blank")
        analytics.trackCustomerService("floating_whatsapp_clicked")
        setIsExpanded(false)
      },
      color: "bg-green-500 hover:bg-green-600",
      priority: 3,
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      title: locale === "zh" ? "邮件咨询" : "Email",
      subtitle: "info@etrikefox.com",
      status: "available",
      available: true,
      action: () => {
        window.open("mailto:info@etrikefox.com?subject=Product Inquiry")
        analytics.trackCustomerService("floating_email_clicked")
        setIsExpanded(false)
      },
      color: "bg-slate-600 hover:bg-slate-700",
      priority: 4,
    },
  ]

  // 根据优先级和可用性排序
  const sortedMethods = contactMethods.filter((method) => method.available).sort((a, b) => a.priority - b.priority)

  // 获取状态颜色
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
      case "available":
        return "bg-green-400"
      case "offline":
      case "after-hours":
        return "bg-yellow-400"
      default:
        return "bg-gray-400"
    }
  }

  // 获取状态文本
  const getStatusText = (method: any) => {
    if (method.id === "live-chat") {
      if (!isAvailable) return locale === "zh" ? "不可用" : "Unavailable"
      return isOnline ? (locale === "zh" ? "在线" : "Online") : locale === "zh" ? "离线" : "Offline"
    }
    if (method.id === "phone-call") {
      return isBusinessHours()
        ? locale === "zh"
          ? "工作时间"
          : "Business Hours"
        : locale === "zh"
          ? "非工作时间"
          : "After Hours"
    }
    return locale === "zh" ? "可用" : "Available"
  }

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  }

  if (!isVisible) return null

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* 展开的联系方式列表 */}
      {isExpanded && (
        <Card className="mb-4 w-80 bg-slate-800/95 backdrop-blur-sm border-slate-700 shadow-2xl">
          <CardContent className="p-4">
            {/* 头部 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="text-white font-semibold text-sm">{locale === "zh" ? "联系我们" : "Contact Us"}</h3>
                  <p className="text-slate-400 text-xs">
                    {locale === "zh" ? "选择您喜欢的方式" : "Choose your preferred method"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* 联系方式列表 */}
            <div className="space-y-2">
              {sortedMethods.map((method) => (
                <Button
                  key={method.id}
                  onClick={method.action}
                  className={`w-full ${method.color} text-white p-3 h-auto justify-start transition-all duration-200 hover:scale-105`}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="relative">
                      {method.icon}
                      <div
                        className={`absolute -top-1 -right-1 w-3 h-3 ${getStatusColor(method.status)} rounded-full border-2 border-slate-800`}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">{method.title}</div>
                      <div className="text-xs opacity-90">{method.subtitle}</div>
                      <div className="text-xs opacity-75">{getStatusText(method)}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* 工作时间提示 */}
            <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <Clock className="w-4 h-4" />
                <div>
                  <div className="font-medium">{locale === "zh" ? "工作时间" : "Business Hours"}</div>
                  <div className="opacity-75">{locale === "zh" ? "周一至周日 8:00-20:00" : "Mon-Sun 8:00-20:00"}</div>
                  <div className={`mt-1 text-xs ${isBusinessHours() ? "text-green-400" : "text-yellow-400"}`}>
                    {isBusinessHours()
                      ? locale === "zh"
                        ? "现在是工作时间"
                        : "Currently in business hours"
                      : locale === "zh"
                        ? "现在是非工作时间"
                        : "Currently after business hours"}
                  </div>
                </div>
              </div>
            </div>

            {/* Tawk.to 状态提示 */}
            {!isAvailable && (
              <div className="mt-2 p-2 bg-yellow-600/20 border border-yellow-600/30 rounded text-xs text-yellow-300">
                {locale === "zh" ? "在线客服系统正在加载中..." : "Live chat system is loading..."}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 主浮动按钮 */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-all duration-300
            ${showAnimation && !isExpanded ? "animate-pulse hover:animate-none" : ""}
            ${isExpanded ? "rotate-45" : "hover:scale-110"}
          `}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Phone className="w-6 h-6" />
              {/* 在线状态指示器 - 只在确实在线时显示 */}
              {isAvailable && isOnline && !isExpanded && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              )}
            </div>
          )}
        </Button>

        {/* 状态提示 */}
        {!isExpanded && (
          <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1">
            {locale === "zh" ? "联系" : "Contact"}
          </Badge>
        )}
      </div>
    </div>
  )
}
