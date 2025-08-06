import { Sparkles, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">Sâm Yến Quý</span>
            </div>
            <p className="text-gray-400 leading-relaxed">Chuyên cung cấp yến sào cao cấp, chất lượng hàng đầu Việt Nam</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <span className="text-sm font-bold">yt</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Sản phẩm</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Yến sào nguyên tổ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Yến sào chưng sẵn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Bột yến sào
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Combo gia đình
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Hỗ trợ</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  Bảo hành
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Liên hệ</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="font-medium">0123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="font-medium">info@goldennest.vn</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="font-medium">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sâm Yến Quý. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
} 