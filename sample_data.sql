-- =========================================
-- SAMPLE DATA FOR WORDPRESS-INSPIRED CMS
-- =========================================

-- 1. LANGUAGES
INSERT INTO languages (id, code, name, native_name, is_default, is_active, text_direction) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'vi_VN', 'Vietnamese', 'Tiếng Việt', true, true, 'ltr'),
('550e8400-e29b-41d4-a716-446655440002', 'en_US', 'English', 'English', false, true, 'ltr'),
('550e8400-e29b-41d4-a716-446655440003', 'zh_CN', 'Chinese', '中文', false, true, 'ltr');

-- 2. USERS
INSERT INTO users (id, username, email, password_hash, display_name, status, email_verified_at, last_login_at) VALUES
('550e8400-e29b-41d4-a716-446655440010', 'admin', 'admin@yensao.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrator', 'active', NOW(), NOW()),
('550e8400-e29b-41d4-a716-446655440011', 'editor', 'editor@yensao.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Content Editor', 'active', NOW(), NOW() - INTERVAL '2 days'),
('550e8400-e29b-41d4-a716-446655440012', 'author', 'author@yensao.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'John Writer', 'active', NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440013', 'customer', 'customer@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jane Customer', 'active', NOW(), NOW() - INTERVAL '1 day');

-- 3. USER META
INSERT INTO user_meta (user_id, meta_key, meta_value) VALUES
-- Admin capabilities
('550e8400-e29b-41d4-a716-446655440010', 'capabilities', '["manage_options","edit_posts","delete_posts","publish_posts","upload_files","edit_pages","edit_others_posts","edit_published_posts","delete_pages","delete_others_posts","delete_published_posts","delete_private_posts","edit_private_posts","read_private_posts","manage_categories","manage_links","moderate_comments","upload_files","export","import"]'),
('550e8400-e29b-41d4-a716-446655440010', 'first_name', 'Admin'),
('550e8400-e29b-41d4-a716-446655440010', 'last_name', 'User'),
('550e8400-e29b-41d4-a716-446655440010', 'phone', '+84901234567'),
('550e8400-e29b-41d4-a716-446655440010', 'avatar_url', '/uploads/avatars/admin.jpg'),

-- Editor capabilities
('550e8400-e29b-41d4-a716-446655440011', 'capabilities', '["edit_posts","delete_posts","publish_posts","upload_files","edit_pages","edit_others_posts","edit_published_posts","delete_pages","delete_others_posts","delete_published_posts","moderate_comments"]'),
('550e8400-e29b-41d4-a716-446655440011', 'first_name', 'Content'),
('550e8400-e29b-41d4-a716-446655440011', 'last_name', 'Editor'),
('550e8400-e29b-41d4-a716-446655440011', 'phone', '+84901234568'),

-- Author capabilities
('550e8400-e29b-41d4-a716-446655440012', 'capabilities', '["edit_posts","delete_posts","publish_posts","upload_files"]'),
('550e8400-e29b-41d4-a716-446655440012', 'first_name', 'John'),
('550e8400-e29b-41d4-a716-446655440012', 'last_name', 'Writer'),
('550e8400-e29b-41d4-a716-446655440012', 'bio', 'Freelance writer specializing in health and wellness topics.'),

-- Customer info
('550e8400-e29b-41d4-a716-446655440013', 'capabilities', '["read"]'),
('550e8400-e29b-41d4-a716-446655440013', 'first_name', 'Jane'),
('550e8400-e29b-41d4-a716-446655440013', 'last_name', 'Customer'),
('550e8400-e29b-41d4-a716-446655440013', 'billing_address', '{"street":"123 Main St","city":"Ho Chi Minh City","state":"HCM","postal_code":"70000","country":"VN"}'),
('550e8400-e29b-41d4-a716-446655440013', 'shipping_address', '{"street":"456 Oak Ave","city":"Ho Chi Minh City","state":"HCM","postal_code":"70000","country":"VN"}');

-- 4. TERMS (Categories, Tags, etc.)
INSERT INTO terms (id, name, slug, term_group) VALUES
-- Categories
('550e8400-e29b-41d4-a716-446655440020', 'Sản phẩm', 'san-pham', 0),
('550e8400-e29b-41d4-a716-446655440021', 'Yến sào cao cấp', 'yen-sao-cao-cap', 0),
('550e8400-e29b-41d4-a716-446655440022', 'Yến sào nguyên chất', 'yen-sao-nguyen-chat', 0),
('550e8400-e29b-41d4-a716-446655440023', 'Tin tức', 'tin-tuc', 0),
('550e8400-e29b-41d4-a716-446655440024', 'Kiến thức', 'kien-thuc', 0),
-- Tags
('550e8400-e29b-41d4-a716-446655440025', 'Dinh dưỡng', 'dinh-duong', 0),
('550e8400-e29b-41d4-a716-446655440026', 'Sức khỏe', 'suc-khoe', 0),
('550e8400-e29b-41d4-a716-446655440027', 'Làm đẹp', 'lam-dep', 0),
('550e8400-e29b-41d4-a716-446655440028', 'Organic', 'organic', 0),
-- Menu
('550e8400-e29b-41d4-a716-446655440029', 'Main Menu', 'main-menu', 0),
('550e8400-e29b-41d4-a716-446655440030', 'Footer Menu', 'footer-menu', 0);

