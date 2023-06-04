import React, { useState } from "react";
import Image from "next/image";

const Card = (props) => {
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
      <div className=" h-[248px] w-[369px]         bg-black   flex justify-center items-center"> {/*h-[51%px] w-[44%] h-[560px] w-[835px]  */}
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
            className={`left-2  w-[26%] h-[65.6%] ${hovered ? 'blur-sm absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`}
          />






          <div className={`bottom-1                flex flex-col items-center relative  justify-evenly ${hovered ? 'h-[94%]' : 'w-[35%]'}`}>

            <div className={` ${hovered ? 'w-[35%]' : 'w-[100%]'}  relative flex justify-center items-center transition-transform duration-300 ease-in-out`}>
        
              <Image
              src={props.image}
              alt="shape"
              height={hovered ? 174 : 275}
              width={hovered ? 174 : 275}
              className={`${hovered? 'w-[19.5%]' : 'w-[96%]'}  rounded-full z-40 absolute`}
              />
              <Image
              src="/shapes/Ellipse_colors.png"
              alt="shape"
              height={hovered? 181 : 286}
              width={hovered? 181 : 286}
              className={`${hovered? 'w-[20.5%]' : 'w-[100%]'} z-30`}/>

            </div>

            <h2 className={`relative bottom-5 text-2xl border-b-4               border-solid border-gradient border-y-violet-600 BORDER6 ${hovered ? 'text-white font-PTChaser' : 'hidden'}`}>{props.name}</h2>
            {/*bottom-5 text-5xl border-b-4   */}

            <div className={`bottom-5         flex justify-center items-center relative z-40`}>

              <h2 className={`text-2xl         z-30 font-PTChaser absolute text-[#4EFEF6] [text-shadow:_0_0px_10px_#4EFEF6] ${hovered ? 'hidden transition-all duration-500' : null}`}>Mentor</h2>
              {/*text-4xl  */}
              <Image
              src="/shapes/mentor_title.png"
              alt="shape"
              height={70}
              width={270}
              className= {hovered ? 'hidden' : null}
              />

            </div>
        
            <p className={hovered ? 'text-sm  w-[89%]                text-white   text-center relative' : 'hidden'} >{props.description}</p>
            {/*text-2xl bottom-12 */}
          </div>





        
          <Image
          src="/shapes/controller1.png"
          alt="shape"
          height={370}
          width={211}
          className={`right-2 w-[26%] h-[65.6%]  ${hovered ? 'blur-sm absolute brightness-50 transition-all duration-500' : ' !h-[400] relative'}`} 
          />{/*right-4 */}
        </div>
      </div>
  );
};

export default Card;
