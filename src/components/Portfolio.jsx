import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard'; // Make sure the path is correct

// Project Images
import foodie from "../assests/port-folio/foodie.webp";
import lms from "../assests/port-folio/lms.webp";
import spotify from "../assests/port-folio/spotify.webp";
import todo from "../assests/port-folio/todo.webp";
import wanderlust from "../assests/port-folio/wanderlust.webp";
import parallax from "../assests/port-folio/parall.webp";
import HireWare from "../assests/port-folio/HireWare.webp";
import Samvad from "../assests/port-folio/Samvad.webp";
import Career from "../assests/port-folio/Career.webp";

// Project Data
const projects = [
  { id: 9, title: "CareerPilo-AI", description: "CareerPilot-AI is an intelligent career preparation platform designed to help users simulate real interview experiences, receive actionable feedback, and upskill through personalized learning paths.", image: Career, demo: "https://career-pilot-ai-zplo.vercel.app/", code: "https://github.com/ishikajain1234/CareerPilot_AI" },
  { id: 1, title: "Foodie", description: "A food delivery app showcasing React and API integration.", image: foodie, demo: "https://mini-project-beta-kohl.vercel.app/", code: "https://github.com/ishikajain1234/mini-project" },
  { id: 2, title: "HireWare", description: "A modern, fully responsive Job Portal built using React.js and Vite, supporting role-based access for Recruiters and Candidates.", image: HireWare, demo: "https://hire-wave-kappa.vercel.app/", code: "https://github.com/ishikajain1234/HireWare" },
  { id: 3, title: "Sam-Vaad", description: "Samvaad is a real-time chat application built to facilitate seamless and secure communication between users. Inspired by modern messaging platforms, it supports 1-on-1 and group chats, live typing indicators, message read receipts, and real-time updates without page refresh.", image: Samvad, demo: "https://samvaad-9cvj.onrender.com/", code: "https://github.com/arjunvats3042/fullstack_chat_app" },
  { id: 4, title: "Wanderlust", description: "A travel website built using the MERN stack with features like login, logout, and place finding.", image: wanderlust, demo: "#", code: "https://github.com/ishikajain1234/wanderlust-website" },
  
  { id: 6, title: "To-Do App", description: "A simple and effective to-do list application built with JS.", image: todo, demo: "#", code: "https://github.com/ishikajain1234/todoapp" },
  { id: 7, title: "PARALLAX WEBSITE", description: "A parallax website using scrolling effects to create immersive experience.", image: parallax, demo: "#", code: "https://github.com/ishikajain1234/project1" },
  { id: 8, title: "Spotify Clone", description: "A clone of Spotify built with HTML and CSS showcasing a sleek UI design.", image: spotify, demo: "https://spotify-clone-orcin-two.vercel.app/", code: "https://github.com/ishikajain1234/Spotify-Clone" },
];

const CARD_GUTTER = 16;

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  // Adjust visible cards on resize
  useEffect(() => {
    function updateVisibleCount() {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else if (width >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    }

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const totalProjects = projects.length;

  const next = () => {
    setStartIndex((prev) => (prev + visibleCount) % totalProjects);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - visibleCount + totalProjects) % totalProjects);
  };

  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(startIndex + i) % totalProjects]);
  }

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen flex flex-col justify-center items-center p-6">
      
      {/* Header */}
      <div className="max-w-screen-lg w-full text-center mb-8">
        <motion.p
          className="text-4xl font-bold inline border-b-4 border-gray-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.p>
        <motion.p
          className="py-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Check out some of my work right here
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl w-full flex items-center justify-center">
        
        {/* Prev Arrow */}
        <button
          onClick={prev}
          aria-label="Previous projects"
          className="text-white bg-gray-700 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition mr-4 hidden sm:block"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Cards Container */}
        <div className="flex overflow-hidden w-full justify-center" style={{ gap: `${CARD_GUTTER}px` }}>
          {visibleProjects.map(({ id, title, description, image, demo, code }) => (
            <motion.div
              key={id}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={title}
                description={description}
                image={image}
                demo={demo}
                code={code}
              />
            </motion.div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          aria-label="Next projects"
          className="text-white bg-gray-700 bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition ml-4 hidden sm:block"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
