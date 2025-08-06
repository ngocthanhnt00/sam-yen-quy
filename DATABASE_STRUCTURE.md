# WordPress-Inspired Modern CMS Database Structure

Cấu trúc database này được thiết kế dựa trên WordPress nhưng hiện đại hóa với UUID, proper foreign keys, và các tính năng mới.

## 📋 Tổng quan cấu trúc

| Bảng | Mô tả | Tương đương WordPress |
|------|-------|----------------------|
| `users` | Quản lý người dùng | `wp_users` |
| `user_meta` | Metadata của user | `wp_usermeta` |
| `posts` | Universal content table | `wp_posts` |
| `post_meta` | Metadata của posts | `wp_postmeta` |
| `terms` | Terms (categories, tags) | `wp_terms` |
| `term_taxonomy` | Taxonomy definitions | `wp_term_taxonomy` |
| `term_relationships` | Liên kết posts với terms | `wp_term_relationships` |
| `term_meta` | Metadata của terms | `wp_termmeta` |
| `comments` | Hệ thống comment | `wp_comments` |
| `comment_meta` | Metadata của comments | `wp_commentmeta` |
| `options` | Settings/configurations | `wp_options` |
| `languages` | Multi-language support | *New* |
| `post_translations` | Translations linking | *New* |
| `activity_logs` | Audit trail | *New* |

---

## 👥 User Management

### `users` Table
Quản lý thông tin cơ bản của người dùng.

| Field | Type | Mô tả |
|-------|------|-------|
| `id` | UUID | Primary key |
| `username` | VARCHAR(60) | Tên đăng nhập (unique) |
| `email` | VARCHAR(100) | Email (unique) |
| `password_hash` | TEXT | Mật khẩu đã hash |
| `display_name` | VARCHAR(250) | Tên hiển thị |
| `status` | VARCHAR(20) | active, inactive, banned |
| `email_verified_at` | TIMESTAMP | Thời điểm verify email |
| `last_login_at` | TIMESTAMP | Lần đăng nhập cuối |

**Ví dụ data:**
```sql
INSERT INTO users VALUES 
('550e8400-e29b-41d4-a716-446655440000', 'admin', 'admin@example.com', '$2y$10$...', 'Administrator', 'active', NOW(), NOW());
```

### `user_meta` Table
Lưu trữ thông tin bổ sung của user một cách linh hoạt.

| Field | Type | Mô tả |
|-------|------|-------|
| `user_id` | UUID | Reference đến users |
| `meta_key` | VARCHAR(255) | Tên metadata |
| `meta_value` | TEXT | Giá trị metadata |

**Các meta_key phổ biến:**
- `first_name`, `last_name` - Tên đầy đủ
- `capabilities` - JSON array quyền hạn
- `phone`, `address` - Thông tin liên hệ
- `preferences` - JSON user preferences
- `avatar_url` - Link ảnh đại diện

**Ví dụ data:**
```sql
INSERT INTO user_meta VALUES 
('user-id', 'capabilities', '["edit_posts", "manage_options"]'),
('user-id', 'first_name', 'John'),
('user-id', 'phone', '+84901234567');
```

---

## 📝 Content Management

### `posts` Table
Bảng universal chứa tất cả content: pages, posts, media, menus, products...

| Field | Type | Mô tả |
|-------|------|-------|
| `id` | UUID | Primary key |
| `author_id` | UUID | Tác giả |
| `parent_id` | UUID | Post cha (cho hierarchy) |
| `post_type` | VARCHAR(50) | Loại content |
| `post_status` | VARCHAR(20) | Trạng thái |
| `post_title` | TEXT | Tiêu đề |
| `post_content` | LONGTEXT | Nội dung |
| `post_excerpt` | TEXT | Tóm tắt |
| `post_name` | VARCHAR(200) | Slug/URL |
| `post_password` | VARCHAR(255) | Mật khẩu bảo vệ |
| `menu_order` | INT | Thứ tự sắp xếp |
| `guid` | VARCHAR(255) | Global unique identifier |
| `post_mime_type` | VARCHAR(100) | MIME type (cho attachments) |

**Post Types phổ biến:**
- `post` - Blog posts
- `page` - Static pages
- `attachment` - Media files
- `nav_menu_item` - Menu items
- `product` - Sản phẩm (e-commerce)
- `event` - Sự kiện
- `form` - Forms

