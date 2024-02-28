import React from 'react'

const About = () => {
  return (
    <div >
      <img className='w-96 right-0 absolute mr-36  md:block hidden'  src="https://1.bp.blogspot.com/-g3TC7t1MBeQ/UdPgig38olI/AAAAAAAAADM/k495sVpBpbQ/s320/TKJ.jpg" alt="" srcset="" />
        <h1 className='text-3xl mt-36 ml-11 text-gray-600 font-semibold ' id='about'>ABOUT US</h1>
        <p className='text-2xl mt-8 ml-11 font-Afacad w-[300px] text-justify mb-8 text-gray-500 md:w-[600px] '> TJKT adalah singkatan dari "Teknik Jaringan Komputer dan Telekomunikasi"
         yang merupakan salah satu program kejuruan IT yang terdapat di SMKN 1 Cibinong  
         </p>
        
    <ol type="1"  className='ml-6 ps-5 mt-8 space-y-1 list-decimal list-inside text-2xl font-Afacad w-[350px]   text-gray-500 mb-44 lg:w-[700px]'>
      <h3 className='text-4xl  text-gray-600 mb-4  '>Pembelajaran Kejuruan : </h3>
      <li>Merancang teknik elektronika analog dan digital</li>
      <li>Mengoprasikan instalasi perawatan dan perbaikan komputer</li>
      <li>Mengoprasikan sistem operasi Standalone</li>
      <li>Mengoprasikan instalasi software dan sistem operasi jaringan</li>
      <li>Merancang Wide Area Network</li>
      <li>Mengoprasikan administrasi Server</li>
      <li>Merancang basis data</li>
    </ol>
   
    </div>

  )
}

export default About