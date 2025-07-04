"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Gauge, Users, Package } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/hooks/use-translation"
import { StructuredData } from "@/components/seo/structured-data"
import { generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo"
import { useEffect } from "react"

export default function ProductsPage() {
  const { t, locale } = useTranslation()

  // 更新页面标题和元数据
  useEffect(() => {
    document.title = locale === "zh" ? "产品中心 - 黑狐电动车" : "Products - ETrike Fox"

    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        locale === "zh"
          ? "探索黑狐电动车全系列产品，包括货运三轮车、客运三轮车、个人出行电动车等多种型号，满足不同出行需求。"
          : "Explore ETrike Fox's complete range of electric vehicles including cargo tricycles, passenger tricycles, and personal mobility solutions for all transportation needs.",
      )
    }
  }, [locale])

  const products = [
    {
      id: "cargo-pro",
      name: t.locale === "zh" ? "黑狐货运Pro" : "ETrike Fox Cargo Pro",
      type: t.locale === "zh" ? "三轮电动车" : "Electric Tricycle",
      category: t.locale === "zh" ? "货运系列" : "Cargo Series",
      image: "/images/cargo-pro-1.png",
      price: t.locale === "zh" ? "¥12,999" : "$1,899",
      originalPrice: t.locale === "zh" ? "¥14,999" : "$2,199",
      description:
        t.locale === "zh"
          ? "专业货运电动三轮车，载重500kg，续航120km，适合商用运输。"
          : "Professional cargo electric tricycle with 500kg load capacity and 120km range, perfect for commercial transport.",
      features:
        t.locale === "zh"
          ? ["载重500kg", "续航120km", "快充技术", "GPS定位"]
          : ["500kg Load", "120km Range", "Fast Charging", "GPS Tracking"],
      specs: {
        maxLoad: "500kg",
        range: "120km",
        maxSpeed: t.locale === "zh" ? "45km/h" : "28mph",
        chargingTime: t.locale === "zh" ? "6-8小时" : "6-8 hours",
      },
      isHot: true,
      rating: 4.8,
      reviews: 156,
    },
    {
      id: "cargo-standard",
      name: t.locale === "zh" ? "黑狐货运标准版" : "ETrike Fox Cargo Standard",
      type: t.locale === "zh" ? "三轮电动车" : "Electric Tricycle",
      category: t.locale === "zh" ? "货运系列" : "Cargo Series",
      image: "/images/cargo-standard-1.png",
      price: t.locale === "zh" ? "¥9,999" : "$1,499",
      description:
        t.locale === "zh"
          ? "经济实用的货运电动三轮车，载重400kg，续航100km。"
          : "Economical cargo electric tricycle with 400kg load capacity and 100km range.",
      features:
        t.locale === "zh"
          ? ["载重400kg", "续航100km", "经济实用", "稳定可靠"]
          : ["400kg Load", "100km Range", "Economical", "Reliable"],
      specs: {
        maxLoad: "400kg",
        range: "100km",
        maxSpeed: t.locale === "zh" ? "40km/h" : "25mph",
        chargingTime: t.locale === "zh" ? "8-10小时" : "8-10 hours",
      },
      rating: 4.6,
      reviews: 89,
    },
    {
      id: "passenger-deluxe",
      name: t.locale === "zh" ? "黑狐客运豪华版" : "ETrike Fox Passenger Deluxe",
      type: t.locale === "zh" ? "三轮电动车" : "Electric Tricycle",
      category: t.locale === "zh" ? "客运系列" : "Passenger Series",
      image: "/images/passenger-deluxe-1.png",
      price: t.locale === "zh" ? "¥15,999" : "$2,399",
      description:
        t.locale === "zh"
          ? "豪华客运电动三轮车，6座设计，配备空调系统和豪华内饰。"
          : "Luxury passenger electric tricycle with 6-seat design, air conditioning and premium interior.",
      features:
        t.locale === "zh"
          ? ["6座设计", "续航100km", "豪华内饰", "空调系统"]
          : ["6-Seater", "100km Range", "Luxury Interior", "Air Conditioning"],
      specs: {
        capacity: "6人",
        range: "100km",
        maxSpeed: t.locale === "zh" ? "45km/h" : "28mph",
        chargingTime: t.locale === "zh" ? "6-8小时" : "6-8 hours",
      },
      isNew: true,
      rating: 4.9,
      reviews: 124,
    },
    {
      id: "urban-rider",
      name: t.locale === "zh" ? "黑狐都市骑士" : "ETrike Fox Urban Rider",
      type: t.locale === "zh" ? "两轮电动车" : "Electric Scooter",
      category: t.locale === "zh" ? "个人出行" : "Personal Mobility",
      image: "/images/urban-rider-1.png",
      price: t.locale === "zh" ? "¥8,999" : "$1,299",
      originalPrice: t.locale === "zh" ? "¥9,999" : "$1,499",
      description:
        t.locale === "zh"
          ? "智能电动车，轻量化设计，续航80km，适合城市通勤。"
          : "Smart electric scooter with lightweight design and 80km range, perfect for urban commuting.",
      features:
        t.locale === "zh"
          ? ["轻量化设计", "续航80km", "智能互联", "防盗系统"]
          : ["Lightweight", "80km Range", "Smart Connectivity", "Anti-theft"],
      specs: {
        weight: "45kg",
        range: "80km",
        maxSpeed: t.locale === "zh" ? "50km/h" : "31mph",
        chargingTime: t.locale === "zh" ? "4-6小时" : "4-6 hours",
      },
      isHot: true,
      rating: 4.7,
      reviews: 203,
    },
  ]

  const categories = [
    t.products.categories.all,
    t.products.categories.cargo,
    t.products.categories.passenger,
    t.products.categories.personal,
  ]

  // 生成面包屑结构化数据
  const breadcrumbItems = [
    { name: locale === "zh" ? "首页" : "Home", url: "/" },
    { name: locale === "zh" ? "产品中心" : "Products", url: "/products" },
  ]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  // 生成产品列表结构化数据
  const productSchemas = products.map((product) => generateProductSchema(product, locale))

  return (
    <>
      {/* 结构化数据 */}
      <StructuredData data={[breadcrumbSchema, ...productSchemas]} />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Navbar />

        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.products.title}</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t.products.subtitle}</p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === t.products.categories.all ? "default" : "outline"}
                  className={
                    category === t.products.categories.all
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
                      : "border-slate-600 text-slate-300 hover:bg-slate-700"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group"
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-blue-600/90 text-white">{product.type}</Badge>
                      {product.isHot && <Badge className="bg-red-600/90 text-white">{t.products.badges.hot}</Badge>}
                      {product.isNew && <Badge className="bg-green-600/90 text-white">新品</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-400 text-sm mb-1" itemProp="category">
                          {product.category}
                        </p>
                        <h3 className="text-white font-semibold text-lg mb-2" itemProp="name">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p
                            className="text-2xl font-bold text-blue-400"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                          >
                            <span itemProp="price">{product.price}</span>
                          </p>
                          {product.originalPrice && (
                            <p className="text-slate-500 line-through text-sm">{product.originalPrice}</p>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm mt-2" itemProp="description">
                          {product.description}
                        </p>
                      </div>

                      {/* Key Specs */}
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-700">
                        {product.specs.maxLoad && (
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300 text-sm">{product.specs.maxLoad}</span>
                          </div>
                        )}
                        {product.specs.capacity && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300 text-sm">{product.specs.capacity}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Battery className="w-4 h-4 text-blue-400" />
                          <span className="text-slate-300 text-sm">{product.specs.range}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-blue-400" />
                          <span className="text-slate-300 text-sm">{product.specs.maxSpeed}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          asChild
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Link href={`/products/${product.id}`}>
                            {t.products.viewDetails} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                        >
                          {t.products.consult}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
