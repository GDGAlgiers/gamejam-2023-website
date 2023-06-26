import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Day from "./Day";
import DayAgenda from "./DayAgenda";
import Image from "next/image";
import TopShape from "../../public/Agenda/images/AgendaShapeTop.png"
import BottomShape from "../../public/Agenda/images/AgendaShapeBottom.png"
import LeftShape from "../../public/Agenda/images/AgendaShapeLeft.png"
import RightShape from "../../public/Agenda/images/AgendaShapeRight.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Agenda = () => {
    const [selectedDay, setSelectedDay] = useState("01");
    const StupidAgenda={
        
        "01":[
        {
            "id":0,
            "startTime":"18:00",
            "endTime":"18:30",
            "text": "Openning ceremoney"
        },
        {    
            "id":1,
            "startTime":"18:00",
            "endTime":"18:30 ",
            "text": "Hackathon start"
        }],
        "02":[
            {
            "id":0,
            "startTime":"21:00",
            "endTime":"22:00",
            "text": "Activity 01"
        }],
        "03":[
            {"id":0,
            "startTime":"21:00",
            "endTime":"22:00",
            "text": "Activity 02"
        }],
        "04":[
            {"id":0,
            "startTime":"21:00",
            "endTime":"22:00",
            "text": "Activity 03"
        }],
            "05":[
                {"id":0,
            "startTime":"21:00",
            "endTime":"22:00",
            "text": "Activity 04"
        }],
        "06":[
            {"id":0,
        "startTime":"18:00",
        "endTime":"",
        "text": "Submissions"
    }]
    }
    
    const Days=["01","02","03","04","05","06"]
    const updateDay = (day) => {
        setSelectedDay(day);
    };
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        // rootMargin: '0px 0px -32% 0px',
        threshold: 0.42,
      });
    
      const animationVariants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      };
    const animationVariantsTitle = {
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }
    return (
        <section id='agenda' className="w-full h-full">
            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariantsTitle}
               transition={{ duration: 0.8}}
              >
            <SectionTitle title="Agenda"/>
            </motion.div>
            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 0.8}}
              >
                <div className="flex lg:flex-col pt-10 w-full min-h-screen">
                <div className="flex flex-col lg:flex-row gap-8  lg:justify-center p-4 lg:p-0">
                {Days.map((day) => {
                    return(
                            <Day key={day} dayString={day} position={selectedDay} updateSelectedDay={updateDay}/>
                    )
                }
                    )}
                </div>
                    <DayAgenda agenda={StupidAgenda[selectedDay]}></DayAgenda>
                </div>
            </motion.div>
            
        </section>
    )
}

export default Agenda;