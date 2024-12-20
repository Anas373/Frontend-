import React, { useState, useEffect } from "react"; 
import { doctors } from "./infomedcin"; 
import { Link } from "react-router-dom";

const Medcin = ({ selectedSpecialty }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Manage the search query
  const [loading, setLoading] = useState(true); // Manage loading state
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Store filtered doctors

  useEffect(() => {
    // Simulate data fetching
    const fetchDoctors = () => {
      setLoading(true); // Set loading to true before fetching
      setTimeout(() => {
        setFilteredDoctors(
          doctors.filter(
            (doctor) =>
              (selectedSpecialty === "" || doctor.specialization === selectedSpecialty) &&
              (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        );
        setLoading(false); // Set loading to false after fetching
      }, 500); // Simulate a 500ms loading time
    };

    fetchDoctors();
  }, [selectedSpecialty, searchQuery]); // Re-run when selectedSpecialty or searchQuery changes

  return (
    <div className="w-4/5 mx-auto mt-12" id = "medcin">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">
        Search <span className="text-blue-600">Doctors</span>
      </h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="absolute left-3 top-1/2 transform -translate-y-2.5">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm10 10l-4.35-4.35"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search For a Doctor"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
          />
        </div>
      </div>

      {/* List of filtered doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? ( // Show loading state
          <p className="text-center col-span-full text-gray-500">Loading...</p>
        ) : filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`./Reserver/${doctor.id}`}
              className="bg-white shadow-md rounded-lg p-4 transition-shadow duration-300 text-center hover:shadow-2xl hover:scale-105"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 mx-auto rounded-full border border-gray-300 shadow-sm mb-4 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-green-600 font-semibold text-sm mb-2">Available</p>
              <p className="font-bold text-lg text-gray-800">{doctor.name}</p>
              <p className="text-blue-600 text-sm font-medium transition-transform duration-300 hover:text-red-600 hover:text-lg">
                {doctor.specialization}
              </p>
              <span className="inline-block mt-4 bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Reserve
                </span>
            </Link>
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

export default Medcin; // Export the Medcin component