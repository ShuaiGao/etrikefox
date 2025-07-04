import { analytics } from "@/utils/analytics"

// Tawk.to 工具函数
export class TawkToUtils {
  // 检查 Tawk.to 是否已加载
  static isLoaded(): boolean {
    return typeof window !== "undefined" && window.Tawk_API && typeof window.Tawk_API.onLoad === "function"
  }

  // 发送自定义事件
  static sendEvent(eventName: string, data: any) {
    if (this.isLoaded()) {
      window.Tawk_API.addEvent(eventName, {
        ...data,
        timestamp: new Date().toISOString(),
      })

      // 同时发送到分析系统
      analytics.trackCustomerService(`custom_${eventName}`, data)
    }
  }

  // 设置用户信息
  static setUserInfo(userInfo: { name?: string; email?: string; phone?: string; [key: string]: any }) {
    if (this.isLoaded()) {
      window.Tawk_API.setAttributes(userInfo)
      analytics.trackCustomerService("user_info_set", {
        has_name: !!userInfo.name,
        has_email: !!userInfo.email,
        has_phone: !!userInfo.phone,
      })
    }
  }

  // 添加标签
  static addTags(tags: string[]) {
    if (this.isLoaded()) {
      window.Tawk_API.addTags(tags)
      analytics.trackCustomerService("tags_added", { tags })
    }
  }

  // 移除标签
  static removeTags(tags: string[]) {
    if (this.isLoaded()) {
      window.Tawk_API.removeTags(tags)
      analytics.trackCustomerService("tags_removed", { tags })
    }
  }

  // 显示/隐藏聊天窗口
  static toggleWidget(show: boolean) {
    if (this.isLoaded()) {
      if (show) {
        window.Tawk_API.showWidget()
      } else {
        window.Tawk_API.hideWidget()
      }
      analytics.trackCustomerService("widget_toggle", { show })
    }
  }

  // 最大化聊天窗口
  static maximize() {
    if (this.isLoaded()) {
      window.Tawk_API.maximize()
      analytics.trackCustomerService("widget_maximize")
    }
  }

  // 最小化聊天窗口
  static minimize() {
    if (this.isLoaded()) {
      window.Tawk_API.minimize()
      analytics.trackCustomerService("widget_minimize")
    }
  }

  // 结束聊天
  static endChat() {
    if (this.isLoaded()) {
      window.Tawk_API.endChat()
      analytics.trackCustomerService("chat_end_manual")
    }
  }

  // 获取聊天状态
  static getStatus(): string {
    if (this.isLoaded()) {
      return window.Tawk_API.getStatus()
    }
    return "offline"
  }

  // 发送页面访问事件
  static trackPageView(pageName: string, pageUrl: string) {
    this.sendEvent("page_view", {
      page_name: pageName,
      page_url: pageUrl,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    })

    // 同时发送到通用分析系统
    analytics.trackPageView(pageName, pageUrl)
  }

  // 发送产品查看事件
  static trackProductView(productId: string, productName: string) {
    this.sendEvent("product_view", {
      product_id: productId,
      product_name: productName,
      timestamp: new Date().toISOString(),
    })

    analytics.trackEvent("product_view", {
      product_id: productId,
      product_name: productName,
    })
  }

  // 发送询价事件
  static trackPriceInquiry(productId: string, productName: string) {
    this.sendEvent("price_inquiry", {
      product_id: productId,
      product_name: productName,
      timestamp: new Date().toISOString(),
    })

    analytics.trackEvent("price_inquiry", {
      product_id: productId,
      product_name: productName,
    })
  }
}

// 预设的常见问题和回答
export const FAQ_RESPONSES = {
  zh: {
    price:
      "我们的产品价格从8,999元到15,999元不等，具体价格请查看产品页面。如需了解优惠信息，请告诉我您感兴趣的具体型号。",
    battery: "我们采用高品质锂电池，续航里程80-120km，充电时间4-10小时。电池提供1-2年质保。",
    warranty: "我们提供2-3年整车质保，全国100+服务网点，24小时客服热线400-888-9999。",
    testDrive: "欢迎预约试驾！请提供您的联系方式和所在城市，我们会安排最近的经销商联系您。",
    delivery: "我们提供全国免费送货上门服务，一般3-7个工作日到达，偏远地区可能需要更长时间。",
    payment: "支持多种付款方式：全款、分期付款、租赁等。分期最低首付30%，最长36期。",
  },
  en: {
    price:
      "Our products range from $1,299 to $2,399. Please check our product pages for detailed pricing. Let me know which model you're interested in for discount information.",
    battery:
      "We use high-quality lithium batteries with 80-120km range and 4-10 hours charging time. Battery warranty: 1-2 years.",
    warranty: "We provide 2-3 years vehicle warranty with 100+ service centers nationwide and 24/7 customer hotline.",
    testDrive:
      "Welcome to book a test drive! Please provide your contact information and city, we'll arrange the nearest dealer to contact you.",
    delivery: "We provide free nationwide home delivery, usually 3-7 business days, remote areas may take longer.",
    payment:
      "Multiple payment options available: full payment, installment, leasing. Minimum 30% down payment, up to 36 months.",
  },
}
