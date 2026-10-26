import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import BulletList from "../components/BulletList";
import ProjectBubble from "../components/ProjectBubble";
import ProjectFooter from "../components/ProjectFooter";
import { BLUE_H3, H1, H2 } from "../utils/constants";

const AvorisDesignSystem = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/avoris-ds/";

  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

  const renderVideo = (video, alt) => {
    return (
      <div className="pt-8">
        <video
          className="w-full rounded-2xl shadow-lg bg-white"
          src={`${imgPathBase}${video}`}
          alt={alt}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    )
  }

  const renderDiagram = (image, alt) => {
    return (
      <div className="pt-8">
        <img
          className="w-full rounded-2xl shadow-lg cursor-zoom-in"
          src={`${imgPathBase}${image}`}
          alt={alt}
          onClick={() => setOpenImage({ src: `${imgPathBase}${image}`, alt })}
        />
      </div>
    )
  }

  const renderSiteShowcase = (image, url, brand, dotColor) => {
    return (
      <div className="pt-10">
        <div className="rounded-2xl overflow-hidden bg-white shadow-[0_0_24px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#F1F1F1]">
            <span className="w-3 h-3 rounded-full bg-[#E3E3DF]" />
            <span className="w-3 h-3 rounded-full bg-[#E3E3DF]" />
            <span className="w-3 h-3 rounded-full bg-[#E3E3DF]" />
            <span className="ml-3 flex-1 rounded-full bg-[#F9F9F9] px-4 py-1 text-sm text-[#909090]">{url}</span>
          </div>
          <div className="group relative h-[560px] overflow-hidden sm:h-[300px]">
            <img
              className="w-full h-full object-cover object-top transition-[object-position] duration-[30000ms] ease-linear group-hover:object-bottom"
              src={`${imgPathBase}${image}`}
              alt={`${brand} home`}
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white transition-opacity group-hover:opacity-0 sm:hidden">
              {t('AVORIS.CONTEXT.HOVER')}
            </span>
          </div>
        </div>
        <a className="flex items-center gap-3 pt-4 text-lg font-bold text-black" href={`https://www.${url}/`} target="_blank" rel="noreferrer">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: dotColor }} />
          {brand}
          <span className="text-body font-normal">{url} ↗</span>
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-avoris-cream"
        titleKey="AVORIS.TITLE"
        subtitleKey="AVORIS.SUBTITLE"
        titleColor="text-black"
        heroImage="avoris-ds/hero.png"
      />
      <ProjectContentWithMargins styling="pt-40 pb-32 sm:pt-16">
        <ProjectDetails
          projectTitle={t('AVORIS.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.DS_PRODUCT_DESIGNER'
          ]}
          team={[
            {
              count: 3,
              role: 'PROJECT_COMMON.TEAM.PRODUCT_DESIGN'
            }
          ]}
          tools={[
            'Figma',
            'Web Components',
            'Claude Code + Figma connector',
            'Markdown'
          ]}
          timing={[]}
          process={[]}
        />
        <div>
          <ProjectSectionTitle type={BLUE_H3} title='AVORIS.INTRO.OVERVIEW' />
          <ProjectBodyText text='AVORIS.INTRO.DESCRIPTION' />
          <div className="grid grid-cols-4 gap-6 pt-10 sm:grid-cols-2 sm:gap-4">
            {
              ['BRANDS', 'VARIANTS', 'COMPONENTS', 'RULES'].map((stat) => {
                return (
                  <div key={`avoris-stat-${stat}`} className="rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)] sm:p-4">
                    <div className="text-5xl font-bold text-blue sm:text-4xl">
                      {t(`AVORIS.STATS.${stat}_VALUE`)}
                    </div>
                    <div className="text-body text-lg pt-2 sm:text-base">
                      {t(`AVORIS.STATS.${stat}_LABEL`)}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.CONTEXT.TITLE' />
          <ProjectBodyText text='AVORIS.CONTEXT.DESCRIPTION' styling='pb-6' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS.CONTEXT.BRANDS',
              'AVORIS.CONTEXT.LINES',
              'AVORIS.CONTEXT.AUDIENCES',
            ]}
          />
          <ProjectBodyText text='AVORIS.CONTEXT.LOGIC' />
          <ProjectBodyText text='AVORIS.CONTEXT.HOMES' styling='pt-6' />
          {renderSiteShowcase('btravel-home.jpg', 'btravel.com', 'B travel', '#1f72db')}
          {renderSiteShowcase('halcon-home.jpg', 'halconviajes.com', 'Halcón Viajes', '#d52620')}
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.PROBLEM.TITLE' />
          <ProjectSectionTitle type={H2} title='AVORIS.PROBLEM.SUBTITLE' styling='pb-4' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS.PROBLEM.P_1',
              'AVORIS.PROBLEM.P_2',
              'AVORIS.PROBLEM.P_3',
              'AVORIS.PROBLEM.P_4',
            ]}
          />
          <ProjectBubble title='AVORIS.PROBLEM.NEEDED_TITLE' styling='mt-6 !shadow-[0_0_24px_rgba(0,0,0,0.12)]'>
            <ProjectBodyText text='AVORIS.PROBLEM.NEEDED_DESC' styling='pb-4' />
            <BulletList
              styling='text-body'
              list={[
                'AVORIS.PROBLEM.NEEDED_1',
                'AVORIS.PROBLEM.NEEDED_2',
                'AVORIS.PROBLEM.NEEDED_3',
                'AVORIS.PROBLEM.NEEDED_4',
                'AVORIS.PROBLEM.NEEDED_5',
              ]}
            />
            <ProjectBodyText text='AVORIS.PROBLEM.NEEDED_CODE' styling='pb-6' />
            <ProjectBodyText text='AVORIS.PROBLEM.LIMITATION' />
          </ProjectBubble>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.EVOLUTION.TITLE' />
          <ProjectBodyText text='AVORIS.EVOLUTION.DESCRIPTION' />
          {renderDiagram('journey.png', 'journey-before-today-next')}
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.STEP_ONE.TITLE' />
          <ProjectBodyText text='AVORIS.STEP_ONE.DESCRIPTION' styling='pb-10' />
          <div className="flex flex-col gap-12">
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.STRUCTURE.TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.STRUCTURE.DESCRIPTION' />
              {renderDiagram('levels.png', 'three-levels-of-scope')}
              {renderDiagram('where.png', 'where-does-each-component-go')}
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.SLOTS.TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.SLOTS.P_1' styling='pb-6' />
              <ProjectBodyText text='AVORIS.SLOTS.P_2' styling='pb-6' />
              <ProjectBodyText text='AVORIS.SLOTS.P_3' />
              {renderDiagram('modal-slots.webp', 'modal-with-slots-desktop-and-mobile')}
              {renderDiagram('modal-flight-example.png', 'flight-information-modal-example')}
              {renderDiagram('booking-summary-slots.png', 'booking-summary-with-slots-example')}
              <div className="pt-10" />
              <ProjectBodyText text='AVORIS.SLOTS.P_4' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.TOKENS.TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.TOKENS.FIGMA' styling='pb-4' />
              <BulletList
                styling='text-body'
                list={[
                  'AVORIS.TOKENS.LAYER_1',
                  'AVORIS.TOKENS.LAYER_2',
                  'AVORIS.TOKENS.LAYER_3',
                ]}
              />
              <ProjectBodyText text='AVORIS.TOKENS.LAYERS_LINK' styling='pb-6' />
              <ProjectBodyText text='AVORIS.TOKENS.MODES' styling='pb-6' />
              <ProjectBodyText text='AVORIS.TOKENS.BRANDS' />
              {renderDiagram('variables.png', 'variables-three-layers-modes-and-brands')}
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.IN_ACTION.TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.IN_ACTION.DESCRIPTION' styling='pb-10' />
              <div className="flex flex-col gap-12">
                <div>
                  <ProjectSectionTitle type={BLUE_H3} title='AVORIS.IN_ACTION.HEADER_TITLE' />
                  <ProjectBodyText text='AVORIS.IN_ACTION.HEADER_DESC' />
                  {renderVideo('header.mp4', 'brand-agnostic-header-demo')}
                </div>
                <div>
                  <ProjectSectionTitle type={BLUE_H3} title='AVORIS.IN_ACTION.CARD_TITLE' />
                  <ProjectBodyText text='AVORIS.IN_ACTION.CARD_DESC' />
                  {renderVideo('card.mp4', 'brand-agnostic-card-demo')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.STEP_TWO.TITLE' />
          <ProjectBodyText text='AVORIS.STEP_TWO.DESCRIPTION' styling='pb-10' />
          <div className="flex flex-col gap-12">
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.BUILD.SETUP_TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.BUILD.SETUP_1' styling='pb-6' />
              <ProjectBodyText text='AVORIS.BUILD.SETUP_2' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.BUILD.HOW_TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.ROUND_TRIP.DESCRIPTION' />
              {renderDiagram('how-it-works.png', 'how-it-works-figma-code-both-directions')}
              <div className="pt-10" />
              <ProjectBodyText text='AVORIS.BUILD.SKILLS' styling='pb-6' />
              <ProjectBodyText text='AVORIS.TOKENS.REPO' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.BUILD.RULES_TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.BUILD.RULES' />
              {renderDiagram('rules-and-control.png', 'rules-checks-and-people-decide')}
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AVORIS.BUILD.MEMORY_TITLE' styling='pb-4' />
              <ProjectBodyText text='AVORIS.BUILD.SCALE' styling='pb-6' />
              <ProjectBodyText text='AVORIS.BUILD.MEMORY' styling='pb-4' />
              <BulletList
                styling='text-body'
                list={[
                  'AVORIS.BUILD.MEM_1',
                  'AVORIS.BUILD.MEM_2',
                  'AVORIS.BUILD.MEM_3',
                  'AVORIS.BUILD.MEM_4',
                ]}
              />
              <ProjectBodyText text='AVORIS.BUILD.HISTORY' styling='pb-4' />
              <BulletList
                styling='text-body'
                list={[
                  'AVORIS.BUILD.HIST_1',
                  'AVORIS.BUILD.HIST_2',
                ]}
              />
              <ProjectBodyText text='AVORIS.BUILD.TEAM' />
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.STEP_THREE.TITLE' />
          <ProjectBodyText text='AVORIS.STEP_THREE.DESCRIPTION' />
          {renderDiagram('roadmap.png', 'roadmap-to-the-real-repository')}
        </div>
        <ProjectBubble title='AVORIS.RESULTS.TITLE'>
          <BulletList
            styling='text-body'
            list={[
              'AVORIS.RESULTS.R_1',
              'AVORIS.RESULTS.R_2',
              'AVORIS.RESULTS.R_3',
              'AVORIS.RESULTS.R_4',
              'AVORIS.RESULTS.R_5',
              'AVORIS.RESULTS.R_6',
            ]}
          />
        </ProjectBubble>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS.LEARNINGS.TITLE' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS.LEARNINGS.L_1',
              'AVORIS.LEARNINGS.L_4',
            ]}
          />
        </div>
      </ProjectContentWithMargins>
      <ProjectFooter />
      <AnimatePresence>
        {
          openImage &&
            <motion.div
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-8 cursor-zoom-out sm:p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenImage(null)}
            >
              <motion.img
                className="max-w-full max-h-full rounded-2xl shadow-lg"
                src={openImage.src}
                alt={openImage.alt}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              />
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default AvorisDesignSystem;
