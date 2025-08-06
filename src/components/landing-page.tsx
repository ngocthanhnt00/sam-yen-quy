'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Shield, Truck, Award, Heart, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Header from './header'
import Footer from './footer'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Component() {
  const [mockData, setMockData] = useState<any>(null)

  useEffect(() => {
    const fetchMockData = async () => {
      try {
        const response = await fetch('/mock/products.json')
        const data = await response.json()
        setMockData(data)
      } catch (error) {
        console.error('Error loading mock data:', error)
        setMockData({
          products: [],
          testimonials: [],
          features: [],
          benefits: []
        })
      }
    }

    fetchMockData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-amber-50/40" />
          <div className="container relative px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 px-4 py-2 text-sm font-medium border border-amber-200">
                    🏆 Yến sào cao cấp từ thiên nhiên
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    <span className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                      Yến Sào
                    </span>
                    <br />
                    <span className="text-gray-900">Tinh Hoa Sức Khỏe</span>
                  </h1>
                  <p className="text-base text-gray-600 max-w-[500px] leading-relaxed">
                    Khám phá sức mạnh của yến sào thiên nhiên 100% - nguồn dinh dưỡng quý giá giúp nâng cao sức khỏe,
                    làm đẹp da và tăng cường sức đề kháng tự nhiên.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-sm px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 group"
                  >
                    Mua ngay - Giảm 30%
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 text-sm px-6 py-3 bg-white/80 backdrop-blur"
                  >
                    Tìm hiểu thêm
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-white shadow-sm"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">1000+ khách hàng tin tưởng</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-gray-600 ml-1 font-medium">4.9/5</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-3xl blur-3xl opacity-40 animate-pulse" />
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl blur-xl opacity-30" />
                  <Image
                    src="/images/products/3.jpg"
                    alt="Yến sào cao cấp"
                    width={600}
                    height={700}
                    className="relative rounded-3xl shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 text-xs font-medium border border-amber-200">
                Tại sao chọn chúng tôi
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Cam kết chất lượng hàng đầu</h2>
              <p className="text-base text-gray-600 max-w-[600px] mx-auto leading-relaxed">
                Chúng tôi mang đến những sản phẩm yến sào chất lượng cao nhất với quy trình sản xuất khép kín
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">100% Thiên Nhiên</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-base">
                    Yến sào được thu hoạch từ những hang động tự nhiên, không chất bảo quản
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">Chứng Nhận Chất Lượng</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-base">Được kiểm định bởi các tổ chức uy tín, đảm bảo tiêu chuẩn xuất khẩu</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">Giao Hàng Nhanh</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-base">Giao hàng toàn quốc trong 24h, đóng gói cẩn thận, bảo quản lạnh</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">Tư Vấn Chuyên Nghiệp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-base">Đội ngũ chuyên gia dinh dưỡng tư vấn cách sử dụng hiệu quả nhất</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-12 bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-8">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 text-xs font-medium border border-amber-200">
                Sản phẩm nổi bật
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Bộ sưu tập yến sào cao cấp</h2>
            </div>

            {!mockData ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
                  <p className="text-gray-600">Đang tải sản phẩm...</p>
                </div>
              </div>
            ) : mockData.products && mockData.products.length > 0 ? (
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  className="products-swiper"
                >
                  {mockData.products.map((product: any) => (
                    <SwiperSlide key={product.id}>
                      <Card className="shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group h-[500px] flex flex-col">
                        <div className="relative h-48 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${product.badgeColor} text-white shadow text-xs px-2 py-0.5`}>
                            {product.badge}
                          </Badge>
                        </div>
                        <div className="flex flex-col flex-1 p-4 min-h-0">
                          <div className="mb-3 flex-shrink-0">
                            <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                              <Link href={`/${product.id}`}>{product.name}</Link>
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                          </div>

                          <div className="flex items-center justify-between mb-3 flex-shrink-0">
                            <span className="text-lg font-bold text-amber-600">{product.price}</span>
                            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                          </div>

                          <ul className="space-y-1 text-xs text-gray-600 mb-4 flex-1 min-h-0">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>Trọng lượng: {product.weight}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>Độ ẩm: {"<"} {product.moisture}%</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>Bảo quản: {product.storage} tháng</span>
                            </li>
                          </ul>

                          <Button className="w-full bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-sm py-2.5 flex-shrink-0">
                            Thêm vào giỏ
                          </Button>
                        </div>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10"></div>
                <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10"></div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Không có sản phẩm</h3>
                  <p className="text-gray-600">Vui lòng thử lại sau</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 text-sm font-medium border border-amber-200">
                    Lợi ích sức khỏe
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                    Tại sao yến sào là
                    <span className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                      {" "}
                      siêu thực phẩm
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Yến sào chứa hàng trăm chất dinh dưỡng quý giá, được khoa học chứng minh có tác dụng tuyệt vời cho
                    sức khỏe
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex gap-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Làm đẹp da từ bên trong</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Collagen và acid amin trong yến sào giúp da mịn màng, săn chắc và chống lão hóa hiệu quả
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Tăng cường sức đề kháng</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Protein và khoáng chất giúp tăng cường hệ miễn dịch, chống lại bệnh tật và mệt mỏi
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Bổ phổi, dưỡng thận</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Theo Đông y, yến sào có tác dụng bổ phổi, dưỡng thận, tăng cường sinh lực
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-3xl blur-3xl opacity-30" />
                <Image
                  src="/images/products/3.jpg"
                  alt="Lợi ích yến sào"
                  width={600}
                  height={700}
                  className="relative rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 text-sm font-medium border border-amber-200">
                Khách hàng nói gì
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Hàng nghìn khách hàng hài lòng
              </h2>
            </div>

            {!mockData ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
                  <p className="text-gray-600">Đang tải đánh giá...</p>
                </div>
              </div>
            ) : mockData.testimonials && mockData.testimonials.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockData.testimonials.map((testimonial: any) => (
                  <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {testimonial.comment}
                      </p>
                      <div className="flex items-center gap-3">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                        <div>
                          <p className="font-bold text-base">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Không có đánh giá</h3>
                  <p className="text-gray-600">Vui lòng thử lại sau</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20" />
          <div className="container relative px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8 text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Đặt hàng ngay hôm nay</h2>
              <p className="text-lg opacity-90 max-w-[500px] mx-auto leading-relaxed">
                Nhận ngay ưu đãi 30% cho đơn hàng đầu tiên. Miễn phí giao hàng toàn quốc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                <Input placeholder="Nhập số điện thoại của bạn" className="max-w-sm bg-white/90 text-gray-900 border-0 shadow-md text-base py-4" />
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-base font-medium shadow-md hover:shadow-lg transition-all duration-200">
                  Nhận tư vấn miễn phí
                </Button>
              </div>
              <p className="text-sm opacity-75">* Cam kết không spam. Thông tin của bạn được bảo mật tuyệt đối.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
