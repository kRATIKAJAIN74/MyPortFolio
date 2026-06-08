import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Leetcode from "../assests/Imagepart/i1.jpeg";
import Codechef from "../assests/Imagepart/i2.jpeg";
import GFG from "../assests/Imagepart/i3.jpeg";
import Amazon from "../assests/Imagepart/i4.jpeg";
import Hack from "../assests/Imagepart/i5.jpeg";
// import certificate from "../assests/Imagepart/certficate.png";

// Image data
const images = [
  { id: 1, src: Leetcode, alt: "Leetcode" },
  { id: 2, src: Codechef, alt: "Codechef" },
  { id: 3, src: GFG, alt: "GFG" },
  { id: 4, src: Amazon, alt: "Amazon" },
  { id: 5, src: Hack, alt: "Hackathon" },
];

const IntroImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  const handleNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
  };

  return (
    <div className="w-full h-auto bg-gradient-to-b from-gray-900 to-black text-white flex flex-col lg:flex-row py-16 px-8 relative overflow-hidden">
      {/* About Section (Left) */}
      <div className="lg:w-1/2 w-full max-w-screen-lg p-6 mx-auto flex flex-col justify-center space-y-6 pl-8">
        <div className="pb-8 text-center" data-aos="zoom-in" data-aos-delay="100">
          <p className="text-4xl lg:text-5xl font-extrabold inline border-b-4 border-gray-600 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            More About Me
          </p>
        </div>
        <div className="pl-10">
          <p className="text-xl" data-aos="fade-right" data-aos-delay="200">
            I am Kratika Jain, a passionate{" "}
            <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              Software Engineer
            </span>{" "}
            with a strong foundation in Computer Science. I specialize in full-stack development using the{" "}
            <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              MERN stack
            </span>{" "}
            and have proficiency in{" "}
            <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              Java .
            </span>.
          </p>
          <br />
          <p className="text-xl" data-aos="fade-right" data-aos-delay="400">
            As an{" "}
            <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
             Top 1500 performer in Google Big Code
            </span>, I demonstrated strong problem-solving abilities and coding skills in a highly competitive programming environment. I have also worked on a variety of projects, both front-end and back-end, that showcase my capability to create{" "}
            <span className="highlight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              impactful and scalable solutions
            </span>.
          </p>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0 px-6">
        <div className="relative w-full h-[450px] flex justify-center items-center" data-aos="zoom-in-up" data-aos-delay="300">
          {/* Gradient Border with Shimmer Effect */}
          <div className="relative w-[450px] h-[450px] p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)]">
            {/* Shimmer Highlight */}
            <div className="absolute inset-0 shimmer"></div>
            {/* Main Card Content */}
            <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden flex justify-center items-center">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={`w-full h-full object-contain transition-opacity duration-300 transform hover:scale-105 hover:rotate-2 ${fade ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>

          {/* Navigation Arrows with Pulse Animation */}
          <button
            onClick={handlePrevImage}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300 hover:scale-110 animate-pulse"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300 hover:scale-110 animate-pulse"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Inline CSS for Shimmer Effect and Highlights */}
      <style>
        {`
          .shimmer {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              90deg,
              transparent 30%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 70%
            );
            animation: shimmer 3s infinite;
            pointer-events: none;
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .highlight {
            position: relative;
            display: inline-block;
            transition: all 0.3s ease;
          }

          .highlight:hover {
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
          }
        `}
      </style>
    </div>
  );
};

export default IntroImageSection;