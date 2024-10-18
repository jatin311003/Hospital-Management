// DoctorSlider.jsx
import DoctorImage1 from '../../assets/DoctorImage1.png'
import DoctorImage2 from '../../assets/DoctorImage2.png'
import DoctorImage3 from '../../assets/DoctorImage3.jpg'
import DoctorImage4 from '../../assets/DoctorImage4.jpg'
import DoctorImage5 from '../../assets/DoctorImage5.jpg'
import DoctorImage6 from '../../assets/DoctorImage6.jpg'

import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const doctors=[
    {
        name:"Dr. Emily Carter",
        img: `${DoctorImage1}`,
        Specialization:"Family Medicine",
        Description:"Dr. Carter is a compassionate family physician dedicated to providing comprehensive care for patients of all ages. She emphasizes preventive care and works closely with families to manage chronic illnesses and promote overall health."
    },
    {
        name:"Dr. Nathaniel Brooks",
        img: `${DoctorImage2}`,
        Specialization:"Cardiology",
        Description:"Dr. Brooks is a renowned cardiologist specializing in diagnosing and treating heart conditions. With a focus on cardiovascular health, he utilizes the latest technology to perform non-invasive procedures and is passionate about educating patients on heart disease prevention."
    },
    {
        name:"Dr. Rebecca Hayes",
        img: `${DoctorImage3}`,
        Specialization:"Dermatology",
        Description:"Dr. Hayes is a board-certified dermatologist specializing in skin disorders, cosmetic treatments, and skin cancer detection. She is dedicated to providing personalized care and utilizes advanced techniques to help patients achieve healthy, beautiful skin."
    },
    {
        name:"Dr. Michael Thompson",
        img: `${DoctorImage5}`,
        Specialization:" Neurology",
        Description:"Dr. Thompson is a neurologist focused on diagnosing and treating disorders of the nervous system. His areas of interest include epilepsy, migraines, and neurodegenerative diseases. He uses a multidisciplinary approach to ensure comprehensive care for his patients."
    },
    {
        name:"Dr. Sarah Patel",
        img: `${DoctorImage4}`,
        Specialization:" Pediatrics",
        Description:"Dr. Patel is a pediatrician who specializes in the health care of infants, children, and adolescents. Known for her gentle approach, she fosters a trusting relationship with her young patients and provides guidance to parents on developmental milestones and vaccinations."
    },

    

]


const DoctorSlider=()=>{
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true, // Enable center mode to center slides
        // centerPadding: '0'
    }
    return (
        <div className='w-3/4 mx-auto '>
            <div className='mt-2'>
                <Slider {...settings}>
                {
                    doctors.map((d)=>(
                        <div className='bg-white h-[450px] text-black rounded-xl '>
                            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={d.img} alt="" className='h-44 w-44 rounded-full'/>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 p-2'>
                                <h2 className='text-2xl font-semibold'>{d.name}</h2>
                                <h3 className='text-xl'>{d.Specialization}</h3>
                                <p className='text-blue-400 text-center'>{d.Description}</p>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
}

export default DoctorSlider