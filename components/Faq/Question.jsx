import BGBig from "./../../public/images/FaqImages/FaqBg.png"
import Image from "next/image"
import { useState } from "react";
const Question=({question,answer})=>{
    const [clicked,setClicked]=useState(false);
    return(
        
        <div className="flex flex-col items-center justify-center w-[300px] sm:w-[400px]  md:w-[500px] lg:w-[600px] 2xl:w-[1080px] font-PTGilroy-Light">
                <div className="relative text-[8px] md:text-[12px]  lg:text-[14px] 2xl:text-xl font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-3 py-3  sm:py-4 2xl:py-8 2xl:px-6 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]  2xl:w-[1080px]" >
                <Image alt='Bg' src={BGBig.src} className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:w-[400px] md:w-[500px] lg:w-[600px] 2xl:w-[1080px]" width="300" height="10" />
                    <h1 className="z-[9999]">{question}</h1> 
                    <button className="z-[999]" onClick={()=>{setClicked(!clicked)}}><p className="text-[8px] md:text-[12px] lg:text-[14px] 2xl:text-xl text-[#C9686E] font-PTGilroy-Bold">+</p></button>
                </div>
                {clicked && <p className="z-[9999] self-start justify-self-start text-[8px] md:text-[12px] lg:text-[14px] 2xl:text-xl font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>

    )
}
export default Question;