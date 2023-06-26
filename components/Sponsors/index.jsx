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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
const Sponsors = () => {

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
    const animationVariantsTitle = {
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }

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
        <section>
             <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariantsTitle}
               transition={{ duration: 0.8}}
              >
                  <SectionTitle title="Sponsors"/>  
              </motion.div>
            
              <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 0.8}}
              >
                                    <div id="Sponsors" className="font-PTGilroy-Bold hidden justify-between lg:justify-center lg:gap-[10px] items-center h-[85vh]  lg:pt-8 mt-5 px-3 lg:flex 2xl:h-[95vh]  " >
                                    <Image  alt="Left arrow" src={Leftarrow} className="cursor-pointer translate-y-[-100%] " onClick={()=>handelLeft()}  ></Image>
                                    {
                                        currentImgs.map((SponsorImg,index)=>{
                                            return <div  key={index}  className={`flex flex-col items-center gap-8  ${index==1 && "translate-y-[-50%]" } `} >
                                                <ImgContainer  index={index} url={SponsorImg.url} ></ImgContainer>
                                                <div className="w-[202.3px] h-[67.63px] relative 2xl:w-[303.45px] 2xl:h-[101.45px]  ">
                                                <Image  alt="layer1"  src={bg_layer1} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  2xl:w-[303.45px] 2xl:h-[101.45px] "  />
                                                <Image  alt="layer2"  src={bg_layer2} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[192.94px] h-[58.27px] 2xl:w-[289.41px] 2xl:h-[87.41px] "  />
                                                <h1  className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[26px] 2xl:text-[40px] ${index==1 ? "text-gameJam-yellow" : "text-gameJam-blue" } `}  >  {SponsorImg.Name}  </h1>
                                                </div>
                                                </div>
                            })
                                    }
                                    <Image  alt="Right arrow" src={Rightarrow} className="cursor-pointer translate-y-[-100%] " onClick={()=>handelRight()} ></Image>
                                </div>


                    
                                <div  className="font-PTGilroy-Bold hidden md:block lg:hidden w-full mt-12 " > 
                                <Swiper slidesPerView={3} spaceBetween={100} navigation={false} pagination>
                        {SponsorImgs.map((SponsorImg, index) => (
                            
                            <SwiperSlide  key={index}  >
                                <div    className={`flex flex-col items-center gap-8`}>
                            <ImgContainer  index={index} url={SponsorImg.url} ></ImgContainer>
                                                <div className="w-[222.79px] h-[74.48px] relative ">
                                                <Image  alt="layer1"  src={bg_layer1} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[222.79px] h-[74.48px] "  />
                                                <Image  alt="layer2"  src={bg_layer2} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[212.48px] h-[64.17px] "  />
                                                <h1  className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[29px] ${index==1 ? "text-gameJam-yellow" : "text-gameJam-blue" } `}  >  {SponsorImg.Name}  </h1>
                                                </div>
                                </div>
                            </SwiperSlide>
                        
                        ))}
                        </Swiper>
                                </div>
                                <div  className="font-PTGilroy-Bold block md:hidden max-[560]:hidden w-[full] mt-12 " > 
                                <Swiper slidesPerView={1.8} centeredSlides spaceBetween={100} loop navigation={false} pagination>
                        {SponsorImgs.map((SponsorImg, index) => (
                            
                            <SwiperSlide  key={index}  >
                                <div    className={`flex flex-col items-center gap-8`}>
                            <ImgContainer  index={index} url={SponsorImg.url} ></ImgContainer>
                                                <div className="w-[222.79px] h-[74.48px] relative ">
                                                <Image  alt="layer1"  src={bg_layer1} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[222.79px] h-[74.48px] smmin:w-[215px] smmin:h-[67px] "  />
                                                <Image  alt="layer2"  src={bg_layer2} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[212.48px] h-[64.17px] smmin:w-[210px] smmin:h-[62px]  "  />
                                                <h1  className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[29px]  smmin:text-[25px]  ${index==1 ? "text-gameJam-yellow" : "text-gameJam-blue" } `}  >  {SponsorImg.Name}  </h1>
                                                </div>
                                </div>
                            </SwiperSlide>
                        
                        ))}
                            </Swiper>
                                </div>
              </motion.div>
            
        </section>
    )
}

export default Sponsors;