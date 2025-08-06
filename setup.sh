#!/bin/bash

# Jiotech Docker Setup Script
echo "🚀 Setting up Jiotech Docker environment..."

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p nginx/conf.d
mkdir -p nginx/ssl
mkdir -p init-scripts
mkdir -p app
mkdir -p logs

# Create a simple init script for PostgreSQL
echo "📝 Creating database initialization script..."
cat > init-scripts/01-init.sql << 'EOF'
-- Create additional databases if needed
-- CREATE DATABASE jiotech_test;

-- Create custom user if needed
-- CREATE USER jiotech_user WITH PASSWORD '123@Long!!';
-- GRANT ALL PRIVILEGES ON DATABASE jiotech TO jiotech_user;

-- Create some basic tables (example)
\c jiotech;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id INTEGER REFERENCES users(id),
    token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (username, email, password_hash) 
VALUES ('admin', 'admin@jiotech.com', '$2b$10$example_hash_here')
ON CONFLICT (username) DO NOTHING;

ECHO 'Database initialized successfully!';
EOF

# Create a simple nginx virtual host config
echo "🌐 Creating nginx configuration..."
cat > nginx/conf.d/default.conf << 'EOF'
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://app:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /adminer {
        proxy_pass http://adminer:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
EOF

# Create a simple package.json for the app
echo "📦 Creating sample application..."
cat > app/package.json << 'EOF'
{
  "name": "jiotech-app",
  "version": "1.0.0",
  "description": "Jiotech Application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.0",
    "redis": "^4.6.7",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "dotenv": "^16.1.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
EOF

# Create a simple server.js
cat > app/server.js << 'EOF'
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.POSTGRES_DB || 'jiotech',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '123@Long!!'
});

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Jiotech API!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, created_at FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version() as version');
    res.json({ 
      status: 'Database connected successfully!',
      data: result.rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      error: 'Database connection failed',
      details: err.message 
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Jiotech server running on port ${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});
EOF

# Create docker-compose override for development
echo "🔧 Creating development override..."
cat > docker-compose.override.yml << 'EOF'
version: '3.8'

services:
  app:
    environment:
      - NODE_ENV=development
    volumes:
      - ./app:/app
      - /app/node_modules
    command: sh -c "npm install && npm run dev"
    ports:
      - "3000:3000"
    
  postgres:
    ports:
      - "5432:5432"
      
  adminer:
    ports:
      - "8080:8080"
EOF

# Make the script executable
chmod +x setup.sh

echo "✅ Setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Run: docker-compose up -d"
echo "2. Visit http://localhost for your application"
echo "3. Visit http://localhost:8080 for Adminer (database management)"
echo "4. Database credentials:"
echo "   - Host: postgres (or localhost:5432 from host)"
echo "   - Database: jiotech"
echo "   - Username: postgres"
echo "   - Password: 123@Long!!"
echo ""
echo "🔧 Useful commands:"
echo "   docker-compose up -d          # Start all services"
echo "   docker-compose down           # Stop all services"
echo "   docker-compose logs -f app    # View app logs"
echo "   docker-compose exec postgres psql -U postgres -d jiotech  # Connect to database"
echo ""
echo "Happy coding! 🎉"