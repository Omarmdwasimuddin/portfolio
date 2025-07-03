'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Get In <span className="text-green-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out via email or fill out the form. I’m always open to discussing new projects or opportunities.
            </p>
            <div className="mb-3">
              <p className="text-gray-300">📧 Email:</p>
              <a href="mailto:wasim@example.com" className="text-green-400 hover:underline">
                mdwasimu015@gmail.com
              </a>
            </div>
            <div className="mb-3">
              <p className="text-gray-300">📍 Location:</p>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-full text-white font-semibold"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
