import React from 'react';
import { MapPin, Clock, Users, Calendar, Mail, Star } from 'lucide-react';

export default function JuniorNutritionOfficerJob() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              জুনিয়র নিউট্রিশন অফিসার
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Sajal's Diet Falsafa
            </p>

            {/* Responsive Row */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
              <Calendar className="w-6 h-6 mb-1 sm:mb-0" />
              <span className="text-base sm:text-lg">
                আবেদনের শেষ সময়: ১৫ অক্টোবর ২০২৫
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Overview Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">
              একনজরে
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <span className="font-semibold text-gray-700">
                      জব টাইপ:
                    </span>
                    <span className="ml-2 text-gray-600">ফুলটাইম</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <span className="font-semibold text-gray-700">
                      কর্মঘন্টা:
                    </span>
                    <span className="ml-2 text-gray-600">
                      সপ্তাহে ৬ দিন (৪৮ ঘন্টা)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-center bg-purple-600 text-white rounded-full text-sm font-bold">
                    ১
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">
                      পদ সংখ্যা:
                    </span>
                    <span className="ml-2 text-gray-600">১</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">জেন্ডার:</span>
                  <span className="ml-2 text-purple-700 font-medium">
                    ফিমেইল
                  </span>
                </div>
                <div className="bg-pink-100 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">স্যালারি:</span>
                  <span className="ml-2 text-pink-700 font-bold">
                    ১৫-২৫ হাজার টাকা
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Work Stations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-pink-500 pb-2">
              ওয়ার্ক স্টেশন
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">
                  থাইরোকেয়ার ওয়েলনেস সেন্টার, বনানী
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">
                  অ্যাসেন্ট হেলথ লিমিটেড, বারিধারা
                </span>
              </div>
            </div>
          </section>

          {/* Job Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
              জব ডেসক্রিপশন
            </h2>
            <ul className="space-y-2">
              {[
                'পেরিফেরাল ডায়েট কাউন্সেলিং',
                'ইনফরমেশন এন্ড নলেজ ম্যানেজমেন্ট',
                'কেইস স্টাডি প্রিপারেশান',
                'পেইজ/সাইট/চ্যানেলের জন্য বাংলা/ইংরেজি কনটেন্ট তৈরি',
                'টিম ম্যানেজমেন্ট',
                'দৈনিক, সাপ্তাহিক ও মাসিক এক্টিভিটি রিপোর্ট তৈরি',
                'ট্রেইনিং ফ্যাসিলিটেশান ও মেন্টরিং',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-rose-500 pb-2">
              যোগ্যতা
            </h2>

            <div className="space-y-6">
              <div className="bg-rose-50 border-l-4 border-rose-500 p-4">
                <h3 className="font-bold text-rose-700 mb-2">মূল দক্ষতা:</h3>
                <p className="text-gray-700">
                  প্রেজেন্টেশান-হোস্টিং ও কাউন্সেলিংয়ে ভাল হতে হবে।
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">ভাষাগত দক্ষতা:</h3>
                <p className="text-gray-700 leading-relaxed">
                  বাংলা-ইংরেজিতে সমানভাবে পারদর্শী হতে হবে, বিশেষভাবে English to
                  Bangla এবং Bangla to English ট্রান্সলেশনে দক্ষতা গুরুত্বপূর্ণ।
                  যেহেতু রোগীদের সাথে কথা বলতে হবে, তাই বাচনভঙ্গি ও উচ্চারণ
                  সুন্দর হওয়া অতি জরুরি।
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  একাডেমিক যোগ্যতা:
                </h3>
                <p className="text-gray-700">
                  ব্যাচেলর ইন নিউট্রিশন সায়েন্স / বায়োকেমিস্ট্রি / ফার্মাসি /
                  জেনেটিক্স
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  বাড়তি যোগ্যতা:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'ডায়েট রিলেটেড প্রফেশনাল কোর্স সম্পন্ন থাকা',
                    'কাউন্সেলিংয়ে বিশেষ দক্ষতা',
                    'হোস্টিং-ট্রেইনিং ফ্যাসিলিটেশান-প্রেজেন্টেশান স্কিল',
                    'অতীতে কোন প্রতিষ্ঠানের প্রজেক্টে লিডারশিপ দেয়া',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  প্রযুক্তিগত দক্ষতা:
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">
                      বাধ্যতামূলক:
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">
                        মাইক্রোসফট অফিস (ওয়ার্ড, এক্সেল, পিপিটি)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">
                        এক্সেলেন্ট প্রেজেন্টেশন স্কিল
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-2">
                      অগ্রাধিকার প্রাপ্ত দক্ষতা:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        'ক্যানভা',
                        'ফিল্মোরা',
                        'এডোবি ইলাস্ট্রেটর',
                        'চ্যাটজিপিটি',
                        'গ্রক',
                        'মিডজার্নি',
                      ].map((tool, index) => (
                        <div
                          key={index}
                          className="bg-white px-3 py-2 rounded-full text-center text-sm font-medium text-purple-700"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  ব্যক্তিগত গুণাবলী:
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    {
                      icon: '🌅',
                      text: 'খুব সকালে ঘুম থেকে নিয়মিত উঠতে পারা',
                    },
                    { icon: '⚡', text: 'কুইক লার্নার ও স্মার্ট' },
                    { icon: '💪', text: 'শারীরিকভাবে সুস্থ' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-200 text-center"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              সুবিধাসমূহ ও বিশেষ তথ্য
            </h2>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h4 className="font-bold text-purple-700">
                      ফেস্টিভ্যাল বোনাস
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    দুই ঈদে ৫০% অফ গ্রস স্যালারি ফেস্টিভ্যাল বোনাস থাকবে
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <h4 className="font-bold text-pink-700">ছুটির সুবিধা</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    বার্ষিক সিক লিভ ১২ দিন ও অ্যানুয়াল লিভ ১৮ দিন সম্পূর্ণ ছুটি
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">আবেদন প্রক্রিয়া</h2>
            <div className="space-y-6">
              {/* Deadline Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="bg-red-500 p-2 rounded-full flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-red-300">
                    আবেদনের শেষ সময়:
                  </span>
                  <span className="ml-2 text-xl text-white block sm:inline">
                    ১৫ অক্টোবর ২০২৫
                  </span>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-300 mb-2">
                    সিভি পাঠানোর পদ্ধতি:
                  </p>
                  <p className="text-gray-300 mb-3">
                    আপনার আপডেটেড সিভি পাঠিয়ে দিন এই ইমেইলে:
                  </p>
                  <a
                    href="mailto:dietfalsafa2021@gmail.com"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg inline-block hover:scale-105 transition-transform duration-200"
                  >
                    <span className="font-mono text-lg text-white break-words">
                      dietfalsafa2021@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
