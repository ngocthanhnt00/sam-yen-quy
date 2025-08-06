# 📊 Dữ liệu mẫu - WordPress-Inspired CMS

File này minh họa cách dữ liệu được lưu trữ và hiển thị trong hệ thống CMS.

## 👥 Users & User Meta

### Bảng `users`
| ID | Username | Email | Display Name | Status | Last Login |
|---|---|---|---|---|---|
| 550e...0010 | admin | admin@yensao.com | Administrator | active | 2024-01-15 14:30:00 |
| 550e...0011 | editor | editor@yensao.com | Content Editor | active | 2024-01-13 09:15:00 |
| 550e...0012 | author | author@yensao.com | John Writer | active | NULL |
| 550e...0013 | customer | customer@gmail.com | Jane Customer | active | 2024-01-14 16:45:00 |

### Bảng `user_meta` (ví dụ cho Admin)
| User ID | Meta Key | Meta Value |
|---|---|---|
| 550e...0010 | capabilities | ["manage_options","edit_posts","delete_posts",...] |
| 550e...0010 | first_name | Admin |
| 550e...0010 | last_name | User |
| 550e...0010 | phone | +84901234567 |
| 550e...0010 | avatar_url | /uploads/avatars/admin.jpg |

---

## 📝 Posts & Content

### Bảng `posts` - Trang và Bài viết
| ID | Type | Status | Title | Slug | Author | Content Preview |
|---|---|---|---|---|---|---|
| 550e...0060 | page | published | Trang chủ | home | admin | `<div class="hero-section"><h1>Yến Sào...` |
| 550e...0061 | page | published | Giới thiệu | gioi-thieu | admin | `<h1>Về chúng tôi</h1><p>Với hơn 20...` |
| 550e...0062 | page | published | Liên hệ | lien-he | admin | `<h1>Liên hệ với chúng tôi</h1>...` |
| 550e...0063 | post | published | Công dụng tuyệt vời của yến sào | cong-dung-yen-sao | author | `<h1>Yến sào - Thần dược từ thiên...` |
| 550e...0064 | post | published | Cách chế biến yến sào đúng cách | cach-che-bien-yen-sao | editor | `<h1>Bí quyết chế biến yến sào</h1>...` |

### Bảng `posts` - Sản phẩm
| ID | Type | Status | Title | Slug | Price Meta | Stock |
|---|---|---|---|---|---|---|
| 550e...0065 | product | published | Yến sào cao cấp Khánh Hòa - Hộp 6 tổ | yen-sao-cao-cap-khanh-hoa | 2,200,000₫ | 25 |
| 550e...0066 | product | published | Yến sào nguyên chất Nha Trang - Hộp 12 tổ | yen-sao-nguyen-chat-nha-trang | 4,300,000₫ | 15 |

### Bảng `post_meta` (ví dụ cho Sản phẩm 1)
| Post ID | Meta Key | Meta Value |
|---|---|---|
| 550e...0065 | _product_price | 2500000 |
| 550e...0065 | _product_sale_price | 2200000 |
| 550e...0065 | _product_sku | YS-KH-6T-001 |
| 550e...0065 | _product_stock | 25 |
| 550e...0065 | _product_weight | 50 |
| 550e...0065 | _product_origin | Khánh Hòa, Việt Nam |
| 550e...0065 | _product_certificate | ["VSATTP","ISO22000"] |
| 550e...0065 | _featured_image | 550e...0067 |

---

## 🏷️ Taxonomy System

### Bảng `terms`
| ID | Name | Slug | Type |
|---|---|---|---|
| 550e...0020 | Sản phẩm | san-pham | category |
| 550e...0021 | Yến sào cao cấp | yen-sao-cao-cap | category |
| 550e...0022 | Yến sào nguyên chất | yen-sao-nguyen-chat | category |
| 550e...0023 | Tin tức | tin-tuc | category |
| 550e...0024 | Kiến thức | kien-thuc | category |
| 550e...0025 | Dinh dưỡng | dinh-duong | tag |
| 550e...0026 | Sức khỏe | suc-khoe | tag |
| 550e...0027 | Làm đẹp | lam-dep | tag |

