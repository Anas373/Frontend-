import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from './infomedcin'; // Vérifiez que le chemin d'importation est correct
import { FaPhoneAlt, FaCalendarAlt, FaTimes, FaCheck } from 'react-icons/fa';

const Reservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [rating, setRating] = useState(0);

  // Récupération du médecin en fonction de l'ID
  useEffect(() => {
    const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));
    setSelectedDoctor(doctor || null); // Protection contre les valeurs nulles
  }, [id]);

  if (!selectedDoctor) {
    return <div className="text-center text-red-500">Médecin introuvable</div>;
  }

  const handleAccept = () => {
    navigate(`/Dashborde/${selectedDoctor.id}`);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-gradient-to-b from-sky-300 to-sky-100 min-h-screen py-12">
      <main className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Section information médecin */}
          <div className="space-y-6">
            <div className="w-44 h-44 rounded-full overflow-hidden mx-auto shadow-2xl transform transition duration-500 hover:scale-110">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 text-center">{selectedDoctor.name}</h2>
            <p className="text-lg text-gray-600 text-center">{selectedDoctor.info}</p>

            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="bg-blue-600 text-white p-3 rounded-full shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-2xl">
                <FaPhoneAlt size={18} />
              </div>
              <p className="text-lg text-blue-700 font-medium">{selectedDoctor.telephone}</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl mt-4">
              <iframe
                src={selectedDoctor.localisation}
                width="100%"
                height="300"
                className="border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Section de réservation */}
          <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg mx-auto space-y-6 transform transition duration-500 hover:shadow-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <FaCalendarAlt size={24} className="text-blue-600" />
              <h3 className="text-3xl font-semibold text-gray-800">Rendez-vous</h3>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom du patient</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Entrez votre nom complet"
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="text-sm font-medium text-gray-700">Heure</label>
                <input
                  id="time"
                  type="time"
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="consultationType" className="text-sm font-medium text-gray-700">Type de consultation</label>
                <select
                  id="consultationType"
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  required
                >
                  <option value="visitor">Visiteur</option>
                  <option value="waitingList">Liste d'attente</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Évaluation</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => handleRating(star)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={star <= rating ? 'yellow' : 'gray'}
                      viewBox="0 0 20 20"
                      width="24"
                      height="24"
                      className="cursor-pointer"
                    >
                      <path d="M10 15.27L16.18 19l-1.64-7.03L19 8.24l-7.19-.61L10 2 8.19 7.63 1 8.24l5.46 3.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring transform transition duration-300"
                >No doctors found.
                  Accepter
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const confirmCancel = window.confirm("Êtes-vous sûr de vouloir annuler la réservation ?");
                    if (confirmCancel) {
                      alert("Réservation annulée");
                      navigate("/");
                    }
                  }}
                  className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring transform transition duration-300"
                >
                  Annuler
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Avant de prendre un rendez-vous, veuillez vérifier les disponibilités :</p>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <FaTimes className="text-red-600" />
                  <span className="text-gray-700">Dimanche (Fermé)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTimes className="text-red-600" />
                  <span className="text-gray-700">Samedi (Fermé)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-green-600" />
                  <span className="text-gray-700">Lundi - Vendredi (Ouvert)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservation;