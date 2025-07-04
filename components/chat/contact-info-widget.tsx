"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ContactInfoWidget() {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: locale === "zh" ? "电话咨询" : "Phone Call",
      subtitle: "400-888-9999",
      description: locale === "zh" ? "工作日 8:00-20:00" : "Mon-Sun 8:00-20:00",
      action: () => window.open("tel:400-888-9999"),
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: locale === "zh" ? "微信咨询" : "WeChat",
      subtitle: locale === "zh" ? "扫码添加" : "Scan QR Code",
      description: locale === "zh" ? "24小时在线" : "24/7 Online",
      action: () => {
        // 显示微信二维码
        alert(locale === "zh" ? "请扫描微信二维码" : "Please scan WeChat QR code")
      },
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: locale === "zh" ? "邮件咨询" : "Email",
      subtitle: "info@etrikefox.com",
      description: locale === "zh" ? "24小时接收" : "24/7 Available",
      action: () => window.open("mailto:info@etrikefox.com"),
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg"
        >
          <Phone className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-72 bg-slate-800 border-slate-700 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">{locale === "zh" ? "联系我们" : "Contact Us"}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 h-auto"
              >
                ×
              </Button>
            </div>

            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <Button
                  key={index}
                  onClick={method.action}
                  className={`w-full ${method.color} text-white p-3 h-auto justify-start`}
                >
                  <div className="flex items-center gap-3">
                    {method.icon}
                    <div className="text-left">
                      <div className="font-medium">{method.title}</div>
                      <div className="text-sm opacity-90">{method.subtitle}</div>
                      <div className="text-xs opacity-75">{method.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* 营业时间 */}
            <div className="mt-4 p-3 bg-slate-700 rounded-lg">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  {locale === "zh" ? "营业时间：周一至周日 8:00-20:00" : "Business Hours: Mon-Sun 8:00-20:00"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
