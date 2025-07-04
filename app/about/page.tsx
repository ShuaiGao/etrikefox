"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Factory, Users, Award, Globe, Target, Heart, Lightbulb, Shield, Phone, Mail, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/hooks/use-translation"

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">{t.about.hero.badge}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t.about.hero.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {t.about.hero.subtitle}
                </span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">{t.about.hero.description}</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-3xl" />
              <Image
                src="/images/factory-1.png"
                alt={t.locale === "zh" ? "黑狐工厂" : "ETrike Fox Factory"}
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Factory className="w-8 h-8" />, value: t.about.stats[0].value, label: t.about.stats[0].label },
              { icon: <Users className="w-8 h-8" />, value: t.about.stats[1].value, label: t.about.stats[1].label },
              { icon: <Award className="w-8 h-8" />, value: t.about.stats[2].value, label: t.about.stats[2].label },
              { icon: <Globe className="w-8 h-8" />, value: t.about.stats[3].value, label: t.about.stats[3].label },
            ].map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.about.story.title}</h2>
              <p className="text-slate-400 text-lg">{t.about.story.subtitle}</p>
            </div>

            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">{t.about.story.founding.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{t.about.story.founding.content1}</p>
                  <p className="text-slate-300 leading-relaxed">{t.about.story.founding.content2}</p>
                </div>
                <div className="relative">
                  <Image
                    src="/images/factory-1.png"
                    alt={t.locale === "zh" ? "公司历史" : "Company History"}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-first">
                  <Image
                    src="/images/workshop-1.png"
                    alt={t.locale === "zh" ? "生产车间" : "Production Workshop"}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">{t.about.story.innovation.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{t.about.story.innovation.content1}</p>
                  <p className="text-slate-300 leading-relaxed">{t.about.story.innovation.content2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.about.values.title}</h2>
            <p className="text-slate-400 text-lg">{t.about.values.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: t.about.values.items[0].title,
                description: t.about.values.items[0].description,
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: t.about.values.items[1].title,
                description: t.about.values.items[1].description,
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: t.about.values.items[2].title,
                description: t.about.values.items[2].description,
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: t.about.values.items[3].title,
                description: t.about.values.items[3].description,
              },
            ].map((value, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.about.team.title}</h2>
            <p className="text-slate-400 text-lg">{t.about.team.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.team.members.map((member, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-colors"
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.about.contact.title}</h2>
              <p className="text-slate-300 text-lg">{t.about.contact.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{t.about.contact.phone.title}</h3>
                  <p className="text-slate-300">{t.about.contact.phone.number}</p>
                  <p className="text-slate-400 text-sm mt-1">{t.about.contact.phone.hours}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{t.about.contact.email.title}</h3>
                  <p className="text-slate-300">{t.about.contact.email.address}</p>
                  <p className="text-slate-400 text-sm mt-1">{t.about.contact.email.availability}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{t.about.contact.address.title}</h3>
                  <p className="text-slate-300">{t.about.contact.address.location}</p>
                  <p className="text-slate-400 text-sm mt-1">{t.about.contact.address.detail}</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {t.about.contact.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
