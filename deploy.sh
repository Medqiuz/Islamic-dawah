#!/bin/bash

echo "🚀 Deploying Islamic Da'wah Platform..."

# Create necessary directories
mkdir -p backend/database
mkdir -p frontend/public
mkdir -p admin-panel/public

# Initialize JSON databases
echo '[]' > backend/database/questions.json
echo '[]' > backend/database/users.json
echo '[]' > backend/database/content.json

# Install dependencies
echo "📦 Installing dependencies..."
cd backend && npm install
cd ../frontend && npm install
cd ../admin-panel && npm install

echo "✅ Installation complete!"
echo ""
echo "🔄 Starting servers..."
echo ""
echo "📡 Backend API: http://localhost:5000"
echo "🌐 Frontend: http://localhost:3000"
echo "👨‍💼 Admin Panel: http://localhost:3001"
echo ""
echo "🔑 Default Admin Login:"
echo "   Username: admin"
echo "   Password: admin123"
echo ""
echo "🚀 To start all servers, open 3 terminals and run:"
echo "   Terminal 1: cd backend && npm start"
echo "   Terminal 2: cd frontend && npm start"
echo "   Terminal 3: cd admin-panel && npm start"