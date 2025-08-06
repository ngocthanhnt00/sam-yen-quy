-- =========================================
-- WORDPRESS-INSPIRED MODERN CMS STRUCTURE
-- =========================================

-- Users table (WordPress: wp_users)
users (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username          VARCHAR(60) UNIQUE NOT NULL,
  email             VARCHAR(100) UNIQUE NOT NULL,
  password_hash     TEXT NOT NULL,
  display_name      VARCHAR(250),
  status            VARCHAR(20) DEFAULT 'active', -- active, inactive, banned
  email_verified_at TIMESTAMP NULL,
  last_login_at     TIMESTAMP NULL,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW()
)

-- User metadata (WordPress: wp_usermeta)
user_meta (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  meta_key          VARCHAR(255) NOT NULL,
  meta_value        TEXT,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  INDEX idx_user_meta_user_key (user_id, meta_key),
  INDEX idx_user_meta_key (meta_key)
)

-- Posts table - Universal content (WordPress: wp_posts)
-- Covers: pages, posts, products, media, menus, etc.
posts (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id         UUID NOT NULL REFERENCES users(id),
  parent_id         UUID NULL REFERENCES posts(id),
  post_type         VARCHAR(50) NOT NULL DEFAULT 'post', -- post, page, attachment, nav_menu_item, product, etc.
  post_status       VARCHAR(20) NOT NULL DEFAULT 'draft', -- draft, published, private, trash
  post_title        TEXT,
  post_content      LONGTEXT,
  post_excerpt      TEXT,
  post_name         VARCHAR(200), -- slug
  post_password     VARCHAR(255),
  menu_order        INT DEFAULT 0,
  comment_status    VARCHAR(20) DEFAULT 'open', -- open, closed
  ping_status       VARCHAR(20) DEFAULT 'open', -- open, closed
  guid              VARCHAR(255), -- global unique identifier
  post_mime_type    VARCHAR(100), -- for attachments
  comment_count     INT DEFAULT 0,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_posts_type_status (post_type, post_status),
  INDEX idx_posts_author (author_id),
  INDEX idx_posts_parent (parent_id),
  INDEX idx_posts_name (post_name),
  INDEX idx_posts_date (created_at)
)

-- Post metadata (WordPress: wp_postmeta)
post_meta (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id           UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  meta_key          VARCHAR(255) NOT NULL,
  meta_value        LONGTEXT,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_post_meta_post_key (post_id, meta_key),
  INDEX idx_post_meta_key (meta_key),
  INDEX idx_post_meta_value (meta_value(191))
)

-- Terms - Categories, Tags, etc. (WordPress: wp_terms)
terms (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name              VARCHAR(200) NOT NULL,
  slug              VARCHAR(200) NOT NULL,
  term_group        BIGINT DEFAULT 0,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_terms_slug (slug),
  INDEX idx_terms_name (name)
)

-- Term taxonomy (WordPress: wp_term_taxonomy)
term_taxonomy (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id           UUID NOT NULL REFERENCES terms(id) ON DELETE CASCADE,
  taxonomy          VARCHAR(32) NOT NULL, -- category, post_tag, nav_menu, product_cat, etc.
  description       LONGTEXT,
  parent_id         UUID NULL REFERENCES term_taxonomy(id),
  count             BIGINT DEFAULT 0,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  UNIQUE KEY unique_term_taxonomy (term_id, taxonomy),
  INDEX idx_taxonomy (taxonomy),
  INDEX idx_term_taxonomy_parent (parent_id)
)

-- Term relationships (WordPress: wp_term_relationships)
term_relationships (
  object_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  term_taxonomy_id  UUID NOT NULL REFERENCES term_taxonomy(id) ON DELETE CASCADE,
  term_order        INT DEFAULT 0,
  created_at        TIMESTAMP DEFAULT NOW(),
  
  PRIMARY KEY (object_id, term_taxonomy_id),
  INDEX idx_term_relationships_term_taxonomy (term_taxonomy_id)
)

-- Term metadata (WordPress: wp_termmeta)
term_meta (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id           UUID NOT NULL REFERENCES terms(id) ON DELETE CASCADE,
  meta_key          VARCHAR(255) NOT NULL,
  meta_value        LONGTEXT,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_term_meta_term_key (term_id, meta_key),
  INDEX idx_term_meta_key (meta_key)
)

-- Comments (WordPress: wp_comments)
comments (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id           UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  author_name       TINYTEXT,
  author_email      VARCHAR(100),
  author_url        VARCHAR(200),
  author_ip         VARCHAR(100),
  author_user_id    UUID NULL REFERENCES users(id) ON DELETE SET NULL,
  parent_id         UUID NULL REFERENCES comments(id),
  content           TEXT NOT NULL,
  status            VARCHAR(20) DEFAULT 'pending', -- pending, approved, spam, trash
  agent             VARCHAR(255),
  type              VARCHAR(20) DEFAULT 'comment', -- comment, pingback, trackback
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_comments_post_status (post_id, status),
  INDEX idx_comments_author_email (author_email),
  INDEX idx_comments_parent (parent_id),
  INDEX idx_comments_date (created_at)
)

-- Comment metadata (WordPress: wp_commentmeta)
comment_meta (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id        UUID NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  meta_key          VARCHAR(255) NOT NULL,
  meta_value        LONGTEXT,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_comment_meta_comment_key (comment_id, meta_key),
  INDEX idx_comment_meta_key (meta_key)
)

-- Options/Settings (WordPress: wp_options)
options (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  option_name       VARCHAR(191) UNIQUE NOT NULL,
  option_value      LONGTEXT,
  autoload          VARCHAR(20) DEFAULT 'yes', -- yes, no, on, off
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_options_autoload (autoload),
  INDEX idx_options_name (option_name)
)

-- Languages support
languages (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code              VARCHAR(10) UNIQUE NOT NULL, -- en_US, vi_VN
  name              VARCHAR(100) NOT NULL,
  native_name       VARCHAR(100),
  is_default        BOOLEAN DEFAULT false,
  is_active         BOOLEAN DEFAULT true,
  text_direction    VARCHAR(3) DEFAULT 'ltr', -- ltr, rtl
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW()
)

-- Translations for posts
post_translations (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id           UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  language_id       UUID NOT NULL REFERENCES languages(id),
  translation_id    UUID NULL REFERENCES posts(id), -- link to translated post
  created_at        TIMESTAMP DEFAULT NOW(),
  
  UNIQUE KEY unique_post_language (post_id, language_id),
  INDEX idx_post_translations_language (language_id),
  INDEX idx_post_translations_translation (translation_id)
)

-- Activity/Audit logs
activity_logs (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NULL REFERENCES users(id) ON DELETE SET NULL,
  object_type       VARCHAR(50), -- post, user, comment, etc.
  object_id         UUID,
  action            VARCHAR(50) NOT NULL, -- create, update, delete, login, etc.
  description       TEXT,
  ip_address        VARCHAR(45),
  user_agent        TEXT,
  metadata          JSONB,
  created_at        TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_activity_logs_user (user_id),
  INDEX idx_activity_logs_object (object_type, object_id),
  INDEX idx_activity_logs_action (action),
  INDEX idx_activity_logs_date (created_at)
)
