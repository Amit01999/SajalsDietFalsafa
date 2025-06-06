import React from 'react';
import { Link } from 'react-router-dom';
import JobData from '../Data/JobData';
const Jobs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Jobs</h2>

        {/* Intro Text */}
        <p className="text-gray-700 font-light leading-relaxed mb-6">
          <strong>Sajal's Diet Falsafa</strong> একটি পুষ্টি সেবা প্রদানকারী
          প্রতিষ্ঠান যা ক্লিনিক্যাল নিউট্রিশন কনসাল্টেন্সি, কাউন্সেলিং,
          জনস্বাস্থ্য সচেতনতা ও পরিবেশ সচেতনতার মাধ্যমে সুস্বাস্থ্য রক্ষা ও রোগ
          প্রতিরোধ নিয়ে কাজ করে থাকে। এখন পর্যন্ত আমাদের কার্যক্রমের মাধ্যমে
          আমরা পুষ্টি সচেতনতার অধীনে নিয়ে এসেছি দেশে ও দেশের বাইরে অন্তত ৫ লক্ষ
          মানুষকে। আমাদের ক্লিনিক্যাল নিউট্রিশন কনসাল্টেন্সির পরিধি বিস্তৃত
          বাংলাদেশ সহ পৃথিবীর অন্তত ১৫টি দেশে, বিশেষভাবে বাংলাভাষী মানুষদের জন্য
          ডায়েট ফালসাফা একটি বিশ্বজনীন পুষ্টি সচেতনতা ও পরামর্শ প্রতিষ্ঠান
          হিসেবে সুনামের সাথে কাজ করছে।
        </p>

        <p className="text-gray-700 font-light leading-relaxed mb-6">
          যেহেতু আমরা শুধুমাত্র সুনির্দিষ্ট সংখ্যক রোগীকে আমাদের প্রোটোকল
          অনুযায়ী যথাযথ মান নিয়ন্ত্রনের মাধ্যমে নিউট্রিশনাল ম্যানেজমেন্ট দিয়ে
          থাকি, তাই অনেকেই যথাসময়ে কনসাল্টেশান নিতে পারেন না। বহুদিন ধরেই
          কনসাল্টেশনের ক্রমবর্ধমান চাহিদার কারনে আমাদের স্বাভাবিক কার্যক্রম
          চাপের মুখে পড়ছে, এবং রোগীদের বাড়তি সময় অপেক্ষা করতে হচ্ছে কনসাল্টেশনের
          জন্য। ক্ষেত্রবিশেষে এপয়েন্টমেন্ট পেতে ১ মাসেরও বেশি অপেক্ষা করতে হচ্ছে
          অনেককে যা আসলে সুখকর অভিজ্ঞতা নয়।
        </p>
        <p className="text-gray-700 font-light leading-relaxed mb-6">
          এমতাবস্থায়, জনসাধারনের সুবিধার্থে আমরা যথাসম্ভব দ্রুত কিছু পজিশনে
          রিক্রুটমেন্ট ওপেন করছি।
        </p>

        {/* Job Listings */}
        <div className="space-y-4">
          <div className="container mx-auto px-4 space-y-6">
            {JobData.map(job => (
              <Link to={`/career/${job.id}`} key={job.id} className="block">
                <div className="bg-white shadow-md p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-full sm:w-3/4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                      {job.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base font-light">
                      {job.description}
                    </p>
                  </div>
                  <button className="bg-black text-white px-4 md:px-6 py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base md:text-lg w-full sm:w-auto">
                    More Details →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
