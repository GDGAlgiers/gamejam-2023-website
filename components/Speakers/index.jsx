import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Speaker from "./Speaker";
import CustomNav from "./CustomNav";

import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/swiper.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Speakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const speakers = [
    {
      id: 1,
      name: "Touaa Maria",
      description:
        "L3 cryptography and algebra student at USTHB university, pixel artist and game development enthusiast",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1687880518/P1039041_-_Maria_Touaa_i4e2hy.jpg",
    },
    {
      id: 2,
      name: "Brahim Djelloul Sami",
      description: "Founder @ In-verse solutions || XR / 3D / Game Developer",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1687879923/Sami_Picture_Unblurred_-_Sami_Brahim_djelloul_osx3xb.png",
    },
    {
      id: 3,
      name: "Belkhiri Youcef",
      description:
        "Software & Game developer | Freelancer: GameDev & Art | CS student @ESTIN",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1687879921/1676419985417_-_Youcef_Belkhiri_gck04c.jpg",
    },
    {
      id: 4,
      name: "Rouane Anis",
      description:
        "Software engineer & Big data student. Loves video games (especially the souls) and coding! Winner of the 8th edition of Algeria Game Challenge in 2019",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1687879923/IMG_20230627_121709_-_Anis_Rouane_vh7szn.jpg",
    },
    {
      id: 5,
      name: "Ramdani Youcef Fethi",
      description:
        "3D Artist, GameDev, Concept Artist. Inspired by the DnD universe and Dystopian Galactic fantasies.",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1688046497/FB_IMG_1687882483630_-_Youcef_Ramdani_hzukjp.jpg",
    },
    {
      id: 6,
      name: "Hamitouche Mohamed Amine",
      description:
        "Student in thermo energetic game designer and game writer and a big fan of RPG games",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1688046496/FB_IMG_1687105914273_-_Mohamed_Amine_Hamitouche_oerxxg.jpg",
    },
    {
      id: 7,
      name: "Kadouche Marwan",
      description: "3D Artist at Ronintek",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1688046496/1654337908805_1_-_marwan_kadouche_pcfcbz.jpg",
    },
    {
      id: 8,
      name: "Lakehal Ahmed Amine",
      description:
        "Information Systems Engineer, Game Development instructor at BrainerX, Managing Partner at BCCM",
      image:
        "https://res.cloudinary.com/dz4gvcjfy/image/upload/v1688046775/Profile_Picture_-_Ahmedamine_LAKEHAL_yrmxwa.jpg",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    rootMargin: "0px 0px -35% 0px",
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
  };

  return (
    
    <motion.section
      id="mentors" 
      className="flex items-center flex-col justify-around h-[90vh] my-16 mx-8 md:mx-16"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariantsTitle}
      transition={{ duration: 0.8 }}>
      {/* Title Section */}
      <SectionTitle title="Mentors" />

      {/* Cards */}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="flex justify-center items-center mt-8"
      >
        <div className="hidden lg:block lg:w-[1200px] 2xl:w-[1900px]">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            centeredSlides
            slidesPerView={2}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <Speaker
                  key={speaker.id}
                  name={speaker.name}
                  description={speaker.description}
                  selected={currentSlide === index}
                  image={speaker.image}
                />
              </SwiperSlide>
            ))}

            <div className="w-full flex flex-row justify-center items-end h-24">
              <CustomNav
                speakerslen={speakers.length}
                setCurrentSlide={setCurrentSlide}
                currentSlide={currentSlide}
              />
            </div>
          </Swiper>
        </div>

        <div className="flex items-center justify-center lg:hidden w-[90vw]">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40}
            centeredSlides
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <Speaker
                    key={speaker.id}
                    name={speaker.name}
                    description={speaker.description}
                    selected={currentSlide === index}
                    image={speaker.image}
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="w-full flex flex-row justify-center items-end h-24">
              <CustomNav
                speakerslen={speakers.length}
                setCurrentSlide={setCurrentSlide}
                currentSlide={currentSlide}
              />
            </div>
          </Swiper>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Speakers;
