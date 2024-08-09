import { useTranslation } from "react-i18next";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectHero from "../components/ProjectHero";
import ProjectDetails from "../components/ProjectDetails";
import ProjectLink from "../components/ProjectLink";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import { AYOBA_LINK, BLUE_H3, H1, H2, H2_UNDERLINE, H4 } from "../utils/constants";
import ProjectFooter from "../components/ProjectFooter";
import ProjectBubble from "../components/ProjectBubble";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Password from "./Password";

const AyobaGames = () => {

  const { t } = useTranslation();
  const location = useLocation();

  const [isAccessible, setIsAccessible] = useState(false);

  const imgPathBase = "/assets/imgs/ayoba-games/";

  const renderAyobaGames = () => {
    return (
      <div className="bg-white">
        <ProjectHero 
          bkgColor='bg-ayoba-red'
          titleKey='AYOBA.TITLE'
          subtitleKey='AYOBA.GAMES.SUBTITLE'
          heroImage='ayoba-games/hero.png'
        />
        <ProjectContentWithMargins styling='pt-40 sm:pt-16'>
          <ProjectDetails 
            projectTitle={t('AYOBA.PROFILE.SUBTITLE')}
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
                count: 1,
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
                count: 2,
                timeUnit: 'PROJECT_COMMON.TIMING.WEEKS'
              },
              {
                count: 0,
                timeUnit: 'PROJECT_COMMON.TIMING.ITERATIONS'
              },
            ]}
            process={['emphatize', 'specify', 'ideate', 'handoff', 'verify']}
          />
          <div>
            <ProjectLink url={AYOBA_LINK} />
            <ProjectSectionTitle type={BLUE_H3} title='AYOBA.OVERVIEW.TITLE' />
            <ProjectBodyText text='AYOBA.OVERVIEW.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.GAMES.CONTEXT.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.CONTEXT.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.GAMES.CHALLENGE.TITLE' />
            <ProjectSectionTitle type={H2} title='AYOBA.GAMES.CHALLENGE.PRIMARY.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.CHALLENGE.PRIMARY.DESCRIPTION' />
            <ProjectSectionTitle type={H2} title='AYOBA.GAMES.CHALLENGE.TEAM.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.CHALLENGE.TEAM.DESCRIPTION' />
            <ProjectSectionTitle type={H2} title='AYOBA.GAMES.CHALLENGE.PLATFORMS.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.CHALLENGE.PLATFORMS.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.GAMES.AUDIT.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.AUDIT.DESCRIPTION' />
            <img className="w-full pt-4" src={`${imgPathBase}audit.png`} alt="audit" />
            <ProjectBubble
              title='AYOBA.GAMES.AUDIT.INSIGHTS.TITLE'
            >
              <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.DESCRIPTION' />
              <div className="flex flex-col gap-4 pt-4">
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.GAMES.AUDIT.INSIGHTS.HIERARCHY.TITLE' />
                  <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.HIERARCHY.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.GAMES.AUDIT.INSIGHTS.APPEAL.TITLE' />
                  <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.APPEAL.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.GAMES.AUDIT.INSIGHTS.NAVIGATION.TITLE' />
                  <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.NAVIGATION.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.GAMES.AUDIT.INSIGHTS.ACCESSIBILITY.TITLE' />
                  <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.ACCESSIBILITY.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.GAMES.AUDIT.INSIGHTS.PERMISSION.TITLE' />
                  <ProjectBodyText text='AYOBA.GAMES.AUDIT.INSIGHTS.PERMISSION.DESC' />
                </div>
              </div>
            </ProjectBubble>
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.GAMES.UX_RESEARCH.TITLE' />
            <ProjectBodyText text='AYOBA.GAMES.UX_RESEARCH.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.GAMES.DESIGN.TITLE' />
            <div className="flex flex-row justify-between pb-20 sm:flex-col sm:gap-4">
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-1.png`} alt="games-design-home" />
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-2.png`} alt="games-design-detail" />
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-3.png`} alt="games-design-categories" />
            </div>
          </div>
        </ProjectContentWithMargins>
        <div className="bg-light-gray px-16 pt-20 pb-16 sm:px-8 sm:pt-10 flex flex-col gap-16 sm:gap-8">
          <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.GAMES.DESIGN.GAMES_PLATFORM' variables={{platform: 'AND'}} />
          <img className="w-full" src={`${imgPathBase}play-games-android.png`} alt="play-games-flows" />
          <img className="w-full" src={`${imgPathBase}my-games-home-android.png`} alt="my-games-home-flows" />
          <img className="w-full" src={`${imgPathBase}more-info-flows-android.png`} alt="more-flows" />
          <img className="w-full" src={`${imgPathBase}categories-android.png`} alt="categories-flows" />
          <img className="w-full" src={`${imgPathBase}my-games-android.png`} alt="my-games-flows" />
          <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.GAMES.DESIGN.GAMES_PLATFORM' variables={{platform: 'iOS'}} />
          <img className="w-full" src={`${imgPathBase}play-games-ios.png`} alt="play-games-flows" />
          <img className="w-full" src={`${imgPathBase}categories-ios.png`} alt="categories-flows" />
          <img className="w-full" src={`${imgPathBase}my-games-ios.png`} alt="my-games-flows" />
        </div>
        <ProjectFooter />
      </div>
    )
  }

  useEffect(() => {
    const prevLocation = location.state?.from?.pathname;
    if (prevLocation === '/ayoba') setIsAccessible(true);
    window.history.replaceState({}, '');
  }, [setIsAccessible, location])
  
  return (
    <div>
      {
        isAccessible ?
        renderAyobaGames() :
        <div className="py-40 px-60 flex flex-col gap-20 sm:py-20 sm:px-8 sm:pt-32">
          <Password onAuthenticated={()=>{ setIsAccessible(true) }} />
        </div>
      }
    </div>
  )
}

export default AyobaGames;