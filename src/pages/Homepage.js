import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import ImageTextItem from "../components/ImageTextItem";
import { FormattingTranslation } from "../utils/translationHook";

function Homepage() {

  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <div className="py-40 px-60 flex flex-col gap-20 sm:py-20 sm:px-8">
        <ImageTextItem
          imageOnRight={false}
          image='/assets/imgs/homepage/ayoba-redesign_messaging.png'
          image_alt='ayoba_southafrica'
          path='/ayoba'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AYOBA_GENERAL.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AYOBA_GENERAL.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={true}
          image='/assets/imgs/homepage/newitts-ecommerce.png'
          image_alt='newitts_ecommerce'
          path='/newitts'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.NEWITTS_ECOMMERCE.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.NEWITTS_ECOMMERCE.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={false}
          image='/assets/imgs/homepage/optica-universitaria.png'
          image_alt='try-on-glasses'
          path='/optica-universitaria'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.OPTICA.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.OPTICA.DESCRIPTION')}
          </div>
        </ImageTextItem>
      </div>
    </div>
  )
};

export default Homepage;