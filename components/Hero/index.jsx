import Image from "next/image";
import GamejamLogo from "../../public/images/Hero/GameJamelogo.png"
import counterbg from "../../public/images/Hero/CounterBg.png"
import counterbg2 from "../../public/images/Hero/CounterBgLayer2.png"
import left from "../../public/images/Hero/leftbleu.png"
import right from "../../public/images/Hero/rightbleu.png"
import RegiserBg from "../../public/images/Hero/registerBg.png"
import { useState,useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
const Hero = () => {
  const targetDate = new Date("2023-07-05");

  const [Remaining, setRemaining] = useState()
  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      const object={ days, hours,seconds }

      setRemaining(object)
    }, 1000);
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    // rootMargin: '0px 0px -32% 0px',
    threshold: 0.42,
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
        <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 0.8}}
              >
                      {/* ALL version */}
              <div id="#" className="z-[999] w-full md:flex flex-col items-center h-[90vh] mt-0 md:mt-8 lg:mt-0 xl:mt-12 justify-center 2xl:h-[85vh] font-PTChaser hidden ">
                {/* <SectionTitle title="Hero" /> */}
                <Image  alt="GamejamLogo" src={GamejamLogo}  className=" w-[706.55px] h-[241.58px] 2xl:w-[1059.83px] 2xl:h-[362.37px] "  />
                <button className="mt-10 font-PTChaser-bold text-2xl text-[#FCBC05]">
                    <div className="absolute  left-1/2 -translate-x-1/2 ">
                        <Image  src={RegiserBg.src} alt="RegiserBg"  width={300} height={100} />
                      </div>
                    <div className="relative py-5 mt-1 flex justify-center items-center w-full">
                      <Link  href={"https://tripetto.app/run/GAK4MOA5Y5"}>Register Now</Link>
                    </div>
                </button>
                <div className="w-[613.15px] h-[80.64px] relative text-white mt-10  2xl:w-[919.73px] 2xl:h-[120.96px] ">
                  
                  <Image alt="bg" src={counterbg2} className="2xl:w-[919.73px] 2xl:h-[120.96px]" />
                  <Image alt="bg" src={counterbg} className=" w-[609.15px] h-[76.64px] absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%] 2xl:w-[913.73px] 2xl:h-[114.96px]  " />
                  <Image alt="left" src={right} className="hidden lg:block w-[400px]  absolute bottom-0 left-[98%] 2xl:w-[25vw]" />
                  <Image alt="left" src={left} className="hidden lg:block w-[400px]  absolute bottom-0 right-[98%]  2xl:w-[25vw] " />
                  { Remaining &&  
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%]  text-[42px] gap-3 w-full justify-center 2xl:text-[64px] 2xl:gap-5 ">
                      {Remaining.days} <sub  className="text-lg translate-y-[20%] 2xl:text-2xl " >Days</sub> : {Remaining.hours} <sub  className="text-lg translate-y-[20%] 2xl:text-2xl " >Hours</sub> : {Remaining.seconds} <sub  className="text-lg translate-y-[20%] 2xl:text-2xl " >Seconds</sub>
                    </div>
                  }

                </div>
              
                <div className="flex items-center flex-col uppercase w-[434px] mt-[24px] 2xl:w-[651px] 2xl:mt-[34px] ">
                  <h1 className="text-[26px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF]  bg-gradient-stops-0 bg-gradient-stops-100 2xl:text-[40px] " >The</h1>
                  <h1 className="text-[42px] leading-[42px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF] bg-gradient-stops-0 bg-gradient-stops-100 2xl:text-[64px] 2xl:leading-[64px]" >ultimate battle</h1>
                </div>
              
              </div>

              {/* mobile version */}
              <div   className="w-full flex flex-col items-center h-[95vh] justify-center font-PTChaser md:hidden ">
                <Image  alt="GamejamLogo" src={GamejamLogo}  className=" w-[370px] h-[126.51px] "  />
                <button className="mt-10 font-PTChaser-bold text-[16px] text-[#FCBC05]">
                    <div className="absolute  left-1/2 -translate-x-1/2 ">
                        <Image  src={RegiserBg.src} alt="RegiserBg"  width={300} height={100} />
                      </div>
                    <div className="relative py-2 mt-1 flex justify-center items-center w-full">
                      <Link  href={"https://tripetto.app/run/GAK4MOA5Y5"}>Register Now</Link>
                    </div>
                </button>
                <div className="w-[370px] h-[48.66px] relative text-white mt-[40px]  ">
                  <Image alt="bg" src={counterbg2} className="w-[370px] h-[48.66px] " />
                  <Image alt="bg" src={counterbg} className=" w-[367.59px] h-[46.25px] absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%]" />
                  { Remaining &&  
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%] text-[20px] gap-2 w-full justify-center ">
                      {Remaining.days} <sub  className="text-[10px] translate-y-[20%]" >Days</sub> : {Remaining.hours} <sub  className="text-[10px] translate-y-[20%]" >Hours</sub> : {Remaining.seconds} <sub  className="text-[10px] translate-y-[20%]" >Seconds</sub>
                    </div>
                  }
                </div>

                <div className="flex items-center flex-col uppercase w-[260px] mt-[50px] h-[50px] ">
                  <h1 className="text-[15.5px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF] to--[#FFFF] bg-gradient-stops-0 bg-gradient-stops-100 " >The</h1>
                  <h1 className="text-[25px] leading-[25px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF] to--[#FFFF] bg-gradient-stops-0 bg-gradient-stops-100" >ultimate battle</h1>
                </div>
                
              </div>
        </motion.div>

    </>
  );
};

export default Hero;