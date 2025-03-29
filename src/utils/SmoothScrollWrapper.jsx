import React, { useEffect, useRef } from 'react';

function SmoothScrollWrapper({ children }) {
  const scrollWrapperRef = useRef(null);
  const scrollPosition = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    // ✅ Function to update body height dynamically
    const updateBodyHeight = () => {
      if (scrollWrapperRef.current) {
        const contentHeight = scrollWrapperRef.current.scrollHeight;
        document.body.style.height = `${contentHeight}px`;
        document.documentElement.style.height = `${contentHeight}px`;
      }
    };

    updateBodyHeight(); // ✅ Run initially

    // ✅ Observe size changes dynamically
    const resizeObserver = new ResizeObserver(updateBodyHeight);
    if (scrollWrapperRef.current) {
      resizeObserver.observe(scrollWrapperRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const smoothScroll = () => {
      const currentScrollY = window.scrollY;

      // ✅ Smooth scrolling effect using easing
      scrollPosition.current += (currentScrollY - scrollPosition.current) * 0.1;

      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.transform = `translateY(${-scrollPosition.current}px)`;
      }

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      className="smooth-scroll-container"
      style={{
        position: 'fixed', // ✅ Keep fixed for smooth scrolling
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform',
      }}
    >
      <div ref={scrollWrapperRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
}

export default SmoothScrollWrapper;
