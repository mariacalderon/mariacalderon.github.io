import { useTranslation } from "react-i18next";
import ProjectDetails from "../components/ProjectDetails";
import ProjectHero from "../components/ProjectHero";

const AyobaMessaging = () => {

  const { t } = useTranslation();

  return (
    <div>
      <ProjectHero
        bkgColor='bg-ayoba-blue'
        titleKey='AYOBA.TITLE'
        subtitleKey='AYOBA.MESSAGING.SUBTITLE'
        heroImage='ayoba-messaging/hero.png'
      />
      <div className="py-40 mx-52">
        <ProjectDetails 
          projectTitle={t('AYOBA.MESSAGING.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.PROD_DESIGN_LEAD',
            'PROJECT_COMMON.ROLES.UXUI'
          ]}
          team={[
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.UX_RESEARCH'
            },
            {
              count: 5,
              role: 'PROJECT_COMMON.TEAM.UXUI_DESIGN'
            }
          ]}
          tools={[
            'Figma Jam',
            'Figma',
            'Userberry',
            'Miro',
            'Protopie'
          ]}
          timing={[
            {
              count: 4,
              timeUnit: 'PROJECT_COMMON.TIMING.MONTHS'
            },
            {
              count: 0,
              timeUnit: 'PROJECT_COMMON.TIMING.ITERATIONS'
            },
          ]}
          process={['audit', 'emphatize', 'specify', 'ideate', 'handoff', 'verify']}
        />
      </div>
    </div>
  )
}

export default AyobaMessaging;