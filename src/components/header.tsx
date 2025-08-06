import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Sâm Yến Quý
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#products" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-amber-50">
            Sản phẩm
          </Link>
          <Link href="#benefits" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-amber-50">
            Lợi ích
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-amber-50">
            Đánh giá
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-amber-50">
            Liên hệ
          </Link>
        </nav>
        <Button className="bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-200 px-6 py-2 text-sm font-medium">
          Đặt hàng ngay
        </Button>
      </div>
    </header>
  )
} 