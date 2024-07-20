import { useTranslation } from "react-i18next";
import { FormattingTranslation } from "../utils/translationHook";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortfolioItem = (props) => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      className={`flex ${props.imageOnRight ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-16 cursor-pointer`}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.4 },
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, duration: 2 }}
      onClick={() => {
        navigate(props.path)
      }}
    >
      <div className="flex w-full max-w-72">
        <img src={props.image} alt={props.image_alt}/>
      </div>
      <div className="flex flex-col gap-12 w-full max-w-md">
        <div className="text-4xl font-bold">
          {t(props.titleKey)}
        </div>
        <div className="text-lg font-sans text-body">
          {FormattingTranslation(props.descriptionKey)}
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioItem;