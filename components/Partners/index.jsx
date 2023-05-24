import SectionTitle from "../shared/SectionTitle";

const Partners = () => {
  return (
    <section>
      <SectionTitle class="my-8" title="Partners" />
      <div class=" flex flex-col items-center gap-10 my-20">

        <div class="relative" >
          <img src={'/shapes/EllipseColor.png'} alt="EllipseColorMissed" 
          class= " sm:w-[239.24px] sm:h-[239.24px] lg:w-[231px] lg:h-[231px] 2xl:w-[346.48px] 2xl:h-[346.48px]  " />
          <div class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-contain bg-[url('/logos/MC.png')] 
          sm:w-[158.12px] sm:h-[158.12px] lg:w-[152.67px] lg:h-[152.67px] 2xl:w-[229px] 2xl:h-[229px] ">
          </div>
        </div>

        
        <div class="relative bg-[url('/shapes/ColorTextFrame.png')] bg-contain sm:w-[288.53px] sm:h-[96.46px] lg:w-[278.58px] lg:h-[93.13px] 2xl:w-[417.87px] 2xl:h-[139.7px]">
          <div class="flex items-center justify-center bg-[url('/shapes/TextFrame.png')] bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          sm:w-[275.18px] sm:h-[83.11px] lg:w-[265.69px] lg:h-20 2xl:w-[398.54px] 2xl:h-[120px]">
              <p class="text-gameJam-yellow sm:text-[38px] lg:text-4xl 2xl:text-[55px] font-PTGilroy-Bold ">Micro Club</p>
          </div>
        </div> 
        

      </div>
    </section>
  );
};

export default Partners;
