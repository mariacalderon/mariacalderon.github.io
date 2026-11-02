import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

const AvorisFlights = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/avoris-flights/";

  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

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

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-avoris-cream"
        titleKey="AVORIS_FLIGHTS.TITLE"
        subtitleKey="AVORIS_FLIGHTS.SUBTITLE"
        titleColor="text-black"
        heroImage="avoris-flights/flights-cover.png"
      />
      <ProjectContentWithMargins styling="pt-40 pb-32 sm:pt-16">
        <ProjectDetails
          projectTitle={t('AVORIS_FLIGHTS.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.PRODUCT_DESIGNER_DS'
          ]}
          team={[
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.SOLO_PRODUCT_DESIGNER'
            }
          ]}
          tools={[
            'Figma',
            'Ávoris Design System'
          ]}
          timing={[]}
          process={[]}
        />
        <div>
          <ProjectSectionTitle type={BLUE_H3} title='AVORIS_FLIGHTS.INTRO.OVERVIEW' />
          <ProjectBodyText text='AVORIS_FLIGHTS.INTRO.DESCRIPTION' />
          <div className="grid grid-cols-4 gap-6 pt-10 sm:grid-cols-2 sm:gap-4">
            {
              ['ISSUES', 'CRITICAL', 'BRANDS', 'DEVICES'].map((stat) => {
                return (
                  <div key={`flights-stat-${stat}`} className="rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)] sm:p-4">
                    <div className="text-5xl font-bold text-blue sm:text-4xl">
                      {t(`AVORIS_FLIGHTS.STATS.${stat}_VALUE`)}
                    </div>
                    <div className="text-body text-lg pt-2 sm:text-base">
                      {t(`AVORIS_FLIGHTS.STATS.${stat}_LABEL`)}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.CONTEXT.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.CONTEXT.DESCRIPTION' styling='pb-6' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.CONTEXT.SAME_FLOW',
              'AVORIS_FLIGHTS.CONTEXT.GOAL',
              'AVORIS_FLIGHTS.CONTEXT.LIMIT',
            ]}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.PROBLEM.TITLE' />
          <ProjectSectionTitle type={H2} title='AVORIS_FLIGHTS.PROBLEM.SUBTITLE' styling='pb-4' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.PROBLEM.P_1',
              'AVORIS_FLIGHTS.PROBLEM.P_2',
              'AVORIS_FLIGHTS.PROBLEM.P_3',
              'AVORIS_FLIGHTS.PROBLEM.P_4',
            ]}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.RESEARCH.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.RESEARCH.DESCRIPTION' />
          <ProjectSectionTitle type={BLUE_H3} title='AVORIS_FLIGHTS.RESEARCH.AUDIT_TITLE' styling='pt-10' />
          <ProjectBodyText text='AVORIS_FLIGHTS.RESEARCH.AUDIT_DESC' />
          {renderDiagram('audit.png', 'Heuristic audit of the previous flights flow')}
          <ProjectSectionTitle type={BLUE_H3} title='AVORIS_FLIGHTS.RESEARCH.REQ_TITLE' styling='pt-10' />
          <ProjectBodyText text='AVORIS_FLIGHTS.RESEARCH.REQ_DESC' styling='pb-6' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.RESEARCH.REQ_1',
              'AVORIS_FLIGHTS.RESEARCH.REQ_2',
              'AVORIS_FLIGHTS.RESEARCH.REQ_3',
              'AVORIS_FLIGHTS.RESEARCH.REQ_4',
              'AVORIS_FLIGHTS.RESEARCH.REQ_5',
            ]}
          />
          <ProjectBubble
            title='AVORIS_FLIGHTS.RESEARCH.INSIGHTS_TITLE'
            titleStyling='text-blue'
            styling='mt-10 !shadow-[0_0_24px_rgba(0,0,0,0.12)]'
          >
            <BulletList
              styling='text-body'
              list={[
                'AVORIS_FLIGHTS.RESEARCH.INS_1',
                'AVORIS_FLIGHTS.RESEARCH.INS_2',
                'AVORIS_FLIGHTS.RESEARCH.INS_3',
                'AVORIS_FLIGHTS.RESEARCH.INS_4',
              ]}
            />
          </ProjectBubble>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.PROCESS.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.PROCESS.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.SOLUTION.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.SOLUTION.DESCRIPTION' styling='pb-6' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.SOLUTION.SOL_1',
              'AVORIS_FLIGHTS.SOLUTION.SOL_2',
              'AVORIS_FLIGHTS.SOLUTION.SOL_3',
              'AVORIS_FLIGHTS.SOLUTION.SOL_4',
              'AVORIS_FLIGHTS.SOLUTION.SOL_5',
              'AVORIS_FLIGHTS.SOLUTION.SOL_6',
              'AVORIS_FLIGHTS.SOLUTION.SOL_7',
              'AVORIS_FLIGHTS.SOLUTION.SOL_8',
              'AVORIS_FLIGHTS.SOLUTION.SOL_9',
            ]}
          />
          {renderDiagram('screens.png', 'New flights results page on desktop and mobile')}
        </div>
        <ProjectBubble
          title='AVORIS_FLIGHTS.DS_LINK.TITLE'
          titleStyling='text-blue'
          styling='!shadow-[0_0_24px_rgba(0,0,0,0.12)]'
        >
          <ProjectBodyText text='AVORIS_FLIGHTS.DS_LINK.DESCRIPTION' />
          <Link className="inline-block pt-6 text-lg font-bold text-blue" to='/avoris/design-system'>
            {t('AVORIS_FLIGHTS.DS_LINK.CTA')}
          </Link>
        </ProjectBubble>
        <ProjectBubble title='AVORIS_FLIGHTS.RESULTS.TITLE'>
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.RESULTS.R_1',
              'AVORIS_FLIGHTS.RESULTS.R_2',
              'AVORIS_FLIGHTS.RESULTS.R_3',
            ]}
          />
        </ProjectBubble>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.LEARNINGS.TITLE' />
          <BulletList
            styling='text-body'
            list={[
              'AVORIS_FLIGHTS.LEARNINGS.L_1',
              'AVORIS_FLIGHTS.LEARNINGS.L_2',
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

export default AvorisFlights;
