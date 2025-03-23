import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../assets/img/HomepageHeroimage.png';
import serviceimg from '../assets/img/Providers.png';
import appointmentimg from '../assets/img/Appointment.png';
import tipsimg from '../assets/img/Tips.png';
import img1 from '../assets/img/1.-CMag-Baby.png';
import img2 from '../assets/img/6.-Body-Reshaping.png';
import img3 from '../assets/img/3.-Fatty-Liver.png';
import img4 from '../assets/img/7.-Mens-Sexual-Health.png';
import img5 from '../assets/img/Bone-Joint-Health.png';
import img6 from '../assets/img/10.-Anti-aging-protocols.png';
import img7 from '../assets/img/Pregnancy-Postpartum.png';
import img8 from '../assets/img/5.-Blood-Sugar.png';
import img9 from '../assets/img/4.-Diabetes.png';
import img10 from '../assets/img/Cancer.png';
import img11 from '../assets/img/2.-PCOS-Female-Hormonal-Balance.png';

const programsData = [
  {
    title: 'CMag Baby',
    link: '/cmag-baby',
    img: img1,
    color: 'bg-green-100',
    id: 1,
  },
  {
    title: 'Body Reshaping',
    link: '/body-reshaping',
    img: img2,
    color: 'bg-pink-100',
    id: 2,
  },
  {
    title: 'Fatty Liver',
    link: '/fatty-liver',
    img: img3,
    color: 'bg-pink-200',
    id: 3,
  },
  {
    title: 'Mens Sexual Health',
    link: '/mens-sexual-health',
    img: img4,
    color: 'bg-gray-100',
    id: 4,
  },
  {
    title: 'Bone & Joint Health',
    link: '/bone-joint-health',
    img: img5,
    color: 'bg-pink-200',
    id: 5,
  },
  {
    title: 'Anti-Aging Protocols',
    link: '/anti-aging-protocols',
    img: img6,
    color: 'bg-green-100',
    id: 6,
  },
  {
    title: 'Pregnancy & Postpartum',
    link: '/pregnancy-postpartum',
    img: img7,
    color: 'bg-gray-100',
    id: 7,
  },
  {
    title: 'Heart Health',
    link: '/heart-health',
    img: img8,
    color: 'bg-blue-100',
    id: 8,
  },
  {
    title: 'Diabetes',
    link: '/diabetes',
    img: img9,
    color: 'bg-green-200',
    id: 9,
  },
  {
    title: 'Cancer',
    link: '/cancer',
    img: img10,
    color: 'bg-pink-100',
    id: 10,
  },
  {
    title: 'PCOS & Female Hormonal Balance',
    link: '/pcos-female-hormonal-balance',
    img: img11,
    color: 'bg-blue-100',
    id: 11,
  },
];

