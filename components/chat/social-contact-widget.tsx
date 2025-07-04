"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function SocialContactWidget() {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const socialContacts = [
    {
      name: "WhatsApp",
      icon: "💬",
      number: "+86-138-0000-0000",
      link: "https://wa.me/8613800000000",
      color: "bg-green-500 hover:bg-green-600",
      available: true,
    },
    {
      name: locale === "zh" ? "微信" : "WeChat",
      icon: "💬",
      id: "etrikefox_service",
      link: "#wechat-qr",
      color: "bg-green-600 hover:bg-green-700",
      available: true,
    },
    {
      name: "Telegram",
      icon: "✈️",
      username: "@etrikefox",
      link: "https://t.me/etrikefox",
      color: "bg-blue-500 hover:bg-blue-600",
      available: true,
    },
    {
      name: locale === "zh" ? "QQ客服" : "QQ Service",
      icon: "🐧",
      number: "800-888-999",
      link: "https://wpa.qq.com/msgrd?v=3&uin=800888999&site=qq&menu=yes",
      color: "bg-blue-600 hover:bg-blue-700",
      available: locale === "zh",
    },
  ]

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-64 bg-slate-800 border-slate-700 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm">
                {locale === "zh" ? "选择联系方式" : "Choose Contact Method"}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 h-auto"
              >
                ×
              </Button>
            </div>

            <div className="space-y-2">
              {socialContacts
                .filter((contact) => contact.available)
                .map((contact, index) => (
                  <Button
                    key={index}
                    onClick={() => {
                      if (contact.link.startsWith("#")) {
                        // 显示二维码或其他操作
                        alert(locale === "zh" ? "请扫描二维码添加微信" : "Please scan QR code to add WeChat")
                      } else {
                        window.open(contact.link, "_blank")
                      }
                    }}
                    className={`w-full ${contact.color} text-white p-2 h-auto justify-start text-sm`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{contact.icon}</span>
                      <div className="text-left">
                        <div className="font-medium">{contact.name}</div>
                        {contact.number && <div className="text-xs opacity-90">{contact.number}</div>}
                        {contact.username && <div className="text-xs opacity-90">{contact.username}</div>}
                        {contact.id && <div className="text-xs opacity-90">{contact.id}</div>}
                      </div>
                    </div>
                  </Button>
                ))}

              {/* 传统联系方式 */}
              <div className="border-t border-slate-700 pt-2 mt-3">
                <Button
                  onClick={() => window.open("tel:400-888-9999")}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white p-2 h-auto justify-start text-sm"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-medium">{locale === "zh" ? "电话咨询" : "Phone Call"}</div>
                      <div className="text-xs opacity-90">400-888-9999</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="mt-3 text-center">
              <p className="text-slate-400 text-xs">
                {locale === "zh" ? "选择您喜欢的方式联系我们" : "Choose your preferred contact method"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