-- 5. TERM TAXONOMY
INSERT INTO term_taxonomy (id, term_id, taxonomy, description, parent_id, count) VALUES
-- Product categories
('550e8400-e29b-41d4-a716-446655440040', '550e8400-e29b-41d4-a716-446655440020', 'product_cat', 'Tất cả sản phẩm yến sào', NULL, 5),
('550e8400-e29b-41d4-a716-446655440041', '550e8400-e29b-41d4-a716-446655440021', 'product_cat', 'Yến sào cao cấp cho người thành đạt', '550e8400-e29b-41d4-a716-446655440040', 3),
('550e8400-e29b-41d4-a716-446655440042', '550e8400-e29b-41d4-a716-446655440022', 'product_cat', 'Yến sào nguyên chất 100%', '550e8400-e29b-41d4-a716-446655440040', 2),

-- Post categories
('550e8400-e29b-41d4-a716-446655440043', '550e8400-e29b-41d4-a716-446655440023', 'category', 'Tin tức mới nhất về yến sào', NULL, 3),
('550e8400-e29b-41d4-a716-446655440044', '550e8400-e29b-41d4-a716-446655440024', 'category', 'Kiến thức về yến sào và sức khỏe', NULL, 2),

-- Tags
('550e8400-e29b-41d4-a716-446655440045', '550e8400-e29b-41d4-a716-446655440025', 'post_tag', '', NULL, 4),
('550e8400-e29b-41d4-a716-446655440046', '550e8400-e29b-41d4-a716-446655440026', 'post_tag', '', NULL, 5),
('550e8400-e29b-41d4-a716-446655440047', '550e8400-e29b-41d4-a716-446655440027', 'post_tag', '', NULL, 2),
('550e8400-e29b-41d4-a716-446655440048', '550e8400-e29b-41d4-a716-446655440028', 'post_tag', '', NULL, 3),

-- Menus
('550e8400-e29b-41d4-a716-446655440049', '550e8400-e29b-41d4-a716-446655440029', 'nav_menu', 'Menu chính của website', NULL, 6),
('550e8400-e29b-41d4-a716-446655440050', '550e8400-e29b-41d4-a716-446655440030', 'nav_menu', 'Menu footer', NULL, 4);

-- 6. POSTS (Pages, Posts, Products, Media, Menu Items)
INSERT INTO posts (id, author_id, parent_id, post_type, post_status, post_title, post_content, post_excerpt, post_name, post_password, menu_order, comment_status, ping_status, guid, post_mime_type, comment_count) VALUES

-- Static Pages
('550e8400-e29b-41d4-a716-446655440060', '550e8400-e29b-41d4-a716-446655440010', NULL, 'page', 'published', 'Trang chủ', '<div class="hero-section"><h1>Yến Sào Cao Cấp</h1><p>Sản phẩm yến sào nguyên chất 100% từ thiên nhiên</p><a href="/san-pham" class="cta-button">Xem sản phẩm</a></div><div class="features"><h2>Tại sao chọn chúng tôi?</h2><ul><li>100% nguyên chất</li><li>Xuất xứ rõ ràng</li><li>Chứng nhận chất lượng</li></ul></div>', 'Trang chủ website yến sào', 'home', NULL, 0, 'closed', 'closed', 'https://yensao.com/', NULL, 0),

('550e8400-e29b-41d4-a716-446655440061', '550e8400-e29b-41d4-a716-446655440010', NULL, 'page', 'published', 'Giới thiệu', '<h1>Về chúng tôi</h1><p>Với hơn 20 năm kinh nghiệm trong ngành yến sào, chúng tôi tự hào là đơn vị cung cấp yến sào chất lượng cao hàng đầu Việt Nam.</p><h2>Sứ mệnh</h2><p>Mang đến cho khách hàng những sản phẩm yến sào nguyên chất, an toàn và bổ dưỡng nhất.</p><h2>Tầm nhìn</h2><p>Trở thành thương hiệu yến sào hàng đầu được tin tưởng bởi hàng triệu gia đình Việt.</p>', 'Thông tin về công ty và sứ mệnh', 'gioi-thieu', NULL, 1, 'open', 'closed', 'https://yensao.com/gioi-thieu/', NULL, 0),

