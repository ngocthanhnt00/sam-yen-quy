'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SEOPage() {
  const seoData = {
    siteTitle: "Yen Sao",
    siteDescription: "Khám phá các sản phẩm chất lượng cao",
    keywords: ["yen sao", "sản phẩm", "chất lượng", "thương hiệu"],
    googleAnalytics: "GA-XXXXXXXXX",
    facebookPixel: "XXXXXXXXX",
    ogImage: "/images/og-default.jpg"
  }

  const seoScore = 92
  const issues = [
    { type: "warning", message: "Meta description quá ngắn", page: "Trang chủ" },
    { type: "error", message: "Thiếu alt text cho ảnh", page: "Sản phẩm" },
    { type: "info", message: "Có thể tối ưu hóa title", page: "Về chúng tôi" }
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
        <p className="text-gray-600 mt-2">Quản lý SEO và tối ưu hóa website</p>
      </div>

      {/* SEO Score */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">SEO Score</h2>
          <Badge variant="default" className="text-lg px-3 py-1">
            {seoScore}/100
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-green-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${seoScore}%` }}
          ></div>
        </div>
      </Card>

      {/* Global SEO Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Cài đặt SEO toàn cục</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Site Title</label>
            <Input defaultValue={seoData.siteTitle} placeholder="Tên website" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Site Description</label>
            <Input defaultValue={seoData.siteDescription} placeholder="Mô tả website" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Keywords</label>
            <Input defaultValue={seoData.keywords.join(", ")} placeholder="keyword1, keyword2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Google Analytics</label>
            <Input defaultValue={seoData.googleAnalytics} placeholder="GA-XXXXXXXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Facebook Pixel</label>
            <Input defaultValue={seoData.facebookPixel} placeholder="XXXXXXXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Default OG Image</label>
            <Input defaultValue={seoData.ogImage} placeholder="/images/og-default.jpg" />
          </div>
        </div>
        <div className="mt-4">
          <Button>Lưu cài đặt</Button>
        </div>
      </Card>

      {/* SEO Issues */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Vấn đề SEO</h2>
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  issue.type === "error" ? "bg-red-500" :
                  issue.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                }`}></div>
                <div>
                  <p className="font-medium">{issue.message}</p>
                  <p className="text-sm text-gray-500">Trang: {issue.page}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Sửa
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* SEO Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Công cụ SEO</h3>
          <div className="space-y-3">
            <Button className="w-full justify-start">
              🔍 Phân tích từ khóa
            </Button>
            <Button className="w-full justify-start">
              📊 Báo cáo SEO
            </Button>
            <Button className="w-full justify-start">
              🚀 Tối ưu hóa tốc độ
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Sitemap</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">XML Sitemap</span>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">HTML Sitemap</span>
              <Badge variant="secondary">Inactive</Badge>
            </div>
            <Button className="w-full" size="sm">
              Tạo sitemap mới
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
} 