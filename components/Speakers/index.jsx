import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Speaker from "./Speaker";
import Image from "next/image";
import CustomNav from "./CustomNav";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/swiper.min.css';



const Speakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const speakers = [
    {
      id: 1,
      name: "John Doe",
      description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
    },
    {
      id: 2,
      name: "John Doe",
      description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
    },
    {
      id: 3,
      name: "John Doe",
      description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
    },
  ]


  return (
    <section className="flex items-center flex-col justify-around h-[90vh] m-16">

      {/* Title Section */}
      <SectionTitle title="Speakers&Mentors" />


        {/* Cards */}
      <div className="w-[900px]">
        <Swiper
        modules={[Navigation,Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>

          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <Speaker
                key={speaker.id}
                name={speaker.name}
                description={speaker.description}
                selected={currentSlide === index}
                image={`/images/mentor_image${index}.png`}
              />
            </SwiperSlide>
          ))}
          
          <div className="w-full flex flex-row justify-center items-end h-24">
            <CustomNav speakerslen={speakers.length} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide}/>
          </div>

        </Swiper>
      </div> 
      
    </section>
  );
};

export default Speakers;
