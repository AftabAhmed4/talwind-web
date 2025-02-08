import React from 'react';

const Service = () => {
  return (
    <section className="text-gray-700 bg-white py-24">
      <div className="container px-5 mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Our Premium Services</h1>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed xl:w-2/4 lg:w-3/4">
            Our team delivers industry-leading solutions to help you succeed. From strategy to execution, we
            provide high-end services tailored to your needs.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-12 justify-center">
          <div className="p-6 md:w-[25%] flex flex-col items-center text-center bg-indigo-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-20 h-20 mb-6 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Creative Design</h2>
            <p className="text-base text-gray-600 mb-4">
              We create visually appealing and brand-aligned designs that capture the essence of your business.
            </p>
            <a className="text-indigo-600 font-medium hover:underline">Learn More</a>
          </div>

          <div className="p-6 md:w-[25%] flex flex-col items-center text-center bg-indigo-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-20 h-20 mb-6 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy</h2>
            <p className="text-base text-gray-600 mb-4">
              We help define your brand’s voice and direction, ensuring a consistent and impactful presence across all platforms.
            </p>
            <a className="text-indigo-600 font-medium hover:underline">Learn More</a>
          </div>

          <div className="p-6 md:w-[25%] flex flex-col items-center text-center bg-indigo-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-20 h-20 mb-6 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h2>
            <p className="text-base text-gray-600 mb-4">
              We build fast, responsive websites that deliver exceptional user experiences and meet your business goals.
            </p>
            <a className="text-indigo-600 font-medium hover:underline">Learn More</a>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