### Bảng `term_taxonomy`
| ID | Term ID | Taxonomy | Description | Parent | Count |
|---|---|---|---|---|---|
| 550e...0040 | 550e...0020 | product_cat | Tất cả sản phẩm yến sào | NULL | 5 |
| 550e...0041 | 550e...0021 | product_cat | Yến sào cao cấp cho người thành đạt | 550e...0040 | 3 |
| 550e...0043 | 550e...0023 | category | Tin tức mới nhất về yến sào | NULL | 3 |
| 550e...0045 | 550e...0025 | post_tag | (Dinh dưỡng tag) | NULL | 4 |

### Taxonomy Hierarchy Visualization
```
📁 Sản phẩm (product_cat)
├── 📁 Yến sào cao cấp
│   └── 🛍️ Yến sào cao cấp Khánh Hòa - Hộp 6 tổ
└── 📁 Yến sào nguyên chất
    └── 🛍️ Yến sào nguyên chất Nha Trang - Hộp 12 tổ

📁 Tin tức (category)
└── 📰 Blog posts...

📁 Kiến thức (category)
├── 📰 Công dụng tuyệt vời của yến sào
└── 📰 Cách chế biến yến sào đúng cách

🏷️ Tags: #dinh-duong #suc-khoe #lam-dep #organic
```

---

## 🍀 Menu System

### Main Menu Structure
| Order | Menu Item | Type | URL | Target |
|---|---|---|---|---|
| 1 | Trang chủ | page | / | _self |
| 2 | Sản phẩm | taxonomy | /san-pham | _self |
| 3 | Tin tức | taxonomy | /tin-tuc | _self |
| 4 | Giới thiệu | page | /gioi-thieu | _self |
| 5 | Liên hệ | page | /lien-he | _self |

### Menu Visualization
```
🏠 Trang chủ
🛍️ Sản phẩm
   ├── Yến sào cao cấp
   └── Yến sào nguyên chất
📰 Tin tức
ℹ️ Giới thiệu
📞 Liên hệ
```

---

## 💬 Comments & Reviews

### Bảng `comments`
| ID | Post | Author | Email | Content | Status | Type | Rating |
|---|---|---|---|---|---|---|---|
| 550e...0080 | Công dụng yến sào | Nguyễn Thị Lan | lan.nguyen@gmail.com | Bài viết rất hay và bổ ích! Tôi đã biết thêm... | approved | comment | - |
| 550e...0081 | Công dụng yến sào | Trần Văn Minh | minh.tran@yahoo.com | Đồng ý với chị Lan. Tôi đã sử dụng yến sào... | approved | comment | - |
| 550e...0083 | Yến sào Khánh Hòa | Lê Thị Hương | huong.le@gmail.com | Sản phẩm chất lượng tốt, yến sào nguyên chất... | approved | comment | ⭐⭐⭐⭐⭐ |
| 550e...0084 | Yến sào Nha Trang | Phạm Văn Đức | duc.pham@hotmail.com | Tôi đã mua cho bố mẹ sử dụng. Chất lượng rất tốt... | approved | comment | ⭐⭐⭐⭐ |

### Comment Threading Example
```
💬 Nguyễn Thị Lan: "Bài viết rất hay và bổ ích!"
├── 💬 Trần Văn Minh: "Đồng ý với chị Lan..."
└── 💬 Admin: "Cảm ơn chị Lan đã theo dõi!"
```

---

## ⚙️ Site Settings

