import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        date: '',
        time: '',
        department: '',
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

        // Show the success toast when the form is submitted
        toast.success('Appointment booked successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        // Clear the form after submission
        setFormData({
            name: '',
            phoneNumber: '',
            age: '',
            date: '',
            time: '',
            department: '',
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Book an Appointment</h1>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your age"
                        min="0"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                        Appointment Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                        Appointment Time
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                        Department
                    </label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Orthology">Orthology</option>
                        <option value="ICU">ICU</option>
                        <option value="Ventilation">Ventilation</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Neurology">Neurology</option>
                    </select>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>

            {/* ToastContainer to display toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default AppointmentPage;
