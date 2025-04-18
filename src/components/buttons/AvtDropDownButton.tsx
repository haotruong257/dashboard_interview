"use client";
import Image from "next/image";
import { useState } from "react";
import DownArrow from "../icons/down-arrow";

interface AvtDropDownButtonProps {
  dropdownItems: DropDownItem[]; // dùng React.ReactNode thay vì object
}
interface DropDownItem {
  label: string;
  onClick?: () => void;
}
const AvtDropDownButton: React.FC<AvtDropDownButtonProps> = ({
  dropdownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 focus:outline-none cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          width={40}
          height={40}
          src="/avatar.svg"
          alt=""
          className="rounded-full border-2 border-white flex-shrink-0"
        />
        <DownArrow />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 z-2 w-48 bg-white text-black rounded shadow-lg">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvtDropDownButton;