### Bảng `options`
| Option Name | Option Value | Autoload |
|---|---|---|
| site_title | Yến Sào Cao Cấp - Nguyên Chất Từ Thiên Nhiên | yes |
| site_description | Chuyên cung cấp yến sào cao cấp nguyên chất từ Khánh Hòa... | yes |
| admin_email | admin@yensao.com | yes |
| posts_per_page | 12 | yes |
| currency | VND | yes |
| currency_symbol | ₫ | yes |

### Theme Options (JSON)
```json
{
  "primary_color": "#2c5530",
  "secondary_color": "#f4f1e8", 
  "accent_color": "#c9a96e",
  "logo_url": "/uploads/logo.png",
  "header_layout": "centered",
  "footer_text": "© 2024 Yến Sào Cao Cấp. All rights reserved."
}
```

### Company Info (JSON)
```json
{
  "name": "Công ty TNHH Yến Sào Cao Cấp",
  "address": "123 Đường ABC, Quận 1, TP.HCM",
  "phone": "0901 234 567",
  "email": "info@yensao.com",
  "business_hours": "Thứ 2 - Chủ nhật: 8:00 - 22:00",
  "tax_code": "0123456789"
}
```

---

## 🌍 Multi-language

### Bảng `languages`
| ID | Code | Name | Native Name | Is Default | Active |
|---|---|---|---|---|---|
| 550e...0001 | vi_VN | Vietnamese | Tiếng Việt | ✅ | ✅ |
| 550e...0002 | en_US | English | English | ❌ | ✅ |
| 550e...0003 | zh_CN | Chinese | 中文 | ❌ | ✅ |

### Translation Mapping Example
```
📄 Trang chủ (vi_VN) ↔️ Homepage (en_US) ↔️ 首页 (zh_CN)
📄 Giới thiệu (vi_VN) ↔️ About Us (en_US) ↔️ 关于我们 (zh_CN)
```

---

## 🛍️ E-commerce Data

### Product Display
```
🛍️ Yến sào cao cấp Khánh Hòa - Hộp 6 tổ
┌─────────────────────────────────────────┐
│ 📸 [Product Image]                      │
│                                         │
│ 💰 Giá: 2,500,000₫ → 2,200,000₫       │
│ 📦 Còn lại: 25 sản phẩm                │
│ 🏷️ SKU: YS-KH-6T-001                  │
│ ⚖️ Khối lượng: 50g                     │
│ 📍 Xuất xứ: Khánh Hòa, Việt Nam       │
│ 🏆 Chứng nhận: VSATTP, ISO22000        │
│                                         │
│ 🏷️ Danh mục: Yến sào cao cấp          │
│ #️⃣ Tags: #organic #sức-khỏe           │
│                                         │
│ ⭐⭐⭐⭐⭐ 5.0 (1 đánh giá)            │
└─────────────────────────────────────────┘
```

### Category Structure
```
🛍️ Sản phẩm (5 products)
├── 🥇 Yến sào cao cấp (3 products)
│   ├── Yến sào cao cấp Khánh Hòa - Hộp 6 tổ
│   ├── [Other premium products...]
│   └── ...
└── ✨ Yến sào nguyên chất (2 products)
    ├── Yến sào nguyên chất Nha Trang - Hộp 12 tổ
    └── [Other pure products...]
```

---

## 📊 Analytics & Logs

### Bảng `activity_logs`
| Time | User | Action | Object | Description | IP |
|---|---|---|---|---|---|
| 2024-01-15 14:30:00 | admin | login | user | Admin user logged in | 192.168.1.1 |
| 2024-01-15 10:15:00 | admin | create | product | Created "Yến sào cao cấp Khánh Hòa" | 192.168.1.1 |
| 2024-01-14 16:45:00 | editor | update | post | Updated "Cách chế biến yến sào" | 192.168.1.50 |
| 2024-01-14 09:30:00 | customer | create | comment | Left a product review (5⭐) | 192.168.1.102 |

