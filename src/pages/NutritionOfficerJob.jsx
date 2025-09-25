import React from 'react';
import { MapPin, Clock, Users, Calendar, Mail } from 'lucide-react';

export default function NutritionOfficerJob() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 sm:p-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              নিউট্রিশন অফিসার
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Sajal's Diet Falsafa
            </p>

            {/* Responsive row */}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              একনজরে
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <span className="font-semibold text-gray-700">
                      জব টাইপ:
                    </span>
                    <span className="ml-2 text-gray-600">ফুলটাইম</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
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
                  <span className="w-5 h-5 text-center bg-green-600 text-white rounded-full text-sm font-bold">
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
                <div className="bg-green-100 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">জেন্ডার:</span>
                  <span className="ml-2 text-green-700 font-medium">
                    ফিমেইল
                  </span>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">স্যালারি:</span>
                  <span className="ml-2 text-blue-700 font-bold">
                    ২৫-৪০ হাজার টাকা
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Work Stations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              ওয়ার্ক স্টেশন
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  থাইরোকেয়ার ওয়েলনেস সেন্টার, বনানী
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  অ্যাসেন্ট হেলথ লিমিটেড, বারিধারা
                </span>
              </div>
            </div>
          </section>

          {/* Job Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">
              জব ডেসক্রিপশন
            </h2>
            <ul className="space-y-2">
              {[
                'পেরিফেরাল ডায়েট কাউন্সেলিং',
                'ইনফরমেশন এন্ড নলেজ ম্যানেজমেন্ট',
                'কেইস স্টাডি প্রিপারেশান',
                'পেইজ/সাইট/চ্যানেলের জন্য বাংলা/ইংরেজি কনটেন্ট তৈরি',
                'প্রয়োজনীয় মিটিংসমূহে অ্যাটেন্ড করা ও মিটিং-প্রোগ্রামের ফলো আপ করা',
                'কমিউনিকেশান ও নেটওয়ার্কিং ম্যানেজমেন্ট',
                'সহযোগী প্রতিষ্ঠানসমূহের সাথে যোগাযোগ রক্ষা',
                'অনারারি নিউট্রিশন অফিসার ও জুনিয়র নিউট্রিশন অফিসারদের সাথে সাপ্তাহিক ও মাসিক মিটিং সম্পন্ন করা',
                'দৈনিক, সাপ্তাহিক ও মাসিক এক্টিভিটি রিপোর্ট তৈরি',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
              যোগ্যতা
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h3 className="font-bold text-red-700 mb-2">
                  সবচেয়ে গুরুত্বপূর্ণ:
                </h3>
                <p className="text-gray-700">
                  মাল্টি টাস্কিংয়ে দক্ষতা সবচেয়ে গুরুত্বপূর্ণ।
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
                    'এমপিএইচ/এমএস থাকা',
                    'ভাল রিসার্চ এক্সপেরিয়েন্স থাকা',
                    'ডায়েট রিলেটেড প্রফেশনাল কোর্স সম্পন্ন থাকা',
                    'কাউন্সেলিংয়ে বিশেষ দক্ষতা',
                    'নিউট্রিশন ও ডায়েট রিলেটেড ওয়ার্কিং নলেজ',
                    'ইন্টারমিটেন্ট ফাস্টিং এবং আধুনিক ডায়েট সম্পর্কে প্র‍্যাকটিক্যাল ওয়ার্কিং নলেজ',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>গুরুত্বপূর্ণ:</strong> নিউট্রিশন গ্র‍্যাজুয়েট কিন্তু
                  আধুনিক ডায়েট সম্পর্কে প্র‍্যাকটিক্যাল নলেজ, এক্সপেরিয়েন্স
                  নেই, এমন হলে নন নিউট্রিশনিস্টদের চেয়ে আলাদা কোনো প্রায়োরিটি
                  দেয়া হবে না।
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  প্রযুক্তিগত দক্ষতা:
                </h3>
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong className="text-blue-800">বাধ্যতামূলক:</strong>
                    <span className="ml-2 text-gray-700">
                      মাইক্রোসফট অফিস (ওয়ার্ড, এক্সেল, পিপিটি)
                    </span>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <strong className="text-green-800">অগ্রাধিকার:</strong>
                    <span className="ml-2 text-gray-700">
                      ক্যানভা, ফিল্মোরা, এডোবি ইলাস্ট্রেটর, চ্যাটজিপিটি
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  ব্যক্তিগত গুণাবলী:
                </h3>
                <ul className="space-y-2">
                  {[
                    'এক্সেলেন্ট প্রেজেন্টেশন স্কিল',
                    'খুব সকালে ঘুম থেকে নিয়মিত উঠতে পারা',
                    'কুইক লার্নার, স্মার্ট এবং শারীরিকভাবে সুস্থ',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              সুবিধাসমূহ ও বিশেষ তথ্য
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
                <h3 className="font-bold text-yellow-800 mb-2">
                  গোল্ডেন অপারচুনিটি:
                </h3>
                <p className="text-gray-700">
                  নিউট্রিশন গ্র‍্যাজুয়েটদের মধ্যে যারা সজল'স ডায়েট ফালসাফায়
                  কাজ করতে চান এটা তাদের জন্য গোল্ডেন অপারচুনিটি।
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-700 mb-2">
                    পারফরম্যান্স বোনাস
                  </h4>
                  <p className="text-sm text-gray-600">
                    বার্ষিক পারফরম্যান্স বিবেচনায় আকর্ষণীয় পারফরম্যান্স বোনাস
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-2">
                    ফেস্টিভ্যাল বোনাস
                  </h4>
                  <p className="text-sm text-gray-600">
                    দুই ঈদে ৫০% অফ গ্রস স্যালারি ফেস্টিভ্যাল বোনাস
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-700 mb-2">ছুটির সুবিধা</h4>
                <p className="text-sm text-gray-600">
                  বার্ষিক সিক লিভ ১২ দিন ও এনুয়াল লিভ ১৮ দিন থাকবে, এবং
                  সম্পূর্ণ ছুটি দেয়া হবে।
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-gray-700 font-medium">
                  কাজে ফলাফল নিয়ে আসার ব্যাপারে শতভাগ আন্তরিকতা গুরুত্বপূর্ণ।
                </p>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="bg-gray-800 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">আবেদন প্রক্রিয়া</h2>
            <div className="space-y-6">
              {/* Deadline */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Calendar className="w-6 h-6 text-red-400" />
                <div>
                  <span className="font-bold text-red-300">
                    আবেদনের শেষ সময়:
                  </span>
                  <span className="ml-2 text-lg sm:text-xl block sm:inline">
                    ১৫ অক্টোবর ২০২৫
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="font-bold text-blue-300 mb-2">
                    সিভি পাঠানোর পদ্ধতি:
                  </p>
                  <p className="text-gray-300 mb-3">
                    আপনার আপডেটেড সিভি পাঠিয়ে দিন এই ইমেইলে:
                  </p>
                  <a
                    href="mailto:dietfalsafa2021@gmail.com"
                    className="bg-blue-600 p-3 rounded-lg inline-block hover:bg-blue-700 transition-colors duration-200"
                  >
                    <span className="font-mono text-base sm:text-lg text-white break-words">
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
