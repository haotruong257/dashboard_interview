"use client";
import React, { useState } from "react";
import "../../styles/buttons.css";
import DownArrow2 from "../icons/down-arrow2";

interface CalendarDropDownButtonProps {
  dropdownItems: DropDownItem[];
  title: string;
  prefixIcon?: React.ReactNode;
}
interface DropDownItem {
  label: string;
  onClick?: () => void;
}
const CalendarDropDownButton: React.FC<CalendarDropDownButtonProps> = ({
  dropdownItems,
  title,
  prefixIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-chart-button relative">
      <button
        className="flex whitespace-nowrap items-center gap-2 focus:outline-none cursor-pointer"
        onClick={toggleDropdown}
      >
        {prefixIcon ?? null}
        {title}
        <DownArrow2 />
      </button>
      {isOpen && (
        <div className="absolute fs-16 font-normal z-2 left-0 top-10 w-full bg-white text-black rounded shadow-lg">
          {/* Render các item */}
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

export default CalendarDropDownButton;
