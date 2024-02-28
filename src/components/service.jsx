import React from 'react'
import foto from '../assets/service.jpg'
import { FaNetworkWired } from "react-icons/fa6";
import { BiSolidCctv } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { TbSettingsUp } from "react-icons/tb";




const Service = () => {
  return (
    <div className='flex bg-gray-100 mb-32'id='service ' >
        <img className='w-[700px] rounded-md md:block hidden ' src={foto}  alt="" /> 
        <section className='text-center text-4xl font-bold text-slate-600 mb-10 w-[1000px] mt-14 '>
            <h1>OUR SERVICE</h1>
           
            <div className='mt-14 ml-11 flex' ><FaNetworkWired className='w-24' /> <h2 className='font-semibold text-2xl'>Netork Instalation</h2></div>
            <div className='mt-24 ml-11 flex' ><BiSolidCctv className='w-24' /> <h2 className='font-semibold text-2xl'>CCTV Instalation</h2></div>
            <div className='mt-24 ml-11 flex' ><MdWeb className='w-24' /> <h2 className='font-semibold text-2xl'>Web E-Learning</h2></div>
            <div className='mt-24 ml-11 flex' ><TbSettingsUp className='w-24' /> <h2 className='font-semibold text-2xl'>Repair and Update</h2></div>
        </section>
        

    </div>
  )
}

export default Service