import React from 'react';

export default function Tips() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Nourish Your Gut, Transform Your Health
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#22C55E] to-[#22C55E] mx-auto my-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover science-backed breakfast options that promote gut health,
            improve digestion, and boost your overall wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Breakfast Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src="https://solcleanse.com/cdn/shop/articles/Journal_Gut-LovingProbioticSmoothieBowl.webp?v=1740550107"
                alt="Oatmeal with berries"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Probiotic Berry Bowl
              </h3>
              <p className="text-gray-600 mb-4">
                A delicious blend of rolled oats, fresh berries, nuts, and
                probiotic-rich yogurt that supports digestive health.
              </p>

              <div className="space-y-2 my-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Rich in prebiotic fiber to feed good gut bacteria
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Contains live active cultures from yogurt
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Provides sustained energy throughout the day
                  </p>
                </div>
              </div>

              <a
                href="#recipe"
                className="inline-block px-6 py-2 mt-2 rounded-full bg-[#22C55E] text-white font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Recipe
              </a>
            </div>
          </div>

          {/* Breakfast Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src="https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Banana and oat smoothie"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Prebiotic Smoothie
              </h3>
              <p className="text-gray-600 mb-4">
                A nutrient-dense smoothie made with banana, oats, and fermented
                foods that nourish your microbiome.
              </p>

              <div className="space-y-2 my-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bananas provide resistant starch
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Oats deliver beta-glucan fiber for gut health
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Supports healthy digestion and immunity
                  </p>
                </div>
              </div>

              <a
                href="#recipe"
                className="inline-block px-6 py-2 mt-2 rounded-full bg-[#22C55E] text-white font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Recipe
              </a>
            </div>
          </div>

          {/* Breakfast Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Fermented breakfast bowl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Fermented Breakfast Bowl
              </h3>
              <p className="text-gray-600 mb-4">
                A savory breakfast featuring tempeh, sauerkraut, and other
                fermented foods that deliver probiotics.
              </p>

              <div className="space-y-2 my-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Multiple sources of natural probiotics
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    High in plant protein and fiber
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Supports healthy inflammatory response
                  </p>
                </div>
              </div>

              <a
                href="#recipe"
                className="inline-block px-6 py-2 mt-2 rounded-full bg-[#22C55E] text-white font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Recipe
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium text-gray-800 mb-3">
              The Gut-Health Connection
            </h3>
            <p className="text-gray-600">
              Why a healthy microbiome is essential for overall wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-5c-.83 0-1.5-.67-1.5-1.5S3.17 2.5 4 2.5 5.5 3.17 5.5 4 4.83 5.5 4 5.5zm0 10c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z M12 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0 5c-1.93 0-3.5 1.57-3.5 3.5S10.07 21.5 12 21.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Improves Digestion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 17.586V3h2v14.586l4.707-4.707 1.414 1.414L12 21l-6.121-6.121 1.414-1.414L11 17.586z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Boosts Immunity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 6l4 4m0 0l-4 4m4-4H8"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Regulates Mood</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10l8 8H4l8-8z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Reduces Inflammation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
