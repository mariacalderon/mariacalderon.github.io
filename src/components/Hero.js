import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className="relative flex flex-row w-full h-[680px] bg-primary sm:flex-col">
      <div className="absolute right-0 z-0 sm:static">
        <img className="object-fit" src="/assets/imgs/homepage/hero-image.png" alt='Maria' />
      </div>
      <div className="flex flex-col gap-3 z-10 pt-36 px-12 pb-12 sm:px-6 sm:pt-4 sm:gap-2">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 0.5}} className="font-medium text-8xl sm:text-5xl">
          {t('PORTFOLIO.HERO.TITLE')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 1}} className="font-medium text-6xl text-hero-title-70 sm:text-3xl">
          {t('PORTFOLIO.HERO.TEAMPLAYER')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 1.5}} className="font-medium text-6xl text-hero-title-70 sm:text-3xl">
          {t('PORTFOLIO.HERO.ADVENTUROUS')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 2}} className="font-medium text-5xl text-hero-title-60 sm:text-2xl">
          {t('PORTFOLIO.HERO.CATLOVER')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 2.5}} className="font-medium text-5xl text-hero-title-50 sm:text-2xl">
          {t('PORTFOLIO.HERO.CURIOUS')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 3}} className="font-medium text-5xl text-hero-title-40 sm:text-2xl">
          {t('PORTFOLIO.HERO.HAPPY')}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 3.5}} className="font-medium text-5xl text-hero-title-30 sm:text-2xl">
          {t('PORTFOLIO.HERO.BRAVE')}
        </motion.div>
      </div>
    </div>
  )
};

export default Hero;