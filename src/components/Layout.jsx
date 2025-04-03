import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScrollWrapper from '../utils/SmoothScrollWrapper';
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Ensure SmoothScrollWrapper takes full height */}
      <div className="flex-grow overflow-hidden">
        <SmoothScrollWrapper>
          <main className="flex flex-col min-h-screen pt-[90px]">
            {children}
          </main>
          <Footer /> {/* Keep Footer inside SmoothScrollWrapper */}
        </SmoothScrollWrapper>
      </div>
    </div>
  );
}
export default Layout;
