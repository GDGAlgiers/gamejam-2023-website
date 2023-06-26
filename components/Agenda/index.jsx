import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Day from "./Day";
import Image from "next/image";
import LeftShape from "../../public/Agenda/images/left.png"
import RightShape from "../../public/Agenda/images/right.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Agenda = () => {
    const agenda={
        
        "01":[
        {
            "id":0,
            "startTime":"18:00",
            "endTime":"18:30",
            "text": "Openning ceremoney"
        },
        {    
            "id":1,
            "startTime":"18:30",
            "endTime":" ",
            "text": "GameJam start"
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
        <section id='agenda' className="w-full h-full pt-4 min-h-screen ">
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
                <div className="flex flex-col gap-8 lg:flex-row justify-center lg:gap-10  py-10  w-full ">
                    <div className="flex flex-col gap-8 justify-center p-2 lg:p-0">
                        {Days.map((day,i) => {
                            if(i<3){
                                return(
                                    <Day key={day} dayString={day} agenda={agenda[day]}/>
                            )
                            }                         
                        }
                            )}
                            
                    </div>
                    <div className="flex flex-col gap-8 justify-center p-2 lg:p-0">
                        {Days.map((day,i) => {
                           if(i>=3){
                            return(
                                <Day key={day} dayString={day} agenda={agenda[day]}/>
                        )
                        }  
                        }
                            )}
                            
                    </div>
                </div>
                <div className="hidden lg:flex justify-center w-full">
                    <div className="lg:hidden 2xl:flex justify-around  px-10  pb-20 w-[70%]">
                        <Image src={LeftShape.src} alt="left" width={300} height={200} />
                        <Image src={RightShape.src} alt="right" width={300} height={200} />
                    </div>
                    <div className="2xl:hidden lg:flex justify-around  px-10  pb-20 w-[70%]">
                        <Image src={LeftShape.src} alt="left" width={200} height={200} />
                        <Image src={RightShape.src} alt="right" width={200} height={200} />
                    </div>
                </div>
            </motion.div>
            
        </section>
    )
}

export default Agenda;