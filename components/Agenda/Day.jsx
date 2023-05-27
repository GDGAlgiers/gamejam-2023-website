import BorderBG from "./../../public/Agenda/images/borderbg.png"
import BorderBGBig from "./../../public/Agenda/images/borderbgBig.png"
import BorderBGMobile from "./../../public/Agenda/images/borderbgMobile.png"
import BorderBGMobile2 from "./../../public/Agenda/images/borderbgMobile2.png"
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
        "imgMobileSrc":BorderBGMobile.src
    }
    if(position == dayString){
        Propreties.positionTop=undefined
        Propreties.positionLeft=undefined
        Propreties.positionBottom="25%"
        Propreties.positionRight="5%"
        Propreties.positionTopBig=undefined
        Propreties.positionLeftBig=undefined
        Propreties.positionBottomBig="5%"
        Propreties.positionRightBig="5%"
        Propreties.sizeBigScreen="300px"
        Propreties.size="168px" 
        Propreties.sizeMobile="120px"
        Propreties.text1="30px"
        Propreties.text2="1.5rem"
        Propreties.text1BigScreen="35px"
        Propreties.text2BigScreen="26px"
        Propreties.color="FCBC05"
        Propreties.padding=4
        Propreties.order=2
        Propreties.imgMobileSrc=BorderBGMobile2.src

    }else if((position == "01" && dayString == "03")  || (position == "02" && dayString == "01") || (position == "03" && dayString == "02")){
        Propreties.positionTop="0px"
        Propreties.positionLeft=undefined
        Propreties.positionBottom=undefined
        Propreties.positionRight="16%"
        Propreties.positionTopBig="0px"
        Propreties.positionLeftBig=undefined
        Propreties.positionBottomBig=undefined
        Propreties.positionRightBig="16%"
        Propreties.sizeBigScreen="168px"
        Propreties.size="90px"
        Propreties.sizeMobile="80px"
        Propreties.text1="18px"
        Propreties.text2="16px"
        Propreties.text1BigScreen="26px"
        Propreties.text2BigScreen="20px"
        Propreties.color="4FFCF6"
        Propreties.order=3
        Propreties.imgMobileSrc=BorderBGMobile.src
    }else{
        Propreties.positionTop="10%"
        Propreties.positionLeft="10%"
        Propreties.positionBottom=undefined
        Propreties.positionRight=undefined
        Propreties.positionTopBig="10%"
        Propreties.positionLeftBig="10%"
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
        Propreties.imgMobileSrc=BorderBGMobile.src
    }
    const handleClick = () => {
        updateSelectedDay(dayString);
      };
    return (
            <>
            <div className="absolute hidden lg:flex  2xl:hidden justify-center items-center rounded-full  " style={{width:Propreties.size, height: Propreties.size, zIndex: 1, ...(Propreties.positionTop !== undefined
    ? { top: `${Propreties.positionTop}` }
    : { bottom: `${Propreties.positionBottom}` }),
  ...(Propreties.positionLeft !== undefined
    ? { left: `${Propreties.positionLeft}` }
    : { right: `${Propreties.positionRight}` })}} onClick={handleClick}>
        <div className="absolute" > <img alt="border-bg" src={ BorderBG.src}></img></div>
                <div className={`flex justify-between items-center flex-col p-4 rounded-full `} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1}`}}>Day</h4>
                    <p className={`text-center  font-bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2}`}}>{dayString}</p>
                </div>
            </div>
            
            <div className="absolute hidden 2xl:flex justify-center items-center rounded-full " style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen, ...(Propreties.positionTopBig !== undefined
                ? { top: `${Propreties.positionTopBig}` }
                : { bottom: `${Propreties.positionBottomBig}` }),
            ...(Propreties.positionLeftBig !== undefined
                ? { left: `${Propreties.positionLeftBig}` }
                : { right: `${Propreties.positionRightBig}` })}} onClick={handleClick}>
                    <div className="absolute" > <img alt="border-bg" src={ BorderBGBig.src} ></img></div>
                <div className={`flex justify-between items-center flex-col p-8 rounded-full`} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1BigScreen}`}}>Day</h4>
                    <p className={`text-center  font-bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2BigScreen}`}}>{dayString}</p>
                </div>
            </div>
           <div className="lg:hidden self-end" style={{order:Propreties.order}}>
           <div onClick={handleClick} className={`flex m-2 lg:hidden justify-center items-center rounded-full `} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
           <div className="absolute" ><img
      alt="border-bg" src={Propreties.imgMobileSrc}
    /></div>
                <div className={`flex  justify-between items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                    <h4 className={`text-lg text-center text-white font-[300]`}>Day</h4>
                    <p className={`text-sm text-center  font-bold`} style={{color:`#${Propreties.color}`}}>{dayString}</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default Day;