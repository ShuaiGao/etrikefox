"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface Message {
  id: string
  content: string
  type: "user" | "bot" | "system"
  timestamp: Date
}

interface FreeChatWidgetProps {
  position?: "bottom-right" | "bottom-left"
}

export function FreeChatWidget({ position = "bottom-right" }: FreeChatWidgetProps) {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 免费的智能回复系统（基于关键词匹配）
  const freeAutoReply = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (locale === "zh") {
      // 中文关键词匹配
      if (message.includes("价格") || message.includes("多少钱") || message.includes("费用")) {
        return "我们的产品价格从8,999元到15,999元不等，具体价格请查看产品页面或拨打400-888-9999咨询。"
      }
      if (message.includes("续航") || message.includes("电池")) {
        return "我们的产品续航里程从80km到120km不等，采用高品质锂电池，充电时间4-10小时。"
      }
      if (message.includes("质保") || message.includes("保修") || message.includes("售后")) {
        return "我们提供2-3年整车质保，全国联保服务网络，24小时客服热线支持。"
      }
      if (message.includes("试驾") || message.includes("体验")) {
        return "欢迎预约试驾！请拨打400-888-9999或发送邮件到info@etrikefox.com预约。"
      }
      if (message.includes("你好") || message.includes("在吗") || message.includes("咨询")) {
        return "您好！欢迎咨询黑狐电动车，我是智能客服小狐，有什么可以帮助您的吗？"
      }
      return "感谢您的咨询！如需详细了解，请拨打客服热线400-888-9999，工作时间8:00-20:00。"
    } else {
      // 英文关键词匹配
      if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
        return "Our products range from $1,299 to $2,399. For detailed pricing, please check our product pages or call us."
      }
      if (message.includes("battery") || message.includes("range") || message.includes("charging")) {
        return "Our vehicles offer 80-120km range with high-quality lithium batteries, charging time 4-10 hours."
      }
      if (message.includes("warranty") || message.includes("service") || message.includes("support")) {
        return "We provide 2-3 years vehicle warranty with nationwide service network and 24/7 customer support."
      }
      if (message.includes("test") || message.includes("drive") || message.includes("try")) {
        return "Welcome to book a test drive! Please call us or email info@etrikefox.com to schedule."
      }
      if (message.includes("hello") || message.includes("hi") || message.includes("help")) {
        return "Hello! Welcome to ETrike Fox. I'm your AI assistant. How can I help you today?"
      }
      return "Thank you for your inquiry! For detailed information, please call our hotline or visit our product pages."
    }
  }

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // 初始化欢迎消息
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content:
          locale === "zh"
            ? "您好！欢迎来到黑狐电动车，我是智能客服小狐。请问有什么可以帮助您的吗？"
            : "Hello! Welcome to ETrike Fox. I'm your AI assistant. How can I help you today?",
        type: "bot",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, locale])

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // 模拟打字延迟
    setTimeout(
      () => {
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          content: freeAutoReply(inputValue),
          type: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botReply])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    ) // 1-3秒随机延迟
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setUnreadCount(0)
    }
  }

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 bg-slate-800 border-slate-700 shadow-xl">
          {/* Header */}
          <CardHeader className="p-4 border-b border-slate-700 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{locale === "zh" ? "狐" : "F"}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {locale === "zh" ? "智能客服小狐" : "AI Assistant Fox"}
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/80 text-xs">{locale === "zh" ? "在线服务" : "Online"}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white/80 hover:text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="p-0 h-64 overflow-y-auto bg-slate-900">
            <div className="p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.type === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-slate-700 text-white rounded-bl-sm"
                    }`}
                  >
                    {message.content}
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString(locale === "zh" ? "zh-CN" : "en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* 打字指示器 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 text-white p-3 rounded-lg rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-slate-700 bg-slate-800">
            <div className="flex gap-2 mb-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={locale === "zh" ? "输入您的问题..." : "Type your question..."}
                className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                disabled={isTyping}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* 快捷联系方式 */}
            <div className="flex gap-2 text-xs">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white p-1 h-auto flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                400-888-9999
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white p-1 h-auto flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                {locale === "zh" ? "邮箱" : "Email"}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
