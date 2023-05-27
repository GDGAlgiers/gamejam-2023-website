import { useState } from "react";

const Question=({question,answer})=>{
    const [clicked,setClicked]=useState(false);
    return(
        <>
        <div className="lg:hidden my-2">
            <div className="text-[10px] font-bold text-[#4EFEF6] flex items-center justify-between px-3 py-2 bg-[url('/images/FaqImages/FaqMobile.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-[#C9686E]">+</p></button>
            </div>
            {clicked && <p className="text-[10px] font-bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden 2xl:block my-2 w-[1080px]">
            <div className=" text-xl font-bold text-[#4EFEF6] flex items-center justify-between px-6 py-8 bg-[url('/images/FaqImages/FaqBg.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-xl text-[#C9686E] font-bold">+</p></button>
            </div>
            {clicked && <p className="text-xl font-bold text-white my-2">{answer}</p>}
        </div>
        <div className="hidden lg:block 2xl:hidden my-2 w-[720px]">
            <div className=" text-lg font-bold text-[#4EFEF6] flex items-center justify-between px-4 py-4 bg-[url('/images/FaqImages/FaqBgMidle.png')] bg-no-repeat" >
                <h1>{question}</h1> 
                <button  onClick={()=>{setClicked(!clicked)}}><p className="text-lg text-[#C9686E] font-bold">+</p></button>
            </div>
            {clicked && <p className="text-lg font-bold text-white my-2">{answer}</p>}
        </div>
        </>
    )
}
export default Question;