('550e8400-e29b-41d4-a716-446655440062', '550e8400-e29b-41d4-a716-446655440010', NULL, 'page', 'published', 'Liên hệ', '<h1>Liên hệ với chúng tôi</h1><div class="contact-info"><h3>Thông tin liên hệ</h3><p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p><p><strong>Điện thoại:</strong> 0901 234 567</p><p><strong>Email:</strong> info@yensao.com</p></div><div class="contact-form"><h3>Gửi tin nhắn</h3><form><input type="text" placeholder="Họ tên" required><input type="email" placeholder="Email" required><textarea placeholder="Nội dung" required></textarea><button type="submit">Gửi</button></form></div>', 'Thông tin liên hệ và form', 'lien-he', NULL, 5, 'closed', 'closed', 'https://yensao.com/lien-he/', NULL, 0),

-- Blog Posts
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440012', NULL, 'post', 'published', 'Công dụng tuyệt vời của yến sào với sức khỏe', '<h1>Yến sào - Thần dược từ thiên nhiên</h1><p>Yến sào từ lâu đã được biết đến như một thực phẩm bổ dưỡng cao cấp với nhiều công dụng tuyệt vời cho sức khỏe.</p><h2>Các dưỡng chất quan trọng</h2><ul><li>Protein: 50-60%</li><li>Carbohydrate: 20-30%</li><li>Amino acid thiết yếu</li><li>Khoáng chất: canxi, kali, magie</li></ul><h2>Công dụng chính</h2><ol><li>Tăng cường hệ miễn dịch</li><li>Làm đẹp da, chống lão hóa</li><li>Bồi bổ phổi, giảm ho</li><li>Tăng cường trí nhớ</li></ol>', 'Tìm hiểu về các công dụng tuyệt vời của yến sào đối với sức khỏe con người', 'cong-dung-yen-sao-suc-khoe', NULL, 0, 'open', 'open', 'https://yensao.com/cong-dung-yen-sao-suc-khoe/', NULL, 3),

('550e8400-e29b-41d4-a716-446655440064', '550e8400-e29b-41d4-a716-446655440011', NULL, 'post', 'published', 'Cách chế biến yến sào đúng cách để giữ nguyên dinh dưỡng', '<h1>Bí quyết chế biến yến sào</h1><p>Để có được một chén yến sào bổ dưỡng, việc chế biến đúng cách là vô cùng quan trọng.</p><h2>Chuẩn bị yến sào</h2><ol><li>Ngâm yến sào trong nước ấm 2-3 tiếng</li><li>Rửa sạch, loại bỏ lông vũ</li><li>Để ráo nước</li></ol><h2>Cách nấu</h2><p>Đun cách thủy trong 30-45 phút với lửa nhỏ. Tránh đun sôi trực tiếp để không mất chất dinh dưỡng.</p>', 'Hướng dẫn chi tiết cách chế biến yến sào để giữ nguyên giá trị dinh dưỡng', 'cach-che-bien-yen-sao', NULL, 0, 'open', 'open', 'https://yensao.com/cach-che-bien-yen-sao/', NULL, 1),

-- Products
('550e8400-e29b-41d4-a716-446655440065', '550e8400-e29b-41d4-a716-446655440010', NULL, 'product', 'published', 'Yến sào cao cấp Khánh Hòa - Hộp 6 tổ', '<div class="product-description"><h2>Yến sào cao cấp từ Khánh Hòa</h2><p>Sản phẩm yến sào nguyên chất 100% được khai thác từ các hang động tự nhiên tại Khánh Hòa. Mỗi tổ yến được chọn lọc kỹ càng, đảm bảo chất lượng cao nhất.</p><h3>Đặc điểm:</h3><ul><li>Xuất xứ: Khánh Hòa, Việt Nam</li><li>Trọng lượng: 50g (6 tổ)</li><li>Độ ẩm: < 15%</li><li>Màu sắc: Trắng ngà tự nhiên</li><li>Hạn sử dụng: 2 năm</li></ul></div>', 'Yến sào cao cấp Khánh Hòa nguyên chất, hộp 6 tổ 50g', 'yen-sao-cao-cap-khanh-hoa-6-to', NULL, 1, 'open', 'closed', 'https://yensao.com/product/yen-sao-cao-cap-khanh-hoa-6-to/', NULL, 2),

