import Image from "next/image";
import Ellipse from "../../public/images/Sponsors/Ellipse.png"
const ImgContainer = ({url}) => {

    return ( 
        <>
        <div  className={`relative w-[167.74px] h-[167.74px] 2xl:w-[251.61px] 2xl:h-[251.61px] hidden lg:block `} >
        <Image  alt="Ellipse"  src={Ellipse} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  2xl:w-[251.61px] 2xl:h-[251.61px] "  />
        <div className="bg-white absolute w-[143.13px] h-[138.53px]  top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-full flex justify-center items-center 2xl:w-[214.69px] 2xl:h-[207.79px]  ">
            <Image  alt=" logo" src={url} className=" 2xl:w-[126px] 2xl:h-[126px] " />
        </div>
        </div>


         <div  className={`relative w-[184.73px] h-[184.73px] block lg:hidden smmin:h-[177px] smmin:w-[177px]  `} >
        <Image  alt="Ellipse"  src={Ellipse} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[184.73px] h-[184.73px] smmin:h-[177px] smmin:w-[177px] "  />
        <div className="bg-white absolute w-[157.62px] h-[152.56px] smmin:w-[150px] smmin:h-[145px]  top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-full flex justify-center items-center ">
            <Image  alt=" logo" src={url} className=" w-[93.02px] h-[87.81px] smmin:w-[86px] smmin:h-[80px] " />
        </div>
        </div> 
        </>
       
     );
}
 
export default ImgContainer;