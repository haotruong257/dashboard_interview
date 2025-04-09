"use client";
import { categoriesHeader } from "@/lib/fakeData";
import React from "react";
import AvtDropDownButton from "../components/buttons/AvtDropDownButton";
import AboutIcon from "../components/icons/about-icon";
import BellIcon from "../components/icons/bell-icon";
import ChangeIcon from "../components/icons/change-icon";
import MainLogo from "../components/icons/logo";
import MessageIcon from "../components/icons/message-icon";
import SearchIcon from "../components/icons/search-icon";
import SettingIcon from "../components/icons/setting-icon";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4 items-center ml-6">
        <div className="mr-8">
          <MainLogo />
        </div>{" "}
        {categoriesHeader.map((category, index) => (
          <a key={index} href="#" className="hover:underline header-font-color">
            {category}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <div className="form-search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="p-2 text-gray-300 focus:outline-none placeholder-gray-300"
          />
        </div>
        <div className="flex space-x-2">
          <button className="p-2 cursor-pointer">
            <SettingIcon />
          </button>
          <button className="p-2 cursor-pointer">
            <ChangeIcon />
          </button>
          <button className="p-2 cursor-pointer">
            <MessageIcon />
          </button>
          <button className="p-2 cursor-pointer">
            <BellIcon />
          </button>
          <button className="p-2 cursor-pointer">
            <AboutIcon />
          </button>
        </div>
        <AvtDropDownButton
          dropdownItems={[
            { label: "Profile", onClick: () => console.log("Go to Profile") },
            { label: "Settings", onClick: () => console.log("Open Settings") },
            { label: "Logout", onClick: () => console.log("Logout") },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
