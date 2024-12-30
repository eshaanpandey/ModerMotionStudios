import React from 'react';
import '../styles/Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="dots-loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loader;