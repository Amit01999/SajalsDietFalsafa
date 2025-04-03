import { Link } from 'react-router-dom';
import services1 from '../assets/img/service1.jpg';
import services2 from '../assets/img/service2.jpg';
import services3 from '../assets/img/service3.jpg';
import services4 from '../assets/img/service4.jpg';

const blogPosts = [
  {
    id: 1,
    date: 'January 25, 2025',
    title: 'কাপড় ধোয়ার পর চিপড়াতে গেলে শক্তি পান না, এই অভিযোগ লাখো নারীর।',
    image: services1,
  },
  {
    id: 2,
    date: 'January 25, 2025',
    title: 'সবচেয়ে দুর্যোগা পুরুষ কারা??',
    image: services2,
  },
  {
    id: 3,
    date: 'October 17, 2024',
    title:
      'নাজমা আপুর অতিরিক্ত ওজন, ইনসুলিন রেজিস্ট্যান্স, হরমোনাল ইমব্যালেন্স রিভার্সিং জার্নি',
    image: services3,
  },
  {
    id: 4,
    date: 'October 17, 2024',
    title: 'সিম্যাগ বেবি: সাকসেস স্টোরি – ২০',
    image: services4,
  },
];

const BlogSection = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 bg-white z-10 pt-0 relative -mt-96 max-sm:-mt-[800px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-5 font-semibold pb-3 sm:pb-4 md:pb-5 border-b my-4 sm:my-6 md:my-8 lg:my-12 mx-2 sm:mx-4 md:mx-8 lg:mx-12">
        Blog
      </h2>
      <div className="px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {blogPosts.map(post => (
            <Link
              key={post.id}
              to={`blog/${post.id}`}
              className="block mb-6 sm:mb-0"
            >
              <div className="flex flex-col h-full">
                <div className="aspect-[4/3] mb-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  {post.date}
                </p>
                <h3 className="font-semibold mt-1 text-sm sm:text-base md:text-lg break-words line-clamp-2 md:line-clamp-3">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* See All Posts Button */}
          <div className="flex items-center">
            <Link
              to="/blog"
              className="px-4 sm:px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition"
            >
              See All Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
