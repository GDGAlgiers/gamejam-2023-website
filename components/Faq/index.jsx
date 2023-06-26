import SectionTitle from "../shared/SectionTitle";
import Question from "./Question";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Faq = () => {
    const data=[
        {
            id:1,
            question:"What is GDG Algiers Game Jam ?",
            answer:"GDG Algiers Game Jam is an exciting event where game developers, designers, and enthusiasts come together to create games within a specified time frame."
        },
        {
            id:2,
            question:"Who can participate in the GDG Algiers Game Jam?",
            answer:"The GDG Algiers Game Jam is open to game developers, designers, and enthusiasts of all skill levels and backgrounds. Whether you're a beginner or an experienced professional, everyone is welcome to join!"
        },
        {
            id:3,
            question:"When will it take place?",
            answer:"the hachathon will take place from the 2nd of july till the 7th of july."
        },
        {
            id:4,
            question:"Why participate on Game jam?",
            answer:"It's a unique opportunity to showcase your skills, collaborate with fellow developers, and have fun while building amazing games."
        },
        {
            id:5,
            question:"What are the themes?",
            answer:"The themes for the Game Jam will be announced at the beginning of the Game Jam itself. Stay tuned for updates on the website."
        }, 
        {
            id:6,
            question:" How can I stay updated about GDG Algiers Game Jam?",
            answer:"To stay informed about GDG Algiers Game Jam and upcoming events, visit our website and follow us on social media."
        }      
    ]

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
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }

    return (
        <section id="faq">
            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariantsTitle}
               transition={{ duration: 0.8}}
            >
            <SectionTitle title="FAQ"/>
            </motion.div>
            <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 0.8}}
            >
                <div className="flex flex-col font-PTChaser m-4 items-center justify-center md:gap-2">
                    {data.map(val=>{
                        return(
                            <Question key={val.id} question={val.question} answer={val.answer} />
                        ) 
                    })}
                
                </div>
            </motion.div>

        </section>
    )
}

export default Faq;