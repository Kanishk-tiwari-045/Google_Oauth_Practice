"use client";

import React from "react";
import {
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaUserAlt,
  FaEllipsisH,
} from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";

import { signOut } from "next-auth/react";

function TwitterNavbar() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="flex flex-col items-center">
        <VscTwitter className="text-gray-200 text-4xl mb-4" />
        <nav className="mb-4">
          <NavItem icon={<FaHome className="text-xl" />} label="Home" />
          <NavItem icon={<FaHashtag className="text-xl" />} label="Explore" />
        </nav>
      </div>
      <button className="bg-white rounded-full justify-center text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-300">
        <span onClick={() => signOut()}>Logout</span>
      </button>
    </div>
  );
}

const NavItem = ({ icon, label }) => (
  <div className="mb-2 hover:bg-gray-600 rounded-full py-2 px-4 flex items-center space-x-2">
    {icon}
    <span>{label}</span>
  </div>
);

export default TwitterNavbar;
