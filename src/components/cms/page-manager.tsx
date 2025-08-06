"use client"

import { useState, useId } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Page {
  id: string
  title: string
  slug: string
  content: string
  template: string
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }
  thumbnail: string
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
}

const templates = [
  { id: "default", name: "Mặc định", description: "Template cơ bản" },
  { id: "landing", name: "Landing Page", description: "Trang đích" },
  { id: "blog", name: "Blog Post", description: "Bài viết blog" },
  { id: "product", name: "Product", description: "Trang sản phẩm" },
]

export function PageManager() {
  const [pages, setPages] = useState<Page[]>([
    {
      id: "1",
      title: "Trang chủ",
      slug: "home",
      content: "<h1>Chào mừng đến với Yen Sao</h1>",
      template: "landing",
      seo: {
        title: "Yen Sao - Trang chủ",
        description: "Khám phá các sản phẩm chất lượng cao",
        keywords: ["yen sao", "sản phẩm", "chất lượng"],
        ogImage: "/images/og-home.jpg"
      },
      thumbnail: "/images/products/1.jpg",
      status: "published",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01"
    }
  ])

  const [selectedPage, setSelectedPage] = useState<Page | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [pageCounter, setPageCounter] = useState(2) // Start from 2 since we have 1 existing page
  const idGenerator = useId()

  const handleCreatePage = () => {
    const newPage: Page = {
      id: `page-${idGenerator}-${pageCounter}`,
      title: "",
      slug: "",
      content: "",
      template: "default",
      seo: {
        title: "",
        description: "",
        keywords: [],
        ogImage: ""
      },
      thumbnail: "",
      status: "draft",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setSelectedPage(newPage)
    setIsEditing(true)
    setPageCounter(prev => prev + 1)
  }

  const handleSavePage = () => {
    if (!selectedPage) return

    if (isEditing) {
      setPages(pages.map(p => p.id === selectedPage.id ? selectedPage : p))
    } else {
      setPages([...pages, selectedPage])
    }
    setIsEditing(false)
    setSelectedPage(null)
  }

  return (
    <div className="flex h-full">
      {/* Sidebar - Page List */}
      <div className="w-80 border-r bg-gray-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Trang tĩnh</h2>
          <Button onClick={handleCreatePage} size="sm">
            + Tạo trang
          </Button>
        </div>

        <div className="space-y-2">
          {pages.map((page) => (
            <Card
              key={page.id}
              className={`p-3 cursor-pointer hover:bg-gray-100 ${
                selectedPage?.id === page.id ? "bg-blue-50 border-blue-200" : ""
              }`}
              onClick={() => setSelectedPage(page)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{page.title}</h3>
                  <p className="text-xs text-gray-500">/{page.slug}</p>
                </div>
                <Badge variant={page.status === "published" ? "default" : "secondary"}>
                  {page.status === "published" ? "Đã xuất bản" : "Bản nháp"}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selectedPage ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {isEditing ? "Chỉnh sửa trang" : selectedPage.title}
              </h1>
              <div className="space-x-2">
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)}>
                    Chỉnh sửa
                  </Button>
                )}
                {isEditing && (
                  <>
                    <Button onClick={handleSavePage}>
                      Lưu
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Hủy
                    </Button>
                  </>
                )}
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-6">
                {/* Basic Info */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Thông tin cơ bản</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tiêu đề</label>
                      <Input
                        value={selectedPage.title}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          title: e.target.value
                        })}
                        placeholder="Nhập tiêu đề trang"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Slug</label>
                      <Input
                        value={selectedPage.slug}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          slug: e.target.value
                        })}
                        placeholder="ten-trang"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Template</label>
                      <select
                        value={selectedPage.template}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          template: e.target.value
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        {templates.map((template) => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Trạng thái</label>
                      <select
                        value={selectedPage.status}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          status: e.target.value as "draft" | "published"
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="draft">Bản nháp</option>
                        <option value="published">Đã xuất bản</option>
                      </select>
                    </div>
                  </div>
                </Card>

                {/* Thumbnail */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Thumbnail</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">URL ảnh</label>
                      <Input
                        value={selectedPage.thumbnail}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          thumbnail: e.target.value
                        })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    {selectedPage.thumbnail && (
                      <div className="w-32 h-32 border rounded-lg overflow-hidden">
                        <img
                          src={selectedPage.thumbnail}
                          alt="Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </Card>

                {/* SEO */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">SEO</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Title</label>
                      <Input
                        value={selectedPage.seo.title}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          seo: { ...selectedPage.seo, title: e.target.value }
                        })}
                        placeholder="Tiêu đề SEO"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Description</label>
                      <textarea
                        value={selectedPage.seo.description}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          seo: { ...selectedPage.seo, description: e.target.value }
                        })}
                        placeholder="Mô tả SEO"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Keywords</label>
                      <Input
                        value={selectedPage.seo.keywords.join(", ")}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          seo: { 
                            ...selectedPage.seo, 
                            keywords: e.target.value.split(", ").filter(k => k.trim())
                          }
                        })}
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">OG Image</label>
                      <Input
                        value={selectedPage.seo.ogImage}
                        onChange={(e) => setSelectedPage({
                          ...selectedPage,
                          seo: { ...selectedPage.seo, ogImage: e.target.value }
                        })}
                        placeholder="https://example.com/og-image.jpg"
                      />
                    </div>
                  </div>
                </Card>

                {/* Content */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Nội dung</h3>
                  <textarea
                    value={selectedPage.content}
                    onChange={(e) => setSelectedPage({
                      ...selectedPage,
                      content: e.target.value
                    })}
                    placeholder="Nhập nội dung HTML..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={10}
                  />
                </Card>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Page Info */}
                <Card className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Thông tin trang</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tiêu đề:</strong> {selectedPage.title}</p>
                        <p><strong>Slug:</strong> /{selectedPage.slug}</p>
                        <p><strong>Template:</strong> {templates.find(t => t.id === selectedPage.template)?.name}</p>
                        <p><strong>Trạng thái:</strong> 
                          <Badge className="ml-2" variant={selectedPage.status === "published" ? "default" : "secondary"}>
                            {selectedPage.status === "published" ? "Đã xuất bản" : "Bản nháp"}
                          </Badge>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">SEO</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Meta Title:</strong> {selectedPage.seo.title}</p>
                        <p><strong>Meta Description:</strong> {selectedPage.seo.description}</p>
                        <p><strong>Keywords:</strong> {selectedPage.seo.keywords.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Thumbnail Preview */}
                {selectedPage.thumbnail && (
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Thumbnail</h3>
                    <div className="w-48 h-32 border rounded-lg overflow-hidden">
                      <img
                        src={selectedPage.thumbnail}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                )}

                {/* Content Preview */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Nội dung</h3>
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPage.content }}
                  />
                </Card>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              Chọn một trang để xem chi tiết
            </h2>
            <p className="text-gray-500">
              Hoặc tạo trang mới để bắt đầu
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 