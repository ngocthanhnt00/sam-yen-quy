"use client"

import { useState, useId } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Template {
  id: string
  name: string
  description: string
  category: string
  html: string
  css: string
  js: string
  variables: string[]
  thumbnail: string
  isActive: boolean
}

const templateCategories = [
  "Landing Page",
  "Blog",
  "Product",
  "Contact",
  "About",
  "Pricing"
]

export function TemplateManager() {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: "1",
      name: "Landing Page Basic",
      description: "Template landing page cơ bản với hero section",
      category: "Landing Page",
      html: `<div class="hero">
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <button>{{cta_text}}</button>
</div>`,
      css: `.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}`,
      js: `// Template JavaScript
console.log('Template loaded');`,
      variables: ["title", "description", "cta_text"],
      thumbnail: "/images/products/1.jpg",
      isActive: true
    },
    {
      id: "2",
      name: "Blog Post",
      description: "Template cho bài viết blog",
      category: "Blog",
      html: `<article class="blog-post">
  <header>
    <h1>{{post_title}}</h1>
    <div class="meta">
      <span>{{author}}</span>
      <span>{{date}}</span>
    </div>
  </header>
  <div class="content">
    {{content}}
  </div>
</article>`,
      css: `.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.blog-post header {
  margin-bottom: 2rem;
}

.blog-post h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.meta {
  color: #666;
  font-size: 0.9rem;
}

.meta span:not(:last-child)::after {
  content: " • ";
}`,
      js: `// Blog template JavaScript`,
      variables: ["post_title", "author", "date", "content"],
      thumbnail: "/images/products/2.jpg",
      isActive: true
    }
  ])

  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js" | "preview">("html")
  const [templateCounter, setTemplateCounter] = useState(3) // Start from 3 since we have 2 existing templates
  const idGenerator = useId()

  const handleCreateTemplate = () => {
    const newTemplate: Template = {
      id: `template-${idGenerator}-${templateCounter}`,
      name: "",
      description: "",
      category: "Landing Page",
      html: "",
      css: "",
      js: "",
      variables: [],
      thumbnail: "",
      isActive: true
    }
    setSelectedTemplate(newTemplate)
    setIsEditing(true)
    setTemplateCounter(prev => prev + 1)
  }

  const handleSaveTemplate = () => {
    if (!selectedTemplate) return

    if (isEditing) {
      setTemplates(templates.map(t => t.id === selectedTemplate.id ? selectedTemplate : t))
    } else {
      setTemplates([...templates, selectedTemplate])
    }
    setIsEditing(false)
    setSelectedTemplate(null)
  }

  const generatePreview = (template: Template) => {
    let html = template.html
    template.variables.forEach(variable => {
      html = html.replace(new RegExp(`{{${variable}}}`, 'g'), `[${variable}]`)
    })
    return html
  }

  return (
    <div className="flex h-full">
      {/* Sidebar - Template List */}
      <div className="w-80 border-r bg-gray-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Templates</h2>
          <Button onClick={handleCreateTemplate} size="sm">
            + Tạo template
          </Button>
        </div>

        <div className="space-y-2">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`p-3 cursor-pointer hover:bg-gray-100 ${
                selectedTemplate?.id === template.id ? "bg-blue-50 border-blue-200" : ""
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-sm">{template.name}</h3>
                <Badge variant={template.isActive ? "default" : "secondary"}>
                  {template.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mb-2">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {template.category}
                </span>
                <span className="text-xs text-gray-500">
                  {template.variables.length} vars
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selectedTemplate ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {isEditing ? "Chỉnh sửa template" : selectedTemplate.name}
              </h1>
              <div className="space-x-2">
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)}>
                    Chỉnh sửa
                  </Button>
                )}
                {isEditing && (
                  <>
                    <Button onClick={handleSaveTemplate}>
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
                  <h3 className="text-lg font-semibold mb-4">Thông tin template</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tên template</label>
                      <Input
                        value={selectedTemplate.name}
                        onChange={(e) => setSelectedTemplate({
                          ...selectedTemplate,
                          name: e.target.value
                        })}
                        placeholder="Tên template"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Danh mục</label>
                      <select
                        value={selectedTemplate.category}
                        onChange={(e) => setSelectedTemplate({
                          ...selectedTemplate,
                          category: e.target.value
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        {templateCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium mb-2">Mô tả</label>
                      <textarea
                        value={selectedTemplate.description}
                        onChange={(e) => setSelectedTemplate({
                          ...selectedTemplate,
                          description: e.target.value
                        })}
                        placeholder="Mô tả template"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Variables</label>
                      <Input
                        value={selectedTemplate.variables.join(", ")}
                        onChange={(e) => setSelectedTemplate({
                          ...selectedTemplate,
                          variables: e.target.value.split(", ").filter(v => v.trim())
                        })}
                        placeholder="var1, var2, var3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
                      <Input
                        value={selectedTemplate.thumbnail}
                        onChange={(e) => setSelectedTemplate({
                          ...selectedTemplate,
                          thumbnail: e.target.value
                        })}
                        placeholder="https://example.com/thumbnail.jpg"
                      />
                    </div>
                  </div>
                </Card>

                {/* Code Editor */}
                <Card className="p-6">
                  <div className="flex space-x-2 mb-4">
                    <Button
                      variant={activeTab === "html" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("html")}
                    >
                      HTML
                    </Button>
                    <Button
                      variant={activeTab === "css" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("css")}
                    >
                      CSS
                    </Button>
                    <Button
                      variant={activeTab === "js" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("js")}
                    >
                      JavaScript
                    </Button>
                    <Button
                      variant={activeTab === "preview" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("preview")}
                    >
                      Preview
                    </Button>
                  </div>

                  {activeTab === "html" && (
                    <textarea
                      value={selectedTemplate.html}
                      onChange={(e) => setSelectedTemplate({
                        ...selectedTemplate,
                        html: e.target.value
                      })}
                      placeholder="HTML code..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm"
                      rows={15}
                    />
                  )}

                  {activeTab === "css" && (
                    <textarea
                      value={selectedTemplate.css}
                      onChange={(e) => setSelectedTemplate({
                        ...selectedTemplate,
                        css: e.target.value
                      })}
                      placeholder="CSS code..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm"
                      rows={15}
                    />
                  )}

                  {activeTab === "js" && (
                    <textarea
                      value={selectedTemplate.js}
                      onChange={(e) => setSelectedTemplate({
                        ...selectedTemplate,
                        js: e.target.value
                      })}
                      placeholder="JavaScript code..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm"
                      rows={15}
                    />
                  )}

                  {activeTab === "preview" && (
                    <div className="border rounded-lg p-4 bg-white">
                      <style dangerouslySetInnerHTML={{ __html: selectedTemplate.css }} />
                      <div dangerouslySetInnerHTML={{ __html: generatePreview(selectedTemplate) }} />
                    </div>
                  )}
                </Card>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Template Info */}
                <Card className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Thông tin template</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tên:</strong> {selectedTemplate.name}</p>
                        <p><strong>Danh mục:</strong> {selectedTemplate.category}</p>
                        <p><strong>Mô tả:</strong> {selectedTemplate.description}</p>
                        <p><strong>Variables:</strong> {selectedTemplate.variables.join(", ")}</p>
                        <p><strong>Trạng thái:</strong> 
                          <Badge className="ml-2" variant={selectedTemplate.isActive ? "default" : "secondary"}>
                            {selectedTemplate.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Thumbnail</h3>
                      {selectedTemplate.thumbnail && (
                        <div className="w-48 h-32 border rounded-lg overflow-hidden">
                          <img
                            src={selectedTemplate.thumbnail}
                            alt="Template thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Code Preview */}
                <Card className="p-6">
                  <div className="flex space-x-2 mb-4">
                    <Button
                      variant={activeTab === "html" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("html")}
                    >
                      HTML
                    </Button>
                    <Button
                      variant={activeTab === "css" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("css")}
                    >
                      CSS
                    </Button>
                    <Button
                      variant={activeTab === "js" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("js")}
                    >
                      JavaScript
                    </Button>
                    <Button
                      variant={activeTab === "preview" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("preview")}
                    >
                      Preview
                    </Button>
                  </div>

                  {activeTab === "html" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedTemplate.html}</code>
                    </pre>
                  )}

                  {activeTab === "css" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedTemplate.css}</code>
                    </pre>
                  )}

                  {activeTab === "js" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedTemplate.js}</code>
                    </pre>
                  )}

                  {activeTab === "preview" && (
                    <div className="border rounded-lg p-4 bg-white">
                      <style dangerouslySetInnerHTML={{ __html: selectedTemplate.css }} />
                      <div dangerouslySetInnerHTML={{ __html: generatePreview(selectedTemplate) }} />
                    </div>
                  )}
                </Card>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              Chọn một template để xem chi tiết
            </h2>
            <p className="text-gray-500">
              Hoặc tạo template mới để bắt đầu
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 