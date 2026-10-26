import { useTranslation } from "react-i18next";
import ImageTextItem from "../components/ImageTextItem";
import { FormattingTranslation } from "../utils/translationHook";

function AvorisGeneral() {

  const { t } = useTranslation();

  const renderAvorisProjects = () => {
    return (
      <div className="flex flex-col gap-32 sm:gap-20">
        <ImageTextItem
          imageOnRight={false}
          image='/assets/imgs/homepage/avoris-travel.png'
          image_alt='avoris_design_system'
          path='/avoris/design-system'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AVORIS_DS.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AVORIS_DS.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={true}
          image='/assets/imgs/avoris-flights/flights-cover.png'
          image_alt='avoris_flights'
          animated={false}
        >
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full bg-avoris-yellow px-4 py-1 text-sm font-bold uppercase tracking-widest text-black">
              {t('PORTFOLIO.AVORIS_FLIGHTS.SOON')}
            </span>
            <div className="text-4xl font-bold">
              {t('PORTFOLIO.AVORIS_FLIGHTS.TITLE')}
            </div>
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AVORIS_FLIGHTS.DESCRIPTION')}
          </div>
        </ImageTextItem>
      </div>
    )
  }

  return (
    <div className="pt-52 pb-20 px-60 flex flex-col gap-20 sm:py-20 sm:px-8 sm:pt-32">
      {renderAvorisProjects()}
    </div>
  )
}

export default AvorisGeneral;
