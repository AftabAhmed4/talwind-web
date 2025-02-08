// /pages/about.js

import React from 'react';
import Gffice from "../../../public/image.png";
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 ">
          About Us
        </h1>

        <div className="lg:flex lg:justify-between lg:space-x-16">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering exceptional services
              and providing innovative solutions to our clients. Our diverse team brings a wealth of
              experience and expertise in every project we undertake. We believe in fostering strong,
              long-term relationships based on trust, collaboration, and a commitment to excellence.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our mission is to create lasting impact through our high-quality products and services,
              while consistently exceeding the expectations of our clients.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src={Gffice}
              alt="About Us"
              className="w-full h-full object-cover rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Optional Section: Values/Our Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We thrive on creative solutions, using cutting-edge technology to deliver the best outcomes.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, collaborating closely with our clients to achieve mutual success.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to the highest standards of quality and professionalism in every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
