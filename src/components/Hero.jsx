import heroimg from '../assets/img/HomepageHeroimage.png';
import serviceimg from '../assets/img/Our-Service-Providers.png';
import appointmentimg from '../assets/img/Book-An-Appointment.png';
import tipsimg from '../assets/img/Quick-Tips.png';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-screen xl:min-h-screen flex items-center justify-center">
      {/* Background Image with better responsive handling */}
      <img
        src={heroimg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover lg:object-top"
      />

      {/* Overlay with Services - improved positioning */}
      <div className="absolute max-sm:mt-16 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-sm:w-3/5 sm:w-4/5  md:w-2/3 lg:w-1/2 bg-black bg-opacity-30 text-white text-center z-10  overflow-hidden lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* Service Providers */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 border-b sm:border-b-0 sm:border-r border-white">
            <p className="text-max-sm max-sm:text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
              <Link
                to="/portfolio"
                className=" font-medium hover:text-[#22C55E] hover:underline transition-all duration-300"
              >
                Our Service Providers
              </Link>
            </p>
            <div className="h-6 max-sm:h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center">
              <img
                src={serviceimg}
                alt="Service Providers"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Book An Appointment */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 border-b sm:border-b-0 sm:border-r border-white">
            <p className="text-max-sm max-sm:text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
              <Link
                to="/appointment"
                className=" font-medium hover:text-[#22C55E] hover:underline transition-all duration-300"
              >
                Book An Appointment
              </Link>
            </p>
            <div className="h-6 max-sm:h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center">
              <img
                src={appointmentimg}
                alt="Book Appointment"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Quick Tips */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
            <p className="text-max-sm max-sm:text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
              <Link
                to="/tips"
                className=" font-medium hover:text-[#22C55E] hover:underline transition-all duration-300"
              >
                Quick Tips
              </Link>
            </p>
            <div className="h-6 max-sm:h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center">
              <img
                src={tipsimg}
                alt="Quick Tips"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
