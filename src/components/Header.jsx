import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-full h-screen  absolute z-10  " id='head'>
      <div className="w-full   ">
        <div className=" mx-auto  flex flex-col  place-items-center h-full mt-20 text-2xl  text-[30px]  md:place-items-center lg:text-7xl  md:text-5xl sm:text-4xl  ">
          <div className=" justify-center text-center">
            <div>
            <div className="lg:mt-48 md:mt-16 sm:mt-12 " >
              <h1 className=" besar font-bold text-[#00A6FF] ">WELCOME TO</h1>
            </div>
            <h2 className=" font-bold text-white ">
              <Typewriter
                options={{
                  strings: ["TEKNIK KOMPUTER JARINGAN"],

                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
