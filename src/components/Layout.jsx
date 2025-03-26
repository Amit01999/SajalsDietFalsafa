import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScrollWrapper from '../utils/SmoothScrollWrapper';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-fit">
      {/* Navbar stays fixed at the top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <Navbar />
      </div>

      {/* Add padding to account for fixed navbar */}
      <div>
        {/* Adjust this value to match your navbar height */}
        {/* The smooth scrolling content */}
        <SmoothScrollWrapper>
          <main>{children}</main>
          <Footer />
        </SmoothScrollWrapper>
      </div>
    </div>
  );
}

export default Layout;
