import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, Star, Phone, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/hooks/use-translation"

// 产品数据
const productData = {
  "cargo-pro": {
    zh: {
      name: "黑狐货运Pro",
      type: "三轮电动车",
      category: "货运系列",
      price: "¥12,999",
      originalPrice: "¥14,999",
      rating: 4.8,
      reviews: 156,
      images: [
        "/images/cargo-pro-1.png",
        "/images/cargo-pro-2.png",
        "/images/cargo-pro-1.png",
        "/images/cargo-pro-2.png",
      ],
      description:
        "黑狐货运Pro是我们的旗舰货运电动三轮车，专为商用运输设计。采用高性能电机和大容量电池，提供强劲动力和超长续航。坚固的车身结构和优化的载货空间设计，让您的货运业务更加高效可靠。",
      features: [
        "500kg超大载重能力",
        "120km超长续航里程",
        "快充技术，6-8小时充满",
        "GPS定位防盗系统",
        "LED大灯照明系统",
        "液压减震系统",
        "防滑载货平台",
        "智能仪表显示",
      ],
      specifications: {
        基本参数: {
          车身尺寸: "3200×1200×1400mm",
          载货尺寸: "1800×1200×300mm",
          整车重量: "280kg",
          最大载重: "500kg",
          最高时速: "45km/h",
          爬坡能力: "≤15°",
        },
        动力系统: {
          电机功率: "1500W",
          电机类型: "无刷直流电机",
          电池类型: "锂电池",
          电池容量: "60V32Ah",
          续航里程: "120km",
          充电时间: "6-8小时",
        },
        安全配置: {
          制动系统: "前后鼓刹",
          轮胎规格: "前轮3.50-10 后轮4.50-12",
          减震系统: "液压减震",
          照明系统: "LED大灯+转向灯",
          防盗系统: "GPS定位+报警器",
        },
      },
      warranty: "整车质保2年，电池质保1年，电机质保3年",
      isHot: true,
    },
    en: {
      name: "ETrike Fox Cargo Pro",
      type: "Electric Tricycle",
      category: "Cargo Series",
      price: "$1,899",
      originalPrice: "$2,199",
      rating: 4.8,
      reviews: 156,
      images: [
        "/images/cargo-pro-1.png",
        "/images/cargo-pro-2.png",
        "/images/cargo-pro-1.png",
        "/images/cargo-pro-2.png",
      ],
      description:
        "The ETrike Fox Cargo Pro is our flagship cargo electric tricycle, designed specifically for commercial transportation. Featuring a high-performance motor and large-capacity battery, it provides powerful performance and extended range. The robust body structure and optimized cargo space design make your freight business more efficient and reliable.",
      features: [
        "500kg Super Load Capacity",
        "120km Extended Range",
        "Fast Charging Technology, 6-8 hours full charge",
        "GPS Anti-theft System",
        "LED Headlight System",
        "Hydraulic Suspension System",
        "Anti-slip Cargo Platform",
        "Smart Dashboard Display",
      ],
      specifications: {
        "Basic Parameters": {
          "Vehicle Dimensions": "3200×1200×1400mm",
          "Cargo Dimensions": "1800×1200×300mm",
          "Vehicle Weight": "280kg",
          "Max Load": "500kg",
          "Top Speed": "28mph",
          "Climbing Ability": "≤15°",
        },
        "Power System": {
          "Motor Power": "1500W",
          "Motor Type": "Brushless DC Motor",
          "Battery Type": "Lithium Battery",
          "Battery Capacity": "60V32Ah",
          Range: "120km",
          "Charging Time": "6-8 hours",
        },
        "Safety Features": {
          "Braking System": "Front & Rear Drum Brakes",
          "Tire Specification": "Front 3.50-10 Rear 4.50-12",
          Suspension: "Hydraulic Suspension",
          Lighting: "LED Headlights + Turn Signals",
          "Anti-theft": "GPS Tracking + Alarm",
        },
      },
      warranty: "2-year vehicle warranty, 1-year battery warranty, 3-year motor warranty",
      isHot: true,
    },
  },
  "urban-rider": {
    zh: {
      name: "黑狐都市骑士",
      type: "两轮电动车",
      category: "个人出行",
      price: "¥8,999",
      originalPrice: "¥9,999",
      rating: 4.7,
      reviews: 203,
      images: [
        "/images/urban-rider-1.png",
        "/images/cargo-pro-1.png",
        "/images/urban-rider-1.png",
        "/images/cargo-pro-1.png",
      ],
      description:
        "黑狐都市骑士是专为城市通勤设计的智能电动车。轻量化车身、时尚外观、智能互联功能，让您在城市中自由穿行，享受便捷的出行体验。",
      features: [
        "轻量化铝合金车架",
        "80km超长续航",
        "智能APP互联",
        "GPS防盗定位",
        "快速充电技术",
        "LED智能大灯",
        "液晶仪表盘",
        "蓝牙音响系统",
      ],
      specifications: {
        基本参数: {
          车身尺寸: "1800×650×1100mm",
          整车重量: "45kg",
          最高时速: "50km/h",
          爬坡能力: "≤20°",
          制动距离: "≤4m",
          涉水深度: "300mm",
        },
        动力系统: {
          电机功率: "800W",
          电机类型: "无刷直流电机",
          电池类型: "锂电池",
          电池容量: "48V20Ah",
          续航里程: "80km",
          充电时间: "4-6小时",
        },
        智能配置: {
          显示屏: "5寸液晶仪表",
          连接方式: "蓝牙 + WiFi",
          定位系统: "GPS + 北斗",
          防盗系统: "智能报警",
          充电接口: "Type-C快充",
          音响: "蓝牙立体声",
        },
      },
      warranty: "整车质保2年，电池质保1年，电机质保3年",
      isHot: true,
    },
    en: {
      name: "ETrike Fox Urban Rider",
      type: "Electric Scooter",
      category: "Personal Mobility",
      price: "$1,299",
      originalPrice: "$1,499",
      rating: 4.7,
      reviews: 203,
      images: [
        "/images/urban-rider-1.png",
        "/images/cargo-pro-1.png",
        "/images/urban-rider-1.png",
        "/images/cargo-pro-1.png",
      ],
      description:
        "The ETrike Fox Urban Rider is a smart electric vehicle designed specifically for urban commuting. With its lightweight body, stylish appearance, and smart connectivity features, it allows you to move freely through the city and enjoy a convenient travel experience.",
      features: [
        "Lightweight Aluminum Frame",
        "80km Extended Range",
        "Smart APP Connectivity",
        "GPS Anti-theft Tracking",
        "Fast Charging Technology",
        "LED Smart Headlight",
        "LCD Dashboard",
        "Bluetooth Audio System",
      ],
      specifications: {
        "Basic Parameters": {
          "Vehicle Dimensions": "1800×650×1100mm",
          "Vehicle Weight": "45kg",
          "Top Speed": "31mph",
          "Climbing Ability": "≤20°",
          "Braking Distance": "≤4m",
          "Water Resistance": "300mm",
        },
        "Power System": {
          "Motor Power": "800W",
          "Motor Type": "Brushless DC Motor",
          "Battery Type": "Lithium Battery",
          "Battery Capacity": "48V20Ah",
          Range: "80km",
          "Charging Time": "4-6 hours",
        },
        "Smart Features": {
          Display: "5-inch LCD Dashboard",
          Connectivity: "Bluetooth + WiFi",
          "GPS System": "GPS + BeiDou",
          "Anti-theft": "Smart Alarm",
          "Charging Port": "Type-C Fast Charge",
          Audio: "Bluetooth Stereo",
        },
      },
      warranty: "2-year vehicle warranty, 1-year battery warranty, 3-year motor warranty",
      isHot: true,
    },
  },
}

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { t, locale } = useTranslation()
  const productInfo = productData[params.id as keyof typeof productData]
  const product = productInfo ? productInfo[locale] : null

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">产品未找到</h1>
          <Button asChild>
            <Link href="/products">返回产品列表</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Link href="/" className="hover:text-white">
              首页
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">
              产品中心
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button
            asChild
            variant="outline"
            className="mb-8 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
          >
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回产品列表
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={500}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600/90 text-white">{product.type}</Badge>
                  {product.isHot && <Badge className="bg-red-600/90 text-white">热销</Badge>}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      width={150}
                      height={120}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 mb-2">{product.category}</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-600"}`}
                      />
                    ))}
                    <span className="text-slate-300 ml-2">{product.rating}</span>
                  </div>
                  <span className="text-slate-400">({product.reviews} 评价)</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-3xl font-bold text-blue-400">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-slate-500 line-through text-xl">{product.originalPrice}</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">产品描述</h3>
                <p className="text-slate-300 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">核心特性</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6 border-t border-slate-700">
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    立即咨询
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    在线客服
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  预约试驾
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              <TabsTrigger value="specs" className="data-[state=active]:bg-slate-700">
                详细参数
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-slate-700">
                功能特色
              </TabsTrigger>
              <TabsTrigger value="warranty" className="data-[state=active]:bg-slate-700">
                质保服务
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-8">
              <div className="space-y-8">
                {Object.entries(product.specifications).map(([category, specs]) => (
                  <Card key={category} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-slate-700 last:border-b-0"
                          >
                            <span className="text-slate-400">{key}</span>
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">质保承诺</h4>
                        <p className="text-slate-300">{product.warranty}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// 静态导出所有产品ID页面
export async function generateStaticParams() {
  // 这里返回所有产品id的数组
  // 假设你的产品id有 ['cargo-pro', 'passenger-deluxe', 'urban-rider']
  return [
    { id: 'cargo-pro' },
    { id: 'passenger-deluxe' },
    { id: 'urban-rider' }
  ]
}
