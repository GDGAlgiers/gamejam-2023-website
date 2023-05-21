import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Day from "./Day";
import DayAgenda from "./DayAgenda";
import Image from "next/image";
import LeftShape from "../../public/Agenda/images/Vector-2.Png"
import BottomShape from "../../public/Agenda/images/Vector.Png"
import TopShape from "../../public/Agenda/images/VectorTop.Png"
import BottomShape2 from "../../public/Agenda/images/Vector2.Png"
const Agenda = () => {
    const [selectedDay, setSelectedDay] = useState("01");
    const StupidAgenda={
        
        "01":[{
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
     {"id":3,
        "startTime":"01:30",
     "endTime":"02:00",
     "text": "To start, print out the hiking guide and map"
    }],
    "02":[{
        "id":0,
        "startTime":"00:00",
        "endTime":"00:30",
        "text": "To start, print out the hiking guide and map"
       },
       {"id":1,
        "startTime":"00:30",
       "endTime":"01:00",
       "text": "To start, print out the hiking guide and map"
      },
     {"id":2,
    "startTime":"01:30",
     "endTime":"02:00",
     "text": "To start, print out the hiking guide and map"
    }],
    "03":[{"id":0,
    "startTime":"00:00",
        "endTime":"00:30",
        "text": "To start, print out the hiking guide and map"
       },
       {"id":1,
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
                <div className="absolute top-[11rem] left-[8rem]">
                    <Image src={LeftShape.src} alt="Image description" width={80} height={80}></Image>
                </div>
                <div className="absolute top-[19rem] left-[12.9rem]">
                    <Image src={LeftShape.src} alt="Image description" width={80} height={80}></Image>
                </div>
                <div className="absolute bottom-[9.1rem] right-[21.7rem]">
                    <Image src={BottomShape.src} alt="Image description" width={190} height={190}></Image>
                </div>
                <div className="absolute bottom-[9em] right-[12rem]">
                    <Image src={BottomShape2.src} alt="Image description" width={190} height={190}></Image>
                </div>
                <div className="absolute top-[5rem] right-[5.4rem]">
                    <Image src={LeftShape.src} alt="Image description" width={120} height={120}></Image>
                </div>
                <div className="absolute top-[1.7rem] left-[21rem]">
                    <Image src={TopShape.src} alt="Image description" width={200} height={200}></Image>
                </div>
                <div className="absolute top-[4rem] left-[11.2rem]">
                    <Image src={TopShape.src} alt="Image description" width={180} height={180}></Image>
                </div>
               </div>
                <DayAgenda agenda={StupidAgenda[selectedDay]}></DayAgenda>
            </div>
        </section>
    )
}

export default Agenda;