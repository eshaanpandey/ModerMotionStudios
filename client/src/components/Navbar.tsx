import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar: React.FC = React.memo(() => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark', !darkMode);
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`p-4 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-blue-500'} transition-colors duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
                    Modern Motion Studios
                </NavLink>

                <div className="hidden lg:flex items-center gap-8">
                    <NavLink to="/category/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'}`}>
                        Products
                    </NavLink>
                    <NavLink to="/category/reels" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'}`}>
                        Reels
                    </NavLink>
                    <NavLink to="/category/designs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'}`}>
                        Designs
                    </NavLink>
                    <NavLink to="/category/videos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'}`}>
                        Videos
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'}`}>
                        Contact Us
                    </NavLink>
                    <button
                        onClick={toggleDarkMode}
                        className={`ml-4 p-2 rounded-full flex items-center justify-center w-12 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                    >
                        <FaMoon className={`text-white ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
                        <FaSun className={`text-yellow-400 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
                    </button>
                </div>

                <button onClick={toggleMenu} className="lg:hidden text-white p-2">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div
                ref={menuRef}
                className={`absolute top-16 left-0 w-full z-10 shadow-md lg:hidden transition-transform duration-300 ${
                    menuOpen ? '' : 'hidden'
                } ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}
            >
                <div className="flex flex-col items-center gap-4 p-4">
                    <NavLink to="/category/products" className="nav-link text-white" onClick={closeMenu}>
                        Products
                    </NavLink>
                    <NavLink to="/category/reels" className="nav-link text-white" onClick={closeMenu}>
                        Reels
                    </NavLink>
                    <NavLink to="/category/designs" className="nav-link text-white" onClick={closeMenu}>
                        Designs
                    </NavLink>
                    <NavLink to="/category/videos" className="nav-link text-white" onClick={closeMenu}>
                        Videos
                    </NavLink>
                    <NavLink to="/contact" className="nav-link text-white" onClick={closeMenu}>
                        Contact Us
                    </NavLink>
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full flex items-center justify-center w-12 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                    >
                        <FaMoon className={`text-white ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
                        <FaSun className={`text-yellow-400 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
                    </button>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
