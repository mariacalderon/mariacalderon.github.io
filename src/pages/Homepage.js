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
          image_alt='ayoba_messaging'
          path='/ayoba/messaging'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AYOBA_REDESIGN.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AYOBA_REDESIGN.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={true}
          image='/assets/imgs/homepage/ayoba-userprofile.png'
          image_alt='ayoba_userprofile'
          path='/ayoba/profile'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AYOBA_USERPROFILE.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AYOBA_USERPROFILE.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={false}
          image='/assets/imgs/homepage/ayoba-games.png'
          image_alt='ayoba_games'
          path='/ayoba/games'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AYOBA_GAMES.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AYOBA_GAMES.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={true}
          image='/assets/imgs/homepage/ayoba-music.png'
          image_alt='ayoba_music'
          path='/ayoba'
          animated={true}
        >
          <div className="text-4xl font-bold">
            {t('PORTFOLIO.AYOBA_MUSIC.TITLE')}
          </div>
          <div className="text-lg font-sans text-body">
            {FormattingTranslation('PORTFOLIO.AYOBA_MUSIC.DESCRIPTION')}
          </div>
        </ImageTextItem>
        <ImageTextItem
          imageOnRight={false}
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
      </div>
    </div>
  )
};

export default Homepage;