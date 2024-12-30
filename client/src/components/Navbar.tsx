import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaSun, FaMoon} from 'react-icons/fa';

import '../styles/Navbar.css';

const Navbar: React.FC = React.memo(() => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark', !darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <nav className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className="text-xl font-bold">
                    Modern Motion Studios
                </NavLink>
                <div className="flex gap-8">
                    <NavLink
                        to="/category/products"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/category/reels"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Reels
                    </NavLink>
                    <NavLink
                        to="/category/designs"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Designs
                    </NavLink>
                    <NavLink
                        to="/category/videos"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Videos
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Contact Us
                    </NavLink>
                </div>
                <button 
                    onClick={toggleDarkMode} 
                    className={`ml-4 p-2 rounded-full flex items-center justify-center w-12 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    {/* Icon for dark mode (moon) */}
                    <FaMoon className={`text-white ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
                    {/* Icon for light mode (sun) with yellow color */}
                    <FaSun className={`text-yellow-400 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
                </button>
            </div>
        </nav>
    );
});

export default Navbar;
