import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchX, Home, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full shadow-xl border-0 bg-white/95 backdrop-blur">
        <CardHeader className="text-center pb-6">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <SearchX className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-6xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
              404
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Trang không tồn tại
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-3">
            <p className="text-gray-600 leading-relaxed">
              Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. 
              Trang có thể đã bị di chuyển hoặc không còn tồn tại.
            </p>
            <p className="text-sm text-gray-500">
              Hãy kiểm tra lại đường dẫn hoặc quay về trang chủ để khám phá các sản phẩm yến sào cao cấp của chúng tôi.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 flex-1 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Quay lại
            </Button>
            <Button
              asChild
              className="bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 flex-1 group"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Về trang chủ
              </Link>
            </Button>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-3">Trang phổ biến:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                href="/#products" 
                className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-amber-200 transition-colors"
              >
                Sản phẩm
              </Link>
              <Link 
                href="/#benefits" 
                className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-amber-200 transition-colors"
              >
                Lợi ích
              </Link>
              <Link 
                href="/#testimonials" 
                className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-amber-200 transition-colors"
              >
                Đánh giá
              </Link>
              <Link 
                href="/#contact" 
                className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-amber-200 transition-colors"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-xs text-gray-500">
              Cần hỗ trợ? Gọi:{" "}
              <a 
                href="tel:0123456789" 
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                0123 456 789
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}