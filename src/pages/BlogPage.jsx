import { useState } from 'react';
import { BlogData } from '../Data/BlogData';
import { Link } from 'react-router-dom';
import programslink from '../Data/programslink';

const BlogPage = () => {
  const totalPages = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const goToPage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <>
      <div className="bg-[#FAFAFA] w-full py-10 pl-32 text-[#545454] font-medium text-xl relative border-b border-[#E5E5E5] mt-24">
        Blog
      </div>
      <section className="py-10 px-5 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-6 px-6">
          {programslink.map((program, index) => (
            <button
              key={program.id}
              className="bg-[#B2B2B2] text-white px-6 py-3  text-base"
            >
              <Link to={program.link}> {program.title}</Link>
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {BlogData.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={index} className="block">
              <div className="bg-white min-h-full shadow-md rounded-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-2 text-[#545454]">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm">📅 {post.date}</p>
                </div>
              </div>
            </Link>
          ))}
          ;
        </div>
        <section className="flex items-center justify-center m-5 p-4 overflow-x-auto">
          <div className="flex items-center space-x-1 md:space-x-2 flex-nowrap">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="px-3 py-2 text-sm md:text-base bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              disabled={currentPage === 1}
            >
              &laquo;
            </button>

            {/* Page Numbers */}
            {[1, 2].map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 text-sm md:text-base rounded ${
                  currentPage === page
                    ? 'bg-gray-700 text-white' // Active Page
                    : 'bg-[#22C55E] text-black' // Default
                }`}
              >
                {page}
              </button>
            ))}

            {/* Dots */}
            <span className="px-3 py-2 text-sm md:text-base">...</span>

            {/* Last Page */}
            <button
              onClick={() => goToPage(totalPages)}
              className={`px-3 py-2 text-sm md:text-base rounded ${
                currentPage === totalPages
                  ? 'bg-gray-700 text-white'
                  : 'bg-[#22C55E] text-black'
              }`}
            >
              {totalPages}
            </button>

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              className="px-3 py-2 text-sm md:text-base bg-[#22C55E] text-black rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default BlogPage;
