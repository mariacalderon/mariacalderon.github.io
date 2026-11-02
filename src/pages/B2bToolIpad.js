import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import BulletList from "../components/BulletList";
import ProjectFooter from "../components/ProjectFooter";
import { H1, H2, H2_BUBBLE, H3 } from "../utils/constants";

const INSIGHTS = ['I_1', 'I_2', 'I_3'];

const NEEDS = ['PERFORMANCE', 'OPERATIONS'];

const CONTRIBUTIONS = ['I_1', 'I_2', 'I_3'];

// Draft captures from Figma, to be replaced by the final exports.
const DECISIONS = [
  { key: 'D_1', points: ['PROBLEM', 'DECISION'], images: [{ image: 'summary-full.jpg', alt: 'Customer summary with the year switch' }] },
  {
    key: 'D_2',
    points: ['PROBLEM', 'DECISION', 'WHY'],
    images: [
      { image: 'order.jpg', alt: 'Order with the side menu' },
      { image: 'products.jpg', alt: 'Adding products to an order' },
    ],
  },
  {
    key: 'D_3',
    points: ['PROBLEM', 'DECISION', 'WHY'],
    images: [
      { image: 'marketing-grid.jpg', alt: 'Marketing materials in grid view' },
      { image: 'marketing-list.jpg', alt: 'Marketing materials in list view' },
      { image: 'marketing-detail.jpg', alt: 'Marketing material detail' },
    ],
  },
];

