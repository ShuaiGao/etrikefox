"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, Video, MessageSquare, Calendar, Zap } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useTawkTo } from "@/hooks/use-tawk-to"

export function ContactMethodsSelector() {
  const { t, locale } = useTranslation()
  const { isLoaded, isOnline, utils } = useTawkTo()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const contactMethods = [
    {
      id: "instant-chat",
      icon: <MessageCircle className="w-8 h-8" />,
      title: locale === "zh" ? "即时聊天" : "Instant Chat",
      description: locale === "zh" ? "立即获得回复，解答您的疑问" : "Get immediate replies to your questions",
      features: [
        locale === "zh" ? "实时对话" : "Real-time conversation",
        locale === "zh" ? "文件传输" : "File sharing",
        locale === "zh" ? "多语言支持" : "Multi-language support",
      ],
      status: isOnline ? "online" : "offline",
      available: isLoaded,
      action: () => utils.maximize(),
      color: "border-blue-500 bg-blue-50 dark:bg-blue-950",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      recommended: true,
    },
    {
      id: "phone-call",
      icon: <Phone className="w-8 h-8" />,
      title: locale === "zh" ? "电话咨询" : "Phone Consultation",
      description: locale === "zh" ? "专业客服一对一服务" : "One-on-one service with professional staff",
      features: [
        locale === "zh" ? "专业解答" : "Professional answers",
        locale === "zh" ? "个性化服务" : "Personalized service",
        locale === "zh" ? "即时沟通" : "Instant communication",
      ],
      status: "available",
      available: true,
      action: () => window.open("tel:400-888-9999"),
      color: "border-green-500 bg-green-50 dark:bg-green-950",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "video-call",
      icon: <Video className="w-8 h-8" />,
      title: locale === "zh" ? "视频通话" : "Video Call",
      description: locale === "zh" ? "面对面产品演示和咨询" : "Face-to-face product demo and consultation",
      features: [
        locale === "zh" ? "产品演示" : "Product demonstration",
        locale === "zh" ? "技术讲解" : "Technical explanation",
        locale === "zh" ? "个性化推荐" : "Personalized recommendations",
      ],
      status: "appointment",
      available: true,
      action: () =>
        alert(locale === "zh" ? "请拨打400-888-9999预约视频通话" : "Please call 400-888-9999 to book video call"),
      color: "border-purple-500 bg-purple-50 dark:bg-purple-950",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "whatsapp",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      description: locale === "zh" ? "国际客户专用通道" : "Dedicated channel for international customers",
      features: [
        locale === "zh" ? "全球可用" : "Available worldwide",
        locale === "zh" ? "多媒体支持" : "Multimedia support",
        locale === "zh" ? "离线消息" : "Offline messaging",
      ],
      status: "available",
      available: true,
      action: () => window.open("https://wa.me/8613800000000", "_blank"),
      color: "border-green-400 bg-green-50 dark:bg-green-950",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "email",
      icon: <Mail className="w-8 h-8" />,
      title: locale === "zh" ? "邮件咨询" : "Email Inquiry",
      description: locale === "zh" ? "详细咨询和资料获取" : "Detailed inquiries and information requests",
      features: [
        locale === "zh" ? "详细回复" : "Detailed replies",
        locale === "zh" ? "资料发送" : "Document sharing",
        locale === "zh" ? "记录保存" : "Record keeping",
      ],
      status: "available",
      available: true,
      action: () => window.open("mailto:info@etrikefox.com?subject=Product Inquiry"),
      color: "border-slate-500 bg-slate-50 dark:bg-slate-950",
      buttonColor: "bg-slate-600 hover:bg-slate-700",
    },
    {
      id: "appointment",
      icon: <Calendar className="w-8 h-8" />,
      title: locale === "zh" ? "预约试驾" : "Test Drive Booking",
      description: locale === "zh" ? "预约到店体验产品" : "Book an in-store product experience",
      features: [
        locale === "zh" ? "实地体验" : "Hands-on experience",
        locale === "zh" ? "专业指导" : "Professional guidance",
        locale === "zh" ? "个性化服务" : "Personalized service",
      ],
      status: "appointment",
      available: true,
      action: () =>
        alert(locale === "zh" ? "请拨打400-888-9999预约试驾" : "Please call 400-888-9999 to book test drive"),
      color: "border-orange-500 bg-orange-50 dark:bg-orange-950",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ]

  const getStatusBadge = (method: any) => {
    switch (method.status) {
      case "online":
        return <Badge className="bg-green-500 text-white">{locale === "zh" ? "在线" : "Online"}</Badge>
      case "offline":
        return <Badge className="bg-yellow-500 text-white">{locale === "zh" ? "离线" : "Offline"}</Badge>
      case "available":
        return <Badge className="bg-blue-500 text-white">{locale === "zh" ? "可用" : "Available"}</Badge>
      case "appointment":
        return <Badge className="bg-purple-500 text-white">{locale === "zh" ? "预约" : "Appointment"}</Badge>
      default:
        return null
    }
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contactMethods.map((method) => (
        <Card
          key={method.id}
          className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${method.color} ${selectedMethod === method.id ? "ring-2 ring-blue-500" : ""}`}
          onClick={() => setSelectedMethod(method.id)}
        >
          {method.recommended && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-transparent text-white text-xs px-3 py-1">
              <Zap className="w-3 h-3 inline mr-1" />
              {locale === "zh" ? "推荐" : "Recommended"}
            </div>
          )}

          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-blue-600 dark:text-blue-400">{method.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{method.title}</h3>
                  {getStatusBadge(method)}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{method.description}</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {method.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {feature}
                </div>
              ))}
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation()
                method.action()
              }}
              disabled={!method.available}
              className={`w-full ${method.buttonColor} text-white`}
            >
              {method.id === "instant-chat" && (locale === "zh" ? "开始聊天" : "Start Chat")}
              {method.id === "phone-call" && (locale === "zh" ? "立即拨打" : "Call Now")}
              {method.id === "video-call" && (locale === "zh" ? "预约视频" : "Book Video")}
              {method.id === "whatsapp" && (locale === "zh" ? "打开WhatsApp" : "Open WhatsApp")}
              {method.id === "email" && (locale === "zh" ? "发送邮件" : "Send Email")}
              {method.id === "appointment" && (locale === "zh" ? "预约试驾" : "Book Test Drive")}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