const Hero = () => {
  const programsRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const serviceProvidersRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    // Function to handle smooth scroll updates
    const handleSmoothScroll = e => {
      let scrollY = 0;

      // Get scroll position from custom event if available
      if (e && e.detail && e.detail.scrollY !== undefined) {
        scrollY = e.detail.scrollY;
      } else {
        // Fallback to window scroll position
        scrollY = window.pageYOffset || document.documentElement.scrollTop;
      }

      // Check if programs section is in view
      if (programsRef.current) {
        const rect = programsRef.current.getBoundingClientRect();
        // Start scroll effect when programs section is near viewport
        if (rect.top <= window.innerHeight * 0.9) {
          setStartScroll(true);

          // Calculate parallax effect (smooth movement)
          const parallaxOffset = scrollY * 0.2;
          setScrollOffset(parallaxOffset);
        }
      }
    };

    // Listen to custom event from SmoothScrollWrapper
    window.addEventListener('smooth-scroll-update', handleSmoothScroll);

    // Also listen to regular scroll as backup
    window.addEventListener('scroll', handleSmoothScroll);

    // Initial check
    handleSmoothScroll();

    return () => {
      window.removeEventListener('smooth-scroll-update', handleSmoothScroll);
      window.removeEventListener('scroll', handleSmoothScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="will-change-transform">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full max-sm:h-[80vh] sm:min-h-[70vh] md:min-h-[100vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroimg || '/placeholder.svg'}
            alt="Hero background"
            className="-mt-1 w-full h-full max-sm:object-none max-sm:scale-100 sm:object-contain md:object-cover max-md:scale-110 md:translate-y-[10%]"
            style={{
              willChange: 'transform',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}
          />
        </div>

        {/* Service Providers Section (Moves with Scroll) */}
        <div
          ref={serviceProvidersRef}
          className="absolute max-sm:mt-8 sm:mt-12 md:mt-16 lg:mt-32 left-1/2 top-1/2  max-sm:top-[420px] transform -translate-x-1/2 -translate-y-1/3  w-11/12 max-sm:w-8/12 sm:w-4/5 md:w-2/3 lg:w-1/2 bg-black bg-opacity-30 text-white text-center z-10 overflow-hidden"
          style={{
            transform: `translate(-50%, calc(-50% - ${
              startScroll ? scrollOffset : 0
            }px))`,
            willChange: 'transform',
            transition: 'transform 0.05s linear', // Add very small transition for smoother movement
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex sm:flex-col gap-2 items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 max-sm:border-b-1  border-b sm:border-b-0 sm:border-r border-white">
              <p className="text-2xl sm:text-base md:text-lg lg:text-xl sm:font-semibold mb-1 sm:mb-2 max-sm:whitespace-pre-line ">
                <Link
                  to="/portfolio"
                  className="sm:font-medium font-[27px]  hover:text-[#22C55E] hover:underline transition-all"
                >
                  Our Service Providers
                </Link>
              </p>
              <img
                src={serviceimg || '/placeholder.svg'}
                alt="Service Providers"
                className="h-12 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <div className="flex sm:flex-col gap-2 items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6  max-sm:border-b-1   border-b  sm:border-b-0 sm:border-r border-white">
              <p className="text-2xl sm:text-base md:text-lg lg:text-xl sm:font-semibold mb-1 sm:mb-2">
                <Link
                  to="/appointment"
                  className="sm:font-medium font-[27px]  hover:text-[#22C55E] hover:underline transition-all"
                >
                  Book An Appointment
                </Link>
              </p>
              <img
                src={appointmentimg || '/placeholder.svg'}
                alt="Book Appointment"
                className="h-12 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <div className="flex sm:flex-col items-center gap-2 justify-center p-2 sm:p-3 md:p-4 lg:p-6">
              <p className="text-2xl sm:text-base   md:text-lg lg:text-xl sm:font-semibold mb-1 sm:mb-2 ml-8">
                <Link
                  to="/tips"
                  className="sm:font-medium font-[27px]  hover:text-[#22C55E] hover:underline transition-all"
                >
                  Quick Tips
                </Link>
              </p>
              <img
                src={tipsimg || '/placeholder.svg'}
                alt="Quick Tips"
                className="h-12 sm:h-12 md:h-14 w-auto object-contain max-sm:ml-14 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section (Moves with Scroll) */}
      <section
        ref={programsRef}
        className="w-full bg-white pt-8 px-10"
        style={{
          transform: `translateY(${startScroll ? -scrollOffset : 0}px)`,
          transition: 'transform 0.05s linear', // Add small transition for smoother movement
          position: 'relative',
          zIndex: 20,
          marginTop: '-100px', // Negative margin to overlap with hero
          willChange: 'transform', // Performance optimization
        }}
      >
        <div className="p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-6 sm:my-8 md:my-12 mx-4 sm:mx-8 md:mx-12">
            Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {programsData.map((program, index) => (
              <Link to={program.link} key={index} className="block">
                <div
                  className={`p-4 sm:p-6 rounded-lg shadow-md ${program.color} flex flex-col items-center text-center h-full`}
                >
                  <img
                    src={program.img || '/placeholder.svg'}
                    alt={program.title}
                    className="h-16 sm:h-20 w-auto mb-2 sm:mb-4"
                  />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {program.title}
                  </h3>
                  <button className="px-3 sm:px-4 py-1 sm:py-2 border border-black rounded-full mt-2 sm:mt-4 hover:bg-black hover:text-white transition text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
