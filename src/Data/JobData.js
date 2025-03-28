const JobData = [
  {
    id: 1,
    title: 'ফ্রেশার থেকে এক্সপার্ট',
    description: 'একজন ফ্রেশার থেকে কিভাবে বিটিশ বিশেষজ্ঞ হওয়া সম্ভব',
    institution: 'সাজলের ডায়েট ফালসাফা',
    salary: 'BDT ১০,০০০ – ২০,০০০/মাস',
    facilities: ['যাতায়াত ভাতা', 'মেডিকেল ভাতা', 'দুইটি উৎসব বোনাস'],
    education: 'ন্যূনতম এইচএসসি (পাস)',
    work_schedule: {
      days_per_week: 6,
      remote: {
        days: 4,
        hours: ['সকাল ৯টা – দুপুর ১টা', 'বিকেল ৬টা – রাত ১০টা'],
      },
      office: {
        days: 2,
        location: 'খিলগাঁও ও অন্যান্য',
        hours: 'সকাল ৯টা – সন্ধ্যা ৬টা',
      },
    },
    requirements: [
      'রিসেপশনিস্ট হিসেবে অন্তত ৬ মাসের কাজের অভিজ্ঞতা',
      'মাইক্রোসফট ওয়ার্ড, এক্সেল, পাওয়ার পয়েন্ট, গুগল শিট এবং গুগল ফর্ম ব্যবহারে দক্ষতা',
      'সোশ্যাল মিডিয়া পেইজ ও ওয়েবসাইট পরিচালনার অভিজ্ঞতা',
      'চমৎকার যোগাযোগ দক্ষতা',
      'দলগত কাজে দক্ষতা',
      'অবশ্যই ঢাকায় বসবাস করতে হবে',
    ],
    responsibilities: [
      'ক্লায়েন্টদের অ্যাপয়েন্টমেন্ট এবং সম্পর্কিত তথ্য পরিচালনা',
      'সোশ্যাল মিডিয়া ম্যানেজারকে সোশ্যাল মিডিয়া পেইজ-চ্যানেল চালাতে সহযোগিতা করা',
      'ডেটা ম্যানেজমেন্ট',
      'কর্তৃপক্ষ প্রদত্ত অন্যান্য কাজ সম্পাদন',
    ],
    application_deadline: '৬-১৫ ফেব্রুয়ারি',
  },
  {
    id: 2,
    title: 'কিচেনইনভেস্টর (women)',
    description: 'একজন কিউই ইনভেস্টর হিসেবে কিচেন ইনভেস্টর প্রোগ্রাম',
    institution: 'সাজলের ডায়েট ফালসাফা',
    minimum_qualification: [
      'জিম ইন্সট্রাক্টর/ট্রেইনার হিসেবে ন্যূনতম ২ বছর কাজের অভিজ্ঞতা',
      'ইয়োগা, কার্ডিও, স্ট্রেন্থ ট্রেইনিং, MIIT, HIIT সম্পর্কে স্পষ্ট ধারণা',
      'পার্সোনালাইজড ওয়ার্কআউট রুটিন প্রস্তুতিতে দক্ষতা',
      'চমৎকার কমিউনিকেশন ও ইন্টারপার্সোনাল স্কিল',
      'বাংলা ও ইংরেজি সঠিকভাবে পড়তে ও লিখতে জানা',
      'সুন্দর বাচনভঙ্গি এবং ধৈর্যশীলতার সাথে কাউন্সেলিং করতে জানা',
    ],
    employment_type: 'কন্ট্রাকচুয়াল',
    duration: '২ বছর (পারফরম্যান্সের ভিত্তিতে বাড়ানো/কমানো হতে পারে)',
    probation_period:
      '৬ মাস (পারফরম্যান্স বিবেচনায় ৩ মাস পর্যন্ত কমিয়ে আনা হতে পারে)',
    application_deadline: '৩০ জুন, ২০২৪',
  },
  {
    id: 3,
    title: 'ডায়েটিশিয়ান',
    description: 'ডায়েটিশিয়ান হিসেবে কিভাবে আপনার ক্যারিয়ার গড়বেন',
    institution: 'সাজলের ডায়েট ফালসাফা',
    minimum_qualification: [
      'এমএস (নিউট্রিশন এন্ড ফুড সায়েন্স)',
      'বেসরকারি/দাতব্য ক্লিনিক/হাসপাতাল/বিশ্ববিদ্যালয়ে অন্তত ৬ মাসের কাজের অভিজ্ঞতা',
    ],
    employment_type: 'কন্ট্রাকচুয়াল',
    duration: '২ বছর (পারফরম্যান্সের ভিত্তিতে বাড়ানো/কমানো হতে পারে)',
    probation_period:
      '৬ মাস (পারফরম্যান্স বিবেচনায় ৩ মাস পর্যন্ত কমিয়ে আনা হতে পারে)',
    required_skills: [
      'নন-কমিউনিকেবল ডিজিজ/গর্ভবতী-দুগ্ধদানকারী মায়েদের চমৎকার নিউট্রিশনাল এসেসমেন্ট করতে জানা',
      'বাংলা ও ইংরেজি ভাষায় চমৎকার যোগাযোগ ও উপস্থাপন দক্ষতা',
      'সোশ্যাল মিডিয়া পরিচালনার অভিজ্ঞতা',
      'হিউম্যান নিউট্রিশনাল ফিজিওলজি-বায়োকেমিস্ট্রির স্পষ্ট ধারণা',
      'বিভিন্ন ডায়েট পদ্ধতি সম্পর্কে মৌলিক ধারণা',
    ],
    application_deadline: '৩০ জুন, ২০২৪',
  },
  {
    id: 4,
    title: 'নিউট্রিশনিস্ট',
    description: 'নিউট্রিশনিস্ট হিসেবে ন্যাশনাল নিউট্রিশনিস্ট প্রোগ্রাম',
    institution: 'সাজলের ডায়েট ফালসাফা',
    minimum_qualification: [
      'এমএস (নিউট্রিশন এন্ড ফুড সায়েন্স)',
      'বেসরকারি/দাতব্য ক্লিনিক/হাসপাতাল/বিশ্ববিদ্যালয়ে অন্তত ১ বছরের কাজের অভিজ্ঞতা',
    ],
    employment_type: 'কন্ট্রাকচুয়াল',
    duration: '২ বছর (পারফরম্যান্সের ভিত্তিতে বাড়ানো/কমানো হতে পারে)',
    probation_period:
      '৬ মাস (পারফরম্যান্স বিবেচনায় ৩ মাস পর্যন্ত কমিয়ে আনা হতে পারে)',
    responsibilities: [
      'রোগীর বর্তমান খাদ্যাভ্যাস, পূর্ববর্তী ল্যাব রিপোর্ট ও মেডিকেল হিস্ট্রি বিশ্লেষণ',
      'স্বতন্ত্র ডায়েট প্ল্যান তৈরি করা',
      'রোগীদের ও তাদের পরিবারকে পুষ্টি শিক্ষা এবং পরামর্শ প্রদান',
      'অন্যান্য স্বাস্থ্যসেবা পেশাদারদের সাথে সমন্বয় করা',
      'রোগীদের অগ্রগতি পর্যবেক্ষণ ও মূল্যায়ন করা',
      'সোশ্যাল মিডিয়া কন্টেন্ট ডেভেলপমেন্ট',
    ],
    application_deadline: '৩০ জুন, ২০২৪',
  },
  {
    id: 5,
    title: 'ক্লিনিকাল নিউট্রিশনিস্ট',
    description: 'ক্লিনিকাল নিউট্রিশনিস্ট হিসেবে নিউট্রিশনিস্ট প্রোগ্রাম',
    institution: 'সাজলের ডায়েট ফালসাফা',
    minimum_qualification: [
      'এমএস (নিউট্রিশন এন্ড ফুড সায়েন্স)',
      'বেসরকারি/দাতব্য ক্লিনিক/হাসপাতাল/বিশ্ববিদ্যালয়ে অন্তত ২ বছরের কাজের অভিজ্ঞতা',
    ],
    employment_type: 'কন্ট্রাকচুয়াল',
    duration: '৩ বছর (পারফরম্যান্সের ভিত্তিতে বাড়ানো/কমানো হতে পারে)',
    probation_period:
      '৬ মাস (পারফরম্যান্স বিবেচনায় ৩ মাস পর্যন্ত কমিয়ে আনা হতে পারে)',
    required_skills: [
      'নন-কমিউনিকেবল ডিজিজ/গর্ভবতী-দুগ্ধদানকারী মায়েদের চমৎকার নিউট্রিশনাল এসেসমেন্ট করতে জানা',
      'ড্রাগ-নিউট্রিয়েন্ট মিথস্ক্রিয়া সম্পর্কে মৌলিক ধারণা',
      'এনসিডি ম্যানেজমেন্টে থেরাপিউটিক ডায়েট নিয়ে সরাসরি অভিজ্ঞতা',
      'বাংলা ও ইংরেজি ভাষায় চমৎকার যোগাযোগ ও উপস্থাপন দক্ষতা',
      'সোশ্যাল মিডিয়া পরিচালনার অভিজ্ঞতা',
      'বিভিন্ন খাদ্য পরিকল্পনার উপর স্পষ্ট ধারণা',
    ],
    work_hours: 'সপ্তাহে ৫০ ঘণ্টা',
    location: 'বনানী, ঢাকা',
    salary: 'BDT ৩২,০০০ – ৬৪,০০০/মাস',
    application_deadline: '৩০ জুন, ২০২৪',
  },
];
export default JobData;