**Post Status:**
- `draft` - Bản nháp
- `published` - Đã xuất bản
- `private` - Riêng tư
- `trash` - Đã xóa

**Ví dụ data:**
```sql
-- Tạo trang About
INSERT INTO posts VALUES 
('post-id', 'author-id', NULL, 'page', 'published', 'About Us', '<p>We are...</p>', 'Brief about us', 'about-us', NULL, 0, 'open', 'open', 'https://site.com/?p=1', NULL, 0);

-- Tạo sản phẩm
INSERT INTO posts VALUES 
('product-id', 'author-id', NULL, 'product', 'published', 'iPhone 15', '<p>Latest iPhone</p>', NULL, 'iphone-15', NULL, 0, 'closed', 'closed', NULL, NULL, 0);
```

### `post_meta` Table
Metadata linh hoạt cho posts.

**Meta keys cho pages:**
- `_page_template` - Template file
- `_featured_image` - Ảnh đại diện
- `_seo_title`, `_seo_description` - SEO

**Meta keys cho products:**
- `_price`, `_sale_price` - Giá
- `_stock_quantity` - Số lượng tồn kho
- `_product_gallery` - JSON array ảnh

**Meta keys cho attachments:**
- `_wp_attached_file` - File path
- `_wp_attachment_metadata` - JSON file info

**Ví dụ data:**
```sql
INSERT INTO post_meta VALUES 
('post-id', '_featured_image', 'attachment-id'),
('product-id', '_price', '999'),
('product-id', '_stock_quantity', '50'),
('attachment-id', '_wp_attached_file', 'uploads/2024/01/image.jpg');
```

---

## 🏷️ Taxonomy System

### `terms` Table
Chứa tất cả terms (categories, tags, custom taxonomies).

| Field | Type | Mô tả |
|-------|------|-------|
| `name` | VARCHAR(200) | Tên term |
| `slug` | VARCHAR(200) | URL slug |
| `term_group` | BIGINT | Nhóm term |

### `term_taxonomy` Table
Định nghĩa taxonomy cho terms.

| Field | Type | Mô tả |
|-------|------|-------|
| `term_id` | UUID | Reference đến terms |
| `taxonomy` | VARCHAR(32) | Loại taxonomy |
| `description` | LONGTEXT | Mô tả |
| `parent_id` | UUID | Parent taxonomy (cho hierarchy) |
| `count` | BIGINT | Số lượng posts |

**Taxonomies phổ biến:**
- `category` - Categories cho posts
- `post_tag` - Tags cho posts
- `nav_menu` - Menu locations
- `product_cat` - Product categories
- `product_tag` - Product tags

### `term_relationships` Table
Liên kết posts với taxonomies.

**Ví dụ tạo taxonomy system:**
```sql
-- 1. Tạo term
INSERT INTO terms VALUES ('term-id', 'Technology', 'technology', 0);

-- 2. Tạo taxonomy
INSERT INTO term_taxonomy VALUES ('taxonomy-id', 'term-id', 'category', 'Tech related posts', NULL, 0);

-- 3. Gán post vào category
INSERT INTO term_relationships VALUES ('post-id', 'taxonomy-id', 0);
```

---

## 💬 Comment System

### `comments` Table
Hệ thống comment với threading support.

| Field | Type | Mô tả |
|-------|------|-------|
| `post_id` | UUID | Post được comment |
| `author_name` | TINYTEXT | Tên tác giả |
| `author_email` | VARCHAR(100) | Email tác giả |
| `author_user_id` | UUID | User ID (nếu đăng nhập) |
| `parent_id` | UUID | Comment cha (reply) |
| `content` | TEXT | Nội dung comment |
| `status` | VARCHAR(20) | pending, approved, spam |
| `type` | VARCHAR(20) | comment, pingback, trackback |

**Ví dụ comment threading:**
```sql
-- Comment gốc
INSERT INTO comments VALUES ('comment-1', 'post-id', 'John', 'john@email.com', NULL, NULL, 'Great article!', 'approved', 'comment');

-- Reply
INSERT INTO comments VALUES ('comment-2', 'post-id', 'Admin', 'admin@email.com', 'user-id', 'comment-1', 'Thank you!', 'approved', 'comment');
```

---

## ⚙️ Settings & Configuration

### `options` Table
Lưu trữ cấu hình hệ thống.

