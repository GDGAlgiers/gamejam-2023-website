// import { useState } from "react";
// import SectionTitle from "../shared/SectionTitle";
// import Speaker from "./Speaker";
// import CustomNav from "./CustomNav";

// import { Navigation, Pagination, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import 'swiper/swiper.min.css';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';



// const Speakers = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const speakers = [
//     {
//       id: 1,
//       name: "John Doe",
//       description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci"
//     },
//   ]

// const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger the animation once
//     rootMargin: '0px 0px -35% 0px',
//   });

//   const animationVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//     },
//   };
// const animationVariantsTitle = {
//     hidden: {
//       opacity: 0,
//       x: 100,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//     },
//   }

//   return (
//     <section className="flex items-center flex-col justify-around h-[90vh] my-16 mx-8 md:mx-16">

//       {/* Title Section */}
//       <SectionTitle title="Speakers & Mentors" />

//         {/* Cards */}
//       <div className="flex justify-center items-center mt-8">
//         <div className="hidden lg:block lg:w-[1200px] 2xl:w-[1900px]">
//             <Swiper
//             modules={[Navigation,Pagination, A11y]}
//             spaceBetween={50}
//             centeredSlides 
//             slidesPerView={2}
//             onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>

//               {speakers.map((speaker, index) => (
//                 <SwiperSlide key={index}>
//                   <Speaker
//                     key={speaker.id}
//                     name={speaker.name}
//                     description={speaker.description}
//                     selected={currentSlide === index}
//                     image={`/images/mentor_image${index}.png`}
//                   />
//                 </SwiperSlide>
//               ))}
              
//               <div className="w-full flex flex-row justify-center items-end h-24">
//                 <CustomNav speakerslen={speakers.length} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide}/>
//               </div>

//             </Swiper>
//           </div> 

//           <div className="flex items-center justify-center lg:hidden w-[90vw]">
//             <Swiper
//               modules={[Navigation,Pagination, A11y]}
//               spaceBetween={40}
//               centeredSlides 
//               slidesPerView={1}
//               onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>

//               {speakers.map((speaker, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex items-center justify-center">
                  
//                     <Speaker
//                       key={speaker.id}
//                       name={speaker.name}
//                       description={speaker.description}
//                       selected={currentSlide === index}
//                       image={`/images/mentor_image${index}.png`}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
              
//               <div className="w-full flex flex-row justify-center items-end h-24">
//                 <CustomNav speakerslen={speakers.length} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide}/>
//               </div>

//             </Swiper>

//           </div> 

//       </div>
      
//     </section>
//   );
// };

// export default Speakers;
