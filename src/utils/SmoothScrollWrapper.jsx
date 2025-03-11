import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollWrapper = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Initialize smooth-scrollbar on the container
    const scrollbar = Scrollbar.init(ref.current, {
      damping: 0.08, // Adjust smoothness
      alwaysShowTracks: false,
    });

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <div ref={ref} id="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
