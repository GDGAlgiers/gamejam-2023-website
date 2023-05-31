import React, { useState } from "react";
import Image from "next/image";

const CardResp = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if(props.selected) {
      setHovered(true);
    }
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  return (
      <div className="h-[51%] w-[43%] flex justify-center items-center">
        <div
        className= {`bg-[url(/shapes/sp_frame.png)] h-[50.5%] w-[42%] bg-no-repeat bg-contain flex flex-row z-20 justify-between items-center relative ${props.selected ? null : 'blur-sm'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/shapes/controller2.png"
            alt="shape"
            height={123}
            width={211}
            className={`left-4 ${hovered ? 'blur-sm absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`}
          />






          <div className={`flex flex-col items-center relative bottom-1 ${hovered ? 'justify-around' : 'justify-center'}`}>

            <div className={`relative flex justify-center items-center ${hovered ? 'scale-[.6] ' : null} transition-transform duration-300 ease-in-out`}>
        
              <Image
              src={props.image}
              alt="shape"
              height={275}
              width={275}
              className="rounded-full z-40 absolute"
              />
              <Image
              src="/shapes/Ellipse_colors.png"
              alt="shape"
              height={286}
              width={286}
              className="z-30 trans"/>

            </div>

            <h2 className={`text-5xl border-b-4 border-solid border-gradient border-y-violet-600 BORDER6 ${hovered ? 'text-white font-PTChaser transition-all duration-500' : 'hidden'}`}>{props.name}</h2>

            <div className={`  flex justify-center items-center relative bottom-5 z-40`}>

              <h2 className={`z-30 font-PTChaser font absolute text-[#4EFEF6] text-4xl [text-shadow:_0_0px_10px_#4EFEF6] ${hovered ? 'hidden transition-all duration-500' : null}`}>Mentor</h2>
              <Image
              src="/shapes/mentor_title.png"
              alt="shape"
              height={70}
              width={270}
              className= {hovered ? 'hidden' : null}
              />

            </div>
        
            <p className={hovered ? 'text-white text-xl w-[80%] text-center' : 'hidden'} >{props.description}</p>
          </div>





        
          <Image
          src="/shapes/controller1.png"
          alt="shape"
          height={370}
          width={211}
          className={`right-4 ${hovered ? 'blur-sm absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`}
          />
        </div>
      </div>
  );
};

export default CardResp;
