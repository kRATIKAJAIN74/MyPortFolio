import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaJava } from 'react-icons/fa'; 
import { SiMongodb, SiJavascript, SiExpress, SiC } from 'react-icons/si'; 

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-gradient-to-b from-gray-700 to-black text-white py-16">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col items-center w-full">
       
        <motion.p
          className="text-5xl font-extrabold inline border-b-4 border-pink-500 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Below are the tools and technologies that I use to bring ideas to life.
        </motion.p>

        
        <motion.div
          className="overflow-hidden w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-12 py-4">
           
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaHtml5 size={60} className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">HTML</h3>
            </motion.div>

           
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaCss3Alt size={60} className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">CSS</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SiJavascript size={60} className="mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-semibold">JavaScript</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaReact size={60} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold">React</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FaNodeJs size={60} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-semibold">Node.js</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <SiExpress size={60} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-semibold">Express</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <SiMongodb size={60} className="mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-semibold">MongoDB</h3>
            </motion.div>

            
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <FaGithub size={60} className="mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-semibold">GitHub</h3>
            </motion.div>

           
            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <FaJava size={60} className="mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-semibold">Java</h3>
            </motion.div>

            <motion.div
              className="text-center transform transition duration-500 hover:scale-110 hover:text-pink-500 w-24 sm:w-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <SiC size={60} className="mx-auto mb-4 text-gray-500" />
              <h3 className="text-2xl font-semibold">C</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
