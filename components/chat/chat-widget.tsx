"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { io, type Socket } from "socket.io-client"

interface Message {
  id: string
  content: string
  type: "user" | "agent" | "system"
  timestamp: Date
  sender?: string
}

interface ChatWidgetProps {
  position?: "bottom-right" | "bottom-left"
  theme?: "light" | "dark"
}

export function ChatWidget({ position = "bottom-right", theme = "dark" }: ChatWidgetProps) {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [agentStatus, setAgentStatus] = useState<"online" | "offline" | "busy">("offline")
  const [unreadCount, setUnreadCount] = useState(0)

  const socketRef = useRef<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 初始化 Socket 连接
  useEffect(() => {
    if (isOpen && !socketRef.current) {
      socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3001", {
        query: { language: locale },
      })

      socketRef.current.on("connect", () => {
        setIsConnected(true)
        addSystemMessage(t.chat.connected)
      })

      socketRef.current.on("disconnect", () => {
        setIsConnected(false)
        addSystemMessage(t.chat.disconnected)
      })

      socketRef.current.on("message", (message: Message) => {
        setMessages((prev) => [...prev, message])
        if (!isOpen || isMinimized) {
          setUnreadCount((prev) => prev + 1)
        }
      })

      socketRef.current.on("agent_status", (status: string) => {
        setAgentStatus(status as "online" | "offline" | "busy")
      })
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
        socketRef.current = null
      }
    }
  }, [isOpen, locale])

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addSystemMessage = (content: string) => {
    const systemMessage: Message = {
      id: Date.now().toString(),
      content,
      type: "system",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, systemMessage])
  }

  const sendMessage = () => {
    if (!inputValue.trim() || !socketRef.current) return

    const message: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, message])
    socketRef.current.emit("message", message)
    setInputValue("")
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
    if (isMinimized) {
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
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
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
        <Card className={`w-80 h-96 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white"} shadow-xl`}>
          {/* Header */}
          <CardHeader className="p-4 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{locale === "zh" ? "客" : "C"}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{t.chat.title}</h3>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        agentStatus === "online"
                          ? "bg-green-400"
                          : agentStatus === "busy"
                            ? "bg-yellow-400"
                            : "bg-gray-400"
                      }`}
                    />
                    <span className="text-slate-400 text-xs">{t.chat.status[agentStatus]}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="text-slate-400 hover:text-white p-1 h-auto"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-slate-400 hover:text-white p-1 h-auto"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          {!isMinimized && (
            <>
              <CardContent className="p-0 h-64 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {messages.length === 0 && (
                    <div className="text-center text-slate-400 text-sm py-8">{t.chat.welcome}</div>
                  )}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-2 rounded-lg text-sm ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : message.type === "system"
                              ? "bg-slate-700 text-slate-300 text-center"
                              : "bg-slate-700 text-white"
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
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t.chat.placeholder}
                    className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    disabled={!isConnected}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || !isConnected}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                {!isConnected && <p className="text-red-400 text-xs mt-1">{t.chat.connectionError}</p>}
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  )
}
