export type Locale = "en" | "zh"

export interface Translation {
  nav: {
    home: string
    products: string
    about: string
    contact: string
    consultation: string
  }
  home: {
    hero: {
      badge: string
      title: string
      subtitle: string
      description: string
      exploreProducts: string
      learnMore: string
    }
    features: {
      title: string
      subtitle: string
      items: Array<{
        title: string
        description: string
      }>
    }
    products: {
      title: string
      subtitle: string
      viewDetails: string
      viewAll: string
    }
    cta: {
      title: string
      subtitle: string
      consultation: string
      testDrive: string
    }
  }
  products: {
    title: string
    subtitle: string
    categories: {
      all: string
      cargo: string
      passenger: string
      personal: string
    }
    badges: {
      hot: string
      new: string
    }
    viewDetails: string
    consult: string
  }
  about: {
    hero: {
      badge: string
      title: string
      subtitle: string
      description: string
    }
    stats: Array<{
      value: string
      label: string
    }>
    story: {
      title: string
      subtitle: string
      founding: {
        title: string
        content1: string
        content2: string
      }
      innovation: {
        title: string
        content1: string
        content2: string
      }
    }
    values: {
      title: string
      subtitle: string
      items: Array<{
        title: string
        description: string
      }>
    }
    team: {
      title: string
      subtitle: string
      members: Array<{
        name: string
        position: string
        description: string
      }>
    }
    contact: {
      title: string
      subtitle: string
      phone: {
        title: string
        number: string
        hours: string
      }
      email: {
        title: string
        address: string
        availability: string
      }
      address: {
        title: string
        location: string
        detail: string
      }
      cta: string
    }
  }
  footer: {
    description: string
    links: {
      products: {
        title: string
        items: string[]
      }
      support: {
        title: string
        items: string[]
      }
      company: {
        title: string
        items: string[]
      }
    }
    copyright: string
    followUs: string
    legal: {
      privacy: string
      terms: string
    }
  }
  common: {
    loading: string
    error: string
    notFound: string
    backToHome: string
  }
  languageSwitcher: {
    switchTo: string
    currentLanguage: string
    availableLanguages: string
  }
  chat: {
    title: string
    welcome: string
    placeholder: string
    connected: string
    disconnected: string
    connectionError: string
    status: {
      online: string
      offline: string
      busy: string
    }
  }
  locale: Locale
}
