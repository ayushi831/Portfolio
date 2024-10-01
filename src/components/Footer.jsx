import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-6 text-gray-800">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/ayushi-chauhan%E2%9C%A8%EF%B8%8F-2593632b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={30} className="hover:text-blue-700 transition-colors duration-300" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col items-center">
              <p className="text-lg text-gray-800">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
