"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Minimize2, Maximize2, X } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface TawkToControllerProps {
  showCustomButton?: boolean
  position?: "bottom-right" | "bottom-left"
}

export function TawkToController({ showCustomButton = false, position = "bottom-right" }: TawkToControllerProps) {
  const { t, locale } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    // 检查 Tawk.to 是否已加载
    const checkTawkLoaded = () => {
      if (window.Tawk_API && window.Tawk_API.onLoad) {
        setIsLoaded(true)
      } else {
        setTimeout(checkTawkLoaded, 100)
      }
    }

    checkTawkLoaded()

    // 监听未读消息
    if (window.Tawk_API) {
      window.Tawk_API.onUnreadCountChanged = (unreadCount: number) => {
        setUnreadCount(unreadCount)
      }
    }
  }, [])

  // 控制 Tawk.to 显示/隐藏
  const toggleChat = () => {
    if (window.Tawk_API) {
      if (isVisible) {
        window.Tawk_API.hideWidget()
      } else {
        window.Tawk_API.showWidget()
      }
      setIsVisible(!isVisible)
    }
  }

  // 最大化聊天窗口
  const maximizeChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize()
    }
  }

  // 最小化聊天窗口
  const minimizeChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.minimize()
    }
  }

  // 打开聊天窗口
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle()
    }
  }

  const positionClasses = {
    "bottom-right": "bottom-10 right-4",
    "bottom-left": "bottom-10 left-4",
  }

  if (!showCustomButton || !isLoaded) {
    return null
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-40 flex flex-col gap-20`}>
      {/* 自定义聊天按钮 */}
      <Button
        onClick={openChat}
        className="relative w-140 h-140 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </Button>

      {/* 控制按钮组 */}
      <div className="flex flex-col gap-1">
        <Button
          onClick={maximizeChat}
          size="sm"
          variant="outline"
          className="w-10 h-10 rounded-full border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-slate-300"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
        <Button
          onClick={minimizeChat}
          size="sm"
          variant="outline"
          className="w-10 h-10 rounded-full border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-slate-300"
        >
          <Minimize2 className="w-4 h-4" />
        </Button>
        <Button
          onClick={toggleChat}
          size="sm"
          variant="outline"
          className="w-10 h-10 rounded-full border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-slate-300"
        >
          {isVisible ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  )
}
