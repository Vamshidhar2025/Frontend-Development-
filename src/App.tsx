import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { useResponsiveScale } from './hooks/useResponsiveScale';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scale = useResponsiveScale();

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      
      <div className="flex min-h-screen pt-16">
        <Sidebar isOpen={isMenuOpen} />
        
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-2">Card {i}</h2>
                  <p className="text-gray-600">
                    This is a sample card with some content. You can replace this with your actual content.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <RightPanel />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;