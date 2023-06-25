const DayAgenda=({agenda})=>{
return(
<div>
    <div className="flex  items-center justify-center mt-2 lg:mt-8 ">
       <div className="relative flex flex-col p-2 gap-8 before:left-2 before:translate-y-[-50%] before:top-[50%] before:w-2 before:py-12 before:h-full before:absolute before:content-[''] before:bg-gradient-to-b before:from-[#FCBC05] before:via-[#8900EF] before:to-[#4EFEF6] before:rounded-md ">
        {agenda.map((activity) => (
            <div key={activity.id} className="flex gap-4 justify-center items-center">
                <div className="w-2 h-2"></div>
                <div className="left-2 absolute w-2 h-2 z-[9999] bg-white rounded-full"></div>
                <p className="text-[15px] 2xl:text-2xl text-white font-PTGilroy-Bold">{activity.startTime}-{activity.endTime} : <span className="font-PTGilroy-light font-[300] text-[13px] text-white ">{activity.text}</span></p>
            </div>
        ))}
       </div>
    </div>
    
</div>
)

}

export default DayAgenda;