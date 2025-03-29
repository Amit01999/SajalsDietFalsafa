import React from 'react';
import p1 from '../assets/img/Portfolio/p1.png';
import p2 from '../assets/img/Portfolio/p2.png';
import p3 from '../assets/img/Portfolio/p3.png';

const Portfolio = () => {
  return (
    <section className="bg-white py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
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
        <p className=" leading-relaxed mb-4 text-[#606060] text-[15px] font-medium">
          ক্লিনিক্যাল নিউট্রিশনিস্ট মুহাম্মাদ সজল ঢাবির পুষ্টি ও খাদ্যবিজ্ঞান
          ইন্সটিটিউটের ১৬ তম ব্যাচ এবং অমর একুশে হলের ছাত্র হিসেবে ২০১৬-১৭
          শিক্ষাবর্ষে গ্র‍্যাজুয়েশান শেষ করেন। পরবর্তীতে তিনি এনইউবি থেকে
          এমপিএইচ সম্পন্ন করেন।
        </p>
        <p className="text-[#606060] text-[15px] font-medium leading-relaxed mb-4">
          তিনি এবং বর্তমানে কাজ করছেন স্বায়ত্তশাসিত:
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 text-[#606060] text-[15px] font-medium mb-4">
          <li>
            Assistance and Rehabilitation for Physically Vulnerable (Bangladesh)
          </li>
          <li>Society for Health Extension and Development (Bangladesh)</li>
          <li>Terre Des Hommes (Switzerland, Bangladesh Emergency Mission)</li>
        </ul>

        {/* Additional Information */}
        <p className="text-[#606060] text-[15px] font-medium leading-relaxed mb-4">
          সুইস অর্গানাইজেশান Terre Des Hommes এর টেকনিক্যাল এক্সপার্ট
          (নিউট্রিশন) এবং ন্যাশনাল নিউট্রিশন কোঅর্ডিনেটর(কমিউনিটি আউটরিচ) হিসেবে
          তিনি দায়িত্ব পালন করেছেন এবং ফোকাল পারসন হিসেবে একাধিকবার বাংলাদেশ
          সরকারের সাথে যৌথভাবে নিউট্রিশন একশন উইকে টেরে ডেস হোমসের নেতৃত্ব
          দিয়েছেন।
        </p>
        <p className="text-[#606060] text-[15px] font-medium">
          তার বর্তমান কর্মস্থল বনানী স্পেশালাইজড হসপিটাল এবং BCR, বাংলাদেশ
          সেন্টার ফর রিহ্যাবিলিটেশন।
        </p>
        <p className="text-[#606060] text-[15px] font-medium">
          মুহাম্মাদ সজল ২০২২ সালে অ্যামেরিকান সোসাইটি অফ নিউট্রিশনের সদস্যপদ লাভ
          করেন। তিনি কাজ করেন ডায়াবেটিস, হার্ট ডিজিজ, স্ট্রোক, ফ্যাটি লিভার, হাই
          রিস্ক প্রেগন্যান্সি, ন্যাচারাল ডেলিভারি, হরমোনাল ইমব্যালেন্স-পিসিওএস,
          ইনফারটিলিটি, ওয়েট লস ও ওয়েট গেইন নিয়ে।
        </p>
        <p className="text-[#606060] text-[15px] font-medium">
          তার সবচেয়ে প্রিয় বিষয় হচ্ছে এডভান্সড ভিটামিন এন্ড মিনারেল থেরাপি।
        </p>
        {/* Links */}
        <div className="mt-6">
          <p className="text-[#606060] text-[15px] font-medium">
            ফেইসবুক পেইজ ছাড়াও আপনারা ফলো করতে পারেন আমাদের ইউটিউব চ্যানেল:
          </p>
          <a
            href="https://youtube.com/channel/UCb80zAHPVejLLNlwnlJRfqg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22C55E] hover:underline block"
          >
            YouTube Channel
          </a>
          <p className="text-[#606060] text-[15px] font-medium">
            টেলিগ্রাম চ্যানেল:
          </p>
          <a
            href="https://t.me/DietFalsafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22C55E] hover:underline block "
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
