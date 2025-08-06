"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Card } from "./card"

interface SidebarProps {
  className?: string
  onCollapseChange?: (collapsed: boolean) => void
}

interface MenuItem {
  id: string
  title: string
  icon: string
  href: string
  badge?: string
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "📊",
    href: "/cms"
  },
  {
    id: "pages",
    title: "Trang tĩnh",
    icon: "📄",
    href: "/cms/pages"
  },
  {
    id: "templates",
    title: "Templates",
    icon: "🎨",
    href: "/cms/templates"
  },
  {
    id: "seo",
    title: "SEO",
    icon: "🔍",
    href: "/cms/seo"
  },
  {
    id: "media",
    title: "Media",
    icon: "🖼️",
    href: "/cms/media"
  },
  {
    id: "settings",
    title: "Cài đặt",
    icon: "⚙️",
    href: "/cms/settings"
  }
]

export function Sidebar({ className, onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleCollapse = () => {
    const newCollapsed = !collapsed
    setCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  // Ensure consistent className between server and client
  const sidebarClassName = mounted 
    ? cn("flex flex-col h-screen bg-gray-50 border-r transition-all duration-300", 
         collapsed ? "w-16" : "w-64", 
         className)
    : cn("flex flex-col h-screen bg-gray-50 border-r w-64", className)

  return (
    <div className={sidebarClassName}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className={cn("flex items-center", mounted && collapsed ? "justify-center" : "justify-between", "w-full")}>
          {(!mounted || !collapsed) && (
            <h1 className="text-xl font-bold text-gray-800">CMS</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleCollapse}
            className="h-8 w-8 p-0"
          >
            {mounted && collapsed ? "→" : "←"}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-gray-100 hover:text-gray-900",
              "text-gray-600"
            )}
            title={mounted && collapsed ? item.title : undefined}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            {(!mounted || !collapsed) && (
              <>
                <span className="flex-1">{item.title}</span>
                {item.badge && (
                  <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </a>
        ))}
      </nav>

      {/* Footer */}
      {(!mounted || !collapsed) && (
        <div className="p-4 border-t">
          <div className="text-xs text-gray-500">
            <p>CMS v1.0.0</p>
            <p>© 2024 Yen Sao</p>
          </div>
        </div>
      )}
    </div>
  )
} 