('550e8400-e29b-41d4-a716-446655440066', '550e8400-e29b-41d4-a716-446655440010', NULL, 'product', 'published', 'Yến sào nguyên chất Nha Trang - Hộp 12 tổ', '<div class="product-description"><h2>Yến sào nguyên chất Nha Trang</h2><p>Dòng sản phẩm yến sào nguyên chất từ Nha Trang với chất lượng vượt trội. Được thu hoạch theo quy trình khép kín, đảm bảo vệ sinh an toàn thực phẩm.</p><h3>Thông tin sản phẩm:</h3><ul><li>Xuất xứ: Nha Trang, Khánh Hòa</li><li>Trọng lượng: 100g (12 tổ)</li><li>Độ ẩm: < 12%</li><li>Chứng nhận: VSATTP, ISO 22000</li></ul></div>', 'Yến sào nguyên chất Nha Trang, hộp 12 tổ 100g, chất lượng cao', 'yen-sao-nguyen-chat-nha-trang-12-to', NULL, 2, 'open', 'closed', 'https://yensao.com/product/yen-sao-nguyen-chat-nha-trang-12-to/', NULL, 1),

-- Media/Attachments
('550e8400-e29b-41d4-a716-446655440067', '550e8400-e29b-41d4-a716-446655440010', NULL, 'attachment', 'published', 'product-1.jpg', '', '', 'product-1-jpg', NULL, 0, 'closed', 'closed', 'https://yensao.com/wp-content/uploads/2024/01/product-1.jpg', 'image/jpeg', 0),

('550e8400-e29b-41d4-a716-446655440068', '550e8400-e29b-41d4-a716-446655440010', NULL, 'attachment', 'published', 'hero-banner.jpg', '', '', 'hero-banner-jpg', NULL, 0, 'closed', 'closed', 'https://yensao.com/wp-content/uploads/2024/01/hero-banner.jpg', 'image/jpeg', 0),

-- Menu Items
('550e8400-e29b-41d4-a716-446655440069', '550e8400-e29b-41d4-a716-446655440010', NULL, 'nav_menu_item', 'published', 'Trang chủ', '', '', 'trang-chu-menu', NULL, 1, 'closed', 'closed', 'https://yensao.com/menu-item/1', NULL, 0),

('550e8400-e29b-41d4-a716-446655440070', '550e8400-e29b-41d4-a716-446655440010', NULL, 'nav_menu_item', 'published', 'Sản phẩm', '', '', 'san-pham-menu', NULL, 2, 'closed', 'closed', 'https://yensao.com/menu-item/2', NULL, 0),

('550e8400-e29b-41d4-a716-446655440071', '550e8400-e29b-41d4-a716-446655440010', NULL, 'nav_menu_item', 'published', 'Tin tức', '', '', 'tin-tuc-menu', NULL, 3, 'closed', 'closed', 'https://yensao.com/menu-item/3', NULL, 0),

('550e8400-e29b-41d4-a716-446655440072', '550e8400-e29b-41d4-a716-446655440010', NULL, 'nav_menu_item', 'published', 'Giới thiệu', '', '', 'gioi-thieu-menu', NULL, 4, 'closed', 'closed', 'https://yensao.com/menu-item/4', NULL, 0),

('550e8400-e29b-41d4-a716-446655440073', '550e8400-e29b-41d4-a716-446655440010', NULL, 'nav_menu_item', 'published', 'Liên hệ', '', '', 'lien-he-menu', NULL, 5, 'closed', 'closed', 'https://yensao.com/menu-item/5', NULL, 0);

-- 7. POST META
INSERT INTO post_meta (post_id, meta_key, meta_value) VALUES

-- Homepage meta
('550e8400-e29b-41d4-a716-446655440060', '_page_template', 'homepage.php'),
('550e8400-e29b-41d4-a716-446655440060', '_featured_image', '550e8400-e29b-41d4-a716-446655440068'),
('550e8400-e29b-41d4-a716-446655440060', '_seo_title', 'Yến Sào Cao Cấp - Nguyên Chất 100% Từ Thiên Nhiên'),
('550e8400-e29b-41d4-a716-446655440060', '_seo_description', 'Chuyên cung cấp yến sào cao cấp nguyên chất từ Khánh Hòa, Nha Trang. Chất lượng đảm bảo, giá cả hợp lý. Giao hàng toàn quốc.'),
('550e8400-e29b-41d4-a716-446655440060', '_hero_title', 'Yến Sào Cao Cấp'),
('550e8400-e29b-41d4-a716-446655440060', '_hero_subtitle', 'Sản phẩm yến sào nguyên chất 100% từ thiên nhiên'),
('550e8400-e29b-41d4-a716-446655440060', '_hero_cta_text', 'Xem sản phẩm'),
('550e8400-e29b-41d4-a716-446655440060', '_hero_cta_link', '/san-pham'),

-- About page meta
('550e8400-e29b-41d4-a716-446655440061', '_page_template', 'page-about.php'),
('550e8400-e29b-41d4-a716-446655440061', '_seo_title', 'Giới thiệu - Về chúng tôi | Yến Sào Cao Cấp'),
('550e8400-e29b-41d4-a716-446655440061', '_seo_description', 'Tìm hiểu về công ty chúng tôi - hơn 20 năm kinh nghiệm trong ngành yến sào, cam kết chất lượng và uy tín.'),

