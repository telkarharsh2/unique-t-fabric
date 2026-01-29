# UniqueT Fabric 🧵✨

**UniqueT Fabric** is a modern, high-performance e-commerce landing page designed to celebrate India's rich textile heritage. Built with a focus on aesthetics, user experience, and performance, this project showcases a premium fabric collection with a seamless shopping experience.

## 🚀 Features

-   **Premium UI/UX Design**: A visually stunning interface with a Maroon, Golden, and Black color theme, reflecting elegance and tradition.
-   **Responsive & Mobile-First**: Fully optimized for all device sizes, ensuring a smooth experience on desktops, tablets, and mobile phones.
-   **Advanced Animations**:
    -   **GSAP & Vanilla Tilt**: Interactive hover effects and smooth animations.
    -   **AOS (Animate On Scroll)**: Element reveals on scroll for engagement.
    -   **Lenis**: Silky smooth scrolling experience.
-   **Smart Features**:
    -   **Skeleton Loading**: polished loading states for a better perceived performance.
    -   **Chatbot Assistant**: AI-powered assistant to help users with queries about products, policies, and more.
    -   **Internationalization (i18n)**: Built-in support for multiple languages (currently configured).
-   **Commerce Ready**:
    -   **Product Showcase**: "Trending Products", "Budget Buys", and "New Arrivals" sections.
    -   **Trust Building**: "Why Choose Us" and "Facilities" sections to build customer confidence.
    -   **App Promotion**: "Coming Soon" section for the upcoming mobile app.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**:
    -   [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
    -   [Sass (SCSS)](https://sass-lang.com/) (Custom styles)
    -   [Bootstrap](https://getbootstrap.com/) (Grid & Layouts)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: GSAP, AOS, Vanilla-Tilt
-   **Internationalization**: i18next
-   **Linting**: ESLint

## 📂 Project Structure

```bash
src/
├── assets/         # Static assets (images, fonts)
├── components/     # Reusable UI components
│   ├── ui/         # Generic UI elements (Buttons, Cards)
│   ├── Hero/       # Hero section components
│   ├── layout/     # Header, Footer, Layout wrappers
│   └── ...
├── context/        # React Context API (Global state)
├── hooks/          # Custom React Hooks
├── locales/        # Translation files (i18n)
├── pages/          # Application pages/routes
├── styles/         # Global styles and SCSS variables
├── utils/          # Helper functions and constants
├── App.jsx         # Main Application component
├── main.jsx        # Entry point
└── i18n.js         # Internationalization config
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/unique-t-fabric.git
    cd unique-t-fabric
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
