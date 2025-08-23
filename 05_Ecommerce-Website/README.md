# React Ecommerce Website

A modern, responsive ecommerce website built with React, TypeScript, and Tailwind CSS. This project demonstrates a complete online store with product browsing, filtering, search functionality, and product details.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through a comprehensive product catalog with pagination
- **Advanced Filtering**: Filter products by category, price range, and search queries
- **Search Functionality**: Real-time search with keyword suggestions
- **Product Details**: Detailed product pages with full product information
- **Responsive Design**: Mobile-first design that works on all devices

### User Experience
- **Sidebar Navigation**: Easy-to-use sidebar with filtering options
- **Top Sellers Section**: Highlighted popular products
- **Popular Blogs**: Content section for blog posts
- **Sorting Options**: Sort products by price (expensive/cheap) and popularity
- **Pagination**: Navigate through large product catalogs efficiently

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Global state management for filters and search
- **Axios**: HTTP client for API calls
- **Tailwind CSS**: Utility-first CSS framework for styling

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router DOM 7.8.1
- **HTTP Client**: Axios 1.11.0
- **Icons**: Lucide React 0.541.0
- **Build Tool**: Vite 7.1.2
- **Linting**: ESLint 9.33.0

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 05_Ecommerce-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/
│   ├── BookCard.tsx          # Product card component
│   ├── FilterContext.tsx     # Global filter state management
│   ├── MainContent.tsx       # Main product grid and pagination
│   ├── PopularBlogs.tsx      # Blog section component
│   ├── ProductPage.tsx       # Individual product page
│   ├── Sidebar.tsx           # Filter sidebar component
│   └── TopSellers.tsx        # Top sellers section
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles
```

## 🎯 Key Components

### MainContent
- Handles product fetching from API
- Implements filtering and sorting logic
- Manages pagination
- Renders product grid

### Sidebar
- Search functionality
- Category filtering
- Price range filtering
- Keyword suggestions
- Filter reset functionality

### BookCard
- Displays individual product information
- Links to product detail pages
- Responsive product cards

### FilterContext
- Global state management for filters
- Search query state
- Category selection
- Price range state

## 🔧 API Integration

The application integrates with the [DummyJSON API](https://dummyjson.com/) to fetch:
- Product catalog with pagination
- Product search results
- Product categories
- Individual product details

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design principles
- Modern UI components
- Consistent spacing and typography
- Hover effects and transitions

## 🚀 Deployment

To deploy this application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the React Monster Class course by HuXn WebDev.

## 👨‍💻 Author

Created as part of the React Monster Class course by HuXn WebDev.

---

**Note**: This is a learning project demonstrating modern React development practices with TypeScript and Tailwind CSS.
