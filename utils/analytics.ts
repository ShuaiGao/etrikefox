// 简单的分析工具函数
export const analytics = {
  // 跟踪事件
  trackEvent: (eventName: string, properties: Record<string, any> = {}) => {
    console.log(`Analytics Event: ${eventName}`, properties)

    // 如果有 Google Analytics，可以在这里调用
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, properties)
    }

    // 如果有其他分析工具，也可以在这里调用
  },

  // 跟踪页面浏览
  trackPageView: (pageName: string, pageUrl: string) => {
    console.log(`Page View: ${pageName}`, { url: pageUrl })

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_title: pageName,
        page_location: pageUrl,
      })
    }
  },

  // 跟踪客服相关事件
  trackCustomerService: (action: string, details: Record<string, any> = {}) => {
    console.log(`Customer Service: ${action}`, details)

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "customer_service", {
        event_category: "engagement",
        event_label: action,
        ...details,
      })
    }
  },
}
