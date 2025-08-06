'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cài đặt</h1>
        <p className="text-gray-600 mt-2">Quản lý cài đặt hệ thống</p>
      </div>

      {/* General Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Cài đặt chung</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Tên website</label>
            <Input defaultValue="Yen Sao" placeholder="Tên website" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">URL website</label>
            <Input defaultValue="https://yensao.com" placeholder="https://example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email liên hệ</label>
            <Input defaultValue="contact@yensao.com" placeholder="contact@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Ngôn ngữ</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <Button>Lưu cài đặt</Button>
        </div>
      </Card>

      {/* User Management */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Quản lý người dùng</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h3 className="font-medium">Admin User</h3>
              <p className="text-sm text-gray-500">admin@yensao.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="default">Admin</Badge>
              <Button size="sm" variant="outline">
                Sửa
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h3 className="font-medium">Editor User</h3>
              <p className="text-sm text-gray-500">editor@yensao.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Editor</Badge>
              <Button size="sm" variant="outline">
                Sửa
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button variant="outline">+ Thêm người dùng</Button>
        </div>
      </Card>

      {/* Backup & Restore */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Sao lưu & Khôi phục</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h3 className="font-medium">Backup tự động</h3>
              <p className="text-sm text-gray-500">Hàng ngày lúc 2:00 AM</p>
            </div>
            <Badge variant="default">Active</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h3 className="font-medium">Backup cuối cùng</h3>
              <p className="text-sm text-gray-500">2024-01-15 02:00 AM</p>
            </div>
            <Button size="sm" variant="outline">
              Tải về
            </Button>
          </div>
        </div>
        <div className="mt-4 space-x-2">
          <Button>Tạo backup</Button>
          <Button variant="outline">Khôi phục</Button>
        </div>
      </Card>

      {/* System Info */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Thông tin hệ thống</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-sm text-gray-600">Phiên bản CMS</h3>
            <p className="text-lg font-semibold">v1.0.0</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-600">Next.js</h3>
            <p className="text-lg font-semibold">v14.0.0</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-600">React</h3>
            <p className="text-lg font-semibold">v18.0.0</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-600">TypeScript</h3>
            <p className="text-lg font-semibold">v5.0.0</p>
          </div>
        </div>
      </Card>

      {/* Advanced Settings */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Cài đặt nâng cao</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Debug mode</h3>
              <p className="text-sm text-gray-500">Bật chế độ debug</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Cache</h3>
              <p className="text-sm text-gray-500">Bật cache để tăng tốc độ</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Maintenance mode</h3>
              <p className="text-sm text-gray-500">Bật chế độ bảo trì</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200 bg-red-50">
        <h2 className="text-lg font-semibold mb-4 text-red-800">Khu vực nguy hiểm</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-red-800">Xóa tất cả dữ liệu</h3>
            <p className="text-sm text-red-600 mb-2">
              Hành động này sẽ xóa tất cả dữ liệu và không thể khôi phục
            </p>
            <Button variant="destructive">Xóa tất cả</Button>
          </div>
          <div>
            <h3 className="font-medium text-red-800">Reset cài đặt</h3>
            <p className="text-sm text-red-600 mb-2">
              Đặt lại tất cả cài đặt về mặc định
            </p>
            <Button variant="destructive">Reset</Button>
          </div>
        </div>
      </Card>
    </div>
  )
} 