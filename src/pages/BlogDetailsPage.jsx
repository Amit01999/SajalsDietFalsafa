import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogData } from '../Data/BlogData';

export default function BlogDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = BlogData.find(b => b.id === Number(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <p className="text-center text-xl text-gray-500">Blog not found!</p>;
  }

  return (
    <section className="max-w-6xl mx-auto p-6 md:p-8 bg-gradient-to-b from-white to-blue-50 shadow-xl rounded-lg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-400 opacity-10 rounded-full blur-3xl"></div>

      {/* Featured Image with Overlay */}
      <div className="relative w-full h-80 md:h-[90vh] object-cover rounded-lg overflow-hidden shadow-lg mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg border border-gray-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-30 rounded-lg"></div>
      </div>

      {/* Blog Title - Smaller for Bangla text */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800 text-center leading-snug tracking-normal font-[SolaimanLipi]">
        {blog.title}
      </h1>

      {/* Blog Meta Info (Date & Author) */}
      <div className="flex justify-center items-center mt-3 mb-6">
        <span className="bg-indigo-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
          📅 {blog.date}
        </span>
      </div>

      {/* Blog Content - Reduced size for Bangla text */}
      <div className="relative">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-normal font-[SolaimanLipi] bg-white p-5 rounded-lg shadow-md border-l-4 border-indigo-500 mx-1 md:mx-2">
          {blog.content}
        </p>

        {/* Subtle decorative element */}
        <div className="absolute -right-2 -bottom-2 w-full h-full bg-indigo-100 rounded-lg -z-10"></div>
      </div>
    </section>
  );
}
