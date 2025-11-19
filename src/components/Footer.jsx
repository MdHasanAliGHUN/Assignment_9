import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer data-aos="zoom-in" className="bg-gray-900 text-gray-300 ">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 container-custom">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">PetWinterCare</h2>
          <p className="text-sm leading-relaxed">
            Keep your pets warm and happy this winter! Trusted care solutions by
            expert vets and groomers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:text-white">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Chattogram, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +880 1777-555-222
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@petwintercare.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} PetWinterCare. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-xl mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
