import Image from "next/image";
import Badge from "../../public/images/About/GDG_Badge.png"
import layer1 from "../../public/images/About/bg-layer1.png"
import layer2 from "../../public/images/About/bg-layer2.png"

const AboutGdg=()=>{
    return (
        <>
        <div  className="items-center justify-around lg:justify-center lg:gap-[100px] 2xl:gap-[150px] px-3 w-full font-PTGilroy-light h-[75vh] hidden md:flex 2xl:h-[86vh] "   >
        <div className="flex flex-col items-center gap-8">
            <div  className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px]"  >
                <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "  />
                <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                <div className="w-full flex items-center justify-center h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
                    <p className="mt-1 flex items-center justify-center text-[12px] text-white 2xl:text-lg 2xl:mt-2 ">
                        GDG Algiers is a dynamic local community of developers and students based in Algiers, Algeria. As part of the global Google Developers Group (GDG) network, we are dedicated to fostering collaboration and knowledge-sharing among technology enthusiasts.
                    </p>
                </div>
            </div>
            <Image alt="GDG" src={Badge} className=" w-[104px] h-[103px] 2xl:w-[156px] 2xl:h-[155px] " />
        </div>

        <div className="flex flex-col items-center gap-8 ">
        <Image alt="GDG" src={Badge} className=" w-[104px] h-[103px] 2xl:w-[156px] 2xl:h-[155px] " />
        <div  className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px] "  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "/>
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
           <div className="flex items-center justify-center w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
           <p className="mt-1 flex items-center justify-center text-[12px] text-white 2xl:text-lg 2xl:mt-2 ">
           Established in 2011 as a Google Technology User Group (GTUG), GDG Algiers has become one of the most active GDGs in the MENA region. We organize regular meetups, workshops, hackathons, and tech talks to help developers enhance their skills and stay up-to-date with the latest tech trends. 
           </p>
           </div>
        </div>
        </div>
    </div>
    <div  className="flex flex-col items-center justify-center gap-12 w-full font-PTGilroy-light h-[85vh] md:hidden "   >
            <div  className="w-[340px] h-[227px] relative"  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "  />
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
            <div className="flex items-center justify-center w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
           <p className="mt-1 flex items-center justify-center text-[12px] text-white">
           GDG Algiers is a dynamic local community of developers and students based in Algiers, Algeria. As part of the global Google Developers Group (GDG) network, we are dedicated to fostering collaboration and knowledge-sharing among technology enthusiasts.

           </p>
           </div>
            </div>

            <div  className="w-[340px] h-[227px] relative "  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "/>
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
           <div className="flex items-center justify-center w-full h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
           <p className="mt-1 flex items-center justify-center text-[12px] text-white">
            Established in 2011 as a Google Technology User Group (GTUG), GDG Algiers has become one of the most active GDGs in the MENA region. We organize regular meetups, workshops, hackathons, and tech talks to help developers enhance their skills and stay up-to-date with the latest tech trends. 
           </p>
           </div>
            </div>
    </div>
        </>
    )
}

export default AboutGdg;