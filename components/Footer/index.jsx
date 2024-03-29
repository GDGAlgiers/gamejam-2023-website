import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    // rootMargin: '0px 0px 0px 0px',
    threshold: 0.3,
    root: null,
    initialInView: true,
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.8 }}
      className="h-fit absolute bottom-0 -translate-y-6 md:-translate-y-16 xl:-translate-y-24 left-0 right-0 mx-auto"
    >
      <div className="text-center text-xl sm:text-2xl text-white font-PTGilroy-light bg-green-4000">
        Made with{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="px-2 text-2xl sm:text-3xl md:text-4xl"
        />{" "}
        by GDG Algiers
      </div>
    </motion.div>
  );
};

export default Footer;
