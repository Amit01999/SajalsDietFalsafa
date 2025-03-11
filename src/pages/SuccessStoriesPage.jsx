import React, { useState } from 'react';
import { SuccessData } from '../Data/SuccessData';
import { Link } from 'react-router-dom';
const SuccessStories = () => {
  const totalPages = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const goToPage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SuccessData.map(story => (
            <Link
              to={`/success-stories/${story.id}`}
              key={story.id}
              className="block"
            >
              <div
                key={story.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden min-h-full"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 font-semibold">{story.title}</p>
                  <p className="text-gray-500 text-sm mt-2 flex items-center">
                    <span className="mr-2">📅</span> {story.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
  );
};

export default SuccessStories;
