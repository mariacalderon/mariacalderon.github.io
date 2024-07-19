import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className="relative flex flex-row w-screen h-[680px] bg-primary">
      <div className="absolute right-0 z-0">
        <img className="object-fit" src="/assets/imgs/homepage/hero-image.png" alt='Maria' />
      </div>
      <div className="flex flex-col gap-3 z-10 pt-36 px-12 pb-12">
        <div className="font-medium text-8xl">
          {t('PORTFOLIO.HERO.TITLE')}
        </div>
        <div className="font-medium text-6xl text-hero-title-70">
          {t('PORTFOLIO.HERO.TEAMPLAYER')}
        </div>
        <div className="font-medium text-6xl text-hero-title-70">
          {t('PORTFOLIO.HERO.ADVENTUROUS')}
        </div>
        <div className="font-medium text-5xl text-hero-title-60">
          {t('PORTFOLIO.HERO.CATLOVER')}
        </div>
        <div className="font-medium text-5xl text-hero-title-50">
          {t('PORTFOLIO.HERO.CURIOUS')}
        </div>
        <div className="font-medium text-5xl text-hero-title-40">
          {t('PORTFOLIO.HERO.HAPPY')}
        </div>
        <div className="font-medium text-5xl text-hero-title-30">
          {t('PORTFOLIO.HERO.BRAVE')}
        </div>
      </div>
    </div>
  )
};

export default Hero;