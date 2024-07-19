import { useTranslation } from "react-i18next";
import { FormattingTranslation } from "../utils/translationHook";

const PortfolioItem = (props) => {

  const { t } = useTranslation();

  return (
    <div className={`flex ${props.imageOnRight ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-16 cursor-pointer`}>
      <div className="flex w-full max-w-72">
        <img src={props.image} alt={props.image_alt}/>
      </div>
      <div className="flex flex-col gap-12 w-full max-w-md">
        <div className="text-4xl font-bold">
          {t(props.titleKey)}
        </div>
        <div className="text-lg font-sans">
          {FormattingTranslation(props.descriptionKey)}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;