"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Gffice from "../../public/image.png";
import Product from "../app/product";

// Typewriter Effect Component
const TypewriterText = () => {
  const fullText = "Streamline Payments for Your Business";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    // let index = isDeleting ? fullText.length : 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [displayText, isDeleting]);

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight py-6">
      {displayText}
    </h1>
  );
};

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12 lg:py-24 lg:px-20 ">
      <div className="grid max-w-7xl mx-auto gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 text-center lg:text-left mt-24">
          <TypewriterText />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mt-10" >
            Powering global transactions with seamless integration, robust security, and effortless tax compliance.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 dark:text-blue-400 dark:border-blue-400 transition"
            >
              Speak to Sales
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 flex justify-center">
          <Image
            src={Gffice}
            alt="Payment Solutions"
            width={450}
            height={450}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Product Component */}
      <div className="mt-12">
        <Product />
      </div>
    </section>
  );
}
