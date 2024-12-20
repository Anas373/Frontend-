import React, { useState } from "react";
import { doctors } from "./infomedcin"; 
import { Link } from "react-router-dom";
// Assurez-vous que le chemin est correct


const Medcin = ({ selectedSpecialty }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Manage the search query

  // Filter doctors based on selected specialty and search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedSpecialty === "" || doctor.specialization === selectedSpecialty) &&
      (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-4/5 mx-auto mt-12"> {/* Réduction de mt pour monter */}
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        Search <span className="text-blue-500">Doctors</span>
      </h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un médecin..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* List of filtered doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 mx-auto rounded-full border border-gray-300 shadow-sm mb-4"
              />
              <p className="text-green-500 font-semibold text-sm mb-2">Available</p>
              <p className="font-bold text-lg text-gray-800">{doctor.name}</p>
              <p className="text-blue-500 text-sm font-medium">{doctor.specialization}</p>
              <Link
                to={`./Reserver/${doctor.id}`}
                className="text-orange-500 text-xs"
              >
                Reserve
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No doctors found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Medcin;
