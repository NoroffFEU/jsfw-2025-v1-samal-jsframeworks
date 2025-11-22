# Zeebra - Modern E-Commerce Store

A modern, fully-functional e-commerce web application built with React, TypeScript, and Tailwind CSS. Features include product browsing, search and filtering, shopping cart management, and a checkout flow.

🔗 **Live Demo:** [https://zeebra.netlify.app/](https://zeebra.netlify.app/)

## Features

- 🛍️ **Product Catalog** - Browse products with images, prices, and ratings
- 🔍 **Search & Filter** - Search by name/description and sort by price or alphabetically
- 🛒 **Shopping Cart** - Add, remove, and adjust product quantities with localStorage persistence
- 💰 **Dynamic Pricing** - Automatic discount calculations and price display
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean, intuitive interface with toast notifications
- ✅ **Contact Form** - Form validation for customer inquiries
- 🧪 **Unit Tests** - Comprehensive testing with Vitest and Testing Library

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS 4
- **State Management:** React Context API + localStorage
- **Build Tool:** Vite
- **Testing:** Vitest + React Testing Library
- **Code Quality:** Biome, ESLint
- **Notifications:** React Toastify

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NoroffFEU/jsfw-2025-v1-samal-jsframeworks.git
cd jsfw-2025-v1-samal-jsframeworks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run format` - Format code with Biome

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Generic UI elements (Button, Filter, SearchBar)
│   ├── ProductCards/  # Product card component
│   └── loadingSkeleton/ # Loading state components
├── features/          # Feature-based modules
│   ├── layout/        # Header & Footer
│   ├── products/      # Product-related components & logic
│   └── shoppingCart/  # Cart context & components
├── pages/             # Page components
│   ├── Home.tsx
│   ├── Contact/
│   ├── checkout/
│   └── ViewSingleProduct.tsx
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── config/            # Configuration & constants
```

## API

This project fetches product data from the Noroff API:
- Base URL: `https://v2.api.noroff.dev`
- Endpoint: `/online-shop`

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is part of the Noroff Front-End Development curriculum.

## Author

Samal - [GitHub Profile](https://github.com/NoroffFEU)
