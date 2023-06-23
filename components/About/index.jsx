import SectionTitle from "../shared/SectionTitle";
import AboutGdg from "./AboutGdg";
import AboutGameJam from "./AboutGameJam";
const About = () => {

    return (
        <>
            
            <SectionTitle title="About" />
            
            
            <div className="pt-20 sm:pb-4 lg:pb-2">
                <h2 className="flex justify-center">
                    <span className="text-center text-xl italic bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTChaser lg:text-4xl">
                        GdG
                    </span>
                </h2>
            </div>

            <AboutGdg />

            <div className="pt-20 sm:pb-4 lg:pb-2">
                <h2 className="flex justify-center">
                    <span className="text-center text-xl italic bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] bg-text font-PTChaser lg:text-4xl">
                        Game Jam
                    </span>
                </h2>
            </div>

            <AboutGameJam />
        </>  
    )
}

export default About;