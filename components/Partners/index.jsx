import SectionTitle from "../shared/SectionTitle";

const Partners = () => {
  return (
    <section>
      <SectionTitle class="my-8" title="Partners" />
      <div class=" flex flex-col items-center gap-10 my-20">

        <div class="relative" >
          <img src={'/shapes/EllipseColor.png'} alt="EllipseColorMissed" 
          class= " w-[231px] h-[231px] z-10 " />
          <div class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <img src={'/logos/MC.png'} alt="LogoMCMissed" 
            class= "  w-[152.67px] h-[152.67px]  z-20 " />
          </div>
        </div>

        <div class="relative bg-[url('/shapes/ColorTextFrame.png')] w-[278.58px] h-[93.13px] ">
          <div class="absolute bg-[url('/shapes/TextFrame.png')] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[265.69px] h-[80.25px]">     
            <p class="absolute text-gameJam-yellow text-4xl font-PTGilroy-Bold top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2">Micro Club</p>
          </div>
        </div>



      
   

      </div>
    </section>
  );
};

export default Partners;
