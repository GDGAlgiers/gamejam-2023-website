import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Card from "./Card";
import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardResp from "./CardResp";


const Speakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideLeft = () => {
    // if (this.swiper) {
    //   this.swiper.slidePrev();
    // }
      setCurrentSlide(currentSlide - 1);
  };
  
  const slideRight = () => {
    // if (this.swiper) {
    //   this.swiper.slideNext();
    // }
      setCurrentSlide(currentSlide + 1);
  };

  const speakers = [
    {
      id: 1,
      name: "John Doe",
      description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      id: 2,
      name: "John Doe",
      description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      id: 3,
      name: "John Doe",
      description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
  ]

  return (
    <section className="flex items-center flex-col justify-around h-[90vh] w-[65vw] m-16">

      {/* Title Section */}
      <SectionTitle title="Speakers&Mentors" />


      {/* Cards */}
      {/* <Card selected= {true} key={0}
          name={"Anes Mezdoud"}
          description={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}
          /> */}

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      onSwiper={(swiper) => (window.swiper = swiper)}
      > 
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <Card
              key={speaker.id}
              name={speaker.name}
              description={speaker.description}
              selected={currentSlide === index}
            />
          </SwiperSlide>
        ))}
      
      </Swiper> 

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      {/* <CardResp selected= {true} key={0}
      name={"Anes Mezdoud"}
      description={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}
      image = {`/images/mentor_image1.png`}
      className = {`w-[800px] h-[800px]`}/> */}


      {/* Swipe Buttons */}
      <div className="flex flex-row justify-between w-80">
        {currentSlide ? (
          <Image src="/shapes/left_arrow.png" alt="shape" height={69} width={69} className="cursor-pointer" onClick={slideLeft} />
        ) : null}
        <div className="ml-auto">
          <Image src="/shapes/right_arrow.png" alt="shape" height={69} width={69} className="cursor-pointer" onClick={slideRight} />
        </div>
      </div>

    </section>
  );
};

export default Speakers;
