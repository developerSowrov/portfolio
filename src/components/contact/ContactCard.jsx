import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 lg:px-28  min-h-screen items-center justify-center">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3">
        <img
          src="/your-image.jpg"
          alt="Profile"
          className="w-full h-40 object-cover rounded-lg"
        />
        
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-400 rounded-md w-full text-black focus:border-2 focus:outline-none focus:border-[#ff0051]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-400 rounded-md w-full text-black focus:border-2 focus:outline-none focus:border-[#ff0051]"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-400 rounded-md w-full mt-4 text-black focus:border-2 focus:outline-none focus:border-[#ff0051]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border border-gray-400 rounded-md w-full mt-4 text-black focus:border-2 focus:outline-none focus:border-[#ff0051]"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border border-gray-400 rounded-md w-full mt-4 h-32  text-black focus:border-2 focus:outline-none focus:border-[#ff0051]"
        ></textarea>
        <button className="bg-white text-[#ff0051] transition-transform duration-300 hover:scale-105 hover:bg-[#ff0051] hover:text-white border-2 border-[#ff0051] p-3 w-full mt-4 rounded-lg font-semibold">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
