const Day=({dayString,position,updateSelectedDay})=>{
    const Propreties={
        "positionTop":"80px",
        "positionLeft":"80px",
        "positionRight":undefined,
        "positionBottom":undefined,
        "sizeBigScreen":"150px",
        "size":"110px",
        "sizeMobile":"80px",
        "text1":"20px",
        "text2":"18px",
        "color":"860EF0",
        "padding":2,
        "order":1,
        "text1BigScreen":"24px",
        "text2BigScreen":"20px"
    }
    if(position == dayString){
        Propreties.positionTop=undefined
        Propreties.positionLeft=undefined
        Propreties.positionBottom="27%"
        Propreties.positionRight="8%"
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

    }else if((position == "01" && dayString == "03")  || (position == "02" && dayString == "01") || (position == "03" && dayString == "02")){
        Propreties.positionTop="0px"
        Propreties.positionLeft=undefined
        Propreties.positionBottom=undefined
        Propreties.positionRight="16%"
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
        Propreties.positionLeft="10%"
        Propreties.positionBottom=undefined
        Propreties.positionRight=undefined
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
    return (
            <>
            <div className="absolute hidden lg:flex  2xl:hidden justify-center items-center rounded-full border-4 border-t-[#FCBC05] border-l-[#8900EF] border-r-[#8900EF] border-b-[#4EFEF6]" style={{width:Propreties.size, height: Propreties.size, ...(Propreties.positionTop !== undefined
    ? { top: `${Propreties.positionTop}` }
    : { bottom: `${Propreties.positionBottom}` }),
  ...(Propreties.positionLeft !== undefined
    ? { left: `${Propreties.positionLeft}` }
    : { right: `${Propreties.positionRight}` })}} onClick={handleClick}>
                <div className={`flex justify-between items-center flex-col p-4 rounded-full`} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1}`}}>Day</h4>
                    <p className={`text-center  font-bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2}`}}>{dayString}</p>
                </div>
            </div>
            
            <div className="absolute hidden 2xl:flex justify-center items-center rounded-full border-4 border-t-[#FCBC05] border-l-[#8900EF] border-r-[#8900EF] border-b-[#4EFEF6]" style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen, ...(Propreties.positionTop !== undefined
                ? { top: `${Propreties.positionTop}` }
                : { bottom: `${Propreties.positionBottom}` }),
            ...(Propreties.positionLeft !== undefined
                ? { left: `${Propreties.positionLeft}` }
                : { right: `${Propreties.positionRight}` })}} onClick={handleClick}>
                <div className={`flex justify-between items-center flex-col p-8 rounded-full`} style={{width:Propreties.sizeBigScreen, height: Propreties.sizeBigScreen}}>
                    <h4 className="text-center text-white font-[300]" style={{fontSize:`${Propreties.text1BigScreen}`}}>Day</h4>
                    <p className={`text-center  font-bold`} style={{color:`#${Propreties.color}`,fontSize:`${Propreties.text2BigScreen}`}}>{dayString}</p>
                </div>
            </div>
           <div className="lg:hidden self-end" style={{order:Propreties.order}}>
           <div onClick={handleClick} className={`flex m-2 lg:hidden justify-center items-center rounded-full border-4 border-t-[#FCBC05] border-l-[#8900EF] border-r-[#8900EF] border-b-[#4EFEF6]`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
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