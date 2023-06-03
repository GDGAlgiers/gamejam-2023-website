import Image from "next/image";
import Ellipse from "../../public/images/Sponsors/Ellipse.png"
const ImgContainer = ({url}) => {

    return ( 
        <div  className={`relative w-[167.74px] h-[167.74px]`} >
        <Image  alt="Ellipse"  src={Ellipse} className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"  />
        <div className="bg-white absolute w-[143.13px] h-[138.53px]  top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-full flex justify-center items-center ">
            <Image  alt="Gituhb logo" src={url} />
        </div>
        </div>
     );
}
 
export default ImgContainer;