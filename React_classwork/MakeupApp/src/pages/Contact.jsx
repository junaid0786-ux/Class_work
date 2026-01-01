import React, { useState } from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-full bg-pink-100 flex justify-center items-center select-none">
        <div className="w-200 mt-30 mb-25 h-full bg-pink-200 pb-5 rounded-xl shadow-xl">
          <form className="p-8 flex flex-col gap-3">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 text-center">
              Contact Us.
            </h2>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                name="message"
                id="message"
                rows="4"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-lg px-6 font-medium py-2 bg-pink-500 text-white hover:bg-pink-600 cursor-pointer transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
