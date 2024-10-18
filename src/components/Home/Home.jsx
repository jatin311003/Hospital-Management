import React from 'react'
import DoctorImage from '../../assets/DoctorImage1.png'
import DoctorSlider from '../DoctorSlider/DoctorSlider'
// import ImageSlider from '../DoctorSlider/DoctorSlider'
const Home = () => {
  return (
    <div className=''>
        <h1 className='text-5xl font-extrabold transition-transform transform hover:scale-105 duration-300 text-center mt-4'>Welcome To Vital Care</h1>

        {/* Doctor Info Section  */}
        <h1 className='text-center mt-3 text-4xl'>Meet Our Doctors</h1>
        <DoctorSlider/>
    </div>
  )
}

export default Home
