import type { Locale } from "./types" // Assuming Locale is defined in a types file

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
      consultation: "Consultation",
    },
    // Home Page
    home: {
      hero: {
        badge: "New Energy Transportation Leader",
        title: "ETrike Fox",
        subtitle: "Smart Mobility New Era",
        description:
          "Professional electric tricycle manufacturer, committed to providing users with high-quality, high-performance new energy transportation solutions. Safe, reliable, green and environmentally friendly, making every trip full of technology.",
        exploreProducts: "Explore Products",
        learnMore: "Learn More",
      },
      features: {
        title: "Why Choose ETrike Fox",
        subtitle:
          "We focus on technological innovation and user experience, providing you with the highest quality electric mobility solutions",
        items: [
          {
            title: "Powerful Performance",
            description: "High-performance motor, strong climbing ability, stable and reliable power output",
          },
          {
            title: "Safe & Reliable",
            description: "Multiple safety protection systems to ensure the safety of every trip",
          },
          {
            title: "Green & Eco-friendly",
            description: "Zero emissions, low noise, contributing to environmental protection",
          },
          {
            title: "Quality Assurance",
            description: "Strict quality control, providing comprehensive after-sales service guarantee",
          },
        ],
      },
      products: {
        title: "Featured Products",
        subtitle: "Selected our most popular electric vehicle models",
        viewDetails: "View Details",
        viewAll: "View All Products",
      },
      cta: {
        title: "Ready to Start Your Electric Journey?",
        subtitle: "Contact our professional team for personalized product recommendations and special offers",
        consultation: "Consultation Now",
        testDrive: "Book Test Drive",
      },
    },
    // Products
    products: {
      title: "Product Center",
      subtitle:
        "Explore our full range of electric vehicle products and find the perfect travel companion for your needs",
      categories: {
        all: "All",
        cargo: "Cargo Series",
        passenger: "Passenger Series",
        personal: "Personal Mobility",
      },
      badges: {
        hot: "Hot",
        new: "New",
      },
      viewDetails: "View Details",
      consult: "Consult",
      specifications: {
        maxLoad: "Max Load",
        capacity: "Capacity",
        range: "Range",
        maxSpeed: "Max Speed",
      },
    },
    // Product Detail
    productDetail: {
      breadcrumb: {
        home: "Home",
        products: "Products",
      },
      backToProducts: "Back to Products",
      rating: "Rating",
      reviews: "Reviews",
      description: "Product Description",
      keyFeatures: "Key Features",
      consultation: "Consultation Now",
      onlineService: "Online Service",
      testDrive: "Book Test Drive",
      tabs: {
        specs: "Specifications",
        features: "Features",
        warranty: "Warranty",
      },
      warranty: {
        title: "Warranty Promise",
        afterSales: "After-sales Service",
        valueAdded: "Value-added Services",
        afterSalesItems: [
          "National warranty service network",
          "24-hour customer service hotline",
          "Free door-to-door inspection",
          "Original parts guarantee",
        ],
        valueAddedItems: [
          "Free home delivery",
          "Professional installation and debugging",
          "Usage training guidance",
          "Regular maintenance reminders",
        ],
      },
    },
    // About
    about: {
      hero: {
        badge: "About ETrike Fox",
        title: "Leading Electric Mobility",
        subtitle: "Creating a Better Future",
        description:
          "ETrike Fox was founded in 2008 as a professional electric tricycle manufacturer. We are committed to providing users with high-quality, high-performance new energy transportation solutions, using technological innovation to promote the popularization and development of green travel.",
      },
      stats: [
        { value: "15+", label: "Years of Experience" },
        { value: "50,000+", label: "Satisfied Customers" },
        { value: "20+", label: "Industry Certifications" },
        { value: "100+", label: "Service Centers" },
      ],
      story: {
        title: "Our Story",
        subtitle: "From entrepreneurial vision to industry leadership, witness the growth of ETrike Fox",
        founding: {
          title: "Founding Vision",
          content1:
            "In 2008, with a beautiful vision for green travel, we founded ETrike Fox. From the initial small workshop to the current modern factory, we have always adhered to technology innovation as the driving force and user needs as the guide, focusing on the research and development and manufacturing of electric tricycles.",
          content2:
            "Over the past fifteen years, we have witnessed the vigorous development of the new energy industry and have continued to grow and progress in this process. From the first electric tricycle rolling off the production line to now having a complete product line, ETrike Fox has always adhered to the concept of quality first.",
        },
        innovation: {
          title: "Technological Innovation",
          content1:
            "We have a professional R&D team and advanced production equipment, and have established a complete quality management system. Through continuous technological innovation and process improvement, our products have reached industry-leading levels in performance, safety and reliability.",
          content2:
            "From traditional lead-acid batteries to current lithium battery technology, from simple mechanical structures to intelligent electronic control systems, ETrike Fox has always been at the forefront of technological innovation, providing users with better product experiences.",
        },
      },
      values: {
        title: "Corporate Values",
        subtitle: "Core principles that guide our progress",
        items: [
          {
            title: "Innovation Driven",
            description:
              "Continuous investment in R&D, using technological innovation to drive the development of the electric mobility industry",
          },
          {
            title: "Quality First",
            description: "Strict quality control system to ensure the reliability and safety of every product",
          },
          {
            title: "User-Centric",
            description: "Focus on user needs and provide thoughtful products and quality service experiences",
          },
          {
            title: "Green Mission",
            description: "Committed to promoting clean energy travel and contributing to environmental protection",
          },
        ],
      },
      team: {
        title: "Core Team",
        subtitle: "Experienced professional team providing quality service",
        members: [
          {
            name: "Zhang Ming",
            position: "Founder & CEO",
            description:
              "15 years of experience in the new energy industry, committed to promoting electric mobility technology innovation",
          },
          {
            name: "Li Hua",
            position: "CTO",
            description: "Senior electric vehicle technology expert with multiple core technology patents",
          },
          {
            name: "Wang Fang",
            position: "Marketing Director",
            description: "Rich marketing experience with deep understanding of user needs and market trends",
          },
        ],
      },
      contact: {
        title: "Contact Us",
        subtitle: "Welcome to contact us for more product information",
        phone: {
          title: "Customer Hotline",
          number: "400-888-9999",
          hours: "Mon-Sun 8:00-20:00",
        },
        email: {
          title: "Email Address",
          address: "info@etrikefox.com",
          availability: "24/7 Online",
        },
        address: {
          title: "Company Address",
          location: "Wuxi, Jiangsu Province",
          detail: "No.88 Innovation Avenue, Industrial Park",
        },
        cta: "Contact Now",
      },
    },
    // Footer
    footer: {
      description:
        "Professional electric tricycle manufacturer, committed to providing users with high-quality, high-performance new energy transportation solutions. Safe, reliable, green and environmentally friendly, making every trip full of technology.",
      links: {
        products: {
          title: "Product Center",
          items: ["Electric Tricycles", "Electric Bicycles", "Cargo Series", "Passenger Series"],
        },
        support: {
          title: "Service Support",
          items: ["After-sales Service", "Warranty Policy", "User Manual", "FAQ"],
        },
        company: {
          title: "About ETrike Fox",
          items: ["Company Introduction", "Development History", "Corporate Culture", "Contact Us"],
        },
      },
      copyright: "© 2024 ETrike Fox. All rights reserved.",
      followUs: "Follow Us:",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error occurred",
      notFound: "Not Found",
      backToHome: "Back to Home",
    },
    languageSwitcher: {
      switchTo: "Switch to",
      currentLanguage: "English",
      availableLanguages: "Available Languages",
    },
    chat: {
      title: "Customer Service",
      welcome: "Hello! How can I help you today?",
      placeholder: "Type your message...",
      connected: "Connected to customer service",
      disconnected: "Connection lost, trying to reconnect...",
      connectionError: "Connection failed",
      status: {
        online: "Online",
        offline: "Offline",
        busy: "Busy",
      },
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      products: "产品中心",
      about: "关于我们",
      contact: "联系我们",
      consultation: "在线咨询",
    },
    // Home Page
    home: {
      hero: {
        badge: "新能源出行领导者",
        title: "黑狐电动车",
        subtitle: "智能出行新时代",
        description:
          "专业的电动三轮车制造商，致力于为用户提供高品质、高性能的新能源出行解决方案。安全可靠，绿色环保，让每一次出行都充满科技感。",
        exploreProducts: "探索产品",
        learnMore: "了解我们",
      },
      features: {
        title: "为什么选择黑狐电动车",
        subtitle: "我们专注于技术创新和用户体验，为您提供最优质的电动出行解决方案",
        items: [
          {
            title: "强劲动力",
            description: "高性能电机，爬坡能力强，动力输出稳定可靠",
          },
          {
            title: "安全可靠",
            description: "多重安全保护系统，确保每一次出行的安全",
          },
          {
            title: "绿色环保",
            description: "零排放，低噪音，为环保事业贡献力量",
          },
          {
            title: "品质保证",
            description: "严格的质量控制，提供全面的售后服务保障",
          },
        ],
      },
      products: {
        title: "热门产品",
        subtitle: "精选我们最受欢迎的电动车型",
        viewDetails: "查看详情",
        viewAll: "查看全部产品",
      },
      cta: {
        title: "准备开始您的电动出行之旅？",
        subtitle: "联系我们的专业团队，获取个性化的产品推荐和优惠方案",
        consultation: "立即咨询",
        testDrive: "预约试驾",
      },
    },
    // Products
    products: {
      title: "产品中心",
      subtitle: "探索我们全系列的电动车产品，找到最适合您需求的出行伙伴",
      categories: {
        all: "全部",
        cargo: "货运系列",
        passenger: "客运系列",
        personal: "个人出行",
      },
      badges: {
        hot: "热销",
        new: "新品",
      },
      viewDetails: "查看详情",
      consult: "咨询",
      specifications: {
        maxLoad: "最大载重",
        capacity: "载客量",
        range: "续航里程",
        maxSpeed: "最高时速",
      },
    },
    // Product Detail
    productDetail: {
      breadcrumb: {
        home: "首页",
        products: "产品中心",
      },
      backToProducts: "返回产品列表",
      rating: "评分",
      reviews: "评价",
      description: "产品描述",
      keyFeatures: "核心特性",
      consultation: "立即咨询",
      onlineService: "在线客服",
      testDrive: "预约试驾",
      tabs: {
        specs: "详细参数",
        features: "功能特色",
        warranty: "质保服务",
      },
      warranty: {
        title: "质保承诺",
        afterSales: "售后服务",
        valueAdded: "增值服务",
        afterSalesItems: ["全国联保服务网络", "24小时客服热线", "免费上门检测", "原厂配件保证"],
        valueAddedItems: ["免费送货上门", "专业安装调试", "使用培训指导", "定期保养提醒"],
      },
    },
    // About
    about: {
      hero: {
        badge: "关于黑狐",
        title: "引领电动出行",
        subtitle: "创造美好未来",
        description:
          "黑狐电动车成立于2008年，是一家专业的电动三轮车制造商。我们致力于为用户提供高品质、高性能的新能源出行解决方案，用科技创新推动绿色出行的普及和发展。",
      },
      stats: [
        { value: "15+", label: "年行业经验" },
        { value: "50,000+", label: "满意客户" },
        { value: "20+", label: "行业认证" },
        { value: "100+", label: "服务网点" },
      ],
      story: {
        title: "我们的故事",
        subtitle: "从创业初心到行业领先，见证黑狐的成长历程",
        founding: {
          title: "创立初心",
          content1:
            "2008年，怀着对绿色出行的美好愿景，我们创立了黑狐电动车。从最初的小作坊到现在的现代化工厂，我们始终坚持以技术创新为驱动，以用户需求为导向，专注于电动三轮车的研发和制造。",
          content2:
            "十五年来，我们见证了新能源行业的蓬勃发展，也在这个过程中不断成长和进步。从第一台电动三轮车下线，到现在拥有完整的产品线，黑狐始终坚持品质至上的理念。",
        },
        innovation: {
          title: "技术创新",
          content1:
            "我们拥有专业的研发团队和先进的生产设备，建立了完善的质量管理体系。通过持续的技术创新和工艺改进，我们的产品在性能、安全性和可靠性方面都达到了行业领先水平。",
          content2:
            "从传统的铅酸电池到现在的锂电池技术，从简单的机械结构到智能化的电控系统，黑狐始终走在技术创新的前沿，为用户提供更好的产品体验。",
        },
      },
      values: {
        title: "企业价值观",
        subtitle: "指导我们前进的核心理念",
        items: [
          {
            title: "创新驱动",
            description: "持续投入研发，用科技创新推动电动出行行业发展",
          },
          {
            title: "品质至上",
            description: "严格的质量控制体系，确保每一台产品的可靠性和安全性",
          },
          {
            title: "用户为本",
            description: "以用户需求为中心，提供贴心的产品和优质的服务体验",
          },
          {
            title: "绿色使命",
            description: "致力于推广清洁能源出行，为环保事业贡献力量",
          },
        ],
      },
      team: {
        title: "核心团队",
        subtitle: "经验丰富的专业团队，为您提供优质服务",
        members: [
          {
            name: "张明",
            position: "创始人 & CEO",
            description: "15年新能源行业经验，致力于推动电动出行技术创新",
          },
          {
            name: "李华",
            position: "技术总监",
            description: "资深电动车技术专家，拥有多项核心技术专利",
          },
          {
            name: "王芳",
            position: "市场总监",
            description: "丰富的市场营销经验，深度了解用户需求和市场趋势",
          },
        ],
      },
      contact: {
        title: "联系我们",
        subtitle: "欢迎与我们取得联系，了解更多产品信息",
        phone: {
          title: "客服热线",
          number: "400-888-9999",
          hours: "周一至周日 8:00-20:00",
        },
        email: {
          title: "邮箱地址",
          address: "info@etrikefox.com",
          availability: "24小时在线接收",
        },
        address: {
          title: "公司地址",
          location: "江苏省无锡市",
          detail: "工业园区创新大道88号",
        },
        cta: "立即咨询",
      },
    },
    // Footer
    footer: {
      description:
        "专业的电动三轮车制造商，致力于为用户提供高品质、高性能的新能源出行解决方案。安全可靠，绿色环保，让每一次出行都充满科技感。",
      links: {
        products: {
          title: "产品中心",
          items: ["三轮电动车", "两轮电动车", "货运系列", "客运系列"],
        },
        support: {
          title: "服务支持",
          items: ["售后服务", "质保政策", "用户手册", "常见问题"],
        },
        company: {
          title: "关于黑狐",
          items: ["公司介绍", "发展历程", "企业文化", "联系我们"],
        },
      },
      copyright: "© 2024 黑狐电动车. 保留所有权利.",
      followUs: "关注我们:",
      legal: {
        privacy: "隐私政策",
        terms: "服务条款",
      },
    },
    // Common
    common: {
      loading: "加载中...",
      error: "发生错误",
      notFound: "未找到",
      backToHome: "返回首页",
    },
    languageSwitcher: {
      switchTo: "切换到",
      currentLanguage: "中文",
      availableLanguages: "可选语言",
    },
    chat: {
      title: "在线客服",
      welcome: "您好！有什么可以帮助您的吗？",
      placeholder: "输入您的消息...",
      connected: "已连接到客服",
      disconnected: "连接断开，正在重新连接...",
      connectionError: "连接失败",
      status: {
        online: "在线",
        offline: "离线",
        busy: "忙碌",
      },
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
