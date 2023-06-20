import Image from "next/image";
import Badge from "../../public/images/About/GDG_Badge.png"
import layer1 from "../../public/images/About/bg-layer1.png"
import layer2 from "../../public/images/About/bg-layer2.png"
import LogoGamejam from "../../public/images/About/LogoGameJam 2.png"

const AboutGameJam=()=>{
    return (
        <>
        <div  className="items-center justify-around lg:justify-center lg:gap-[100px] 2xl:gap-[150px] px-3 w-full font-PTGilroy-light h-[75vh] hidden md:flex 2xl:h-[86vh] "   >
        <div className="flex flex-col items-center gap-8">
            <div  className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px]"  >
                <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "  />
                <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
                <div className="w-full h-full absolute flex items-center justify-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
                    <p className="mt-1 text-[12px]  text-white 2xl:text-lg 2xl:mt-2 ">
                    GDG Algiers Game Jam is an event that ignites the spirit of innovation and fearlessness. With unwavering determination, participants dive into the world of game development, forming teams and crafting captivating games from scratch.
                    No matter your background or experience level, GDG Algiers Game Jam welcome you with open arms. It`&apos;`s an event where courage meets collaboration.
                    </p>
                </div>
            </div>
        <Image alt="Gamejam Logo" src={LogoGamejam}  className=" w-[287px] h-[99px] 2xl:w-[431px] 2xl:h-[148px]  "/>
        </div>

        <div className="flex flex-col items-center gap-8 ">
        <Image alt="Gamejam Logo" src={LogoGamejam}  className=" w-[287px] h-[99px] 2xl:w-[431px] 2xl:h-[148px]  "/>
        <div  className="w-[340px] h-[227px] relative 2xl:w-[519px] 2xl:h-[349px] "  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] 2xl:w-[519px] 2xl:h-[349px] "/>
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] 2xl:w-[514px] 2xl:h-[344px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
           <div className="w-full  flex items-center justify-center h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 2xl:p-7 ">
           <p className="mt-1 text-[12px] flex items-center justify-center text-white 2xl:text-lg 2xl:mt-2 ">
           as artists, programmers, designers, and sound engineers join forces to push the boundaries of their abilities.
           Immerse yourself in the exhilarating process of game development, fueled by a theme that sparks your imagination. With relentless passion and a touch of audacity, you`&apos;`ll create games that defy expectations and celebrate the beauty of innovation.
           </p>
           </div>
        </div>
        </div>
    </div>
    <div  className="flex flex-col items-center justify-center gap-12 w-full font-PTGilroy-light h-[85vh] md:hidden "   >
            <div  className="w-[340px] h-[227px] relative"  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "  />
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
            <div className="w-full h-full flex items-center justify-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
           <p className="flex items-center justify-centermt-1 text-[12px] text-white">
           GDG Algiers Game Jam is an event that ignites the spirit of innovation and fearlessness. With unwavering determination, participants dive into the world of game development, forming teams and crafting captivating games from scratch.
            No matter your background or experience level, GDG Algiers Game Jam welcome you with open arms. It`&apos;`s an event where courage meets collaboration
           </p>
           </div>
            </div>

            <div  className="w-[340px] h-[227px] relative "  >
            <Image alt="bg-layer-1" src={layer1}  className="w-[340px] h-[227px] "/>
            <Image alt="bg-layer-2" src={layer2}  className="w-[335px] h-[222px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  />
           <div className="w-full  flex items-center justify-center h-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-5 ">
           <p className="mt-1 flex items-center justify-center text-[12px] text-white">
            as artists, programmers, designers, and sound engineers join forces to push the boundaries of their abilities.
            Immerse yourself in the exhilarating process of game development, fueled by a theme that sparks your imagination. With relentless passion and a touch of audacity, you`&apos;`ll create games that defy expectations and celebrate the beauty of innovation.
           </p>
           </div>
            </div>
    </div>
        </>
    )
}

export default AboutGameJam;