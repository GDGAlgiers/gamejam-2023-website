import Image from "next/image";
import { useState } from "react";
const Question=({question,answer})=>{
    const [clicked,setClicked]=useState(false);
    return(
        <>
        <div className="lg:hidden my-2 flex flex-col items-center justify-center font-PTChaser-Light w-full  ">
            <div className="text-[8px] font-PTGilroy-Bold text-[#4EFEF6] w-[90%] flex items-center justify-between  sm:w-[60%] md:w-[45%] px-3 py-1 bg-[url('/images/FaqImages/FaqBg.png')] bg-contain bg-no-repeat" >
                <h1 className="font-PTChaser-Light">{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-[10px] text-[#C9686E]">+</p></button>
            </div>
            {clicked && <p className="text-[8px] font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden flex-col items-center justify-center 2xl:flex  my-2 w-[1080px] font-PTGilroy-Light">
            <div className=" text-xl font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-6 py-8 bg-[url('/images/FaqImages/FaqBg.png')] bg-contain bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-xl text-[#C9686E] font-PTGilroy-Bold">+</p></button>
            </div>
            {clicked && <p className="text-xl font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden lg:flex-col items-center justify-center lg:block 2xl:hidden my-2 w-[720px] font-PTChaser">
            <div className=" text-lg font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-4 py-4 bg-[url('/images/FaqImages/FaqBg.png')] bg-contain bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-lg text-[#C9686E] font-PTGilroy-Bold">+</p></button>
            </div>
            {clicked && <p className="text-lg font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        </>
    )
}
export default Question;