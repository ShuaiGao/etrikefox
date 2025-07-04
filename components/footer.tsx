import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { FooterLanguageInfo } from "@/components/footer-language-info"

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    [t.footer.links.products.title]: t.footer.links.products.items.map((item, index) => ({
      name: item,
      href: `/products?category=${index}`,
    })),
    [t.footer.links.support.title]: t.footer.links.support.items.map((item, index) => ({
      name: item,
      href: `/support/${index}`,
    })),
    [t.footer.links.company.title]: t.footer.links.company.items.map((item, index) => ({
      name: item,
      href: index === 3 ? "/about#contact" : "/about",
    })),
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{t.locale === "zh" ? "狐" : "E"}</span>
              </div>
              <span className="text-white font-bold text-xl">{t.locale === "zh" ? "黑狐电动车" : "ETrike Fox"}</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">{t.footer.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>info@etrikefox.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>
                  {t.locale === "zh"
                    ? "江苏省无锡市工业园区创新大道88号"
                    : "No.88 Innovation Ave, Industrial Park, Wuxi, Jiangsu"}
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {t.footer.copyright} |
              <Link href="/privacy" className="hover:text-white ml-1">
                {t.footer.legal.privacy}
              </Link>{" "}
              |
              <Link href="/terms" className="hover:text-white ml-1">
                {t.footer.legal.terms}
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FooterLanguageInfo />
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm">{t.footer.followUs}</span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
