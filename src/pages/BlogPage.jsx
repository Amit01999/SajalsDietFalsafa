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
        <section className="flex items-center justify-center m-5 space-x-2 p-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-4 py-2 bg-[#22C55E] text-white rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </button>

          {[1, 2, 3, 4].map(page => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page ? 'bg-gray-700 text-white' : 'bg-[#22C55E]'
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-4 py-2">...</span>

          <button
            onClick={() => goToPage(totalPages)}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? 'bg-gray-700 text-white'
                : 'bg-[#22C55E]'
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-4 py-2 bg-[#16A34A] text-white rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </section>
      </section>
    </>
  );
};

export default BlogPage;
