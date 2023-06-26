import BorderBG from "./../../public/Agenda/images/borderbg.png"
import Image from "next/image"
import DayAgenda from "./DayAgenda";
const Day=({dayString , agenda})=>{
    const Propreties={
        "positionTop":"0px",
        "sizeBigScreen":"124px",
        "size":"80px",
        "sizeMobile":"50px",
        "color":"4FFCF6",
        "padding":2,
    }
    return (
        <div className="flex gap-5 items-center">
           <div className=" font-PTGilroy-Bold">
           <div  className={`hidden lg:flex 2xl:hidden m-2  justify-center items-center rounded-full `} style={{width:Propreties.size, height: Propreties.size}}>
            <div className="absolute" >
             <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={80}
                    height={80}
                    />
            </div>
                <div className={`flex  font-PTGilroy-Bold justify-around items-center flex-col p-2 rounded-full`} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className={`text-lg text-center font-PTGilroy-light text-white font-[400]`}>Day</h4>
                    <p className={`text-[16px] text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
            <div  className={`hidden  2xl:flex m-2  justify-center items-center rounded-full `} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
            <div className="absolute" >
             <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={120}
                    height={120}
                    />
            </div>
                <div className={`flex  font-PTGilroy-Bold justify-around items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
                    <h4 className={`text-[24px] text-center font-PTGilroy-light text-white font-[400]`}>Day</h4>
                    <p className={`text-xl text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
            <div   className={`flex lg:hidden m-2  justify-center items-center rounded-full `} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
            <div className="absolute" >
            <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={76}
                    height={76}
                    />
            </div>
                <div className={`flex justify-around items-center flex-col  rounded-full`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                    <h4 className={`text-[14px] text-center font-PTGilroy-light text-white font-[300]`}>Day</h4>
                    <p className={`text-[12px] text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
           </div>
           <DayAgenda agenda={agenda}></DayAgenda>
        </div>
    )
}
export default Day;