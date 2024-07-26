import HeaderSection from "./HeaderSection";
import { MCG_LOGO, NAV_SECTIONS, PROJECTS } from "../utils/constants";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";
import ConfettiExplosion from 'react-confetti-explosion';

import { ReactComponent as AyobaLogo } from "../assets/icons/ayoba.svg";
import { ReactComponent as Newitts } from "../assets/icons/newitts.svg";

const Header = () => {

  const location = useLocation();
  const animationControls = useAnimationControls();

  const [showConfetti, setShowConfetti] = useState(false);

  const checkIfIsProjectPath = (currentPath) => {
    return PROJECTS.some(project => currentPath.includes(project));
  };

  const checkHeaderLogo = useCallback(() => {
    const currentPath = window.location.pathname;
    if (checkIfIsProjectPath(currentPath)) {
      const projectName = currentPath.split('/')[1];
      switch(projectName) {
        case 'ayoba': 
          return <AyobaLogo />
        case 'newitts':
          return <Newitts className="w-4/5" />
        default:
          return MCG_LOGO;
      }
    } else {
      return MCG_LOGO;
    }
  }, []);

  const variants = {
    still: { y: 0 },
    bouncing: (i) => ({
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
      }
    })
  };

  const onLogoClick = () => {
    if (!showConfetti) {
      animationControls.start('bouncing');
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    checkHeaderLogo();
  }, [location, checkHeaderLogo]);

  return (
    <div className="fixed top-8 left-12 right-12 bg-white max-h-16 h-fit py-5 px-7 rounded-lg shadow-lg flex flex-row justify-between items-center z-40 sm:top-4 sm:left-6 sm:right-6">
      <motion.div
        animate={animationControls}
        variants={variants}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.5, repeat: 3, repeatType: 'mirror' }}
        className="font-bold cursor-pointer h-fit"
        onClick={() => onLogoClick()}
      >
        {showConfetti && 
          <div className="pl-12">
            <ConfettiExplosion onComplete={() => setShowConfetti(false)} zIndex={50} force={0.4} particleCount={30} />
          </div>}
        {checkHeaderLogo()}
      </motion.div>
      <div className="flex flex-row">
        {
          NAV_SECTIONS.map((section) => {
            return (
              <HeaderSection key={section.id} title={section.title} url={section.url} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Header;