"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-50 via-white to-red-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Hakkımızda</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü bir şirkettir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold gradient-text">Tuna Group Hakkında</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Dünya markalarının distribütörlüğünü yürütürken, kendi üretimiyle yenilikçi ve sürdürülebilir çözümler sunmaktadır.</p>
                <p>Sağlık teknolojilerinde ISO 13485:2016 standartlarında üretim yapan ve EU MDR kapsamında CE sertifikalı ürünler geliştiren Tuna Group, ulusal ve uluslararası pazarlarda güvenle tercih edilmektedir.</p>
                <p>Ambalaj ve çuval üretimini bünyesine katarak endüstriyel çözümler alanında da güçlü bir yapıya kavuşmuştur. Çevre dostu ve dayanıklı ürünleri birçok sektör tarafından kullanılmaktadır.</p>
                <p>Uzman ekibi, büyüyen üretim kapasitesi ve güçlü iş ortaklıklarıyla Tuna Group; sağlık teknolojilerinden endüstriyel ambalaja uzanan geniş bir alanda değer üretmeye devam etmektedir.</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/corporate-building.jpeg" alt="Tuna Group Kurumsal Merkez" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Misyonumuz</h3>
              <p className="text-muted-foreground">
                Sağlık teknolojileri ve endüstriyel üretim alanlarında, uluslararası kalite standartlarına uygun, güvenilir ve yenilikçi çözümler sunmak; sürdürülebilir üretim gücümüz, yetkin insan kaynağımız ve teknoloji odaklı yaklaşımımızla müşterilerimize sürekli değer yaratmak.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Vizyonumuz</h3>
              <p className="text-muted-foreground">
                Sağlık teknolojileri ve endüstriyel üretim alanlarında, yenilikçi yaklaşımı ve sürdürülebilir üretim gücüyle bölgesel liderliği aşarak küresel ölçekte güven veren ve tercih edilen bir grup şirketi olmak; teknolojiyi, kaliteyi ve insan odaklı yönetimi bir araya getirerek sektörlere yön veren çözümler geliştirmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Removed "Ürün Kataloğu" button */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-red-900 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-red-600/20 blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-navy-600/20 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">İhtiyacınıza Özel Çuval Çözümleri</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Detaylı bilgi ve iş birliği için bizimle iletişime geçin.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-navy-900 hover:bg-white/90 button-3d"
              >
                <Link href="/iletisim">Teklif Alın</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">Adres</p>
                      <p className="text-muted-foreground">
                        Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8,
                        <br />
                        Şehitkamil / Gaziantep
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">Telefon</p>
                      <p className="text-muted-foreground">+90 342 360 58 58</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">E-posta</p>
                      <p className="text-muted-foreground">info@tunasentetik.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                <h4 className="text-lg font-semibold gradient-text mb-4">Çalışma Saatleri</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazartesi - Cuma:</span>
                    <span className="font-medium">08:30 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumartesi:</span>
                    <span className="font-medium">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazar:</span>
                    <span className="font-medium">Kapalı</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}