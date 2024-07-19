import Hero from "../components/Hero";
import PortfolioItem from "../components/PortfolioItem";

function Homepage() {
  return (
    <div>
      <Hero />
      <div className="py-40 px-60 flex flex-col gap-20">
        <PortfolioItem
          imageOnRight={false}
          image='/assets/imgs/homepage/ayoba-redesign_messaging.png'
          image_alt='ayoba_messaging'
          titleKey='PORTFOLIO.AYOBA_REDESIGN.TITLE'
          descriptionKey='PORTFOLIO.AYOBA_REDESIGN.DESCRIPTION'
        />
        <PortfolioItem
          imageOnRight={true}
          image='/assets/imgs/homepage/ayoba-userprofile.png'
          image_alt='ayoba_userprofile'
          titleKey='PORTFOLIO.AYOBA_USERPROFILE.TITLE'
          descriptionKey='PORTFOLIO.AYOBA_USERPROFILE.DESCRIPTION'
        />
        <PortfolioItem
          imageOnRight={false}
          image='/assets/imgs/homepage/ayoba-games.png'
          image_alt='ayoba_games'
          titleKey='PORTFOLIO.AYOBA_GAMES.TITLE'
          descriptionKey='PORTFOLIO.AYOBA_GAMES.DESCRIPTION'
        />
        <PortfolioItem
          imageOnRight={true}
          image='/assets/imgs/homepage/ayoba-music.png'
          image_alt='ayoba_music'
          titleKey='PORTFOLIO.AYOBA_MUSIC.TITLE'
          descriptionKey='PORTFOLIO.AYOBA_MUSIC.DESCRIPTION'
        />
        <PortfolioItem
          imageOnRight={false}
          image='/assets/imgs/homepage/newitts-ecommerce.png'
          image_alt='newitts_ecommerce'
          titleKey='PORTFOLIO.NEWITTS_ECOMMERCE.TITLE'
          descriptionKey='PORTFOLIO.NEWITTS_ECOMMERCE.DESCRIPTION'
        />
      </div>
    </div>
  )
};

export default Homepage;