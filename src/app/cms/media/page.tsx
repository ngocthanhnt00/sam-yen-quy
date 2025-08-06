'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function MediaPage() {
  const mediaFiles = [
    {
      id: "1",
      name: "product-1.jpg",
      type: "image",
      size: "2.3 MB",
      url: "/images/products/1.jpg",
      uploadedAt: "2 giờ trước",
      alt: "Sản phẩm 1"
    },
    {
      id: "2", 
      name: "product-2.jpg",
      type: "image",
      size: "1.8 MB",
      url: "/images/products/2.jpg",
      uploadedAt: "1 ngày trước",
      alt: "Sản phẩm 2"
    },
    {
      id: "3",
      name: "banner-hero.jpg",
      type: "image", 
      size: "3.1 MB",
      url: "/images/products/3.jpg",
      uploadedAt: "3 ngày trước",
      alt: "Banner chính"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600 mt-2">Quản lý hình ảnh và file media</p>
        </div>
        <Button>
          + Upload Media
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">📁</div>
          <h3 className="text-lg font-semibold mb-2">Upload files</h3>
          <p className="text-gray-600 mb-4">
            Kéo thả file vào đây hoặc click để chọn file
          </p>
          <Button variant="outline">
            Chọn file
          </Button>
        </div>
      </Card>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <Input placeholder="Tìm kiếm media..." className="w-64" />
        <select className="px-3 py-2 border border-gray-300 rounded-md">
          <option value="">Tất cả loại</option>
          <option value="image">Hình ảnh</option>
          <option value="video">Video</option>
          <option value="document">Tài liệu</option>
        </select>
        <Button variant="outline">
          Lọc
        </Button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaFiles.map((file) => (
          <Card key={file.id} className="overflow-hidden">
            <div className="aspect-square bg-gray-100 relative group">
              <img
                src={file.url}
                alt={file.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="space-x-2">
                  <Button size="sm" variant="secondary">
                    Sửa
                  </Button>
                  <Button size="sm" variant="destructive">
                    Xóa
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm truncate">{file.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{file.size}</span>
                <Badge variant="secondary" className="text-xs">
                  {file.type}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mt-1">{file.uploadedAt}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Media Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">45</div>
            <p className="text-sm text-gray-600">Tổng số file</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">128 MB</div>
            <p className="text-sm text-gray-600">Dung lượng đã sử dụng</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-sm text-gray-600">File được sử dụng</p>
          </div>
        </Card>
      </div>
    </div>
  )
} 