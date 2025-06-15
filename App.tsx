
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ResumePage from './components/pages/ResumePage';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import { Page } from './types';
import MenuIcon from './components/icons/MenuIcon'; // Import MenuIcon

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false); // Close sidebar on navigation (for mobile)
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.About:
        return <AboutPage />;
      case Page.Resume:
        return <ResumePage />;
      case Page.Portfolio:
        return <PortfolioPage />;
      case Page.Blog:
        return <BlogPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-900 text-neutral-200 font-sans">
      {/* Mobile Header with Hamburger Menu */}
      <div className="md:hidden p-4 bg-zinc-900 flex justify-between items-center fixed top-0 left-0 right-0 z-40 shadow-lg">
        <h1 className="text-xl font-bold text-yellow-500">My Portfolio</h1>
        <button onClick={toggleSidebar} className="text-neutral-200 focus:outline-none">
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>

      <Sidebar currentPage={currentPage} navigateTo={navigateTo} isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 md:ml-80 pt-16 md:pt-0 overflow-y-auto bg-zinc-800">
        <div className="p-6 md:p-12">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
