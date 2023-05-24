import SectionTitle from "../shared/SectionTitle";

const Partners = () => {
  return (
    <section>
      <SectionTitle class="my-8" title="Partners" />
      <div class=" flex flex-col items-center gap-10 my-20">

        <div class="relative" >
          <img src={'/shapes/EllipseColor.png'} alt="EllipseColorMissed" 
          class= " w-[231px] h-[231px]" />
          <div class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-contain bg-[url('/logos/MC.png')] w-[152.67px] h-[152.67px]">
          </div>
        </div>

        
        <div class="relative w-[278.58px] h-[93.13px] bg-[url('/shapes/ColorTextFrame.png')] bg-contain">
          <div class="flex items-center justify-center w-[265.69px] h-20 bg-[url('/shapes/TextFrame.png')] bg-cover
                      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p class="text-gameJam-yellow text-4xl font-PTGilroy-Bold ">Micro Club</p>
          </div>
        </div> 
        

      </div>
    </section>
  );
};

export default Partners;
