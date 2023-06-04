import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import Ellipse from '../../public/shapes/EllipseColor.png'
const Partners = () => {
  return (
    <section>
      <SectionTitle class="my-8" title="Partners" />
      <div className="flex flex-col items-center gap-10  justify-center my-10 lg:my-20">

        <div className="relative mb-2 lg:mb-0">
          <Image src={Ellipse} alt="EllipseColorMissed" 
          className= "w-[190px] h-[190px] lg:w-[231px] lg:h-[231px] 2xl:w-[346.48px] 2xl:h-[346.48px]  " />
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-contain bg-[url('/logos/MC.png')] 
          w-[130px] h-[130px] lg:w-[152.67px] lg:h-[152.67px] 2xl:w-[229px] 2xl:h-[229px] ">
          </div>
        </div>

        
        <div className="relative bg-[url('/shapes/ColorTextFrame.png')] bg-contain w-[210px] h-[70px] lg:w-[278.58px] lg:h-[93.13px] 2xl:w-[417.87px] 2xl:h-[139.7px]">
          <div className="flex items-center justify-center bg-[url('/shapes/TextFrame.png')] bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[200px] h-[60px] lg:w-[265.69px] lg:h-20 2xl:w-[398.54px] 2xl:h-[120px]">
              <p className="text-gameJam-yellow text-[24px] lg:text-4xl 2xl:text-[55px] font-PTGilroy-Bold ">Micro Club</p>
          </div>
        </div> 
        

      </div>
    </section>
  );
};

export default Partners;
