import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard'; // Make sure the path is correct

// Use the uploaded VideoCall.jpeg as the project thumbnail
import apnaVideoCall from "../assests/port-folio/VideoCall.jpeg";
import spotify from "../assests/port-folio/spotify.webp";
import ZTradeBot from "../assests/port-folio/Z-TradeBot.jpeg";
import calendar from "../assests/port-folio/Calender.jpeg";
import todo from "../assests/port-folio/todo.webp";
import wanderlust from "../assests/port-folio/wanderlust.webp";
import HireWare from "../assests/port-folio/HireWare.webp";
import Career from "../assests/port-folio/Career.webp";

// Project Data
const projects = [
  { id: 9, title: "Apna Video Call", description: "Developed a full-stack real-time video calling application using React, Express, and MongoDB. Implemented WebRTC for peer-to-peer video/audio communication and Socket.IO for real-time signaling. Secured the application with JWT-based authentication and authorization and deployed the application on cloud hosting, with version control via Git/GitHub.", image: apnaVideoCall, demo: "https://apna-video-call-frontend-8djz.onrender.com", code: "https://github.com/kRATIKAJAIN74/Apna-Video-Call" },
  { id: 2, title: "Z-TradeBot", description: "Developed a full-stack stock trading platform inspired by Zerodha, enabling users to securely sign up, log in, manage their portfolios, and access personalized trading dashboards. Features interactive portfolio analytics, real-time visual insights, and a responsive user experience across devices.", image: ZTradeBot, demo: "https://zerodha-frontend-7cn4.onrender.com", code: "https://github.com/kRATIKAJAIN74/ZERODHA" },
  { id: 4, title: "Wanderlust", description: "A travel website built using the MERN stack with features like login, logout, and place finding.", image: wanderlust, demo: "https://wanderlust-3w0u.onrender.com/listings", code: "https://github.com/kRATIKAJAIN74/WanderLust" },
  
  { id: 6, title: "Calendar", description: "A basic website built using HTML, CSS, and JavaScript.", image: calendar, demo: "https://calender-xk5q.vercel.app/", code: "https://github.com/kRATIKAJAIN74/Calender" },
  { id: 8, title: "Spotify Clone", description: "A clone of Spotify built with HTML and CSS showcasing a sleek UI design.", image: spotify, demo: "https://spotify-clone-orcin-two.vercel.app/", code: "https://github.com/kRATIKAJAIN74/-Projects/tree/main/Project_2(Spotify%20clone)" },
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
