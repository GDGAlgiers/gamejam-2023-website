import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Day from "./Day";
import DayAgenda from "./DayAgenda";
import Image from "next/image";
import TopShape from "../../public/Agenda/images/AgendaShapeTop.png"
import BottomShape from "../../public/Agenda/images/AgendaShapeBottom.png"
import LeftShape from "../../public/Agenda/images/AgendaShapeLeft.png"
import RightShape from "../../public/Agenda/images/AgendaShapeRight.png"
const Agenda = () => {
    const [selectedDay, setSelectedDay] = useState("01");
    const StupidAgenda={
        
        "01":[
        {
            "id":0,
            "startTime":"00:00",
            "endTime":"00:30",
            "text": "To start, print out the hiking guide and map"
        },
        {    
            "id":1,
            "startTime":"00:30",
            "endTime":"01:00",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":2,
            "startTime":"01:00",
            "endTime":"01:30",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":3,
            "startTime":"01:30",
            "endTime":"02:00",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":4,
            "startTime":"02:00",
            "endTime":"02:30",
            "text": "To start, print out the hiking guide and map"
        }],
        "02":[
            {
            "id":0,
            "startTime":"00:00",
            "endTime":"00:30",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":1,
            "startTime":"00:30",
            "endTime":"01:00",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":2,
            "startTime":"01:30",
            "endTime":"02:00",
            "text": "To start, print out the hiking guide and map"
        }],
        "03":[
        {
            "id":0,
            "startTime":"00:00",
            "endTime":"00:30",
            "text": "To start, print out the hiking guide and map"
        },
        {
            "id":1,
            "startTime":"00:30",
            "endTime":"01:00",
            "text": "To start, print out the hiking guide and map"
        }]
    }
    
    const Days=["01","02","03"]
    const updateDay = (day) => {
        setSelectedDay(day);
    };
    
    return (
        <section className="w-full h-full">
            <SectionTitle title="Agenda"/>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-center w-full min-h-screen">
               <div className="flex  justify-center lg:block p-4 lg:p-0">
               {Days.map((day) => {
                return(
                        <Day key={day} dayString={day} position={selectedDay} updateSelectedDay={updateDay}/>
                )
               }
                )}
               </div>
               <div className="hidden lg:block 2xl:hidden">
                <div className="absolute top-[28%] left-[25%]">
                    <Image src={LeftShape.src} alt="Image description" width={100} height={180}></Image>
                </div>
                <div className="absolute bottom-[18%] right-[32%]">
                    <Image src={BottomShape.src} alt="Image description" width={450} height={200}></Image>
                </div>
                <div className="absolute top-[15%] right-[25%]">
                    <Image src={RightShape.src} alt="Image description" width={110} height={100}></Image>
                </div>
                <div className="absolute top-[2%] left-[28%]">
                    <Image src={TopShape.src} alt="Image description" width={480} height={200}></Image>
                </div>
               </div>
               <div className="hidden 2xl:block">
                <div className="absolute top-[29%] left-[28%]">
                    <Image src={LeftShape.src} alt="Image description" width={150} height={300}></Image>
                </div>
                <div className="absolute bottom-[12%] right-[34%]">
                    <Image src={BottomShape.src} alt="Image description" width={600} height={200}></Image>
                </div>
                <div className="absolute top-[22%] right-[27%]">
                    <Image src={RightShape.src} alt="Image description" width={130} height={110}></Image>
                </div>
                <div className="absolute top-[2%] left-[32%]">
                    <Image src={TopShape.src} alt="Image description" width={600} height={200}></Image>
                </div>
               </div>
                <DayAgenda agenda={StupidAgenda[selectedDay]}></DayAgenda>
            </div>
        </section>
    )
}

export default Agenda;