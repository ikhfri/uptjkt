// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 text-white p-8 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="/"
              target="_self"
             
              className="hover:text-gray-300"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="/"
              target="_self"
              
              className="hover:text-gray-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="/"
              target="_self"
              
              className="hover:text-gray-300"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p className='w-44'>Jl. Raya Karadenan, 
            Kab. Bogor, Jawa Barat</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: admin@tjkt.com</p>
          <p>Phone: coming soon</p>
        </div>
        
      </div>
      <div className="mt-8 text-center">
        <p>Copyright © 2023 - UP TJKT. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
