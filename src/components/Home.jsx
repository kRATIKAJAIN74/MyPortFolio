import React from 'react';
import HeroImage from "../assests/hero-image.jpg";
import { FaArrowRight, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 relative overflow-hidden">
      {/* Top-Left Wavy Lines */}
      <svg
        className="absolute top-0 left-0 w-1/2 h-1/2 z-0"
        viewBox="0 0 720 450"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#915EFF', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#6A0DAD', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          opacity="0.5"
          d="M0,450 C60,410 120,440 180,410 S300,440 360,410 S480,440 540,410 S660,440 720,410"
        />
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          opacity="0.4"
          d="M0,430 C60,390 120,420 180,390 S300,420 360,390 S480,420 540,390 S660,420 720,390"
        />
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          opacity="0.3"
          d="M0,410 C60,370 120,400 180,370 S300,400 360,370 S480,400 540,370 S660,400 720,370"
        />
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          opacity="0.2"
          d="M0,390 C60,350 120,380 180,350 S300,380 360,350 S480,380 540,350 S660,380 720,350"
        />
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          opacity="0.1"
          d="M0,370 C60,330 120,360 180,330 S300,360 360,330 S480,360 540,330 S660,360 720,330"
        />
      </svg>

      {/* Bottom-Right Wavy Lines */}
      <svg
        className="absolute bottom-0 right-0 w-1/2 h-1/2 z-0"
        viewBox="0 0 720 450"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6A0DAD', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#915EFF', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1"
          opacity="0.5"
          d="M0,40 C60,10 120,40 180,10 S300,40 360,10 S480,40 540,10 S660,40 720,10"
        />
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1"
          opacity="0.4"
          d="M0,60 C60,30 120,60 180,30 S300,60 360,30 S480,60 540,30 S660,60 720,30"
        />
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1"
          opacity="0.3"
          d="M0,80 C60,50 120,80 180,50 S300,80 360,50 S480,80 540,50 S660,80 720,50"
        />
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1"
          opacity="0.2"
          d="M0,100 C60,70 120,100 180,70 S300,100 360,70 S480,100 540,70 S660,100 720,70"
        />
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1"
          opacity="0.1"
          d="M0,120 C60,90 120,120 180,90 S300,120 360,90 S480,120 540,90 S660,120 720,90"
        />
      </svg>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 py-16 relative z-10">
        {/* Left: Text Content */}
        <div className="text-white text-center md:text-left animate-left md:max-w-lg">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            <Typewriter
              options={{
                strings: [
                  "I'm a MERN Stack Developer",
                  "I'm a Java Programmer",
                  "I'm a Frontend Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h2>

          <p className="text-lg mb-6">
            A dedicated web developer proficient in the MERN stack and a competitive programming enthusiast. My goal is to create innovative solutions that drive growth and success.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="px-8 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center hover:scale-105 hover:shadow-lg transition-transform duration-300">
                Portfolio
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>

          {/* Skills Icons */}
          <div className="skills-marquee mt-6">
            <div className="skills-icons flex justify-center space-x-6">
              <FaHtml5 size={30} className="text-red-600 hover:text-red-400 transition duration-300" />
              <FaCss3Alt size={30} className="text-blue-600 hover:text-blue-400 transition duration-300" />
              <FaJs size={30} className="text-yellow-500 hover:text-yellow-300 transition duration-300" />
              <FaReact size={30} className="text-cyan-500 hover:text-cyan-400 transition duration-300" />
              <FaNodeJs size={30} className="text-green-500 hover:text-green-400 transition duration-300" />
              <FaDocker size={30} className="text-blue-400 hover:text-blue-300 transition duration-300" />
            </div>
          </div>
        </div>

        {/* Right: Styled Image with Overlay */}
        <div className="relative mt-8 md:mt-0 md:ml-10 animate-right w-full md:w-1/2 max-w-md rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
          <img 
            src={HeroImage} 
            alt="Programming Workspace" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;