const Day=({dayString,position,updateSelectedDay})=>{
    const Propreties={
        "positionTop":20,
        "positionLeft":20,
        "positionRight":undefined,
        "positionBottom":undefined,
        "size":"110px",
        "sizeMobile":"80px",
        "text1":"xl",
        "text2":"lg",
        "color":"860EF0",
        "padding":2,
        "order":1
    }
    if(position == dayString){
        Propreties.positionTop=undefined
        Propreties.positionLeft=undefined
        Propreties.positionBottom=50
        Propreties.positionRight=20
        Propreties.size="168px"
        Propreties.sizeMobile="120px"
        Propreties.text1="3xl"
        Propreties.text2="xl"
        Propreties.color="FCBC05"
        Propreties.padding=4
        Propreties.order=2

    }else if((position == "01" && dayString == "03")  || (position == "02" && dayString == "01") || (position == "03" && dayString == "02")){
        Propreties.positionTop=0
        Propreties.positionLeft=undefined
        Propreties.positionBottom=undefined
        Propreties.positionRight=20
        Propreties.size="90px"
        Propreties.sizeMobile="80px"
        Propreties.text1="xl"
        Propreties.text2="lg"
        Propreties.color="4FFCF6"
        Propreties.order=3
    }
    const handleClick = () => {
        updateSelectedDay(dayString);
      };
    return (
            <>
            <div className={`absolute hidden lg:flex  ${Propreties.positionTop != undefined ? `top-${Propreties.positionTop}` : `bottom-${Propreties.positionBottom}`} ${Propreties.positionLeft != undefined ? `left-${Propreties.positionLeft}` : `right-${Propreties.positionRight}`} justify-center items-center rounded-full bg-gradient-to-b from-[#FCBC05] via-[#8900EF] to-[#4EFEF6]`} style={{width:Propreties.size, height: Propreties.size}} onClick={handleClick}>
                <div className={`bg-black flex  justify-between items-center flex-col p-4 rounded-full`} style={{width:Propreties.size, height: Propreties.size}}>
                    <h4 className={`text-${Propreties.text1} text-center text-white font-[300]`}>Day</h4>
                    <p className={`text-${Propreties.text2} text-center text-[#${Propreties.color}]  font-bold`}>{dayString}</p>
                </div>
            </div>
           <div className="lg:hidden self-end" style={{order:Propreties.order}}>
           <div onClick={handleClick} className={`flex m-2 lg:hidden justify-center items-center rounded-full bg-gradient-to-b from-[#FCBC05] via-[#8900EF] to-[#4EFEF6]`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                <div className={` bg-black flex  justify-between items-center flex-col p-${Propreties.padding} rounded-full`} style={{width:Propreties.sizeMobile, height: Propreties.sizeMobile}}>
                    <h4 className={`text-lg text-center text-white font-[300]`}>Day</h4>
                    <p className={`text-sm text-center text-[#${Propreties.color}]  font-bold`}>{dayString}</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default Day;