-- Contact page meta  
('550e8400-e29b-41d4-a716-446655440062', '_page_template', 'page-contact.php'),
('550e8400-e29b-41d4-a716-446655440062', '_contact_address', '123 Đường ABC, Quận 1, TP.HCM'),
('550e8400-e29b-41d4-a716-446655440062', '_contact_phone', '0901 234 567'),
('550e8400-e29b-41d4-a716-446655440062', '_contact_email', 'info@yensao.com'),
('550e8400-e29b-41d4-a716-446655440062', '_contact_hours', 'Thứ 2 - Chủ nhật: 8:00 - 22:00'),

-- Blog post meta
('550e8400-e29b-41d4-a716-446655440063', '_featured_image', '550e8400-e29b-41d4-a716-446655440067'),
('550e8400-e29b-41d4-a716-446655440063', '_seo_title', 'Công dụng tuyệt vời của yến sào với sức khỏe - Kiến thức hay'),
('550e8400-e29b-41d4-a716-446655440063', '_seo_description', 'Khám phá những công dụng tuyệt vời của yến sào đối với sức khỏe. Tìm hiểu về thành phần dinh dưỡng và cách sử dụng hiệu quả.'),
('550e8400-e29b-41d4-a716-446655440063', '_reading_time', '5'),
('550e8400-e29b-41d4-a716-446655440063', '_views_count', '1250'),

('550e8400-e29b-41d4-a716-446655440064', '_seo_title', 'Cách chế biến yến sào đúng cách để giữ nguyên dinh dưỡng'),
('550e8400-e29b-41d4-a716-446655440064', '_reading_time', '7'),
('550e8400-e29b-41d4-a716-446655440064', '_views_count', '890'),

-- Product meta
('550e8400-e29b-41d4-a716-446655440065', '_product_price', '2500000'),
('550e8400-e29b-41d4-a716-446655440065', '_product_sale_price', '2200000'),
('550e8400-e29b-41d4-a716-446655440065', '_product_sku', 'YS-KH-6T-001'),
('550e8400-e29b-41d4-a716-446655440065', '_product_stock', '25'),
('550e8400-e29b-41d4-a716-446655440065', '_product_weight', '50'),
('550e8400-e29b-41d4-a716-446655440065', '_product_dimensions', '{"length":"20","width":"15","height":"8"}'),
('550e8400-e29b-41d4-a716-446655440065', '_product_gallery', '["550e8400-e29b-41d4-a716-446655440067","550e8400-e29b-41d4-a716-446655440068"]'),
('550e8400-e29b-41d4-a716-446655440065', '_featured_image', '550e8400-e29b-41d4-a716-446655440067'),
('550e8400-e29b-41d4-a716-446655440065', '_product_origin', 'Khánh Hòa, Việt Nam'),
('550e8400-e29b-41d4-a716-446655440065', '_product_certificate', '["VSATTP","ISO22000"]'),

('550e8400-e29b-41d4-a716-446655440066', '_product_price', '4800000'),
('550e8400-e29b-41d4-a716-446655440066', '_product_sale_price', '4300000'),
('550e8400-e29b-41d4-a716-446655440066', '_product_sku', 'YS-NT-12T-002'),
('550e8400-e29b-41d4-a716-446655440066', '_product_stock', '15'),
('550e8400-e29b-41d4-a716-446655440066', '_product_weight', '100'),
('550e8400-e29b-41d4-a716-446655440066', '_product_origin', 'Nha Trang, Khánh Hòa'),
('550e8400-e29b-41d4-a716-446655440066', '_featured_image', '550e8400-e29b-41d4-a716-446655440067'),

-- Media meta
('550e8400-e29b-41d4-a716-446655440067', '_wp_attached_file', 'uploads/2024/01/product-1.jpg'),
('550e8400-e29b-41d4-a716-446655440067', '_wp_attachment_metadata', '{"width":800,"height":600,"file":"uploads/2024/01/product-1.jpg","sizes":{"thumbnail":{"file":"product-1-150x150.jpg","width":150,"height":150},"medium":{"file":"product-1-300x225.jpg","width":300,"height":225}}}'),
('550e8400-e29b-41d4-a716-446655440067', '_wp_attachment_image_alt', 'Yến sào cao cấp Khánh Hòa'),

('550e8400-e29b-41d4-a716-446655440068', '_wp_attached_file', 'uploads/2024/01/hero-banner.jpg'),
('550e8400-e29b-41d4-a716-446655440068', '_wp_attachment_metadata', '{"width":1920,"height":800,"file":"uploads/2024/01/hero-banner.jpg"}'),
('550e8400-e29b-41d4-a716-446655440068', '_wp_attachment_image_alt', 'Banner trang chủ yến sào'),

