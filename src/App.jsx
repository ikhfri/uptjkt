import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/slider'
import Header from './components/Header'
import About from './components/About'
import Service from './components/service'

const images = [
  'https://github.com/ikhfri/TKJ/blob/main/Picsart_23-12-04_14-15-02-879.jpg?raw=true',
  'https://github.com/ikhfri/TKJ/blob/main/Picsart_23-12-04_14-18-39-238.jpg?raw=true',
  'https://github.com/ikhfri/TKJ/blob/main/Picsart_23-12-04_14-15-02-879.jpg?raw=true',
]
const App = () => {
  return (
    <div >
      <div className='lg:fixed lg:z-20 w-full '><Navbar/></div>
      
      <Header/>
      <Slider images={images} />
      <About/>
    
      <Service />
      <Footer/>
      
      </div>
  )
}

export default App