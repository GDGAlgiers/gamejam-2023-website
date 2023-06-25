import BorderBG from "./../../public/Agenda/images/borderbg.png"
import BorderBGBig from "./../../public/Agenda/images/borderbgBig.png"
import Image from "next/image"
const Day=({dayString,position,updateSelectedDay})=>{
    const Propreties={
        "positionTop":"80px",
        "positionLeft":"80px",
        "positionRight":undefined,
        "positionBottom":undefined,
        "positionTopBig":"80px",
        "positionLeftBig":"80px",
        "positionRightBig":undefined,
        "positionBottomBig":undefined,
        "sizeBigScreen":"150px",
        "size":"110px",
        "sizeMobile":"80px",
        "text1":"20px",
        "text2":"18px",
        "color":"860EF0",
        "padding":2,
        "order":1,
        "text1BigScreen":"24px",
        "text2BigScreen":"20px",
    }
    if(position == dayString){
        Propreties.positionTop=undefined
        Propreties.positionLeft=undefined
        Propreties.positionBottom="25%"
        Propreties.positionRight="22%"
        Propreties.positionTopBig=undefined
        Propreties.positionLeftBig=undefined
        Propreties.positionBottomBig="5%"
        Propreties.positionRightBig="20%"
        Propreties.sizeBigScreen="300px"
        Propreties.size="168px" 
        Propreties.sizeMobile="120px"
        Propreties.text1="30px"
        Propreties.text2="1.5rem"
        Propreties.text1BigScreen="35px"
        Propreties.text2BigScreen="40px"
        Propreties.color="FCBC05"
        Propreties.padding=4
        Propreties.order=2

    }else if((position == "01" && dayString == "03")  || (position == "02" && dayString == "01") || (position == "03" && dayString == "02")){
        Propreties.positionTop="0px"
        Propreties.positionLeft=undefined
        Propreties.positionBottom=undefined
        Propreties.positionRight="30%"
        Propreties.positionTopBig="0px"
        Propreties.positionLeftBig=undefined
        Propreties.positionBottomBig=undefined
        Propreties.positionRightBig="30%"
        Propreties.sizeBigScreen="168px"
        Propreties.size="90px"
        Propreties.sizeMobile="80px"
        Propreties.text1="18px"
        Propreties.text2="16px"
        Propreties.text1BigScreen="26px"
        Propreties.text2BigScreen="20px"
        Propreties.color="4FFCF6"
        Propreties.order=3
    }else{
        Propreties.positionTop="10%"
        Propreties.positionLeft="20%"
        Propreties.positionBottom=undefined
        Propreties.positionRight=undefined
        Propreties.positionTopBig="10%"
        Propreties.positionLeftBig="24%"
        Propreties.positionBottomBig=undefined
        Propreties.positionRightBig=undefined
        Propreties.sizeBigScreen="168px"
        Propreties.size="110px"
        Propreties.sizeMobile="80px"
        Propreties.text1="20px"
        Propreties.text2="18px"
        Propreties.text1BigScreen="23x"
        Propreties.text2BigScreen="20px"
        Propreties.color="860EF0"
        Propreties.order=1
    }
    
    const handleClick = () => {
        updateSelectedDay(dayString);
    };

    console.log('position: ', position);
    console.log('day: ', dayString);

    return (
            <>
            <div className="absolute hidden font-PTGilroy-Bold lg:flex  2xl:hidden justify-center items-center rounded-full  " style={{width:Propreties.size, height: Propreties.size, zIndex: 1, ...(Propreties.positionTop !== undefined
    ? { top: `${Propreties.positionTop}` }
    : { bottom: `${Propreties.positionBottom}` }),
  ...(Propreties.positionLeft !== undefined
    ? { left: `${Propreties.positionLeft}` }
    : { right: `${Propreties.positionRight}` })}} onClick={handleClick}>
        <div className={"absolute"} > 
        {position == dayString && <Image
                        alt="border-bg" src={BorderBG.src}
                        width={200}
                        height={200}
                        />}
                        {Propreties.order == 1 && <Image
                        className="cursor-pointer"
                        alt="border-bg" src={BorderBG.src}
                        width={170}
                        height={170}
                        />}
                        {Propreties.order == 3 && <Image
                        className="cursor-pointer"
                        alt="border-bg" src={BorderBG.src}
                        width={190}
                        height={195}
                        />}
        </div>
                <div className={`flex justify-around items-center flex-col p-4 rounded-full `} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1}`}}>Day</h4>
                    <p className={`text-center  font-PTGilroy-Bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2}`}}>{dayString}</p>
                </div>
            </div>
            
            <div className={`absolute font-PTGilroy-Bold hidden py-4 2xl:flex justify-center items-center rounded-full  `} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen, ...(Propreties.positionTopBig !== undefined
                ? { top: `${Propreties.positionTopBig}` }
                : { bottom: `${Propreties.positionBottomBig}` }),
            ...(Propreties.positionLeftBig !== undefined
                ? { left: `${Propreties.positionLeftBig}` }
                : { right: `${Propreties.positionRightBig}` })}} onClick={handleClick}>
                    <div className="absolute" > 
                    {position == dayString && <Image
                        alt="border-bg" src={BorderBG.src}
                        width={280}
                        height={280}
                        />}
                        {Propreties.order == 3 && <Image
                        className="cursor-pointer"
                        alt="border-bg" src={BorderBG.src}
                        width={200}
                        height={200}
                        />}
                        {Propreties.order == 1 && <Image
                        className="cursor-pointer"
                        alt="border-bg" src={BorderBG.src}
                        width={220}
                        height={220}
                        />}

                    </div>
                <div className={`flex justify-around ${position == dayString && "py-12"}  items-center flex-col p-8 rounded-full`} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1BigScreen}`}}>Day</h4>
                    <p className={`text-center  font-PTGilroy-Bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2BigScreen}`}}>{dayString}</p>
                </div>
            </div>
           <div className="lg:hidden font-PTGilroy-Bold self-end" style={{order:Propreties.order}}>
           <div onClick={handleClick} className={`flex m-2 lg:hidden justify-center items-center rounded-full `} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
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
                <div className={`flex  font-PTGilroy-Bold justify-around items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                    <h4 className={`text-lg text-center font-PTGilroy-Bold text-white font-[300]`}>Day</h4>
                    <p className={`text-sm text-center  font-PTGilroy-Bold`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default Day;