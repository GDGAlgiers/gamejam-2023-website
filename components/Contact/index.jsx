import SectionTitle from "../shared/SectionTitle";
import Footer from "../Footer";
import Twitter from '../../public/images/ContactImages/Twitter.png'
import Facebook from '../../public/images/ContactImages/Facebook.png'
import Instagram from '../../public/images/ContactImages/Instagram.png'
import Linkedin from '../../public/images/ContactImages/Linkedin.png'
import Link from 'next/link'
import Under from '../../public/images/ContactImages/UnderIcones.png'
import UnderR from '../../public/images/ContactImages/UnderIconesRes.png'
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Contact = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    // rootMargin: '0px 0px -32% 0px',
    threshold: 0.42,
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const animationVariantsTitle = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <>
              <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariantsTitle}
               transition={{ duration: 0.8}}
              >
                <section id="contact">
                  <SectionTitle title="Contact" />
                </section>
              </motion.div>
    
    <motion.div
               ref={ref}
               initial="hidden"
               animate={inView ? 'visible' : 'hidden'}
               variants={animationVariants}
               transition={{ duration: 0.8}}
            >
            <div className="flex flex-col justify-center items-center h-[55vh] lg:w-[1240px] 2xl:w-[1900px] mb-32 md:mb-32 lg:mb-64">
              <h1 className="text-white font-PTGilroy-Bold text-2xl  lg:text-3xl w-full text-center mb-2"> Still Have a Question ? </h1>
              <div className="lg:flex items-center justify-evenly w-[60%] mt-7 hidden">
                <Link href="https://twitter.com/GDG_Algiers">
                  <Image  alt="Twitter Icone" src={Twitter} className="cursor-pointer w-[68px] h-[54px] " ></Image>
                </Link>
                <Link href="https://www.facebook.com/GDGAlgiers">
                  <Image  alt="Facebook Icone" src={Facebook} className="cursor-pointer w-[53px] h-[49px] " ></Image>
                </Link>
                <Link href="https://www.instagram.com/gdg_algiers/">
                <Image  alt="Instagram Icone" src={Instagram} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
                </Link>
                <Link href="https://www.linkedin.com/company/gdg-algiers/">
                <Image  alt="Linkedin Icone" src={Linkedin} className="cursor-pointer  w-[53px] h-[49px]" ></Image>
                </Link>
              </div>
              <Image alt="UnderIcones" src={Under} className="lg:translate-x-[10px] w-[60%] hidden lg:block" ></Image>
              <div className="lg:hidden  flex items-center justify-evenly w-full mt-12 ">
              <Link href="https://twitter.com/GDG_Algiers">
                  <Image  alt="Twitter Icone" src={Twitter} className="cursor-pointer w-[46px]" ></Image>
                </Link>
                <Link href="https://www.facebook.com/GDGAlgiers">
                  <Image  alt="Facebook Icone" src={Facebook} className="cursor-pointer w-[46px]" ></Image>
                </Link>
              </div>
              <Image alt="UnderIcones" src={UnderR} className="translate-x-[-15px] block lg:hidden" ></Image>
              
              <div className="lg:hidden justify-evenly w-full flex items-center mt-10 ">
              <Link href="https://www.instagram.com/gdg_algiers/">
                <Image  alt="Instagram Icone" src={Instagram} className="cursor-pointer  w-[46px] " ></Image>
                </Link>
                <Link href="https://www.linkedin.com/company/gdg-algiers/">
                <Image  alt="Linkedin Icone" src={Linkedin} className="cursor-pointer  w-[46px] " ></Image>
                </Link>
              </div>
          <Image alt="UnderIcones" src={UnderR} className="translate-x-[-15px] block lg:hidden " ></Image>  
      </div>
    </motion.div>
    </>
  );
};

export default Contact;
