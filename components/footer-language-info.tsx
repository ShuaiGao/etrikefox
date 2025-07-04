"use client"
import { Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function FooterLanguageInfo() {
  const { locale, switchLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-4 text-slate-400 text-sm">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        <span>{locale === "zh" ? "语言版本:" : "Language:"}</span>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => switchLanguage("en")}
          className={`hover:text-white transition-colors ${locale === "en" ? "text-blue-400 font-medium" : ""}`}
        >
          English
        </button>
        <span>|</span>
        <button
          onClick={() => switchLanguage("zh")}
          className={`hover:text-white transition-colors ${locale === "zh" ? "text-blue-400 font-medium" : ""}`}
        >
          中文
        </button>
      </div>
    </div>
  )
}