| Field | Type | Mô tả |
|-------|------|-------|
| `option_name` | VARCHAR(191) | Tên setting |
| `option_value` | LONGTEXT | Giá trị |
| `autoload` | VARCHAR(20) | Có tự động load không |

**Options phổ biến:**
```sql
INSERT INTO options VALUES 
('site_title', 'My CMS Site', 'yes'),
('site_description', 'Just another CMS site', 'yes'),
('admin_email', 'admin@example.com', 'yes'),
('date_format', 'Y-m-d', 'yes'),
('time_format', 'H:i:s', 'yes'),
('posts_per_page', '10', 'yes'),
('default_role', 'subscriber', 'yes'),
('theme_options', '{"primary_color":"#007cba","layout":"wide"}', 'yes');
```

---

## 🌍 Multi-language Support

### `languages` Table
Quản lý ngôn ngữ hỗ trợ.

```sql
INSERT INTO languages VALUES 
('lang-vi', 'vi_VN', 'Tiếng Việt', 'Tiếng Việt', true, true, 'ltr'),
('lang-en', 'en_US', 'English', 'English', false, true, 'ltr');
```

### `post_translations` Table
Liên kết các bản dịch với nhau.

```sql
-- Trang About tiếng Việt
INSERT INTO posts VALUES ('about-vi', 'author-id', NULL, 'page', 'published', 'Giới thiệu', '<p>Chúng tôi là...</p>', NULL, 'gioi-thieu', NULL, 0, 'open', 'open', NULL, NULL, 0);

-- Trang About tiếng Anh  
INSERT INTO posts VALUES ('about-en', 'author-id', NULL, 'page', 'published', 'About Us', '<p>We are...</p>', NULL, 'about-us', NULL, 0, 'open', 'open', NULL, NULL, 0);

-- Liên kết translations
INSERT INTO post_translations VALUES 
('trans-1', 'about-vi', 'lang-vi', 'about-en'),
('trans-2', 'about-en', 'lang-en', 'about-vi');
```

---

## 📊 Activity Logs

### `activity_logs` Table
Audit trail cho tất cả hoạt động trong hệ thống.

```sql
INSERT INTO activity_logs VALUES 
('log-id', 'user-id', 'post', 'post-id', 'create', 'Created new post: "Hello World"', '192.168.1.1', 'Mozilla/5.0...', '{"post_type":"post","status":"draft"}');
```

---

## 🚀 Use Cases & Examples

### 1. Tạo một trang cơ bản
```sql
-- 1. Tạo post
INSERT INTO posts (id, author_id, post_type, post_status, post_title, post_content, post_name) 
VALUES ('page-1', 'user-1', 'page', 'published', 'Contact Us', '<p>Contact form here</p>', 'contact');

-- 2. Thêm template meta
INSERT INTO post_meta (post_id, meta_key, meta_value) 
VALUES ('page-1', '_page_template', 'contact-template.php');

-- 3. Thêm SEO meta
INSERT INTO post_meta (post_id, meta_key, meta_value) 
VALUES ('page-1', '_seo_title', 'Contact Us - Best CMS Ever');
```

### 2. Tạo menu navigation
```sql
-- 1. Tạo menu location
INSERT INTO terms (id, name, slug) VALUES ('menu-1', 'Main Menu', 'main-menu');
INSERT INTO term_taxonomy (term_id, taxonomy) VALUES ('menu-1', 'nav_menu');

-- 2. Tạo menu items
INSERT INTO posts (id, post_type, post_title, menu_order) VALUES 
('menu-item-1', 'nav_menu_item', 'Home', 1),
('menu-item-2', 'nav_menu_item', 'About', 2),
('menu-item-3', 'nav_menu_item', 'Contact', 3);

-- 3. Gán vào menu
INSERT INTO term_relationships (object_id, term_taxonomy_id) VALUES 
('menu-item-1', 'menu-taxonomy-id'),
('menu-item-2', 'menu-taxonomy-id'),
('menu-item-3', 'menu-taxonomy-id');

-- 4. Thêm meta cho menu items
INSERT INTO post_meta VALUES 
('menu-item-1', '_menu_item_type', 'post_type'),
('menu-item-1', '_menu_item_object', 'page'),
('menu-item-1', '_menu_item_object_id', 'home-page-id'),
('menu-item-1', '_menu_item_url', '/'),
('menu-item-2', '_menu_item_object_id', 'about-page-id'),
('menu-item-2', '_menu_item_url', '/about');
```