-- Menu item meta
('550e8400-e29b-41d4-a716-446655440069', '_menu_item_type', 'post_type'),
('550e8400-e29b-41d4-a716-446655440069', '_menu_item_object', 'page'),
('550e8400-e29b-41d4-a716-446655440069', '_menu_item_object_id', '550e8400-e29b-41d4-a716-446655440060'),
('550e8400-e29b-41d4-a716-446655440069', '_menu_item_url', '/'),
('550e8400-e29b-41d4-a716-446655440069', '_menu_item_target', ''),

('550e8400-e29b-41d4-a716-446655440070', '_menu_item_type', 'taxonomy'),
('550e8400-e29b-41d4-a716-446655440070', '_menu_item_object', 'product_cat'),
('550e8400-e29b-41d4-a716-446655440070', '_menu_item_object_id', '550e8400-e29b-41d4-a716-446655440040'),
('550e8400-e29b-41d4-a716-446655440070', '_menu_item_url', '/san-pham'),

('550e8400-e29b-41d4-a716-446655440071', '_menu_item_type', 'taxonomy'),
('550e8400-e29b-41d4-a716-446655440071', '_menu_item_object', 'category'),
('550e8400-e29b-41d4-a716-446655440071', '_menu_item_object_id', '550e8400-e29b-41d4-a716-446655440043'),
('550e8400-e29b-41d4-a716-446655440071', '_menu_item_url', '/tin-tuc'),

('550e8400-e29b-41d4-a716-446655440072', '_menu_item_object_id', '550e8400-e29b-41d4-a716-446655440061'),
('550e8400-e29b-41d4-a716-446655440072', '_menu_item_url', '/gioi-thieu'),

('550e8400-e29b-41d4-a716-446655440073', '_menu_item_object_id', '550e8400-e29b-41d4-a716-446655440062'),
('550e8400-e29b-41d4-a716-446655440073', '_menu_item_url', '/lien-he');

-- 8. TERM RELATIONSHIPS
INSERT INTO term_relationships (object_id, term_taxonomy_id, term_order) VALUES

-- Product categories
('550e8400-e29b-41d4-a716-446655440065', '550e8400-e29b-41d4-a716-446655440041', 0), -- Product 1 -> Yến sào cao cấp
('550e8400-e29b-41d4-a716-446655440066', '550e8400-e29b-41d4-a716-446655440042', 0), -- Product 2 -> Yến sào nguyên chất

-- Post categories
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440044', 0), -- Post 1 -> Kiến thức
('550e8400-e29b-41d4-a716-446655440064', '550e8400-e29b-41d4-a716-446655440044', 0), -- Post 2 -> Kiến thức

-- Post tags
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440045', 0), -- Post 1 -> Dinh dưỡng
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440046', 0), -- Post 1 -> Sức khỏe
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440048', 0), -- Post 1 -> Organic
('550e8400-e29b-41d4-a716-446655440064', '550e8400-e29b-41d4-a716-446655440045', 0), -- Post 2 -> Dinh dưỡng
('550e8400-e29b-41d4-a716-446655440064', '550e8400-e29b-41d4-a716-446655440046', 0), -- Post 2 -> Sức khỏe

-- Product tags
('550e8400-e29b-41d4-a716-446655440065', '550e8400-e29b-41d4-a716-446655440048', 0), -- Product 1 -> Organic
('550e8400-e29b-41d4-a716-446655440065', '550e8400-e29b-41d4-a716-446655440046', 0), -- Product 1 -> Sức khỏe
('550e8400-e29b-41d4-a716-446655440066', '550e8400-e29b-41d4-a716-446655440048', 0), -- Product 2 -> Organic

-- Menu relationships
('550e8400-e29b-41d4-a716-446655440069', '550e8400-e29b-41d4-a716-446655440049', 1), -- Home -> Main Menu
('550e8400-e29b-41d4-a716-446655440070', '550e8400-e29b-41d4-a716-446655440049', 2), -- Products -> Main Menu
('550e8400-e29b-41d4-a716-446655440071', '550e8400-e29b-41d4-a716-446655440049', 3), -- News -> Main Menu
('550e8400-e29b-41d4-a716-446655440072', '550e8400-e29b-41d4-a716-446655440049', 4), -- About -> Main Menu
('550e8400-e29b-41d4-a716-446655440073', '550e8400-e29b-41d4-a716-446655440049', 5); -- Contact -> Main Menu

-- 9. COMMENTS
INSERT INTO comments (id, post_id, author_name, author_email, author_url, author_ip, author_user_id, parent_id, content, status, agent, type) VALUES

-- Comments on blog post
('550e8400-e29b-41d4-a716-446655440080', '550e8400-e29b-41d4-a716-446655440063', 'Nguyễn Thị Lan', 'lan.nguyen@gmail.com', '', '192.168.1.100', NULL, NULL, 'Bài viết rất hay và bổ ích! Tôi đã biết thêm nhiều thông tin về công dụng của yến sào. Cảm ơn tác giả đã chia sẻ.', 'approved', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'comment'),

