import React, { useState } from "react";
import Image from "next/image";

const Speaker = (props) => {
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
      <div className=" h-[248px] w-[369px]  sm:h-[328px] sm:w-[487px] md:w-[615px] md:h-[414px] lg:w-[552px] lg:h-[368px] 2xl:w-[827px] 2xl:h-[555px] flex justify-center items-center"> {/*h-[51%px] w-[44%] h-[560px] w-[835px]  */}
        <div
        className= {`h-[99%] w-[99%]             bg-[url(/shapes/sp_frame.png)] bg-no-repeat bg-contain flex flex-row z-20 justify-between items-center relative ${props.selected ? null : 'blur-sm scale-90'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/shapes/controller2.png"
            alt="shape"
            height={123}
            width={211}
            className={`left-2  w-[26%] h-[65.6%] ${hovered ? 'blur-[2px] md:blur-sm  absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`}
          />






          <div className={`bottom-1                flex flex-col items-center relative  justify-evenly ${hovered ? 'h-[94%]' : 'w-[35%]'}`}>

            <div className={` ${hovered ? 'w-[35%]' : 'w-[100%]'}  relative flex justify-center items-center transition-transform duration-300 ease-in-out`}>
        
              <Image
              src={props.image}
              alt="shape"
              height={hovered ? 174 : 275}
              width={hovered ? 174 : 275}
              className={`${hovered? 'w-[68%]' : 'w-[96%]'}  rounded-full z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              />
              <Image
              src="/shapes/Ellipse_colors.png"
              alt="shape"
              height={hovered? 181 : 286}
              width={hovered? 181 : 286}
              className={`${hovered? 'w-[70.5%]' : 'w-[100%]'} z-30`}/>

            </div>

            <h2 className={`relative bottom-5 text-lg top-0 sm:text-2xl sm:bottom-20 sm:-top-3 md:text-3xl 2xl:text-5xl      border-solid border-gradient border-y-violet-600 BORDER6 ${hovered ? 'text-white font-PTChaser' : 'hidden'}`}>{props.name}</h2>

            <div className={`bottom-2       flex justify-center items-center relative z-40`}>

              <h2 className={`text-xl [text-shadow:_0_0px_8px_#4EFEF6] sm:text-2xl md:text-3xl 2xl:text-[42px]    z-30 font-PTChaser absolute text-[#56DBF5]  ${hovered ? 'hidden transition-all duration-500' : null}`}>Mentor</h2>
              {/*text-4xl  */}
              <Image
              src="/shapes/mentor_title.png"
              alt="shape"
              height={70}
              width={270}
              className= {hovered ? 'hidden' : null}
              />

            </div>
        
            <p className={hovered ? 'text-xs  w-[89%]  sm:text-sm sm:bottom-4 md:text-lg lg:text-[16px] lg:bottom-6 2xl:text-2xl          text-white   text-center relative' : 'hidden'} >{props.description}</p>
            {/*text-2xl bottom-12 */}
          </div>





        
          <Image
          src="/shapes/controller1.png"
          alt="shape"
          height={370}
          width={211}
          className={`right-2 w-[26%] h-[65.6%]  ${hovered ? 'blur-[2px] md:blur-sm  absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`} 
          />{/*right-4 */}
        </div>
      </div>
  );
};

export default Speaker;