### 3. E-commerce product
```sql
-- 1. Tạo product
INSERT INTO posts (id, post_type, post_title, post_content, post_status, post_name) 
VALUES ('prod-1', 'product', 'MacBook Pro 14"', '<p>Latest MacBook Pro</p>', 'published', 'macbook-pro-14');

-- 2. Product meta
INSERT INTO post_meta VALUES 
('prod-1', '_price', '2399'),
('prod-1', '_sale_price', '2199'),
('prod-1', '_stock_quantity', '10'),
('prod-1', '_sku', 'MBP14-001'),
('prod-1', '_weight', '1.6'),
('prod-1', '_dimensions', '{"length":"31.26","width":"22.12","height":"1.55"}'),
('prod-1', '_product_gallery', '["img-1","img-2","img-3"]');

-- 3. Product categories
INSERT INTO terms VALUES ('cat-1', 'Laptops', 'laptops');
INSERT INTO term_taxonomy VALUES ('tax-1', 'cat-1', 'product_cat', 'Laptop computers', NULL, 1);
INSERT INTO term_relationships VALUES ('prod-1', 'tax-1', 0);
```

---

## 🔍 Common Queries

### Lấy tất cả pages đã published
```sql
SELECT p.*, pm.meta_value as featured_image
FROM posts p
LEFT JOIN post_meta pm ON p.id = pm.post_id AND pm.meta_key = '_featured_image'
WHERE p.post_type = 'page' AND p.post_status = 'published'
ORDER BY p.menu_order, p.post_title;
```

### Lấy posts với categories
```sql
SELECT p.post_title, t.name as category_name
FROM posts p
JOIN term_relationships tr ON p.id = tr.object_id
JOIN term_taxonomy tt ON tr.term_taxonomy_id = tt.id
JOIN terms t ON tt.term_id = t.id
WHERE p.post_type = 'post' 
  AND p.post_status = 'published'
  AND tt.taxonomy = 'category';
```

### Lấy menu với items
```sql
SELECT 
  t.name as menu_name,
  p.post_title as item_title,
  pm_url.meta_value as url,
  p.menu_order
FROM terms t
JOIN term_taxonomy tt ON t.id = tt.term_id
JOIN term_relationships tr ON tt.id = tr.term_taxonomy_id
JOIN posts p ON tr.object_id = p.id
LEFT JOIN post_meta pm_url ON p.id = pm_url.post_id AND pm_url.meta_key = '_menu_item_url'
WHERE tt.taxonomy = 'nav_menu' AND t.slug = 'main-menu'
ORDER BY p.menu_order;
```

### User với capabilities
```sql
SELECT 
  u.username,
  u.email,
  um.meta_value as capabilities
FROM users u
JOIN user_meta um ON u.id = um.user_id
WHERE um.meta_key = 'capabilities'
  AND u.status = 'active';
```

---

## 🎯 Performance Tips

### 1. Indexes quan trọng
- `posts(post_type, post_status)` - Query posts by type & status
- `post_meta(post_id, meta_key)` - Query meta values
- `term_relationships(object_id)` - Query post taxonomies
- `user_meta(user_id, meta_key)` - Query user meta

### 2. Autoload trong options
- Chỉ set `autoload = 'yes'` cho options cần thiết
- Options lớn nên set `autoload = 'no'`

### 3. Post meta optimization
- Sử dụng JSON cho complex data thay vì multiple meta entries
- Index meta_value cho frequently searched values

---

## 🔧 Migration & Setup

### Tạo database
```sql
-- Chạy file init_schema/init_db.sql
-- Hoặc từng bảng một theo thứ tự dependency
```

### Dữ liệu cơ bản
```sql
-- Default language
INSERT INTO languages VALUES ('vi', 'vi_VN', 'Tiếng Việt', 'Tiếng Việt', true, true, 'ltr');

-- Default options
INSERT INTO options VALUES 
('site_title', 'My CMS', 'yes'),
('admin_email', 'admin@example.com', 'yes'),
('posts_per_page', '10', 'yes');

-- Admin user
INSERT INTO users VALUES ('admin-id', 'admin', 'admin@example.com', '$2y$10$...', 'Administrator', 'active', NOW(), NOW());
INSERT INTO user_meta VALUES ('admin-id', 'capabilities', '["manage_options","edit_posts","delete_posts"]');
```

Cấu trúc này có thể scale từ blog đơn giản đến e-commerce phức tạp! 🚀