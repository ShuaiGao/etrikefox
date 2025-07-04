"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, X, Clock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { analytics } from "@/utils/analytics"

interface FallbackContactWidgetProps {
  position?: "bottom-right" | "bottom-left"
}

export function FallbackContactWidget({ position = "bottom-right" }: FallbackContactWidgetProps) {
  const { t, locale } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const contactMethods = [
    {
      id: "phone-call",
      icon: <Phone className="w-5 h-5" />,
      title: locale === "zh" ? "电话咨询" : "Phone Call",
      subtitle: "400-888-9999",
      description: locale === "zh" ? "立即拨打，专业客服为您服务" : "Call now for professional service",
      action: () => {
        window.open("tel:400-888-9999")
        analytics.trackCustomerService("fallback_phone_clicked")
        setIsExpanded(false)
      },
      color: "bg-green-600 hover:bg-green-700",
      available: true,
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      title: locale === "zh" ? "邮件咨询" : "Email",
      subtitle: "info@etrikefox.com",
      description: locale === "zh" ? "发送邮件，详细咨询产品信息" : "Send email for detailed product information",
      action: () => {
        window.open("mailto:info@etrikefox.com?subject=Product Inquiry")
        analytics.trackCustomerService("fallback_email_clicked")
        setIsExpanded(false)
      },
      color: "bg-blue-600 hover:bg-blue-700",
      available: true,
    },
    {
      id: "whatsapp",
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      subtitle: locale === "zh" ? "国际客户" : "International",
      description: locale === "zh" ? "WhatsApp在线咨询" : "WhatsApp online consultation",
      action: () => {
        window.open("https://wa.me/8613800000000", "_blank")
        analytics.trackCustomerService("fallback_whatsapp_clicked")
        setIsExpanded(false)
      },
      color: "bg-green-500 hover:bg-green-600",
      available: true,
    },
  ]

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* 展开的联系方式列表 */}
      {isExpanded && (
        <Card className="mb-4 w-80 bg-slate-800/95 backdrop-blur-sm border-slate-700 shadow-2xl">
          <CardContent className="p-4">
            {/* 头部 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
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
            <div className="space-y-3">
              {contactMethods.map((method) => (
                <Button
                  key={method.id}
                  onClick={method.action}
                  className={`w-full ${method.color} text-white p-3 h-auto justify-start transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 w-full">
                    {method.icon}
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">{method.title}</div>
                      <div className="text-xs opacity-90">{method.subtitle}</div>
                      <div className="text-xs opacity-75">{method.description}</div>
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 主浮动按钮 */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-all duration-300
          ${isExpanded ? "rotate-45" : "hover:scale-110"}
        `}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </Button>
    </div>
  )
}
