const DayAgenda=({agenda})=>{
return(
<div>
    <div className="flex items-center justify-center mt-2 lg:mt-2 lg:absolute lg:top-[35%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
       <div className="relative flex flex-col p-2 gap-8 before:left-2 before:translate-y-[-50%] before:top-[50%] before:w-2 before:py-12 before:h-full before:absolute before:content-[''] before:bg-gradient-to-b before:from-[#FCBC05] before:via-[#8900EF] before:to-[#4EFEF6] before:rounded-md ">
        {agenda.map((activity) => (
            <div key={activity.id} className="flex gap-4 items-center">
                <div className="w-[8px] h-[8px] z-20 bg-white rounded-full"></div>
                <p className="text-[15px] 2xl:text-2xl text-white font-semiBold">{activity.startTime}-{activity.endTime} : <span className="font-[300] text-[13px] text-white ">{activity.text}</span></p>
            </div>
        ))}
       </div>
    </div>
    
</div>
)

}

export default DayAgenda;