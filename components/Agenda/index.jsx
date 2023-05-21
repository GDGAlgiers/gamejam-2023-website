import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Day from "./Day";
import DayAgenda from "./DayAgenda";

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
                <DayAgenda agenda={StupidAgenda[selectedDay]}></DayAgenda>
            </div>
        </section>
    )
}

export default Agenda;