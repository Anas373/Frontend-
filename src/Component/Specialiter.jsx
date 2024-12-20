import React, { useState } from "react";
import Medcin from "../Component/Medcin";
import Dent from "../assets/dentist.png";
import yeux from "../assets/yeux.png";
import poumon from "../assets/poumon.png";
import os from "../assets/os.png";
import couer from "../assets/heart.png";
import family from "../assets/family.png";
import brain from "../assets/brain.png";
import Emergency from "../assets/ambulance.png";

const Specialiter = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query

  const menuItems = [
    { label: "Tous", link: "#", icon: null },
    { label: "Pneumologue", link: "#", icon: poumon },
    { label: "Orthopédiste", link: "#", icon: os },
    { label: "Cardiologue", link: "#", icon: couer },
    { label: "Dentiste", link: "#", icon: Dent },
    { label: "Médecine familiale", link: "#", icon: family },
    { label: "Ophtalmologue", link: "#", icon: yeux },
    { label: "Psychologie", link: "#", icon: brain },
  ]

  const handleClick = (specialty) => {
    setSelectedSpecialty(specialty === "Tous" ? "" : specialty);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-50 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-8 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(item.label)}
                  className="flex items-center justify-center rounded-lg w-full h-16 px-6 text-sm font-medium text-gray-600 hover:bg-blue-500 hover:text-white"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8"
                    />
                  )}
                  <span className="ml-4">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col">

        {/* Doctors List */}
        <div className="flex-1 overflow-y-auto mb-8">
          <Medcin selectedSpecialty={selectedSpecialty} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Specialiter;