('550e8400-e29b-41d4-a716-446655440081', '550e8400-e29b-41d4-a716-446655440063', 'Trần Văn Minh', 'minh.tran@yahoo.com', '', '192.168.1.101', NULL, '550e8400-e29b-41d4-a716-446655440080', 'Đồng ý với chị Lan. Tôi đã sử dụng yến sào được 2 năm và thấy sức khỏe cải thiện rõ rệt.', 'approved', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)', 'comment'),

('550e8400-e29b-41d4-a716-446655440082', '550e8400-e29b-41d4-a716-446655440063', 'Admin', 'admin@yensao.com', 'https://yensao.com', '192.168.1.1', '550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440080', 'Cảm ơn chị Lan đã theo dõi! Chúng tôi sẽ tiếp tục chia sẻ nhiều kiến thức bổ ích khác.', 'approved', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'comment'),

-- Product reviews
('550e8400-e29b-41d4-a716-446655440083', '550e8400-e29b-41d4-a716-446655440065', 'Lê Thị Hương', 'huong.le@gmail.com', '', '192.168.1.102', '550e8400-e29b-41d4-a716-446655440013', NULL, 'Sản phẩm chất lượng tốt, yến sào nguyên chất, đóng gói cẩn thận. Giao hàng nhanh chóng. Sẽ mua lại lần sau!', 'approved', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'comment'),

('550e8400-e29b-41d4-a716-446655440084', '550e8400-e29b-41d4-a716-446655440066', 'Phạm Văn Đức', 'duc.pham@hotmail.com', '', '192.168.1.103', NULL, NULL, 'Tôi đã mua cho bố mẹ sử dụng. Chất lượng rất tốt, giá cả hợp lý. Recommend cho mọi người!', 'approved', 'Mozilla/5.0 (Android 11; Mobile)', 'comment');

-- 10. COMMENT META
INSERT INTO comment_meta (comment_id, meta_key, meta_value) VALUES

-- Rating meta for product reviews
('550e8400-e29b-41d4-a716-446655440083', 'rating', '5'),
('550e8400-e29b-41d4-a716-446655440083', 'verified_purchase', 'yes'),
('550e8400-e29b-41d4-a716-446655440083', 'helpful_votes', '12'),

('550e8400-e29b-41d4-a716-446655440084', 'rating', '4'),
('550e8400-e29b-41d4-a716-446655440084', 'verified_purchase', 'yes'),
('550e8400-e29b-41d4-a716-446655440084', 'helpful_votes', '8');

-- 11. OPTIONS (Site Settings)
INSERT INTO options (option_name, option_value, autoload) VALUES

-- Basic site settings
('site_title', 'Yến Sào Cao Cấp - Nguyên Chất Từ Thiên Nhiên', 'yes'),
('site_description', 'Chuyên cung cấp yến sào cao cấp nguyên chất từ Khánh Hòa, Nha Trang. Chất lượng đảm bảo, giá cả hợp lý.', 'yes'),
('site_url', 'https://yensao.com', 'yes'),
('admin_email', 'admin@yensao.com', 'yes'),
('default_role', 'customer', 'yes'),

-- Date and time settings
('date_format', 'd/m/Y', 'yes'),
('time_format', 'H:i', 'yes'),
('timezone_string', 'Asia/Ho_Chi_Minh', 'yes'),

-- Content settings
('posts_per_page', '12', 'yes'),
('default_post_format', 'standard', 'yes'),
('default_comment_status', 'open', 'yes'),
('require_name_email', '1', 'yes'),
('comment_registration', '0', 'yes'),
('close_comments_for_old_posts', '0', 'yes'),

-- Media settings
('thumbnail_size_w', '150', 'yes'),
('thumbnail_size_h', '150', 'yes'),
('medium_size_w', '300', 'yes'),
('medium_size_h', '300', 'yes'),
('large_size_w', '1024', 'yes'),
('large_size_h', '1024', 'yes'),
('uploads_use_yearmonth_folders', '1', 'yes'),

-- Theme settings
('active_theme', 'yensao-theme', 'yes'),
('theme_options', '{"primary_color":"#2c5530","secondary_color":"#f4f1e8","accent_color":"#c9a96e","logo_url":"/uploads/logo.png","header_layout":"centered","footer_text":"© 2024 Yến Sào Cao Cấp. All rights reserved."}', 'yes'),

-- SEO settings
('default_meta_description', 'Yến sào cao cấp nguyên chất từ Khánh Hòa, Nha Trang. Chất lượng đảm bảo, giá cả hợp lý. Giao hàng toàn quốc.', 'yes'),
('robots_txt', 'User-agent: *\nDisallow: /admin/\nDisallow: /api/\nSitemap: https://yensao.com/sitemap.xml', 'no'),

