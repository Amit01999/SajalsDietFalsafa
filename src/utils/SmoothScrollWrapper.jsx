import React, { useEffect, useRef } from 'react';

function SmoothScrollWrapper({ children }) {
  const scrollWrapperRef = useRef(null);
  const scrollPosition = useRef(0);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  useEffect(() => {
    // Set initial body height
    const updateBodyHeight = () => {
      const contentHeight = scrollWrapperRef.current.scrollHeight;
      document.body.style.height = `${contentHeight}px`;
    };

    // Run once on mount and whenever content changes
    updateBodyHeight();

    // Use ResizeObserver to detect content size changes
    const resizeObserver = new ResizeObserver(() => {
      updateBodyHeight();
    });

    if (scrollWrapperRef.current) {
      resizeObserver.observe(scrollWrapperRef.current);
    }

    // Smooth scroll animation function
    const smoothScroll = () => {
      // Get current scroll position from window
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate scroll difference with easing
      const scrollDiff = currentScrollY - scrollPosition.current;
      scrollPosition.current += scrollDiff * 0.1; // Adjust easing factor as needed

      // Apply the transform - this is what creates the smooth effect
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.transform = `translateY(${-scrollPosition.current}px)`;
      }

      // Dispatch custom event for scroll-dependent components like Hero1
      const smoothScrollEvent = new CustomEvent('smooth-scroll-update', {
        detail: { scrollY: scrollPosition.current },
      });
      window.dispatchEvent(smoothScrollEvent);

      // Continue animation loop
      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(smoothScroll);

    // Add resize listener for window size changes
    window.addEventListener('resize', updateBodyHeight);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', updateBodyHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="smooth-scroll-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '120vh',
        overflow: '',
      }}
    >
      <div ref={scrollWrapperRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
}

export default SmoothScrollWrapper;
