"use client"

import { useEffect, useState } from "react"

export function useTawkTo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOnline, setIsOnline] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    let checkInterval: NodeJS.Timeout

    // 检查 Tawk.to 加载状态
    const checkLoaded = () => {
      try {
        if (typeof window !== "undefined" && window.Tawk_API) {
          // 检查关键方法是否存在
          const hasRequiredMethods =
            typeof window.Tawk_API.maximize === "function" && typeof window.Tawk_API.getStatus === "function"

          if (hasRequiredMethods) {
            setIsLoaded(true)
            setIsAvailable(true)

            // 监听状态变化
            if (typeof window.Tawk_API.onStatusChange === "function") {
              window.Tawk_API.onStatusChange = (status: string) => {
                setIsOnline(status === "online")
              }
            }

            // 监听未读消息数量
            if (typeof window.Tawk_API.onUnreadCountChanged === "function") {
              window.Tawk_API.onUnreadCountChanged = (count: number) => {
                setUnreadCount(count)
              }
            }

            // 获取初始状态
            try {
              const currentStatus = window.Tawk_API.getStatus()
              setIsOnline(currentStatus === "online")
            } catch (error) {
              console.warn("Could not get initial Tawk.to status:", error)
            }

            // 清除检查间隔
            if (checkInterval) {
              clearInterval(checkInterval)
            }
          }
        }
      } catch (error) {
        console.warn("Tawk.to check failed:", error)
        setIsLoaded(false)
        setIsAvailable(false)
      }
    }

    // 立即检查一次
    checkLoaded()

    // 如果还没加载，每秒检查一次，最多检查10次
    let attempts = 0
    checkInterval = setInterval(() => {
      attempts++
      if (attempts > 10) {
        console.info("Tawk.to not available after 10 attempts. Using fallback contact methods.")
        clearInterval(checkInterval)
        return
      }

      if (!isLoaded) {
        checkLoaded()
      } else {
        clearInterval(checkInterval)
      }
    }, 1000)

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval)
      }
    }
  }, [isLoaded])

  // 安全的工具函数
  const utils = {
    isLoaded: () => isLoaded,
    isAvailable: () => isAvailable,
    maximize: () => {
      try {
        if (
          isAvailable &&
          typeof window !== "undefined" &&
          window.Tawk_API &&
          typeof window.Tawk_API.maximize === "function"
        ) {
          window.Tawk_API.maximize()
          return true
        }
        console.warn("Tawk.to maximize not available")
        return false
      } catch (error) {
        console.warn("Failed to maximize Tawk.to:", error)
        return false
      }
    },
    minimize: () => {
      try {
        if (
          isAvailable &&
          typeof window !== "undefined" &&
          window.Tawk_API &&
          typeof window.Tawk_API.minimize === "function"
        ) {
          window.Tawk_API.minimize()
          return true
        }
        return false
      } catch (error) {
        console.warn("Failed to minimize Tawk.to:", error)
        return false
      }
    },
    toggle: () => {
      try {
        if (
          isAvailable &&
          typeof window !== "undefined" &&
          window.Tawk_API &&
          typeof window.Tawk_API.toggle === "function"
        ) {
          window.Tawk_API.toggle()
          return true
        }
        return false
      } catch (error) {
        console.warn("Failed to toggle Tawk.to:", error)
        return false
      }
    },
    getStatus: () => {
      try {
        if (
          isAvailable &&
          typeof window !== "undefined" &&
          window.Tawk_API &&
          typeof window.Tawk_API.getStatus === "function"
        ) {
          return window.Tawk_API.getStatus()
        }
        return "offline"
      } catch (error) {
        console.warn("Failed to get Tawk.to status:", error)
        return "offline"
      }
    },
  }

  return {
    isLoaded,
    isOnline,
    unreadCount,
    isAvailable,
    utils,
  }
}