-- E-commerce settings
('currency', 'VND', 'yes'),
('currency_symbol', '₫', 'yes'),
('price_decimal_sep', ',', 'yes'),
('price_thousand_sep', '.', 'yes'),
('price_num_decimals', '0', 'yes'),

-- Contact information
('company_info', '{"name":"Công ty TNHH Yến Sào Cao Cấp","address":"123 Đường ABC, Quận 1, TP.HCM","phone":"0901 234 567","email":"info@yensao.com","business_hours":"Thứ 2 - Chủ nhật: 8:00 - 22:00","tax_code":"0123456789"}', 'yes'),

-- Social media
('social_media', '{"facebook":"https://facebook.com/yensaocaocap","instagram":"https://instagram.com/yensaocaocap","youtube":"https://youtube.com/yensaocaocap","zalo":"https://zalo.me/yensaocaocap"}', 'yes'),

-- Email settings
('smtp_settings', '{"host":"smtp.gmail.com","port":"587","username":"noreply@yensao.com","password":"encrypted_password","encryption":"tls","from_name":"Yến Sào Cao Cấp","from_email":"noreply@yensao.com"}', 'no'),

-- Analytics
('google_analytics', 'GA_MEASUREMENT_ID', 'yes'),
('facebook_pixel', 'FB_PIXEL_ID', 'yes');

-- 12. POST TRANSLATIONS
INSERT INTO post_translations (post_id, language_id, translation_id) VALUES

-- Link Vietnamese and English versions (if exists)
('550e8400-e29b-41d4-a716-446655440060', '550e8400-e29b-41d4-a716-446655440001', NULL), -- Homepage VI
('550e8400-e29b-41d4-a716-446655440061', '550e8400-e29b-41d4-a716-446655440001', NULL), -- About VI
('550e8400-e29b-41d4-a716-446655440062', '550e8400-e29b-41d4-a716-446655440001', NULL), -- Contact VI
('550e8400-e29b-41d4-a716-446655440063', '550e8400-e29b-41d4-a716-446655440001', NULL), -- Blog post 1 VI
('550e8400-e29b-41d4-a716-446655440064', '550e8400-e29b-41d4-a716-446655440001', NULL), -- Blog post 2 VI
('550e8400-e29b-41d4-a716-446655440065', '550e8400-e29b-41d4-a716-446655440001', NULL), -- Product 1 VI
('550e8400-e29b-41d4-a716-446655440066', '550e8400-e29b-41d4-a716-446655440001', NULL); -- Product 2 VI

-- 13. ACTIVITY LOGS
INSERT INTO activity_logs (user_id, object_type, object_id, action, description, ip_address, user_agent, metadata) VALUES

('550e8400-e29b-41d4-a716-446655440010', 'user', '550e8400-e29b-41d4-a716-446655440010', 'login', 'Admin user logged in', '192.168.1.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', '{"login_method":"email","remember_me":true}'),

('550e8400-e29b-41d4-a716-446655440010', 'post', '550e8400-e29b-41d4-a716-446655440065', 'create', 'Created new product: "Yến sào cao cấp Khánh Hòa"', '192.168.1.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', '{"post_type":"product","status":"published","price":"2500000"}'),

('550e8400-e29b-41d4-a716-446655440011', 'post', '550e8400-e29b-41d4-a716-446655440064', 'update', 'Updated blog post: "Cách chế biến yến sào"', '192.168.1.50', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', '{"previous_status":"draft","new_status":"published","changes":["post_content","post_title"]}'),

('550e8400-e29b-41d4-a716-446655440013', 'comment', '550e8400-e29b-41d4-a716-446655440083', 'create', 'Left a product review', '192.168.1.102', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', '{"rating":"5","product_id":"550e8400-e29b-41d4-a716-446655440065","verified_purchase":true}'),

('550e8400-e29b-41d4-a716-446655440012', 'post', '550e8400-e29b-41d4-a716-446655440063', 'publish', 'Published blog post about bird nest benefits', '192.168.1.75', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15', '{"post_type":"post","category":"kiến thức","tags":["dinh dưỡng","sức khỏe","organic"]}'),

(NULL, 'system', NULL, 'backup', 'Automated database backup completed', '127.0.0.1', 'Cron/1.0', '{"backup_size":"25.4MB","backup_file":"backup_2024_01_15.sql","tables_count":14}');

-- Update term counts
UPDATE term_taxonomy SET count = (
  SELECT COUNT(*) FROM term_relationships 
  WHERE term_relationships.term_taxonomy_id = term_taxonomy.id
);

-- Final message
SELECT 'Sample data inserted successfully!' AS message;