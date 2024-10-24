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
import BulletList from "../components/BulletList";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Password from "./Password";

const AyobaMusic = () => {

  const { t } = useTranslation();
  // const location = useLocation();

  // const [isAccessible, setIsAccessible] = useState(false);

  const imgPathBase = "/assets/imgs/ayoba-music/";

  const renderAyobaMusic = () => {
    return (
      <div className="bg-white">
        <ProjectHero 
          bkgColor='bg-ayoba-purple'
          titleKey='AYOBA.TITLE'
          subtitleKey='AYOBA.MUSIC.SUBTITLE'
          heroImage='ayoba-music/hero.png'
        />
        <ProjectContentWithMargins styling='pt-40 sm:pt-16'>
          <ProjectDetails 
            projectTitle={t('AYOBA.PROFILE.SUBTITLE')}
            roles={[
              'PROJECT_COMMON.ROLES.UXUI'
            ]}
            team={[
              {
                count: 1,
                role: 'PROJECT_COMMON.TEAM.UX_RESEARCH'
              },
              {
                count: 2,
                role: 'PROJECT_COMMON.TEAM.UXUI_DESIGN'
              }
            ]}
            tools={[
              'Figma Jam',
              'Figma',
              'Miro',
              'Maze',
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
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.CONTEXT.TITLE' />
            <ProjectBodyText text='AYOBA.MUSIC.CONTEXT.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.CHALLENGE.TITLE' />
            <div className="flex flex-col gap-4">
              <div>
                <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.CHALLENGE.PRIMARY.TITLE' />
                <ProjectBodyText text='AYOBA.MUSIC.CHALLENGE.PRIMARY.DESCRIPTION' />
              </div>
              <div>
                <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.CHALLENGE.TEAM.TITLE' />
                <ProjectBodyText text='AYOBA.MUSIC.CHALLENGE.TEAM.DESCRIPTION' />
              </div>
              <div>
                <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.CHALLENGE.ACCESSIBILITY.TITLE' />
                <ProjectBodyText text='AYOBA.MUSIC.CHALLENGE.ACCESSIBILITY.DESCRIPTION' />
              </div>
              <div>
                <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.CHALLENGE.PLATFORMS.TITLE' />
                <ProjectBodyText text='AYOBA.MUSIC.CHALLENGE.PLATFORMS.DESCRIPTION' />
              </div>
            </div>
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.BENCHMARK.TITLE' />
            <img className="w-full" src={`${imgPathBase}benchmark.png`} alt="benchmark" />
            <ProjectBubble
              title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.TITLE'
            >
              <div className="flex flex-col gap-4">
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.CONTENT.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.CONTENT.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.PERSONALIZATION.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.PERSONALIZATION.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.COLLECTIONS.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.COLLECTIONS.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.UI.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.UI.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.MONETIZATION.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.MONETIZATION.DESC' />
                </div>
                <div>
                  <ProjectSectionTitle type={H4} title='AYOBA.MUSIC.BENCHMARK.INSIGHTS.OFFLINE.TITLE' />
                  <ProjectBodyText text='AYOBA.MUSIC.BENCHMARK.INSIGHTS.OFFLINE.DESC' />
                </div>
              </div>
            </ProjectBubble>
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.UX_RESEARCH.TITLE' />
            <ProjectBodyText text='AYOBA.MUSIC.UX_RESEARCH.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.SURVEYS.TITLE' />
            <div className="flex flex-col gap-4">
              <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.SURVEYS.DEMOGRAPHICS.TITLE' />
              <BulletList
                list={[
                  'AYOBA.MUSIC.SURVEYS.DEMOGRAPHICS.DESC_1',
                  'AYOBA.MUSIC.SURVEYS.DEMOGRAPHICS.DESC_2'
                ]}
              />
              <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.SURVEYS.AWARENESS.TITLE' />
              <BulletList
                list={[
                  'AYOBA.MUSIC.SURVEYS.AWARENESS.DESC_1',
                  'AYOBA.MUSIC.SURVEYS.AWARENESS.DESC_2',
                  'AYOBA.MUSIC.SURVEYS.AWARENESS.DESC_3'
                ]}
              />
              <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.SURVEYS.CONTENT.TITLE' />
              <BulletList
                list={[
                  'AYOBA.MUSIC.SURVEYS.CONTENT.DESC_1',
                  'AYOBA.MUSIC.SURVEYS.CONTENT.DESC_2'
                ]}
              />
              <ProjectSectionTitle type={H2} title='AYOBA.MUSIC.SURVEYS.LOCAL_CONTENT.TITLE' />
              <BulletList
                list={[
                  'AYOBA.MUSIC.SURVEYS.LOCAL_CONTENT.DESC_1',
                  'AYOBA.MUSIC.SURVEYS.LOCAL_CONTENT.DESC_2'
                ]}
              />
            </div>
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.PODCAST_TOPICS.TITLE' />
            <img className="w-full" src={`${imgPathBase}podcast-topics.png`} alt="podcast-topics" />
          </div>
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.WHY_PODCASTS.TITLE' />
            <ProjectBodyText text='AYOBA.MUSIC.WHY_PODCASTS.DESCRIPTION' />
            <img className="w-full" src={`${imgPathBase}why-listen-podcast.png`} alt="why-do-people-listen-podcasts" />
          </div>
          <div className="pb-20">
            <ProjectSectionTitle type={H1} title='AYOBA.MUSIC.DESIGN.TITLE' />
            <div className="flex flex-row justify-between sm:flex-col sm:gap-16">
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-1.png`} alt="music-home-design" />
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-2.png`} alt="music-playlist-design" />
              <img className="w-1/4 sm:w-full" src={`${imgPathBase}design-3.png`} alt="music-player-design" />
            </div>
          </div>
        </ProjectContentWithMargins>
        <div className="bg-light-gray px-16 pt-20 pb-16 sm:px-8 sm:pt-10 flex flex-col gap-16 sm:gap-8">
          <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MUSIC.DESIGN.MUSIC' />
          <img className="w-full" src={`${imgPathBase}play-music.png`} alt="play-music-flow" />
          <img className="w-full" src={`${imgPathBase}share-playlist.png`} alt="share-playlist-flow" />
          <img className="w-full" src={`${imgPathBase}miniplayer.png`} alt="miniplayer-flow" />
          <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MUSIC.DESIGN.PODCAST' />
          <img className="w-full" src={`${imgPathBase}podcast.png`} alt="podcast-flow" />
        </div>
        <ProjectFooter />
      </div>
    )
  }

  // useEffect(() => {
  //   const prevLocation = location.state?.from?.pathname;
  //   if (prevLocation === '/ayoba') setIsAccessible(true);
  //   window.history.replaceState({}, '');
  // }, [setIsAccessible, location])

  return (
    <div>
      {
        // isAccessible ?
        renderAyobaMusic()
        // :
        // <div className="pt-52 pb-20 px-60 flex flex-col gap-20 sm:py-20 sm:px-8 sm:pt-32">
        //   <Password onAuthenticated={()=>{ setIsAccessible(true) }} />
        // </div>
      }
    </div>
  )
}

export default AyobaMusic;