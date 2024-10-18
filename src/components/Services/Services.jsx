import React from 'react'
import ventilation from '../../assets/ventilation.JPG'
import ICU from '../../assets/ICU.JPG'
import Radio from '../../assets/Radio.JPG'
import Neuro from '../../assets/Neuro.JPG'
import Cardio from '../../assets/Cardio.JPG'
import Pedia from '../../assets/Pedia.JPG'
import Ortho from '../../assets/Ortho.JPG'
import Emergency from '../../assets/Emergency.JPG'
import Derma from '../../assets/Derma.JPG'
import Maternary from '../../assets/Maternary.JPG'
import Onco from '../../assets/Onco.JPG'
import Physio from '../../assets/Physio.JPG'
import Gastro from '../../assets/Gastro.JPG'
import ENT from '../../assets/ENT.JPG'
import Nephro from '../../assets/Nephro.JPG'
const services = [
  {
      name: "Ventilation",
      description: "State-of-the-art ventilation systems ensuring critical support for patients in need of respiratory assistance.",
      image: `${ventilation}`, // Replace with the actual image path
  },
  {
      name: "ICU",
      description: "24/7 intensive care unit with highly trained staff and modern equipment for serious medical conditions.",
      image:`${ICU}`, // Replace with the actual image path
  },
  {
      name: "Cardiology",
      description: "Advanced cardiac care including diagnostics, treatment, and surgical interventions for heart-related ailments.",
      image: `${Cardio}`, // Replace with the actual image path
  },
  {
      name: "Orthology",
      description: "Comprehensive orthopedic services, from diagnosis to treatment, ensuring mobility and quality of life.",
      image: `${Ortho}`, // Replace with the actual image path
  },
  {
      name: "Emergency Care",
      description: "Rapid response emergency care to handle accidents, trauma, and other critical situations effectively.",
      image: `${Emergency}`, // Replace with the actual image path
  },
  {
    name: "Pediatrics",
    description: "Dedicated pediatric care for children of all ages, ensuring their growth and well-being through specialized medical care.",
    image: `${Pedia}`, // Replace with the actual image path
},
{
    name: "Neurology",
    description: "Expert care for neurological disorders, including stroke management, epilepsy, and neurodegenerative conditions.",
    image: `${Neuro}`, // Replace with the actual image path
},
{
    name: "Radiology",
    description: "Modern imaging services, including MRI, CT scans, and X-rays, to provide accurate diagnostics for better treatment.",
    image: `${Radio}`, // Replace with the actual image path
},
{
    name: "Maternity Care",
    description: "Comprehensive maternity services for expectant mothers, from prenatal care to delivery and postnatal support.",
    image: `${Maternary}`, // Replace with the actual image path
},
{
    name: "Physiotherapy",
    description: "Rehabilitation and physical therapy services aimed at helping patients recover and regain mobility after injuries or surgeries.",
    image:`${Physio}`, // Replace with the actual image path
},
{
    name: "Oncology",
    description: "Advanced cancer treatment and care, including chemotherapy, radiation therapy, and supportive care.",
    image: `${Onco}`, // Replace with the actual image path
},
{
    name: "Dermatology",
    description: "Specialized care for skin conditions, including acne treatment, skin cancer screenings, and cosmetic procedures.",
    image: `${Derma}`, // Replace with the actual image path
},
{
    name: "Gastroenterology",
    description: "Expert treatment for digestive system disorders, including liver, pancreas, and gastrointestinal issues.",
    image: `${Gastro}`, // Replace with the actual image path
},
{
    name: "ENT (Ear, Nose, Throat)",
    description: "Comprehensive care for ear, nose, and throat conditions, including hearing tests and surgical procedures.",
    image: `${ENT}`, // Replace with the actual image path
},
{
    name: "Nephrology",
    description: "Advanced care for kidney-related conditions, including dialysis and management of chronic kidney diseases.",
    image: `${Nephro}`, // Replace with the actual image path
}
];

const Services = () => {

  return (
    <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className="service-card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                    <img 
                        src={service.image} 
                        alt={service.name} 
                        className="rounded-t-lg w-full h-48 object-cover"
                    />
                    <h2 className="text-2xl text-center font-semibold mt-4 text-blue-700">{service.name}</h2>
                    <p className="text-center text-gray-600 mt-2">{service.description}</p>
                    <div className='flex justify-center'>
                    <button className="mt-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Learn More
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Services
