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
    <>
      <div className="bg-[#FAFAFA] w-full py-10 pl-32 text-[#545454] font-medium text-xl relative border-b border-[#E5E5E5] mt-24">
        Success Stories
      </div>
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
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

export default SuccessStories;
