import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const ProgramStory = props => {
  console.log(props);
  const pblog = props.blog;
  console.log(pblog);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 16;

  // Calculate total pages based on the number of stories
  const totalPages = Math.ceil(pblog.length / storiesPerPage);

  // Paginate the stories
  const paginatedStories = useMemo(() => {
    const startIndex = (currentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    return pblog.slice(startIndex, endIndex);
  }, [currentPage, pblog]);

  const goToPage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If total pages are less than or equal to max pages to show, show all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Determine range of pages to show around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add dots or intermediate pages
      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <>
      <section className=" py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {paginatedStories.map(story => (
              <Link
                to={`/success-stories/${story.id}`}
                key={story.id}
                className="block"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-full">
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

        {/* Pagination Section */}
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
            {getPageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <span
                    key={`dots-${index}`}
                    className="px-3 py-2 text-sm md:text-base"
                  >
                    ...
                  </span>
                );
              }
              return (
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
              );
            })}

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

export default ProgramStory;
