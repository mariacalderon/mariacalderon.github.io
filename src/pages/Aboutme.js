import { useTranslation } from "react-i18next";
import { FormattingTranslation } from "../utils/translationHook";
import BulletList from "../components/BulletList";
import { SKILLS_KEYS, TOOLS } from "../utils/constants";

function Aboutme() {

  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center pt-72 pb-16 px-72 text-left gap-16">
        <div className="text-7xl font-bold">
          {t('ABOUTME.PAGE_TITLE')}
        </div>
        <div>
          <img className="w-full" src='/assets/imgs/about/portrait.png' alt="profile_pic" />
        </div>
        <div className="columns-2 gap-16 text-lg text-body">
          {FormattingTranslation('ABOUTME.DESCRIPTION')}
        </div>
      </div>
      <div className="w-screen bg-secondary flex flex-row py-16 px-72 gap-11">
        <div className="flex-2 font-bold text-3xl">
          {t('ABOUTME.SKILLS.TITLE')}
          <div className="border-b-2 border-body"></div>
          <div className="columns-2 font-normal text-body pt-6">
            <BulletList list={SKILLS_KEYS} />
          </div>
        </div>
        <div className="flex-1 font-bold text-3xl">
          {t('ABOUTME.TOOLS')}
          <div className="border-b-2 border-body"></div>
          <div className="font-normal text-body pt-6">
            <BulletList list={TOOLS} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Aboutme;