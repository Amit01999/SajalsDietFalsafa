import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import person1 from '../assets/img/person1.png';
import person2 from '../assets/img/person2.png';
import person3 from '../assets/img/person3.png';
import person4 from '../assets/img/person4.png';
import person5 from '../assets/img/person5.png';
import person6 from '../assets/img/person6.png';

const testimonials = [
  {
    image: person1,
    text: '“বিভিন্ন সময়ে বিভিন্ন উপলক্ষে দেশি বিদেশি অনেক নিউট্রশনিস্ট এর কাজ দেখার সুযোগ হয়েছে। আমার সামান্য অভিজ্ঞতা ও নলেজের ভিত্তিতে বলতে পারি সজল একজন বিশ্বমানের নিউট্রশনিস্ট। আর শুধু নিউট্রিশন না, ওভারোল হেলথ এর বিভিন্ন শাখায় সজলের যে গভীর নলেজ দেখেছি সেটা অনেক আন্তর্জাতিক মন্ডলে প্রতিথযশা এক্সপার্টের মধ্যেও পাইনি। সে শুধু আপনাকে একটা নিউট্রিশন এর প্ল্যান দিয়ে ছেড়ে দিবে না, বরং আপনাকে একটা পূর্ণাঙ্গ গাইডলাইন দিবে এবাউট ওভারোল লাইফস্টাইল যার মাধ্যমে আপনার অনেক ক্রনিক সমস্যায় উপকার পাবেন হোলিস্টিক এপ্রোচে। আমি নিজে ব্যক্তিগতভাবে তার তার থেকে অনেক উপকৃত হয়েছি। আমার পরিচিত অনেকেই হয়েছে। আপনারা অবশ্যই তার কনসালটেশন নিতে পারেন।”',
    name: 'আরাফাত ইবন সুলতান রিয়াদ',
    designation: 'প্রোডাক্ট ম্যানেজার, মানি ফরওয়ার্ড, আদাচি, জাপান',
  },
  {
    image: person2,
    text: '“আমি সজল ভাইকে প্রথম চিনি তাঁর সানজাক ই উসমান বইটা পড়ে। এরপর তাঁর সম্পর্কে জানতে পারি এনায়েত চৌধুরী-খালিদ ফারহান-সাদমান সাদিকের ফার্স্ট ফেজ ট্রাইনোমিয়াল পডকাস্ট থেকে। সম্পুর্ণ পডকাস্ট টা মনোযোগ দিয়ে আবার আমি শুনি আমার নিজের (এসিম্পটনিক) টাইপ-২ ডায়াবেটিস ধরা পড়ার পরে। সজল ভাইকে আমি ফেসবুকে খুঁজে বের করে মেসেজ দিলে পরে, উনি আমাকে সরাসরি দেখা করতে বলেন। ০৯ সেপ্টেম্বর ২০২২ থেকে আমি উনার অবসার্ভেশনে আছি। উনার নলেজ বা স্কিল নিয়ে মন্তব্য করার যোগ্যতা আমার নেই। তবে আত্নবিশ্বাসের সাথে একটা দাবি আমি করতে চাই, সজল ভাইয়ের পরামর্শ আর মোটিভেশানেই (পরিবারের প্রবল বিরোধিতা সত্ত্বেও) আমি কোনো ধরনের ড্রাগ ছাড়াই (ডক্টর প্রেস্ক্রাইব করেছিলেন) শুধুমাত্র লাইফস্টাইল মডিফাইড করে সুস্থ আছি। এখানে একটা ব্যাপার উল্লেখ করা প্রয়োজন। আমি ইমার্জেন্সি সেক্টরে কাজ করি। ফলে আমাকে নাইট শিফট সহ সব রকম অড টাইমিং এবং স্ট্রেসড শিডিউল মেইনটেইন করা লাগে। দোয়া করি, ভাই, আপনি যেনো এভাবেই আমার মতন আরও অনেক কে সেবা দিয়ে উপকার করতে পারেন। ভালো থাকবেন ভাই। কৃতজ্ঞতা এবং শুভ কামনা আপনার জন্যে।”',
    name: 'আবু আহমেদ শামীম ',
    designation: 'কন্ট্রোল রুম ইঞ্জিনিয়ার, মেঘনাঘাট পাওয়ার লিমিটেড',
  },
  {
    image: person3,
    text: '“I had some health issues, I have visited so many doctors. Gynecologist, Medicine, neuro medicine, skin specialist,. But result was some expensive medicines, tablets, injections. It was not much helpful in the long run. Then I came to know about Nutritionist Sajal in social media. After 4/5 months on and on proper dietary management plus taking appropriate supplements Alhamdulillah Now I am fit and fine without any kind of medicines. Besides me my sister and other family members also treated and cured by Mr. Sajal. May Allah give him nek hayat and opportunity to reach out and help more and more people.”',
    name: 'Zehra Smrity',
    designation: 'Youtuber, Voice Artist & Home Maker',
  },
  {
    image: person4,
    text: '“আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহ। এককথায় বলতে গেলে- আপনার পরামর্শ ও বিভিন্ন লেখা পড়ে আমি আজ ডায়াবেটিস থেকে মুক্ত ও সুস্থ জীবন উপভোগ করিতেছি।”',
    name: 'মিজানুর রহমান ',
    designation: 'বাংলাদেশ সেনাবাহিনী',
  },
  {
    image: person5,
    text: '“কথা বলতে গেলে আসলে অনেক কিছুই বলা লাগে। কারন সজল ভাইয়ের সাথে আমার জার্নিটা ছিলো আবেগের, অন্ধকার একটা কুয়ার মধ্যে পড়ে যেয়ে আশার আলোর দিকে যাওয়ার। তবে যতটুকু পারি শর্টে বলছি ইন শা আল্লাহ। প্রায় ১.৫ বছর বিভিন্ন ক্রনিক ডিজিজে ভুগেছি। বড় বড় ডাক্তার দেখিয়েছি। বিভিন্ন সাইড ইফেক্ট ওয়ালা মেডিসিন নিয়েছি। কাজের কাজ কিছুই হয়নি। সজল ভাইয়ের পরামর্শ নেয়ার পর সেই যে রোগ গুলো বিদায় নিলো , আলহামদুলিল্লাহ আজ পর্যন্ত ভালো আছি। শুধুমাত্র তাই ই না, আমার Lifestyle routine চেঞ্জ করার পর, আমার কনফিডেন্স, আমার কথা বলার ধরন, আমার চলাফেরা, সবকিছুই পজিটিভলি চেঞ্জ হয়েছে বলে মনে করি। একগাদা মেডিসিনের উপরে না বেচে আর খাবারকে ভয় না করে কিভাবে রুট লেভেল থেকে বিভিন্ন রোগ থেকে একজন মুক্তি পেতে পারে, তা আমি প্রত্যক্ষ করেছি। আগের আমি আর এখন আমি এর মধ্যে এখন Sky-High Difference! Disease is just a word and it can be reversed- এই ব্যাকটার একটা বাস্তব উদাহরন আমি। অন্তরের অন্তস্তল থেকে সজল ভাইয়ের জন্য অনেক দোআ। He is an asset to our society.” ',
    name: 'Muhammad Raqeeb ',
    designation: 'Web Properties Ltd',
  },
  {
    image: person6,
    text: '“I have been suffering from lower back pain and low testosterone level symptoms for more than six years. I took consultations from country best level doctors but result was zero. Alhamdulillah I feel better now after following Sajal sir Guideline. God bless you sir.”',
    name: 'Md. Ekramul Hoque ',
    designation: 'Akiz Venture Group',
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-12 bg-green-500 text-white text-center relative">
      <h2 className="text-3xl font-bold mb-6">Patient Remarks</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white mb-4"
              />
              <p className="text-lg italic px-8">{testimonial.text}</p>
              <h3 className="font-bold text-xl mt-4">{testimonial.name}</h3>
              <p className="text-sm">{testimonial.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Positioned Far from Content */}
      <div className="swiper-button-prev left-[-60px] lg:left-[-80px]"></div>
      <div className="swiper-button-next right-[-60px] lg:right-[-80px]"></div>
      {/* Custom CSS to Make Navigation Arrows White */}
      <style jsx>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          color: white !important;
          font-size: 30px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
