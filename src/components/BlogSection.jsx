import services1 from '../assets/img/service1.jpg';
import services2 from '../assets/img/service2.jpg';
import services3 from '../assets/img/service3.jpg';
import services4 from '../assets/img/service4.jpg';
const blogPosts = [
  {
    date: 'January 25, 2025',
    title: 'কাপড় ধোয়ার পর চিপড়াতে গেলে শক্তি পান না, এই অভিযোগ লাখো নারীর।',
    image: services1,
  },
  {
    date: 'January 25, 2025',
    title: 'সবচেয়ে দুর্যোগা পুরুষ কারা??',
    image: services2,
  },
  {
    date: 'October 17, 2024',
    title:
      'নাজমা আপুর অতিরিক্ত ওজন, ইনসুলিন রেজিস্ট্যান্স, হরমোনাল ইমব্যালেন্স রিভার্সিং জার্নি',
    image: services3,
  },
  {
    date: 'October 17, 2024',
    title: 'সিম্যাগ বেবি: সাকসেস স্টোরি – ২০',
    image: services4,
  },
];

const BlogSection = () => {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-bold mb-8">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            <h3 className="font-semibold mt-1">{post.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          See All Posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
