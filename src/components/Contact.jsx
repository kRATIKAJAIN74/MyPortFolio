import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill in all fields!');
      return;
    }

    // Here you can integrate EmailJS or backend call
    toast.success('Message Sent Successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm excited to connect! Fill out the form or reach out via socials.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/kratika-jain-39511631b/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition"><FaLinkedin /></a>
            <a href="https://github.com/kRATIKAJAIN74" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition"><FaGithub /></a>
            <a href="mailto:jkratika8@gmail.com" className="text-3xl hover:text-pink-500 transition"><FaEnvelope /></a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-800 py-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg">Made with <span role="img" aria-label="heart">❤️</span> by Kratika</p>
          <p className="text-sm text-gray-400">Thanks for visiting!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
