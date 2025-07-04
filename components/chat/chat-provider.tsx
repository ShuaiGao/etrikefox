"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import { ChatWidget } from "./chat-widget"

interface ChatContextType {
  isEnabled: boolean
  setEnabled: (enabled: boolean) => void
  unreadCount: number
  setUnreadCount: (count: number) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isEnabled, setEnabled] = useState(true)
  const [unreadCount, setUnreadCount] = useState(0)

  return (
    <ChatContext.Provider value={{ isEnabled, setEnabled, unreadCount, setUnreadCount }}>
      {children}
      {isEnabled && <ChatWidget />}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within ChatProvider")
  }
  return context
}
