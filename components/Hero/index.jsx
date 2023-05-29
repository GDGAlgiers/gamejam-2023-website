import Image from "next/image";
import GamejamLogo from "../../public/images/Hero/GameJamelogo.png"
import counterbg from "../../public/images/Hero/CounterBg.png"
import counterbg2 from "../../public/images/Hero/CounterBgLayer2.png"
import { useState,useEffect } from "react";
const Hero = () => {
const targetDate = new Date("2023-06-30");

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

Remaining && console.log(`Remaining time: ${Remaining.days} days, ${Remaining.hours} hours, ${Remaining.minutes} minutes, ${Remaining.seconds} seconds`);

  return (
    <div className="w-full flex flex-col items-center  font-PTChaser ">
      {/* <SectionTitle title="Hero" /> */}
      <Image  alt="GamejamLogo" src={GamejamLogo} />
    <div className="w-[613.15px] h-[80.64px] relative text-white mt-[70px] ">
      <Image alt="bg" src={counterbg2} className="" />
      <Image alt="bg" src={counterbg} className=" w-[609.15px] h-[76.64px] absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%]  " />
   { Remaining &&  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center translate-y-[-50%]  text-[42px] gap-2 w-[613.15px] justify-center ">
   {Remaining.days} <sub  className="text-lg translate-y-[20%] " >Days</sub> : {Remaining.hours} <sub  className="text-lg translate-y-[20%] " >Hours</sub> : {Remaining.seconds} <sub  className="text-lg translate-y-[20%] " >Seconds</sub>
    </div>}
    </div>
    <div className="flex items-center flex-col uppercase w-[434px] mt-[24px]  ">
      <h1   className="  text-[26px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF] to--[#FFFF] bg-gradient-stops-0 bg-gradient-stops-100 " >The</h1>
      <h1  className="  text-[42px] leading-[42px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFF] to--[#FFFF] bg-gradient-stops-0 bg-gradient-stops-100 " >ultimate battle</h1>
    </div>
    </div>
  );
};

export default Hero;
