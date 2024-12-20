import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Sidebar = ({ reservation }) => {
  const { doctorId } = useParams();

  const [appointments, setAppointments] = useState([
    { patientName: 'John Doe', time: '10:00 AM' },
    { patientName: 'Jane Doe', time: '11:00 AM' },
    { patientName: 'Bob Smith', time: '12:00 PM' },
  ]);

  const [notifications, setNotifications] = useState(5);
  const [doctor, setDoctor] = useState(null);

  // Add the new reservation to appointments and increment notifications
  useEffect(() => {
    if (reservation) {
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        {
          patientName: reservation.patientName || 'Unknown Patient',
          time: reservation.time || 'Unknown Time',
        },
      ]);

      setNotifications((prevNotifications) => prevNotifications + 1);
    }
  }, [reservation]);

  // Fetch doctor's details when the doctorId changes
  useEffect(() => {
    const fetchDoctor = async () => {
      if (doctorId) {
        const fetchedDoctor = {
          id: doctorId,
          name: `Dr. ${doctorId}`,
          photo: `https://via.placeholder.com/150?text=Doctor+${doctorId}`,
        };
        setDoctor(fetchedDoctor);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-64 p-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div
              className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
              style={{
                backgroundImage: `url(${doctor?.photo || 'defaultPhoto.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="Doctor's Profile Picture"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">
                {doctor?.name || 'Dr. Jane Smith'}
              </h2>
              <p className="text-sm">Doctor</p>
            </div>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-labelledby="bell-icon-title"
            >
              <title id="bell-icon-title">Notifications</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="ml-2">{notifications}</span>
          </div>
        </div>
        <ul>
          <li className="mb-4">
            <button className="block py-2 px-4 hover:bg-blue-700 rounded w-full text-left">
              Settings
            </button>
          </li>
          <li className="mb-4">
            <button className="block py-2 px-4 hover:bg-blue-700 rounded w-full text-left">
              Notifications
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Appointments</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="bg-white shadow-md rounded p-4 mb-4">
              <h3 className="text-lg font-bold">{appointment.patientName}</h3>
              <p className="text-sm">{appointment.time}</p>
            </li>
          ))}
        </ul>

        {reservation && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">New Reservation</h3>
            <p>Patient: {reservation.patientName || 'N/A'}</p>
            <p>Doctor: {reservation.doctor?.name || 'N/A'}</p>
            <p>Date: {reservation.date || 'N/A'}</p>
            <p>Time: {reservation.time || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