### Content Statistics
```
📊 Website Statistics
├── 👥 Users: 4 (1 admin, 1 editor, 1 author, 1 customer)
├── 📝 Content: 7 posts
│   ├── 📄 Pages: 3
│   ├── 📰 Blog posts: 2  
│   └── 🛍️ Products: 2
├── 🏷️ Categories: 5
├── #️⃣ Tags: 4
├── 💬 Comments: 5 (4 approved)
└── 🖼️ Media: 2 images
```

---

## 🔍 Common Query Results

### Recent Blog Posts with Categories
| Title | Author | Category | Tags | Views | Comments |
|---|---|---|---|---|---|
| Công dụng tuyệt vời của yến sào | John Writer | Kiến thức | #dinh-dưỡng #sức-khỏe #organic | 1,250 | 3 |
| Cách chế biến yến sào đúng cách | Content Editor | Kiến thức | #dinh-dưỡng #sức-khỏe | 890 | 0 |

### Top Products by Category
| Product | Category | Price | Stock | Rating |
|---|---|---|---|---|
| Yến sào cao cấp Khánh Hòa | Yến sào cao cấp | 2,200,000₫ | 25 | ⭐⭐⭐⭐⭐ (5.0) |
| Yến sào nguyên chất Nha Trang | Yến sào nguyên chất | 4,300,000₫ | 15 | ⭐⭐⭐⭐ (4.0) |

### User Capabilities Matrix
| User | Role | Manage Options | Edit Posts | Delete Posts | Publish Posts | Upload Files |
|---|---|---|---|---|---|---|
| admin | Administrator | ✅ | ✅ | ✅ | ✅ | ✅ |
| editor | Editor | ❌ | ✅ | ✅ | ✅ | ✅ |
| author | Author | ❌ | ✅ | ✅* | ✅ | ✅ |
| customer | Customer | ❌ | ❌ | ❌ | ❌ | ❌ |

*Only own posts

---

## 🎯 Frontend Display Examples

### Homepage Hero Section
```html
<div class="hero-section">
  <h1>Yến Sào Cao Cấp</h1>
  <p>Sản phẩm yến sào nguyên chất 100% từ thiên nhiên</p>
  <a href="/san-pham" class="cta-button">Xem sản phẩm</a>
</div>
```

### Product Grid
```
┌─────────────┬─────────────┐
│ 🖼️ [Image] │ 🖼️ [Image] │
│ Yến sào KH  │ Yến sào NT  │
│ 2,200,000₫  │ 4,300,000₫  │
│ ⭐⭐⭐⭐⭐    │ ⭐⭐⭐⭐     │
└─────────────┴─────────────┘
```

### Blog Archive
```
📰 Tin tức & Kiến thức

📅 15/01/2024 | 👤 John Writer | 📂 Kiến thức
📖 Công dụng tuyệt vời của yến sào với sức khỏe
Tìm hiểu về các công dụng tuyệt vời của yến sào đối với sức khỏe con người...
🏷️ #dinh-dưỡng #sức-khỏe #organic | 👁️ 1,250 | 💬 3

📅 12/01/2024 | 👤 Content Editor | 📂 Kiến thức  
📖 Cách chế biến yến sào đúng cách để giữ nguyên dinh dưỡng
Hướng dẫn chi tiết cách chế biến yến sào để giữ nguyên giá trị dinh dưỡng...
🏷️ #dinh-dưỡng #sức-khỏe | 👁️ 890 | 💬 0
```

### Navigation Menu
```
🏠 Trang chủ | 🛍️ Sản phẩm | 📰 Tin tức | ℹ️ Giới thiệu | 📞 Liên hệ
                     ▼
                ┌─────────────────┐
                │ 🥇 Yến sào cao cấp │
                │ ✨ Yến sào nguyên chất │
                └─────────────────┘
```

Dữ liệu mẫu này cho thấy tính linh hoạt và mạnh mẽ của cấu trúc WordPress-inspired CMS! 🚀