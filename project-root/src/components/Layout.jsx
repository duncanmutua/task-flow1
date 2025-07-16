import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
