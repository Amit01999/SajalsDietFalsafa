import p1 from '../assets/img/program/p1.png';
import p2 from '../assets/img/program/p2.png';
import p3 from '../assets/img/program/p3.png';
import p4 from '../assets/img/program/p4.png';
import p5 from '../assets/img/program/p5.png';
import p6 from '../assets/img/program/p6.png';
import p7 from '../assets/img/program/p7.png';
import p8 from '../assets/img/program/p8.png';
import p9 from '../assets/img/program/p9.png';
import p10 from '../assets/img/program/p10.png';
import p11 from '../assets/img/program/p11.png';
const programsData = [
  {
    id: 1,
    title: 'CMag Baby',
    img: p1,
    title_bn: 'সিম্যাগ বেবি',
    duration: 'From 12th week to delivery',
    duration_bn: '১২তম সপ্তাহ থেকে ডেলিভারি পর্যন্ত',
    description:
      'A complete guideline for a healthy pregnancy and normal delivery.',
    description_bn:
      'সুস্থ গর্ভাবস্থা এবং নরমাল ডেলিভারির জন্য সম্পূর্ণ নির্দেশিকা।',
    benefits: [
      {
        en: 'Ensure proper growth and development of the baby',
        bn: 'শিশুর সঠিক বৃদ্ধি ও মানসিক বিকাশ নিশ্চিত করুন',
      },
      {
        en: 'Boost your baby’s immunity',
        bn: 'আপনার শিশুর রোগ প্রতিরোধ ক্ষমতা বাড়ান',
      },
      {
        en: 'Healthy pregnancy',
        bn: 'স্বাস্থ্যকর গর্ভাবস্থা',
      },
      {
        en: 'Fulfills maternal nutrient deficiencies for normal delivery',
        bn: 'মায়ের নিউট্রিয়েন্টের ঘাটতি পূরণ করে নরমাল ডেলিভারির জন্য প্রস্তুত করা',
      },
    ],
  },
  {
    id: 2,
    title: 'Body Reshaping',
    img: p2,
    title_bn: 'বডি রিশেপিং',
    duration: 'According to your body type',
    duration_bn: 'আপনার শরীরের ধরন অনুযায়ী',
    description:
      'Reshape your body with a clean diet, proper exercise, and supplementation.',
    description_bn:
      'সঠিক ডায়েট, ব্যায়াম এবং সাপ্লিমেন্টেশনের মাধ্যমে শরীর আকর্ষণীয় করুন।',
    benefits: [
      {
        en: 'Lose extra fat and gain muscle',
        bn: 'দেহের বাড়তি চর্বি কমানো এবং পেশী বাড়ানো',
      },
      { en: 'Gain weight', bn: 'ওজন বাড়ানো' },
      {
        en: 'Get an hourglass body shape (for females)',
        bn: 'আওয়ারগ্লাস বডিশেপ (মহিলাদের জন্য)',
      },
      {
        en: 'Get a V-shaped body (for males)',
        bn: 'ভি-কার্ড বডি শেপ (পুরুষদের জন্য)',
      },
      {
        en: 'Pre-marital fitness guidelines',
        bn: 'প্রি-ম্যারিটাল ফিটনেস গাইডলাইন',
      },
      {
        en: 'Improve skin health and immunity',
        bn: 'সুন্দর ত্বক ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি',
      },
    ],
  },
  {
    id: 3,
    title: 'Fatty Liver',
    img: p3,
    title_bn: 'ফ্যাটি লিভার',
    duration: '6 months to 1 year',
    duration_bn: '৬ মাস থেকে ১ বছর',
    description:
      'Manage fatty liver without medication through diet, exercise, and lifestyle changes.',
    description_bn:
      'ওষুধ ছাড়াই ফ্যাটি লিভার ম্যানেজ করুন ডায়েট, ব্যায়াম এবং জীবনধারা পরিবর্তনের মাধ্যমে।',
    benefits: [
      {
        en: 'Reverse fatty liver naturally',
        bn: 'ফ্যাটি লিভারকে রিভার্স করে স্বাভাবিক অবস্থায় নিয়ে আসা',
      },
      {
        en: 'Guidance for healthier nutritional choices',
        bn: 'স্বাস্থ্যকর ও পুষ্টিকর খাবারের দিকনির্দেশনা',
      },
      {
        en: 'Implement lifestyle adjustments',
        bn: 'লাইফস্টাইল সমন্বয় প্রয়োগ করুন',
      },
      {
        en: 'Long-term solution for fatty liver',
        bn: 'ফ্যাটি লিভারের দীর্ঘমেয়াদী সমাধান',
      },
    ],
  },
  {
    id: 4,
    title: 'Men’s Sexual Health',
    img: p4,
    title_bn: 'পুরুষের যৌন স্বাস্থ্য',
    duration: 'Varies',
    duration_bn: 'পরিবর্তনশীল',
    description: 'Improve male sexual health through natural protocols.',
    description_bn:
      'প্রাকৃতিক পদ্ধতির মাধ্যমে পুরুষের যৌন স্বাস্থ্য উন্নত করুন।',
    benefits: [
      { en: 'Increase sperm count', bn: 'শুক্রাণুর সংখ্যা বৃদ্ধি করুন' },
      {
        en: 'Manage premature ejaculation and erectile dysfunction',
        bn: 'শীঘ্রপতন ও যৌন দুর্বলতা নিরাময়',
      },
      {
        en: 'Optimize testosterone levels with HE Protocol',
        bn: 'HE প্রোটোকলের মাধ্যমে টেস্টোস্টেরন মাত্রা উন্নত করুন',
      },
    ],
  },
  {
    id: 5,
    img: p5,
    title: 'Bone & Joint Health:',
    description:
      'Guidelines to keep your bones and joints strong and pain-free.',
    duration: 'Lifelong care',
    guidelines: [
      'Nutritional support for bones',
      'Best exercises for joint mobility',
      'Supplements for bone density',
    ],
    titleBn: 'হাড় ও জয়েন্টের স্বাস্থ্য:',
    descriptionBn:
      'আপনার হাড় ও জয়েন্টকে শক্তিশালী এবং ব্যথামুক্ত রাখার নির্দেশিকা।',
    durationBn: 'আজীবন যত্ন',
    guidelinesBn: [
      'হাড়ের জন্য পুষ্টিগত সহায়তা',
      'জয়েন্ট মুভমেন্টের জন্য সেরা ব্যায়াম',
      'হাড়ের ঘনত্ব বৃদ্ধির জন্য সাপ্লিমেন্ট',
    ],
  },
  {
    id: 6,
    img: p6,
    title: 'Anti-Aging Protocols:',
    description:
      'Science-backed methods to slow down aging and enhance longevity.',
    duration: 'Ongoing',
    guidelines: [
      'Optimal nutrition for anti-aging',
      'Skin and hair care protocols',
      'Mental and physical exercises',
    ],
    titleBn: 'অ্যান্টি-এজিং প্রোটোকল:',
    descriptionBn: 'বয়স কমানোর এবং দীর্ঘায়ু নিশ্চিত করার বৈজ্ঞানিক উপায়।',
    durationBn: 'চলমান',
    guidelinesBn: [
      'অ্যান্টি-এজিং-এর জন্য পুষ্টি',
      'ত্বক এবং চুলের যত্ন পদ্ধতি',
      'মানসিক ও শারীরিক ব্যায়াম',
    ],
  },
  {
    id: 7,
    img: p7,
    title: 'Pregnancy & Postpartum:',
    description: 'Comprehensive support for pregnancy and postpartum recovery.',
    duration: 'From pregnancy to 1 year postpartum',
    guidelines: [
      'Prenatal nutrition',
      'Postpartum recovery tips',
      'Mental health and emotional well-being',
    ],
    titleBn: 'গর্ভাবস্থা ও প্রসব পরবর্তী যত্ন:',
    descriptionBn:
      'গর্ভাবস্থা এবং প্রসব পরবর্তী পুনরুদ্ধারের জন্য পূর্ণাঙ্গ সহায়তা।',
    durationBn: 'গর্ভাবস্থা থেকে ১ বছর পর্যন্ত',
    guidelinesBn: [
      'গর্ভকালীন পুষ্টি',
      'প্রসব পরবর্তী পুনরুদ্ধার টিপস',
      'মানসিক স্বাস্থ্য এবং মানসিক সুস্থতা',
    ],
  },
  {
    id: 8,
    title: 'Heart Health',
    img: p8,
    title_bn: 'হৃদরোগ নিরাময়',
    duration: 'Ongoing',
    duration_bn: 'চলমান',
    description:
      'Relief from heart disease through dietary and lifestyle changes.',
    description_bn: 'ডায়েট ও জীবনধারা পরিবর্তনের মাধ্যমে হৃদরোগ থেকে মুক্তি।',
    benefits: [
      { en: 'Control hypertension', bn: 'উচ্চ রক্তচাপ নিয়ন্ত্রণ' },
      {
        en: 'Healthy and nutritious food guidance',
        bn: 'স্বাস্থ্যকর ও পুষ্টিকর খাবারের নিদের্শনা',
      },
      { en: 'Regulate cholesterol', bn: 'কোলেস্টেরল নিয়ন্ত্রণ' },
      { en: 'Improve mental health', bn: 'মানসিক সুস্বাস্থ্য ফিরিয়ে আনা' },
      {
        en: 'Ensure necessary nutrition',
        bn: 'শরীরের প্রয়োজনীয় পুষ্টি নিশ্চিতকরণ',
      },
    ],
  },
  {
    id: 9,
    title: 'Diabetes',
    img: p9,
    title_bn: 'ডায়াবেটিস নিরাময়',
    duration: '8-24 months',
    duration_bn: '৮-২৪ মাস',
    description:
      'Manage diabetes naturally through diet, supplements, and lifestyle changes.',
    description_bn:
      'ডায়েট, সাপ্লিমেন্ট ও জীবনধারা পরিবর্তনের মাধ্যমে ডায়াবেটিস নিয়ন্ত্রণ করুন।',
    benefits: [
      {
        en: 'Normalize blood glucose levels',
        bn: 'রক্তের গ্লুকোজ স্বাভাবিক পর্যায়ে নিয়ে আসা',
      },
      {
        en: 'Ensure normal insulin secretion',
        bn: 'স্বাভাবিক ইনসুলিন নিঃসরণ নিশ্চিত করা',
      },
      {
        en: 'Cure insulin resistance',
        bn: 'ইনসুলিন রেজিস্ট্যান্স নিরাময় করা',
      },
      {
        en: 'Prevent chronic insulin resistance by building muscle',
        bn: 'নতুন মাসল তৈরি করে দীর্ঘস্থায়ীভাবে ইনসুলিন রেজিস্ট্যান্স ঠেকানো',
      },
    ],
  },
  {
    id: 10,
    img: p10,
    title: 'Cancer Prevention & Recovery:',
    description:
      'A protocol designed to help prevent and recover from cancer with lifestyle changes.',
    duration: 'Ongoing',
    guidelines: [
      'Anti-cancer diet recommendations',
      'Detoxification methods',
      'Emotional well-being practices',
      'Exercise for cancer recovery',
    ],
    titleBn: 'ক্যান্সার প্রতিরোধ ও পুনরুদ্ধার:',
    descriptionBn:
      'ক্যান্সার প্রতিরোধ এবং পুনরুদ্ধারের জন্য জীবনধারার পরিবর্তন সংক্রান্ত একটি প্রোটোকল।',
    durationBn: 'চলমান',
    guidelinesBn: [
      'অ্যান্টি-ক্যান্সার ডায়েট সুপারিশ',
      'ডিটক্সিফিকেশন পদ্ধতি',
      'মানসিক সুস্থতার অনুশীলন',
      'ক্যান্সার পুনরুদ্ধারের জন্য ব্যায়াম',
    ],
  },
  {
    id: 11,
    title: 'PCOS & Female Hormonal Balance',
    img: p11,
    title_bn: 'পিসিওএস ও মহিলা হরমোন ব্যালেন্স',
    duration: 'Depends on PCOS type',
    duration_bn: 'আপনার পিসিওএস প্রকারের উপর নির্ভরশীল',
    description: 'Manage PCOS and balance female hormones naturally.',
    description_bn:
      'পিসিওএস নিয়ন্ত্রণ করুন এবং নারীদের হরমোন ব্যালেন্স ঠিক রাখুন।',
    benefits: [
      { en: 'Weight management', bn: 'ওজন নিয়ন্ত্রণ' },
      { en: 'Balance hormones', bn: 'হরমোন ব্যালেন্স ঠিক রাখা' },
      { en: 'Boost fertility', bn: 'ফার্টিলিটি বৃদ্ধি করা' },
      {
        en: 'Improve insulin resistance',
        bn: 'ইনসুলিন রেজিস্ট্যান্স উন্নত করা',
      },
      {
        en: 'Ensure proper body nourishment',
        bn: 'শরীরের প্রয়োজনীয় পুষ্টি নিশ্চিত করা',
      },
    ],
  },
];

export default programsData;
