import SectionTitle from "../shared/SectionTitle";
import Twitter from '../../public/images/ContactImages/Twitter.png'
import Facebook from '../../public/images/ContactImages/Facebook.png'
import Instagram from '../../public/images/ContactImages/Instagram.png'
import Linkedin from '../../public/images/ContactImages/Linkedin.png'
import Link from 'next/link'
import Under from '../../public/images/ContactImages/UnderIcones.png'
import UnderR from '../../public/images/ContactImages/UnderIconesRes.png'
import Image from "next/image";
const Contact = () => {
  return (
    <>
    <section>
      <SectionTitle title="Contact" />
    </section>
    <div className="flex flex-col justify-center items-center h-[55vh] ">
    <h1 className="text-white font-PTGilroy-Bold text-3xl w-full text-center"> Still Have a Question ? </h1>
    <div className="lg:flex items-center justify-evenly w-full mt-7 hidden">
    <Image  alt="Twitter Icone" src={Twitter} className="cursor-pointer w-[68px] h-[54px] " ></Image>
     <Image  alt="Twitter Icone" src={Facebook} className="cursor-pointer w-[53px] h-[49px] " ></Image>
     <Image  alt="Twitter Icone" src={Instagram} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
     <Image  alt="Twitter Icone" src={Linkedin} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
    </div>
    <Image alt="UnderIcones" src={Under} className="lg:translate-x-[10px] hidden lg:block" ></Image>
    <div className="lg:hidden  flex items-center justify-evenly w-full mt-12 ">
    <Image  alt="Twitter Icone" src={Twitter} className="cursor-pointer w-[68px] h-[54px] " ></Image>
    <Image  alt="Twitter Icone" src={Facebook} className="cursor-pointer w-[53px] h-[49px] " ></Image>
    </div>
    <Image alt="UnderIcones" src={UnderR} className="translate-x-[-15px] block lg:hidden" ></Image>
    
    <div className="lg:hidden justify-evenly w-full flex items-center mt-10 ">
    <Image  alt="Twitter Icone" src={Instagram} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
     <Image  alt="Twitter Icone" src={Linkedin} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
    </div>
        <Image alt="UnderIcones" src={UnderR} className="translate-x-[-15px] block lg:hidden " ></Image>  
    </div>
    </>
  );
};

export default Contact;
