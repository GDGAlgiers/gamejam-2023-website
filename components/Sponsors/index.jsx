import SectionTitle from "../shared/SectionTitle";
import ImgContainer from "./Img";
import Image from "next/image";
import Leftarrow from '../../public/images/Sponsors/LeftArrow.png'
import Rightarrow from '../../public/images/Sponsors/RightArrow.png'
import bg_layer1 from '../../public/images/Sponsors/mix-bg.png'
import bg_layer2 from '../../public/images/Sponsors/bleu-Bg.png'
import Gituhb from "../../public/images/Sponsors/Github.png"
import ooredoo from "../../public/images/Sponsors/Ooredoo.png"
import Sonatrach from "../../public/images/Sponsors/Sonatrach.png"
import { useState } from "react";
const Sponsors = () => {


    const [Imgindex, setImgindex] = useState(0)
    const SponsorImgs=[
    { Name:"Sonatrach",url:Sonatrach},
    { Name:"Github",url:Gituhb  },
    { Name:"Ooredoo",url:ooredoo},
    { Name:"Sonatrach",url:Sonatrach},
    { Name:"Sonatrach",url:Sonatrach},
    { Name:"Sonatrach",url:Sonatrach},
    ]
   

    const handelRight=()=>{
        const lastIndex=SponsorImgs.length-1
        if(Imgindex==lastIndex)  setImgindex(0)
        else setImgindex(prev=>prev=prev+1)
    }
    const handelLeft=()=>{
        if(Imgindex==0)  setImgindex(5)
        else setImgindex(prev=>prev=prev-1)
    }
    let currentImgs = [];

    if (Imgindex + 3 <= SponsorImgs.length) {
      currentImgs = SponsorImgs.slice(Imgindex, Imgindex + 3);
    } else {
      currentImgs = SponsorImgs.slice(Imgindex);
      const remaining = 3 - currentImgs.length;
      currentImgs = currentImgs.concat(SponsorImgs.slice(0, remaining));
    }
   
    return (
        <section   >
            <SectionTitle title="Sponsors"/>
            <div  className="font-PTGilroy-Bold flex justify-between items-center h-[85vh] mt-5 px-3 " >
                <Image  alt="Left arrow" src={Leftarrow} className="cursor-pointer translate-y-[-100%] " onClick={()=>handelLeft()}  ></Image>
                {
                    currentImgs.map((SponsorImg,index)=>{
                        return <div  key={index}  className={`flex flex-col items-center gap-8  ${index==1 && "translate-y-[-50%]" } `} >
                               <ImgContainer  index={index} url={SponsorImg.url} ></ImgContainer>
                               <div className="w-[202.3px] h-[67.63px] relative">
                               <Image  alt="layer1"  src={bg_layer1} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] "  />
                               <Image  alt="layer2"  src={bg_layer2} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[192.94px] h-[58.27px] "  />
                            <h1  className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[26px] ${index==1 ? "text-gameJam-yellow" : "text-gameJam-blue" } `}  >  {SponsorImg.Name}  </h1>
                               </div>
                              </div>
        })
                }
                <Image  alt="Right arrow" src={Rightarrow} className="cursor-pointer translate-y-[-100%] " onClick={()=>handelRight()} ></Image>
            </div>
        </section>
    )
}

export default Sponsors;