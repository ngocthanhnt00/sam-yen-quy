import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CMSPage() {
  const stats = [
    { title: "Tổng số trang", value: "12", change: "+2", changeType: "positive" },
    { title: "Templates", value: "8", change: "+1", changeType: "positive" },
    { title: "Media files", value: "45", change: "+5", changeType: "positive" },
    { title: "SEO score", value: "92%", change: "+3%", changeType: "positive" },
  ]

  const recentPages = [
    { title: "Trang chủ", status: "published", updatedAt: "2 giờ trước" },
    { title: "Về chúng tôi", status: "draft", updatedAt: "1 ngày trước" },
    { title: "Liên hệ", status: "published", updatedAt: "3 ngày trước" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Quản lý nội dung và trang tĩnh</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === "positive" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Pages */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Trang gần đây</h2>
        <div className="space-y-3">
          {recentPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <h3 className="font-medium">{page.title}</h3>
                <p className="text-sm text-gray-500">Cập nhật {page.updatedAt}</p>
              </div>
              <Badge variant={page.status === "published" ? "default" : "secondary"}>
                {page.status === "published" ? "Đã xuất bản" : "Bản nháp"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-3xl mb-2">📄</div>
            <h3 className="font-semibold mb-2">Tạo trang mới</h3>
            <p className="text-sm text-gray-600">Tạo trang tĩnh với template</p>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold mb-2">Tạo template</h3>
            <p className="text-sm text-gray-600">Thiết kế template mới</p>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold mb-2">SEO Analysis</h3>
            <p className="text-sm text-gray-600">Phân tích SEO</p>
          </div>
        </Card>
      </div>
    </div>
  )
}