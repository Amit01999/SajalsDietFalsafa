import React from 'react';
import p1 from '../assets/img/Portfolio/p1.png';
import p2 from '../assets/img/Portfolio/p2.png';
import p3 from '../assets/img/Portfolio/p3.png';

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Portfolio</h2>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src={p1}
            alt="Profile"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <img
            src={p2}
            alt="Professional"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <p className="text-gray-700 leading-relaxed mb-4">
          ক্রিশ্চিয়ান মিশনারিদের মুসলিম সন্ন্যাস ধারা বৃদ্ধির ও মানবসেবা
          ইনস্টিটিউটের ১৬ তম ব্যাচ একুশে করোনা ব্যাচ হিসেবে ২০১৬-১৭ শিক্ষাবর্ষে
          ব্রাহ্মণবাড়িয়া শেষ করেন। পরবর্তীতে তিনি এমবিএস থেকে একাডেমিক
          গ্র্যাজুয়েশন করেন।
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          তিনি এবং বর্তমানে কাজ করছেন স্বায়ত্তশাসিত:
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>
            Assistance and Rehabilitation for Physically Vulnerable (Bangladesh)
          </li>
          <li>Society for Health Extension and Development (Bangladesh)</li>
          <li>Terre Des Hommes (Switzerland, Bangladesh Emergency Mission)</li>
        </ul>

        {/* Additional Information */}
        <p className="text-gray-700 leading-relaxed mb-4">
          সুইস অলাভজনক সংস্থা Terre Des Hommes এর টেকনিক্যাল সাপোর্ট (টিডিএইচ)
          এবং বাংলাদেশের নেটওয়ার্কিং কমিউনিটি অটিস্টিক হিসেবে তিনি বিভিন্ন
          দায়িত্ব পালন করেছেন এবং ফোকাল পার্সন হিসেবে এথিক্যাল কনসাল্টিং
          সেক্টরের সাথে যুক্ত রয়েছেন।
        </p>

        {/* Links */}
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Explore More:</p>
          <a
            href="https://youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
          >
            YouTube Channel
          </a>
          <a
            href="https://t.me/DietFalsafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            Telegram
          </a>
        </div>

        {/* More Images */}
        <div className=" mt-8">
          <img
            src={p3}
            alt="Person"
            className="w-full   rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
