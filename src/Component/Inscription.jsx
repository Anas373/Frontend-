import { useState } from 'react';

function Inscription() {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    specialty: '',
    experience: '',
  });

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setFormData({ ...formData, specialty: '', experience: '' }); // Reset doctor fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      role: userType,
    };

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Reset the form
        setUserType(null);
        setFormData({
          username: '',
          email: '',
          password: '',
          specialty: '',
          experience: '',
        });
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.message}`);
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Créer un compte</h2>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleUserTypeSelection('user')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Utilisateur
        </button>
        <button
          onClick={() => handleUserTypeSelection('doctor')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Médecin
        </button>
      </div>

      {userType && (
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {userType === 'user' ? 'Formulaire pour Utilisateur' : 'Formulaire pour Médecin'}
          </h3>

          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {userType === 'doctor' && (
            <>
              <input
                type="text"
                name="specialty"
                placeholder="Spécialité"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="number"
                name="experience"
                placeholder="Années d'expérience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </>
          )}

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              userType === 'user' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {userType === 'user' ? 'Créer un compte utilisateur' : 'Créer un compte médecin'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Inscription;
