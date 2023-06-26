import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Badge from "../../public/images/About/GDG_Badge.png"
import layer1 from "../../public/images/About/bg-layer1.png"
import layer2 from "../../public/images/About/bg-layer2.png"
import LogoGamejam from "../../public/images/About/LogoGameJam 2.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        rootMargin: '0px 0px -32% 0px',
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
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      };
    return (
        <>
          <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariantsTitle}
               transition={{ duration: 0.8}}
              >
                <section  id="about">
                <SectionTitle title="About" />
                </section>
              </motion.div>
           
            
            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 1}}
            >
                <div  className="items-center justify-around lg:justify-center lg:gap-[100px] 2xl:gap-[150px] px-3 w-full font-PTGilroy-light h-[75vh] hidden md:flex 2xl:h-[86vh] "   >
                <div  className="flex flex-col items-center gap-8" >
                    <div className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px]"  >
                    
                        <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "  />
                        <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                    
                        <div className="w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
                            
                            <span className="text-lg bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTGilroy-Bold 2xl:text-2xl">
                                GDG Algiers :
                            </span>

                            <p className="mt-1 text-[12px] text-white 2xl:text-lg 2xl:mt-2 ">
                                Google Developers Group (GDG) is a program created to unlock opportunities for motivated young students to learn new skills in a variety of formats, in an inclusive environment. 
                                GDG Algiers is part of this significant global community of developers, located at the higher school of computer science, Algiers, Algeria. We host various technical events, making us one of the 
                                most active GDGs in the MENA region.
                            </p>
                            
                        </div>
                        
                    </div>

                    <Image alt="Gamejam Logo" src={LogoGamejam}  className=" w-[287px] h-[99px] 2xl:w-[431px] 2xl:h-[148px]  "/>
                </div>

                <div className="flex flex-col items-center gap-8 ">
                    <Image alt="GDG" src={Badge} className=" w-[104px] h-[103px] 2xl:w-[156px] 2xl:h-[155px] " />
                    
                    <div  className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px] "  >
                        
                        <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "/>
                        <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                        
                        <div className="w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
                            <span className="text-lg bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTGilroy-Bold 2xl:text-2xl">
                            GameJam :
                            </span>

                            <p className="mt-1 text-[12px] text-white 2xl:text-lg 2xl:mt-2 ">
                                Google Developers Group (GDG) is a program created to unlock opportunities for motivated young students to learn new skills in a variety of formats, in an inclusive environment. 
                                GDG Algiers is part of this significant global community of developers, located at the higher school of computer science, Algiers, Algeria. We host various technical events, making us one of the 
                                most active GDGs in the MENA region.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center pt-10 gap-12 w-full font-PTGilroy-light h-[85vh] md:hidden "   >
                <div  className="w-[340px] h-[227px] relative"  >
                    
                    <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "  />
                    <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                    
                    <div className="w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
                        <span className=" bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTGilroy-Bold text-lg">
                        GDG Algiers :
                        </span>

                        <p className="mt-1 text-[12px] text-white">
                            Google Developers Group (GDG) is a program created to unlock opportunities for motivated young students to learn new skills in a variety of formats, in an inclusive environment. 
                            GDG Algiers is part of this significant global community of developers, located at the higher school of computer science, Algiers, Algeria. We host various technical events, making us one of the 
                            most active GDGs in the MENA region.
                        </p>
                    </div>
                </div>

                <div  className="w-[340px] h-[227px] relative "  >
                    <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "/>
                    <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                    
                    <div className="w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
                        <span className="bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTGilroy-Bold text-lg">
                        GameJam :
                        </span>
                        
                        <p className="mt-1 text-[12px] text-white">
                            Google Developers Group (GDG) is a program created to unlock opportunities for motivated young students to learn new skills in a variety of formats, in an inclusive environment. 
                            GDG Algiers is part of this significant global community of developers, located at the higher school of computer science, Algiers, Algeria. We host various technical events, making us one of the 
                            most active GDGs in the MENA region.
                        </p>
                    </div>

                </div>
            </div>
            </motion.div>
        </>  
    )
}

export default About;