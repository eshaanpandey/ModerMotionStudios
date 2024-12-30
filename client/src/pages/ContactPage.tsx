import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <form className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400" 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400" 
                />
                <textarea 
                    placeholder="Message" 
                    className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400" 
                    rows={5}
                ></textarea>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
