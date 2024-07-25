import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProjectHero = (props) => {

  const { t } = useTranslation();
  
  return (
    <div className={`relative flex flex-row w-full h-[680px] ${props.bkgColor}`}>
      <div className="absolute right-0 z-0">
        <img className="object-fit h-[680px] sm:w-full" src={`/assets/imgs/${props.heroImage}`} alt={`${t(props.subtitle)}-hero`} />
      </div>
      <div className="flex flex-col w-screen gap-3 z-10 pt-80 px-12 pb-12 sm:pt-96">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 0.5}} className={`font-bold text-7xl ${props.titleColor ?? 'text-white'}`}>
          {t(props.titleKey)}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.5, delay: 1}} className={`font-medium text-6xl pt-12 ${props.titleColor ?? 'text-white'}`}>
          {t(props.subtitleKey)}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectHero;