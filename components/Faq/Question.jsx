import Image from "next/image";
import { useState } from "react";
const Question=({question,answer})=>{
    const [clicked,setClicked]=useState(false);
    return(
        <>
        <div className="lg:hidden my-2 font-PTChaser">
            <div className="text-[10px] font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-3 py-2 bg-[url('/images/FaqImages/FaqMobile.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <Image src="" alt="plus button" onClick={()=>{setClicked(!clicked)}}/>
            </div>
            {clicked && <p className="text-[10px] font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden 2xl:block my-2 w-[1080px] font-PTChaser">
            <div className=" text-xl font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-6 py-8 bg-[url('/images/FaqImages/FaqBg.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-xl text-[#C9686E] font-PTGilroy-Bold">+</p></button>
            </div>
            {clicked && <p className="text-xl font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden lg:block 2xl:hidden my-2 w-[720px] font-PTChaser">
            <div className=" text-lg font-PTGilroy-Bold text-[#4EFEF6] flex items-center justify-between px-4 py-4 bg-[url('/images/FaqImages/FaqBgMidle.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-lg text-[#C9686E] font-PTGilroy-Bold">+</p></button>
            </div>
            {clicked && <p className="text-lg font-PTGilroy-Bold text-white my-2">{answer}</p>}
        </div>
        </>
    )
}
export default Question;