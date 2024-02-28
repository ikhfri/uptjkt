import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

let count = 0
let slideInterval

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideRef = useRef()

  const handleOnNextClick = () => {
    count = (count + 1 ) % images.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  const handleOnPrevClick = () => {
    const productsLength = images.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 2000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    startSlider()

    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)
  }, [])

  return (
    <div className="max-w-full m-auto  ">
        
      <div ref={slideRef} className="w-full  relative select-none">
        <div className="aspect-w-16 aspect-h-8">
          <img className=" "  src={images[currentIndex]} alt="" />
        </div>

        
      </div>
    </div>
  );
}
 
export default Slider;