"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useTawkTo } from "@/hooks/use-tawk-to"

interface ChatTriggerButtonsProps {
  variant?: "floating" | "inline"
  showPhone?: boolean
  showEmail?: boolean
}

export function ChatTriggerButtons({
  variant = "inline",
  showPhone = true,
  showEmail = true,
}: ChatTriggerButtonsProps) {
  const { t, locale } = useTranslation()
  const { isLoaded, isOnline, utils } = useTawkTo()

  const openChat = () => {
    if (isLoaded) {
      utils.maximize()
    }
  }

  const openPhone = () => {
    window.open("tel:400-888-9999")
  }

  const openEmail = () => {
    window.open("mailto:info@etrikefox.com")
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
        <Button
          onClick={openChat}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          disabled={!isLoaded}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>

        {showPhone && (
          <Button onClick={openPhone} className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg">
            <Phone className="w-5 h-5" />
          </Button>
        )}

        {showEmail && (
          <Button onClick={openEmail} className="w-12 h-12 rounded-full bg-slate-600 hover:bg-slate-700 shadow-lg">
            <Mail className="w-5 h-5" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      <Button
        onClick={openChat}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        disabled={!isLoaded}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {locale === "zh" ? "在线咨询" : "Live Chat"}
        {isOnline && <span className="ml-2 w-2 h-2 bg-green-400 rounded-full"></span>}
      </Button>

      {showPhone && (
        <Button
          onClick={openPhone}
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
        >
          <Phone className="w-4 h-4 mr-2" />
          {locale === "zh" ? "电话咨询" : "Call Us"}
        </Button>
      )}

      {showEmail && (
        <Button
          onClick={openEmail}
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
        >
          <Mail className="w-4 h-4 mr-2" />
          {locale === "zh" ? "邮件咨询" : "Email Us"}
        </Button>
      )}
    </div>
  )
}
