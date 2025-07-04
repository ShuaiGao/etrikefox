"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface LanguageToggleButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  showText?: boolean
}

export function LanguageToggleButton({
  variant = "ghost",
  size = "default",
  showText = true,
}: LanguageToggleButtonProps) {
  const { locale, switchLanguage } = useTranslation()

  const handleToggle = () => {
    const targetLang = locale === "zh" ? "en" : "zh"
    switchLanguage(targetLang)
  }

  return (
    <Button variant={variant} size={size} onClick={handleToggle} className="gap-2 text-slate-300 hover:text-white">
      <Languages className="h-4 w-4" />
      {showText && <span>{locale === "zh" ? "English" : "中文"}</span>}
    </Button>
  )
}
