import BorderBG from "./../../public/Agenda/images/borderbg.png"
import Image from "next/image"
const Day=({dayString,position,updateSelectedDay})=>{
    const Propreties={
        "positionTop":"0px",
        "sizeBigScreen":"150px",
        "size":"110px",
        "sizeMobile":"80px",
        "color":"860EF0",
        "padding":2,
    }
    if(position == dayString){
        Propreties.positionTop="80px"
        Propreties.sizeBigScreen="168px"
        Propreties.size="148px" 
        Propreties.sizeMobile="60px"
        Propreties.color="4FFCF6"
        Propreties.padding=4

    }else {
        Propreties.sizeBigScreen="124px"
        Propreties.size="100px"
        Propreties.sizeMobile="50px"
        Propreties.color="4FFCF6" 
    }
    
    const handleClick = () => {
        updateSelectedDay(dayString);
    };

    return (
            <>
           <div className="self-start font-PTGilroy-Bold lg:self-end">
           <div onClick={handleClick} className={`hidden lg:flex 2xl:hidden m-2  justify-center items-center rounded-full `} style={{width:Propreties.size, height: Propreties.size}}>
            <div className="absolute" >
            {position != dayString && <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={100}
                    height={100}
                    />}
                    {position == dayString && <Image
                    alt="border-bg" src={BorderBG.src}
                    width={120}
                    height={120}
                    />}
            </div>
                <div className={`flex  font-PTGilroy-Bold justify-around items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className={`text-xl text-center font-PTGilroy-light text-white font-[400]`}>Day</h4>
                    <p className={`text-lg text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
            <div onClick={handleClick} className={`hidden  2xl:flex m-2  justify-center items-center rounded-full `} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
            <div className="absolute" >
            {position != dayString && <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={120}
                    height={120}
                    />}
                    {position == dayString && <Image
                    alt="border-bg" src={BorderBG.src}
                    width={140}
                    height={140}
                    />}
            </div>
                <div className={`flex  font-PTGilroy-Bold justify-around items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
                    <h4 className={`text-[24px] text-center font-PTGilroy-light text-white font-[400]`}>Day</h4>
                    <p className={`text-xl text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
            <div onClick={handleClick} className={`flex lg:hidden m-2  justify-center items-center rounded-full `} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
            <div className="absolute" >
            {position != dayString && <Image
                    className="cursor-pointer 1"
                    alt="border-bg" src={BorderBG.src}
                    width={66}
                    height={56}
                    />}
                    {position == dayString && <Image
                    alt="border-bg" src={BorderBG.src}
                    width={76}
                    height={76}
                    />}
            </div>
                <div className={`flex justify-around items-center flex-col  rounded-full`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                    <h4 className={`text-[14px] text-center font-PTGilroy-light text-white font-[300]`}>Day</h4>
                    <p className={`text-[12px] text-center  font-PTGilroy-light`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default Day;