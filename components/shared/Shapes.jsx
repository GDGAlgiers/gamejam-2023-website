import Image from "next/image";
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { useEffect } from "react";

function Shapes(){

  const animationRotate = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
      rotate: 90,
      transition: {
        duration: 1,
        x: 10,
      }
    },
  };

  useEffect(() => {
    const triangle2Animation = () => {
      return gsap.timeline({repeat: -1})
      .to('#triangle2', {scale: 2, x: 10, duration: 2, ease: 'linear', delay: 0})
      .to('#triangle2', {scale: 1, x: 0, duration: 2, delay: 0})
      .delay(0.5) //done
    }

    const middleTopSquareAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#middle-top-square', {rotate: 180, duration: 1, delay: 2.5})
      .to('#middle-top-square', {rotate: 240, duration: 1.1, delay: -0.1})
      .to('#middle-top-square', {rotate: 300, duration: 1.1, delay: -0.1})
      .to('#middle-top-square', {rotate: 360, duration: 1.1, delay: -0.1})
      .pause(0.3) //give the square some few time to finish the animation before resetting to initial position
      .restart() //done
    }

    const bottomRightSquareAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#bottom-right-square', {rotate: -180, duration: 1, delay: 1.5})
      .to('#bottom-right-square', {rotate: -120, duration: 1.1, delay: -0.1})
      .to('#bottom-right-square', {rotate: -60, duration: 1.1, delay: -0.1})
      .to('#bottom-right-square', {rotate: 0, duration: 1.1, delay: -0.1})
      .restart() //done
    }
    const topRightCrossAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#top-right-cross', {rotate: 180, duration: 3, delay: 0, ease: 'linear'})
      .to('#top-right-cross', {rotate: 0, duration: 6, delay: 0, ease: 'linear'})
    }

    const topLeftCrossAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#top-left-cross', {rotate: -180, duration: 3, delay: 0, ease: 'linear'})
      .to('#top-left-cross', {rotate: -360, duration: 6, delay: 0, ease: 'linear'})
      .restart();
    }

    const circlesAnimation = () => {
      const circlesIds = '#top-right-circle, #top-left-circle'
      gsap.timeline({repeat: -1})
      .to(circlesIds, {opacity: 0, duration: 1, delay: 4, ease: 'linear'})
      .to(circlesIds, {opacity: 0.4, duration: 1, delay: 0, ease: 'linear'})
      .to(circlesIds, {opacity: 0.2, duration: 2, delay: 0, ease: 'linear'})
      .to(circlesIds, {opacity: 0.3, duration: 4, delay: 0, ease: 'linear'})
      .to(circlesIds, {opacity: 1, duration: 1, delay: 0, ease: 'linear'})
    }

    const topRightRectangleAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#top-right-rectangle', {scale: 2.5, x: 5, y: 5, duration: 1, delay: 4, ease: 'linear'})
      //bounce effect to get bigger
      .to('#top-right-rectangle', {scale: 1.3, x: 2, y: 2, duration: 1, delay: 0, ease: 'linear'})
      .to('#top-right-rectangle', {scale: 1.8, x: 4, y: 4, duration: 1, delay: 0, ease: 'linear'})
      .to('#top-right-rectangle', {scale: 1.5, x: 3, y: 3, duration: 0.4, delay: 0, ease: 'linear'})
      .to('#top-right-rectangle', {scale: 0.7, x: -1, y: -1, duration: 1, delay: 2, ease: 'linear'})
      //move to small size
      .to('#top-right-rectangle', {scale: 0.7, x: -1, y: -1, duration: 1, delay: 2, ease: 'linear'})
      //bounce effect to get to normal size
      .to('#top-right-rectangle', {scale: 1.3, x: 0.5, y: 0.5, duration: 1, delay: 0, ease: 'linear'})
      .to('#top-right-rectangle', {scale: 0.85, x: -0.5, y: -0.5, duration: 1, delay: 0, ease: 'linear'})
      .to('#top-right-rectangle', {scale: 1, x: 0, y: 0, duration: 1, delay: 0, ease: 'linear'})
    }

    const bottomLeftRectangleAnimation = () => {
      gsap.timeline({repeat: -1})
      .to('#bottom-left-rectangle', {scale: 2.5, x: -5, y: 5, duration: 1, delay: 4, ease: 'linear'})
      //bounce effect to get bigger
      .to('#bottom-left-rectangle', {scale: 1.3, x: -2, y: 2, duration: 1, delay: 0, ease: 'linear'})
      .to('#bottom-left-rectangle', {scale: 1.8, x: -4, y: 4, duration: 1, delay: 0, ease: 'linear'})
      .to('#bottom-left-rectangle', {scale: 1.5, x: -3, y: 3, duration: 0.4, delay: 0, ease: 'linear'})
      .to('#bottom-left-rectangle', {scale: 0.7, x: 1, y: -1, duration: 1, delay: 2, ease: 'linear'})
      //move to small size
      .to('#bottom-left-rectangle', {scale: 0.7, x: 1, y: -1, duration: 1, delay: 2, ease: 'linear'})
      //bounce effect to get to normal size
      .to('#bottom-left-rectangle', {scale: 1.3, x: -0.5, y: 0.5, duration: 1, delay: 0, ease: 'linear'})
      .to('#bottom-left-rectangle', {scale: 0.85, x: 0.5, y: -0.5, duration: 1, delay: 0, ease: 'linear'})
      .to('#bottom-left-rectangle', {scale: 1, x: 0, y: 0, duration: 1, delay: 0, ease: 'linear'})
    }
    
    const animateShapes = () => {
      triangle2Animation();
      middleTopSquareAnimation();
      bottomRightSquareAnimation();
      topRightCrossAnimation();
      topLeftCrossAnimation();
      circlesAnimation();
      topRightRectangleAnimation();
      bottomLeftRectangleAnimation();
    }    

    // setTimeout(animateShapes, 2000);
    animateShapes()

  }, [])
  
  return (
    <div className="hidden md:flex">
      {/* Stars */}
      <div className="absolute top-6 right-4 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>

      <div className="absolute top-72 right-6 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>

      
      <motion.div
        animate={{scale: [1, 2], opacity: [0.3, 1]}}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', }}
        className="absolute top-24 right-1/3 z-10"
      >
        <Image src="/shapes/star.png" alt="shape" height={80} width={80} />
      </motion.div>
      
      
      <motion.div
        animate={{scale: [1, 2], opacity: [0.3, 1]}}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', }}
        className="absolute top-1/3 right-1/4 z-10"
      >
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </motion.div>

      <div className="absolute bottom-6 right-6 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 right-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 left-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-5 left-12 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute bottom-1/2 left-48 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-12 left-12 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>
      <div className="absolute top-1/4 left-16 z-10">
        <Image src="/shapes/star.png" alt="shape" height={69} width={69} />
      </div>

      {/* Rectangulars */}
      <div className="absolute top-[14%] left-1/2 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-90"
        />
      </div>
      
      <div id="top-right-rectangle" className="absolute top-1/3 right-32 lg:right-80 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-180"
        />
      </div>
      
      <div className="absolute top-1/2 left-12 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-45"
        />
      </div>
      <div id="bottom-left-rectangle" className="absolute top-3/4 lg:top-2/3 left-48 z-10">
        <Image
          src="/shapes/rectangular.png"
          alt="shape"
          height={27}
          width={18}
          className="rotate-90"
        />
      </div>

      {/* Triangles */}
      <motion.div
        initial="rotate"
        animate={{scale: [1, 1.5], opacity: [0.5, 0.8]}}
        variants={animationRotate}
        transition={{ duration: 2, ease: 'linear', repeat: Infinity, repeatType: 'reverse', repeatDelay: 0 }}
        className="absolute top-48 left-1/4 z-10"
      >
        <Image src="/shapes/triangle.png" alt="shape" height={28} width={26} />
      </motion.div>


      <motion.div
        initial="rotate"
        animate={{rotate: 360}}
        variants={animationRotate}
        transition={{ duration: 6, ease: 'linear', repeat: Infinity, repeatType: 'loop', repeatDelay: 0 }}
        className="absolute top-1/2 right-1/4  z-10"
      >
        <Image src="/shapes/triangle.png" alt="shape" height={28} width={28} />
      </motion.div>

      <div id="triangle2" className="absolute bottom-1/3 left-10 lg:left-1/4 z-10">
        <Image src="/shapes/triangle.png" alt="shape" height={40} width={37} className="rotate-45 scale-50"/>
      </div>

      {/* Squares */}
      <div id="middle-top-square" className="absolute top-[40%] left-1/2 z-10 lg:left-1/3">
        <Image src="/shapes/square.png" alt="shape" height={40} width={40} className="-rotate-90" />
      </div>

      <motion.div
        initial="rotate"
        animate={{rotate: 360}}
        variants={animationRotate}
        transition={{ duration: 2, ease: 'linear', repeat: Infinity, repeatType: 'loop', repeatDelay: 0 }}
        className="absolute top-1/2 left-1/4  z-10"
      >
        <Image src="/shapes/square.png" alt="shape" height={25} width={25} />
      </motion.div>

      <div id="bottom-right-square" className="absolute right-10 bottom-64 lg:bottom-12 lg:right-48 z-10">
        <Image src="/shapes/square.png" alt="shape" height={25} width={25} />
      </div>

      {/* Circles */}
      <motion.div
        initial="rotate"
        animate={{opacity: [0, 1]}}
        variants={animationRotate}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', }}
        className="absolute bottom-[20%] right-[15%] lg:bottom-1/4 lg:right-96 z-10"
      >
        <Image src="/shapes/circle.png" alt="shape" height={15} width={15} />
      </motion.div>

      <div id="top-right-circle" className="absolute top-1/4 right-64 z-10">
        <Image src="/shapes/circle.png" alt="shape" height={30} width={30} />
      </div>

      <div id="top-left-circle" className="absolute top-64 left-48 z-10">
        <Image src="/shapes/circle.png" alt="shape" height={20} width={20} />
      </div>
      
      

      {/* Crosses */}
      <div id="top-right-cross" className="absolute top-1/3 right-1/3 z-10">
        <Image src="/shapes/cross.png" alt="shape" height={20} width={20} className="rotate-90" />
      </div>

      <div id="top-left-cross" className="absolute top-1/3 left-64 z-10">
        <Image src="/shapes/cross.png" alt="shape" height={18} width={18} />
      </div>
    </div>
  );
};

export default Shapes;