const B2bToolIpad = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/b2b-tool-ipad/";

  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

  // Without a file it shows an empty box with the name of the image that goes there.
  const renderImage = (image, alt) => {
    if (!image) {
      return (
        <div className="flex w-full min-h-[240px] items-center justify-center rounded-2xl border-2 border-dashed border-light-gray p-6 text-center text-lg text-body">
          {alt}
        </div>
      )
    }
    return (
      <img
        className="w-full rounded-2xl shadow-lg cursor-zoom-in"
        src={`${imgPathBase}${image}`}
        alt={alt}
        onClick={() => setOpenImage({ src: `${imgPathBase}${image}`, alt })}
      />
    )
  }

  const renderDecision = ({ key: decision, points, images }) => {
    return (
      <div className="flex flex-col gap-6" key={`decision-${decision}`}>
        <ProjectSectionTitle type={H2_BUBBLE} title={`B2B_TOOL_IPAD.SOLUTION.${decision}.TITLE`} />
        <BulletList
          styling='text-lg'
          list={points.map((point) => `B2B_TOOL_IPAD.SOLUTION.${decision}.${point}`)}
        />
        <div className="flex flex-col gap-6">
          {images.map(({ image, alt }) => <div key={image}>{renderImage(image, alt)}</div>)}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-[#131313]"
        titleKey="B2B_TOOL_IPAD.TITLE"
        subtitleKey="B2B_TOOL_IPAD.SUBTITLE"
      />
      <ProjectContentWithMargins styling="pt-40 pb-32 sm:pt-16">
        <ProjectDetails
          projectTitle={t('B2B_TOOL_IPAD.SUBTITLE')}
          roles={[]}
          team={[]}
          tools={[]}
          timing={[]}
          process={['audit', 'emphatize', 'specify', 'ideate', 'handoff', 'verify']}
          fullWidth
        />
        <div>
          <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.OVERVIEW.TITLE' />
          <ProjectBodyText text='B2B_TOOL_IPAD.OVERVIEW.DESCRIPTION' />
          <div className="flex flex-col gap-6 pt-6">
            <div>
              <ProjectSectionTitle type={H2} title='B2B_TOOL_IPAD.OVERVIEW.ROLE.TITLE' />
              <ProjectBodyText text='B2B_TOOL_IPAD.OVERVIEW.ROLE.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='B2B_TOOL_IPAD.OVERVIEW.ROLE.RESPONSIBILITIES.TITLE' styling='pb-4' />
              <BulletList
                styling='text-body'
                list={[
                  'B2B_TOOL_IPAD.OVERVIEW.ROLE.RESPONSIBILITIES.R_1',
                  'B2B_TOOL_IPAD.OVERVIEW.ROLE.RESPONSIBILITIES.R_2',
                  'B2B_TOOL_IPAD.OVERVIEW.ROLE.RESPONSIBILITIES.R_3',
                  'B2B_TOOL_IPAD.OVERVIEW.ROLE.RESPONSIBILITIES.R_4',
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.CHALLENGE.TITLE' />
          <div className="flex flex-col gap-6">
            {
              ['BUSINESS', 'USERS'].map((challenge) => {
                return (
                  <div key={`b2b-challenge-${challenge}`}>
                    <ProjectSectionTitle type={H2} title={`B2B_TOOL_IPAD.CHALLENGE.${challenge}.TITLE`} />
                    <ProjectBodyText text={`B2B_TOOL_IPAD.CHALLENGE.${challenge}.DESCRIPTION`} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.USERS.TITLE' />
          <ProjectBodyText text='B2B_TOOL_IPAD.USERS.DESCRIPTION' />
          <ProjectSectionTitle type={H2} title='B2B_TOOL_IPAD.USERS.INSIGHTS.TITLE' styling='pt-10 pb-6' />
          <div className="flex flex-col gap-6">
            {
              INSIGHTS.map((insight) => {
                return (
                  <div key={`b2b-insight-${insight}`} className="flex flex-col gap-4 rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)]">
                    <ProjectSectionTitle type={H3} title={`B2B_TOOL_IPAD.USERS.INSIGHTS.${insight}.TITLE`} styling='!pb-0' />
                    <ProjectBodyText text={`B2B_TOOL_IPAD.USERS.INSIGHTS.${insight}.DESCRIPTION`} />
                    <ProjectBodyText text={`B2B_TOOL_IPAD.USERS.INSIGHTS.${insight}.OPPORTUNITY`} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="-mb-8">
            <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.SOLUTION.TITLE' />
            <ProjectSectionTitle type={H2} title='B2B_TOOL_IPAD.SOLUTION.NEEDS.TITLE' styling='pb-6' />
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
              {
                NEEDS.map((need) => {
                  return (
                    <div key={`b2b-need-${need}`} className="flex flex-col gap-4 rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)]">
                      <ProjectSectionTitle type={H3} title={`B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.TITLE`} styling='!pb-0' />
                      <ProjectBodyText text={`B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.DESCRIPTION`} />
                      <BulletList
                        styling='text-body'
                        list={[
                          `B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.F_1`,
                          `B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.F_2`,
                          `B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.F_3`,
                          `B2B_TOOL_IPAD.SOLUTION.NEEDS.${need}.F_4`,
                        ]}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          {DECISIONS.map(renderDecision)}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.FLOW.TITLE' />
          </div>
          <video
            className="w-full rounded-2xl shadow-lg"
            src={`${imgPathBase}prototype.mp4`}
            poster={`${imgPathBase}prototype-poster.jpg`}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={t('B2B_TOOL_IPAD.FLOW.TITLE')}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='B2B_TOOL_IPAD.IMPACT.TITLE' />
          <ProjectSectionTitle type={H2} title='B2B_TOOL_IPAD.IMPACT.CONTRIBUTION.TITLE' styling='pb-6' />
          <div className="flex flex-col gap-6">
            {
              CONTRIBUTIONS.map((contribution) => {
                return (
                  <div key={`b2b-contribution-${contribution}`} className="flex flex-col gap-4 rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)]">
                    <ProjectSectionTitle type={H3} title={`B2B_TOOL_IPAD.IMPACT.CONTRIBUTION.${contribution}.TITLE`} styling='!pb-0' />
                    <ProjectBodyText text={`B2B_TOOL_IPAD.IMPACT.CONTRIBUTION.${contribution}.DESCRIPTION`} />
                  </div>
                )
              })
            }
          </div>
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

export default B2bToolIpad;
