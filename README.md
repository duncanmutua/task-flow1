
# TaskFlow - React Task Management Application

🚀 **Week 3 Assignment: React.js, JSX, and Tailwind CSS – Mastering Front-End Development**

A comprehensive React application demonstrating modern component architecture, state management, API integration, and responsive design using TypeScript and Tailwind CSS.

## 🌟 Features

### ✅ Task Management
- **Create Tasks**: Add new tasks with title and description
- **Mark as Complete**: Toggle task completion status
- **Delete Tasks**: Remove unwanted tasks
- **Filter Tasks**: View all, active, or completed tasks
- **Search Tasks**: Find tasks by title or description
- **Persistent Storage**: Tasks saved to local storage
- **Statistics Dashboard**: View task completion metrics

### 🔌 API Integration
- **JSONPlaceholder API**: Fetch users and posts data
- **Search Functionality**: Filter API results in real-time
- **Pagination**: Navigate through large datasets
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error management and retry options
- **Responsive Cards**: Beautiful data presentation

### 🎨 Design & UX
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with persistence
- **Modern UI Components**: Reusable Button, Card, and Layout components
- **Smooth Animations**: Tailwind-powered transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🏗️ Architecture
- **Component-Based**: Modular, reusable UI components
- **Custom Hooks**: `useLocalStorage`, `useTheme` for state management
- **React Context**: Theme management across the application
- **TypeScript**: Full type safety and IntelliSense support
- **React Router**: Multi-page navigation with active route highlighting

## 🛠️ Technologies Used

- **React 18** - Component framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **React Query** - Server state management
- **Shadcn/UI** - High-quality component library

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd taskflow-app
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
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 📱 Screenshots

### Dashboard
![Dashboard Screenshot](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)
*Modern dashboard with feature overview and quick navigation*

### Task Management
![Task Management Screenshot](https://via.placeholder.com/800x400?text=Task+Management+Screenshot)
*Comprehensive task management with filtering and search*

### API Explorer
![API Explorer Screenshot](https://via.placeholder.com/800x400?text=API+Explorer+Screenshot)
*Interactive API data exploration with pagination*

### Dark Mode
![Dark Mode Screenshot](https://via.placeholder.com/800x400?text=Dark+Mode+Screenshot)
*Beautiful dark theme throughout the application*

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── tasks/
│   │   └── TaskManager.tsx     # Task management logic
│   ├── api/
│   │   └── ApiExplorer.tsx     # API data exploration
│   └── ui/
│       ├── button-variants.tsx # Custom button component
│       └── card-component.tsx  # Reusable card component
├── hooks/
│   ├── useTheme.tsx           # Theme management hook
│   └── useLocalStorage.tsx    # Local storage hook
├── pages/
│   ├── Dashboard.tsx          # Landing page
│   ├── Tasks.tsx              # Task management page
│   ├── ApiData.tsx            # API explorer page
│   └── NotFound.tsx           # 404 page
├── lib/
│   └── utils.ts               # Utility functions
└── App.tsx                    # Main application component
```

## 🎯 Learning Objectives Achieved

### ✅ Component Architecture
- Created reusable UI components (Button, Card, Navbar, Footer)
- Implemented proper prop interfaces with TypeScript
- Demonstrated component composition and reusability
- Used layout components for consistent structure

### ✅ State Management & Hooks
- **useState**: Managing component state for tasks, filters, and UI state
- **useEffect**: Side effects for data loading and localStorage sync
- **useContext**: Global theme management across components
- **Custom Hooks**: `useLocalStorage` for data persistence, `useTheme` for theme switching

### ✅ API Integration
- Fetched data from JSONPlaceholder API (users and posts)
- Implemented loading and error states
- Added search functionality with real-time filtering
- Created pagination for large datasets
- Proper error handling with retry mechanisms

### ✅ Tailwind CSS Mastery
- Responsive design with mobile-first approach
- Dark mode implementation with theme persistence
- Custom animations and transitions
- Utility-first styling approach
- Component-specific styling patterns

## 🚀 Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for continuous deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 Educational Value

This project serves as a comprehensive example of:
- Modern React development patterns
- TypeScript integration in React applications
- Responsive design with Tailwind CSS
- State management best practices
- API integration patterns
- Component architecture principles
- Development workflow with Vite

Perfect for learning React fundamentals and advanced concepts!

---

**Built with ❤️ for educational purposes**
