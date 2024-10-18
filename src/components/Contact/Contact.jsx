// ContactPage.jsx

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact details:', formData);
        alert('Your message has been sent successfully!');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h1>
            
            <div className="flex justify-center flex-wrap gap-8">
                {/* Contact Form */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name" 
                                required 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address" 
                                required 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message..." 
                                rows="5"
                                required 
                            />
                        </div>

                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information and Image Gallery */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Information</h2>
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <p className="text-gray-700 mb-2">
                            <strong>Address:</strong> 123 Main Street, City Center, Anytown, USA
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Phone:</strong> +1 234 567 890
                        </p>
                        <p className="text-gray-700">
                            <strong>Email:</strong> info@vitalcarehospital.com
                        </p>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Facilities</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://via.placeholder.com/400x300" alt="Hospital Facility 1" className="rounded-lg shadow-lg" />
                        <img src="https://via.placeholder.com/400x300" alt="Hospital Facility 2" className="rounded-lg shadow-lg" />
                        <img src="https://via.placeholder.com/400x300" alt="Hospital Facility 3" className="rounded-lg shadow-lg" />
                        <img src="https://via.placeholder.com/400x300" alt="Hospital Facility 4" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
