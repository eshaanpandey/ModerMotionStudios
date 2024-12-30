import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Name" className="block w-full p-2 border rounded" />
                <input type="email" placeholder="Email" className="block w-full p-2 border rounded" />
                <textarea placeholder="Message" className="block w-full p-2 border rounded" rows={5}></textarea>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </div>
    );
};

export default ContactPage;
