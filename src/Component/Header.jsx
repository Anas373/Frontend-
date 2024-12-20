import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-scroll'; // Single import
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [model, setModel] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const toggleModel = () => setModel(!model);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isLoginMode
            ? 'http://localhost:8000/api/login'
            : 'http://localhost:8000/api/register';

        try {0
            const response = await axios.post(endpoint, { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Une erreur s'est produite, veuillez réessayer."
            );
        }
    };

    const handleForgotPassword = () => {
        navigate('./ResetPassword');
    };

    const handleLogout = () => {
        console.log("User logged out");
    };

    return (
        <header className="w-full bg-blue shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-semibold">
                    Medicle <span className="font-bold text-blue-500">Team</span>
                </h1>
    
                <nav className="flex-1 flex justify-center">
                    <ul className="flex gap-10">
                        <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
                            <Link
                                to="hero" // Directly setting the 'to' prop for scrolling
                                smooth={true} // Enable smooth scrolling
                                duration={500} // Duration of the scroll animation
                            >
                                Home
                            </Link>
                        </li>
                    
                        <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
                            <Link
                                to="reservation"
                                smooth={true}
                                duration={500}
                            >
                                Réservation
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={toggleModel}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faUser} /> Login
                    </button>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                    >
                        Log Out
                    </button>
                </div>
            </div>

            {model && (
                <div className="fixed top-4 right-4 max-w-[300px] bg-white p-4 rounded-lg shadow-lg z-50">
                    <button
                        onClick={toggleModel}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <div className="sm:mx-auto sm:w-full">
                        <h2 className="mt-4 text-center text-lg font-bold tracking-tight text-gray-900">
                            {isLoginMode ? 'Sign in to your account' : 'Create an account'}
                        </h2>
                    </div>

                    <div className="mt-4">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-gray-300 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                {isLoginMode ? 'Sign in' : 'Register'}
                            </button>

                            <p
                                onClick={handleForgotPassword}
                                className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                            >
                                Forgot Password?
                            </p>
                        </form>

                        <p className="mt-4 text-center text-xs text-gray-500">
                            {isLoginMode ? (
                                <a
                                    onClick={toggleMode}
                                    className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                                >
                                    Create an account?
                                </a>
                            ) : (
                                <a
                                    onClick={toggleMode}
                                    className="text-indigo-600 hover:text-indigo-500 font-semibold cursor-pointer"
                                >
                                    Already have an account?
                                </a>
                            )}
                        </p>
                        {message && (
                            <p className="mt-2 text-center text-sm text-red-500">
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
