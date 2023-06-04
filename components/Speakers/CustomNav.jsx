import Image from "next/image";
import { useSwiper } from "swiper/react";

const CustomNav = ({currentSlide, setCurrentSlide, speakerslen}) => {
    const swiper = useSwiper();
    const slideLeft = () => {
        if(currentSlide > 0){
    
          setCurrentSlide(currentSlide - 1);
          swiper.slidePrev()
        }
      };

      const slideRight = () => {
        if(currentSlide < speakerslen - 1){
          setCurrentSlide(currentSlide + 1);
          swiper.slideNext()
        }
      };


    return (
      <div className="hidden sm:block w-[420px]  flex flex-row justify-between sm:">
        {currentSlide ? (
          <Image
            src="/shapes/left_arrow.png"
            alt="shape"
            height={69}
            width={69}
            className="cursor-pointer"
            onClick={slideLeft}
          />
        ) : null}
        <div className="ml-auto">
          <Image
            src="/shapes/right_arrow.png"
            alt="shape"
            height={69}
            width={69}
            className="cursor-pointer"
            onClick={slideRight}
          />
        </div>
      </div>
    );
  };
  
  export default CustomNav;
  