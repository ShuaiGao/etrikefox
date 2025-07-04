"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Leaf, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/hooks/use-translation"
import { StructuredData } from "@/components/seo/structured-data"
import { generateOrganizationSchema, generateWebsiteSchema, generateFAQSchema } from "@/lib/seo"
import { useEffect } from "react"

export default function HomePage() {
  const { t, locale } = useTranslation()

  // 更新页面标题和元数据
  useEffect(() => {
    document.title =
      locale === "zh" ? "黑狐电动车 - 专业电动三轮车制造商" : "ETrike Fox - Professional Electric Tricycle Manufacturer"

    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        locale === "zh"
          ? "专业的电动三轮车制造商，致力于为用户提供高品质、高性能的新能源出行解决方案。安全可靠，绿色环保，让每一次出行都充满科技感。"
          : "Professional electric tricycle manufacturer, committed to providing users with high-quality, high-performance new energy transportation solutions. Safe, reliable, green and environmentally friendly.",
      )
    }
  }, [locale])

  const featuredProducts = [
    {
      id: "cargo-pro",
      name: t.locale === "zh" ? "黑狐货运Pro" : "ETrike Fox Cargo Pro",
      type: t.locale === "zh" ? "三轮电动车" : "Electric Tricycle",
      image: "/images/cargo-pro-1.png",
      price: t.locale === "zh" ? "¥12,999" : "$1,899",
      features:
        t.locale === "zh" ? ["载重500kg", "续航120km", "快充技术"] : ["500kg Load", "120km Range", "Fast Charging"],
    },
    {
      id: "passenger-deluxe",
      name: t.locale === "zh" ? "黑狐客运豪华版" : "ETrike Fox Passenger Deluxe",
      type: t.locale === "zh" ? "三轮电动车" : "Electric Tricycle",
      image: "/images/passenger-deluxe-1.png",
      price: t.locale === "zh" ? "¥15,999" : "$2,399",
      features:
        t.locale === "zh" ? ["6座设计", "续航100km", "豪华内饰"] : ["6-Seat Design", "100km Range", "Luxury Interior"],
    },
    {
      id: "urban-rider",
      name: t.locale === "zh" ? "黑狐都市骑士" : "ETrike Fox Urban Rider",
      type: t.locale === "zh" ? "两轮电动车" : "Electric Bicycle",
      image: "/images/urban-rider-1.png",
      price: t.locale === "zh" ? "¥8,999" : "$1,299",
      features:
        t.locale === "zh" ? ["轻量化", "续航80km", "智能互联"] : ["Lightweight", "80km Range", "Smart Connected"],
    },
  ]

  // 生成结构化数据
  const organizationSchema = generateOrganizationSchema(locale)
  const websiteSchema = generateWebsiteSchema(locale)

  // FAQ结构化数据
  const faqs =
    locale === "zh"
      ? [
          {
            question: "电动三轮车的续航里程是多少？",
            answer: "我们的电动三轮车续航里程从80km到120km不等，具体取决于车型和使用条件。",
          },
          {
            question: "电动车充电需要多长时间？",
            answer: "充电时间根据电池容量不同，一般在4-10小时之间。我们的快充技术可以大大缩短充电时间。",
          },
          {
            question: "提供哪些售后服务？",
            answer: "我们提供全国联保服务，24小时客服热线，免费上门检测，以及原厂配件保证。",
          },
        ]
      : [
          {
            question: "What is the range of electric tricycles?",
            answer:
              "Our electric tricycles have a range from 80km to 120km, depending on the model and usage conditions.",
          },
          {
            question: "How long does it take to charge the electric vehicle?",
            answer:
              "Charging time varies by battery capacity, typically 4-10 hours. Our fast charging technology can significantly reduce charging time.",
          },
          {
            question: "What after-sales services do you provide?",
            answer:
              "We provide nationwide warranty service, 24-hour customer hotline, free door-to-door inspection, and original parts guarantee.",
          },
        ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* 结构化数据 */}
      <StructuredData data={[organizationSchema, websiteSchema, faqSchema]} />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">{t.home.hero.badge}</Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    {t.home.hero.title}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {t.home.hero.subtitle}
                    </span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">{t.home.hero.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="/products" className="flex items-center gap-2">
                      {t.home.hero.exploreProducts} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Link href="/about">{t.home.hero.learnMore}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-3xl" />
                <Image
                  src="/images/hero-main.png"
                  alt={t.home.hero.title}
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.home.features.title}</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.home.features.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: t.home.features.items[0].title,
                  description: t.home.features.items[0].description,
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: t.home.features.items[1].title,
                  description: t.home.features.items[1].description,
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: t.home.features.items[2].title,
                  description: t.home.features.items[2].description,
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: t.home.features.items[3].title,
                  description: t.home.features.items[3].description,
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-400 mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.home.products.title}</h2>
              <p className="text-slate-400 text-lg">{t.home.products.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600/90 text-white">{product.type}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-2xl font-bold text-blue-400">{product.price}</p>
                      </div>
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <Link href={`/products/${product.id}`}>
                          {t.home.products.viewDetails} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Link href="/products">{t.home.products.viewAll}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">{t.home.cta.title}</h2>
              <p className="text-slate-300 text-lg">{t.home.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {t.home.cta.consultation}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  {t.home.cta.testDrive}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
