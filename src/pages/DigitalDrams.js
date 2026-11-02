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
import { BLUE_H3, H1, H2, H2_BUBBLE, H3 } from "../utils/constants";

const BOTTLE_PATH = 'M41 18 H59 V40 C59 52 86 56 86 84 V138 C86 150 77 156 66 156 H34 C23 156 14 150 14 138 V84 C14 56 41 52 41 40 Z';
const LIQUID_PATH = 'M-40 0 Q-27 -7 -15 0 T10 0 T35 0 T60 0 T85 0 T110 0 T135 0 V200 H-40 Z';

// From the smallest budget to the biggest: the fuller the bottle, the bigger the budget.
const PROFILES = [
  { key: 'BEGINNER', liquidTop: 142 },
  { key: 'ENTHUSIAST', liquidTop: 122 },
  { key: 'INVESTOR', liquidTop: 100 },
  { key: 'RESELLER', liquidTop: 78 },
  { key: 'COLLECTOR', liquidTop: 50 },
];

const BENCHMARK_SITES = [
  { key: 'BLOCKBAR', image: 'bench-blockbar.jpg' },
  { key: 'VINOVEST', image: 'bench-vinovest.jpg' },
  { key: 'CASKX', image: 'bench-caskx.jpg' },
  { key: 'CULT', image: 'bench-cult.jpg' },
  { key: 'WHISKYSTATS', image: 'bench-whiskystats.jpg' },
];

const BENCHMARK_FEATURES = [
  { key: 'MARKETPLACE', sites: ['BLOCKBAR', 'VINOVEST', 'CULT'] },
  { key: 'BIDS', sites: ['BLOCKBAR', 'CULT'] },
  { key: 'STORAGE', sites: ['BLOCKBAR', 'VINOVEST', 'CASKX', 'CULT'] },
  { key: 'FRACTIONS', sites: [] },
  { key: 'DELIVERY', sites: ['BLOCKBAR', 'VINOVEST'] },
];

const FLOW_ACTIONS = ['LIST', 'EDIT', 'REMOVE', 'SELLER_REDEEM', 'BUY', 'OFFER', 'CANCEL', 'OWNERSHIP', 'BUYER_REDEEM'];

const DigitalDrams = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/digital-drams/";

  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

  const renderImage = (image, alt) => {
    return (
      <img
        className="w-full rounded-2xl shadow-lg cursor-zoom-in"
        src={`${imgPathBase}${image}`}
        alt={alt}
        onClick={() => setOpenImage({ src: `${imgPathBase}${image}`, alt })}
      />
    )
  }

  const renderDecision = (decision, images) => {
    return (
      <div className="flex flex-col gap-6" key={`decision-${decision}`}>
        <ProjectSectionTitle type={H2_BUBBLE} title={`DIGITAL_DRAMS.DESIGN.${decision}.TITLE`} />
        <BulletList
          styling='text-lg'
          list={[
            `DIGITAL_DRAMS.DESIGN.${decision}.FOR`,
            `DIGITAL_DRAMS.DESIGN.${decision}.PROBLEM`,
            `DIGITAL_DRAMS.DESIGN.${decision}.DECISION`,
          ]}
        />
        {images.map(({ image, alt }) => <div key={image}>{renderImage(image, alt)}</div>)}
      </div>
    )
  }

  const renderBottle = (profile, liquidTop) => {
    return (
      <svg className="h-36 w-auto flex-none" viewBox="0 0 100 160" aria-hidden="true">
        <defs>
          <clipPath id={`drams-bottle-${profile}`}>
            <path d={BOTTLE_PATH} />
          </clipPath>
          <linearGradient id={`drams-liquid-${profile}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC887" />
            <stop offset="1" stopColor="#F59A3C" />
          </linearGradient>
        </defs>
        <rect x="38" y="2" width="24" height="18" rx="6" fill="#D9A06B" />
        <path d={BOTTLE_PATH} fill="#FFFFFF" />
        <g clipPath={`url(#drams-bottle-${profile})`}>
          <path
            d={LIQUID_PATH}
            fill={`url(#drams-liquid-${profile})`}
            transform={`translate(0 ${liquidTop})`}
          />
        </g>
      </svg>
    )
  }

  const renderProfiles = () => {
    return (
      <div>
        <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.PROFILES.TITLE' styling='pb-4' />
        <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.PROFILES.CAPTION' styling='pb-8' />
        <div className="grid grid-cols-6 gap-6 sm:grid-cols-1">
          {
            PROFILES.map(({ key, liquidTop }, index) => {
              return (
                <div
                  key={`drams-profile-${key}`}
                  className={`col-span-2 flex flex-col gap-4 rounded-2xl bg-[#FFF6EA] p-6 sm:col-span-1 ${index === 3 ? 'col-start-2 sm:col-start-auto' : ''}`}
                >
                  <div className="flex flex-row items-end gap-4">
                    {renderBottle(key, liquidTop)}
                    <div className="rounded-full bg-white px-4 py-1 text-lg font-bold text-[#A85A0B] whitespace-nowrap">
                      {t(`DIGITAL_DRAMS.DISCOVERY.PROFILES.${key}.AMOUNT`)}
                    </div>
                  </div>
                  <ProjectSectionTitle type={H3} title={`DIGITAL_DRAMS.DISCOVERY.PROFILES.${key}.TITLE`} styling='!pb-0' />
                  <ProjectBodyText text={`DIGITAL_DRAMS.DISCOVERY.PROFILES.${key}.NEED`} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  const renderActions = () => {
    return (
      <div>
        <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.FLOWS.ACTIONS.TITLE' styling='pb-4' />
        <ProjectBodyText text='DIGITAL_DRAMS.FLOWS.ACTIONS.DESCRIPTION' styling='pb-6' />
        <div className="overflow-x-auto rounded-2xl shadow-[0_0_24px_rgba(0,0,0,0.12)]">
          <table className="w-full min-w-[720px] border-collapse text-left text-lg text-body">
            <thead>
              <tr className="bg-[#FFF6EA]">
                {
                  ['ROLE', 'SCENARIO', 'BUTTON', 'ACTION'].map((column) => {
                    return (
                      <th key={`drams-actions-head-${column}`} scope="col" className="p-4 font-bold text-[#A85A0B]">
                        {t(`DIGITAL_DRAMS.FLOWS.ACTIONS.COLUMNS.${column}`)}
                      </th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                FLOW_ACTIONS.map((row) => {
                  return (
                    <tr key={`drams-actions-${row}`} className="border-t border-light-gray align-top">
                      <th scope="row" className="p-4 font-bold text-black">
                        {t(`DIGITAL_DRAMS.FLOWS.ACTIONS.ROWS.${row}.ROLE`)}
                      </th>
                      <td className="p-4">{t(`DIGITAL_DRAMS.FLOWS.ACTIONS.ROWS.${row}.SCENARIO`)}</td>
                      <td className="p-4 font-bold text-black">{t(`DIGITAL_DRAMS.FLOWS.ACTIONS.ROWS.${row}.BUTTON`)}</td>
                      <td className="p-4">{t(`DIGITAL_DRAMS.FLOWS.ACTIONS.ROWS.${row}.ACTION`)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderBenchmark = () => {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.BENCHMARK.TITLE' styling='pb-4' />
          <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.BENCHMARK.DESCRIPTION' />
        </div>
        <div className="grid grid-cols-6 gap-6 sm:grid-cols-1">
          {
            BENCHMARK_SITES.map(({ key, image }, index) => {
              return (
                <div
                  key={`drams-benchmark-${key}`}
                  className={`col-span-2 flex flex-col gap-4 rounded-2xl bg-[#FFF6EA] p-6 sm:col-span-1 ${index === 3 ? 'col-start-2 sm:col-start-auto' : ''}`}
                >
                  {renderImage(image, t(`DIGITAL_DRAMS.DISCOVERY.BENCHMARK.SITES.${key}.TITLE`))}
                  <ProjectSectionTitle type={H3} title={`DIGITAL_DRAMS.DISCOVERY.BENCHMARK.SITES.${key}.TITLE`} styling='!pb-0' />
                  <ProjectBodyText text={`DIGITAL_DRAMS.DISCOVERY.BENCHMARK.SITES.${key}.TAKE`} />
                </div>
              )
            })
          }
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-[0_0_24px_rgba(0,0,0,0.12)]">
          <table className="w-full min-w-[720px] border-collapse text-left text-lg text-body">
            <thead>
              <tr>
                <th className="p-4"><span className="sr-only">{t('DIGITAL_DRAMS.DISCOVERY.BENCHMARK.TABLE.FEATURE')}</span></th>
                {
                  BENCHMARK_SITES.map(({ key }) => {
                    return (
                      <th key={`drams-table-head-${key}`} className="p-4 text-center font-bold text-black">
                        {t(`DIGITAL_DRAMS.DISCOVERY.BENCHMARK.SITES.${key}.TITLE`)}
                      </th>
                    )
                  })
                }
                <th className="rounded-tr-2xl bg-[#FFF6EA] p-4 text-center font-bold text-[#A85A0B]">
                  {t('DIGITAL_DRAMS.TITLE')}
                </th>
              </tr>
            </thead>
            <tbody>
              {
                BENCHMARK_FEATURES.map(({ key, sites }) => {
                  return (
                    <tr key={`drams-table-${key}`} className="border-t border-light-gray">
                      <th scope="row" className="p-4 font-bold text-black">
                        {t(`DIGITAL_DRAMS.DISCOVERY.BENCHMARK.TABLE.${key}`)}
                      </th>
                      {
                        BENCHMARK_SITES.map((site) => {
                          return (
                            <td key={`drams-table-${key}-${site.key}`} className="p-4 text-center">
                              {sites.includes(site.key) && <span aria-label={t('DIGITAL_DRAMS.DISCOVERY.BENCHMARK.TABLE.YES')}>✓</span>}
                            </td>
                          )
                        })
                      }
                      <td className="bg-[#FFF6EA] p-4 text-center font-bold text-[#A85A0B]">
                        <span aria-label={t('DIGITAL_DRAMS.DISCOVERY.BENCHMARK.TABLE.YES')}>✓</span>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <ProjectBubble title='DIGITAL_DRAMS.DISCOVERY.BENCHMARK.LEARNED.TITLE'>
          <BulletList
            styling='flex flex-col gap-4'
            list={[
              'DIGITAL_DRAMS.DISCOVERY.BENCHMARK.LEARNED.L_1',
              'DIGITAL_DRAMS.DISCOVERY.BENCHMARK.LEARNED.L_2',
              'DIGITAL_DRAMS.DISCOVERY.BENCHMARK.LEARNED.L_3',
              'DIGITAL_DRAMS.DISCOVERY.BENCHMARK.LEARNED.L_4',
            ]}
          />
        </ProjectBubble>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-[#131313]"
        titleKey="DIGITAL_DRAMS.TITLE"
        subtitleKey="DIGITAL_DRAMS.SUBTITLE"
        heroImage="digital-drams/hero.png"
      />
      <ProjectContentWithMargins styling="pt-40 pb-32 sm:pt-16">
        <ProjectDetails
          projectTitle={t('DIGITAL_DRAMS.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.PRODUCT_DESIGNER'
          ]}
          team={[
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.SOLO_PRODUCT_DESIGNER'
            },
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.BUSINESS'
            },
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.DEVELOPMENT'
            }
          ]}
          tools={[
            'Figma'
          ]}
          timing={[]}
          process={['audit', 'emphatize', 'specify', 'ideate', 'handoff', 'verify']}
          pendingProcess={['verify']}
          fullWidth
        />
        <div>
          <ProjectSectionTitle type={BLUE_H3} title='DIGITAL_DRAMS.OVERVIEW.TITLE' />
          <ProjectBodyText text='DIGITAL_DRAMS.OVERVIEW.DESCRIPTION' />
          <div className="grid grid-cols-3 gap-6 pt-10 sm:grid-cols-1 sm:gap-4">
            {
              ['BOTTLES', 'FRACTIONS', 'YEARS'].map((stat) => {
                return (
                  <div key={`drams-stat-${stat}`} className="rounded-2xl p-6 shadow-[0_0_24px_rgba(0,0,0,0.12)] sm:p-4">
                    <div className="text-3xl font-semibold text-blue">
                      {t(`DIGITAL_DRAMS.STATS.${stat}_VALUE`)}
                    </div>
                    <div className="text-body text-lg pt-2 sm:text-base">
                      {t(`DIGITAL_DRAMS.STATS.${stat}_LABEL`)}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.CONTEXT.TITLE' />
          <ProjectBodyText text='DIGITAL_DRAMS.CONTEXT.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.CHALLENGE.TITLE' />
          <div className="flex flex-col gap-6">
            {
              ['PRIMARY', 'TECHNICAL', 'COMPLIANCE', 'USERS', 'TEAM', 'MARKETPLACE', 'PLATFORMS'].map((challenge) => {
                return (
                  <div key={`drams-challenge-${challenge}`}>
                    <ProjectSectionTitle type={H2} title={`DIGITAL_DRAMS.CHALLENGE.${challenge}.TITLE`} />
                    <ProjectBodyText text={`DIGITAL_DRAMS.CHALLENGE.${challenge}.DESCRIPTION`} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.DISCOVERY.TITLE' />
            <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.AUDIT.TITLE' styling='pb-4' />
            <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.AUDIT.DESCRIPTION' />
            <BulletList styling='text-body pt-4' list={[
              'DIGITAL_DRAMS.DISCOVERY.AUDIT.CRITERIA.USERPROFILE',
              'DIGITAL_DRAMS.DISCOVERY.AUDIT.CRITERIA.PRINCIPLES',
              'DIGITAL_DRAMS.DISCOVERY.AUDIT.CRITERIA.INTERACTION',
              'DIGITAL_DRAMS.DISCOVERY.AUDIT.CRITERIA.USABILITY',
            ]}/>
          </div>
          <div className="flex flex-col gap-8">
            <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.TITLE' />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
                <div className="w-56 text-white bg-red py-2 px-8 rounded-full">
                  {t('DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.CRITICAL.TITLE')}
                </div>
                <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.CRITICAL.DESCRIPTION' />
              </div>
              <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
                <div className="w-56 text-white bg-yellow py-2 px-8 rounded-full">
                  {t('DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.AVERAGE.TITLE')}
                </div>
                <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.AVERAGE.DESCRIPTION' />
              </div>
              <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
                <div className="w-56 text-white bg-green py-2 px-8 rounded-full">
                  {t('DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.LOW.TITLE')}
                </div>
                <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.AUDIT.LEGEND.LOW.DESCRIPTION' />
              </div>
            </div>
            {renderImage('audit-home.png', 'Audit of the old home page')}
            {renderImage('audit-market.png', 'Audit of the old marketplace')}
            {renderImage('audit-detail.png', 'Audit of the old bottle details')}
            {renderImage('audit-mint.png', 'Audit of the old create and mint page')}
            {renderImage('audit-login.png', 'Audit of the old login page and the missing flows')}
            <ProjectBubble title='DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.TITLE'>
              <BulletList
                styling='flex flex-col gap-4'
                list={[
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_1',
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_NEXT',
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_FIND',
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_3',
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_4',
                  'DIGITAL_DRAMS.DISCOVERY.AUDIT.INSIGHTS.I_LOOK',
                ]}
              />
            </ProjectBubble>
          </div>
          <div>
            <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.RESEARCH.TITLE' styling='pb-4' />
            <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.RESEARCH.DESCRIPTION' />
          </div>
          {renderProfiles()}
          <ProjectBubble title='DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.TITLE'>
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.C_1',
                'DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.C_2',
                'DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.C_3',
                'DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.C_4',
                'DIGITAL_DRAMS.DISCOVERY.CONCLUSIONS.C_5',
              ]}
            />
          </ProjectBubble>
          <ProjectBubble title='DIGITAL_DRAMS.DISCOVERY.FEE.TITLE'>
            <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.FEE.DESCRIPTION' />
          </ProjectBubble>
          {renderBenchmark()}
          <div>
            <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.DISCOVERY.QUESTIONS.TITLE' styling='pb-4' />
            <ProjectBodyText text='DIGITAL_DRAMS.DISCOVERY.QUESTIONS.DESCRIPTION' styling='pb-6' />
            <BulletList
              styling='text-body'
              list={[
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.TOKEN',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.FRACTIONS',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.OWNER',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.REDEEM',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.FEE',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.ROLES',
                'DIGITAL_DRAMS.DISCOVERY.QUESTIONS.COLLECTION',
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.PRIORITIES.TITLE' />
            <ProjectBodyText text='DIGITAL_DRAMS.PRIORITIES.DESCRIPTION' />
          </div>
          {renderImage('pyramid.png', 'Product pyramid with three phases')}
          {renderImage('pyramid-phases.png', 'Features in each phase of the product pyramid')}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.FLOWS.TITLE' />
            <ProjectBodyText text='DIGITAL_DRAMS.FLOWS.DESCRIPTION' />
          </div>
          {renderActions()}
          <div>
            <ProjectSectionTitle type={H2} title='DIGITAL_DRAMS.FLOWS.WIREFRAMES.TITLE' styling='pb-4' />
            <ProjectBodyText text='DIGITAL_DRAMS.FLOWS.WIREFRAMES.DESCRIPTION' styling='pb-6' />
            <div className="grid grid-cols-[2fr_3fr] gap-6 sm:grid-cols-1">
              {renderImage('wireframe-home.jpg', 'Wireframe of the home page')}
              {renderImage('wireframe-cart.jpg', 'Wireframe of the cart')}
            </div>
            <div className="pt-6">
              {renderImage('wireframe-collection.jpg', 'Wireframe of My Collection')}
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.PROTOTYPE.TITLE' />
          <ProjectBodyText text='DIGITAL_DRAMS.PROTOTYPE.DESCRIPTION' styling='pb-6' />
          <video
            className="w-full rounded-2xl shadow-lg"
            src={`${imgPathBase}prototype.mp4`}
            poster={`${imgPathBase}prototype-poster.jpg`}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={t('DIGITAL_DRAMS.PROTOTYPE.TITLE')}
          />
        </div>
        <div className="flex flex-col gap-16">
          <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.DESIGN.TITLE' styling='!pb-0 -mb-8' />
          {renderDecision('TRUST', [
            { image: 'how-it-works.jpg', alt: 'How it works page' },
            { image: 'how-fractional.jpg', alt: 'How fractional works page' },
            { image: 'detail.jpg', alt: 'Bottle detail page' },
          ])}
          {renderDecision('TRACKER', [
            { image: 'tracker-ready.jpg', alt: 'Tracker: ready to ship' },
            { image: 'tracker-transit.jpg', alt: 'Tracker: bottle in transit' },
            { image: 'tracker-auth.jpg', alt: 'Tracker: authentication in progress' },
            { image: 'tracker-digitised.jpg', alt: 'Bottle digitised, ready to request fractions' },
          ])}
          {renderDecision('REDEEM', [
            { image: 'redeem.jpg', alt: 'Redeem bottle button at 100% ownership' },
            { image: 'how-redeem.jpg', alt: 'How redeem works page' },
          ])}
          {renderDecision('KYC', [{ image: 'kyc.jpg', alt: 'KYC flow after login, and when the user tries to buy' }])}
          {renderDecision('OFFERS', [
            { image: 'offer.jpg', alt: 'Make an offer modal' },
            { image: 'offers.jpg', alt: 'Received offers and their states' },
          ])}
          {renderDecision('COLLECTION', [{ image: 'collection.jpg', alt: 'My Collection' }])}
          {renderDecision('DASHBOARD', [{ image: 'dashboard.jpg', alt: 'Analytics section inside My collection' }])}
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='DIGITAL_DRAMS.NEXT.TITLE' />
          <ProjectBodyText text='DIGITAL_DRAMS.NEXT.DESCRIPTION' styling='pb-6' />
          <BulletList
            styling='text-body'
            list={[
              'DIGITAL_DRAMS.NEXT.QA',
              'DIGITAL_DRAMS.NEXT.WCAG',
              'DIGITAL_DRAMS.NEXT.METRICS',
            ]}
          />
          <ProjectBubble
            title='DIGITAL_DRAMS.NEXT.MEASURE.TITLE'
            styling='mt-4'
          >
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'DIGITAL_DRAMS.NEXT.MEASURE.M_1',
                'DIGITAL_DRAMS.NEXT.MEASURE.M_2',
                'DIGITAL_DRAMS.NEXT.MEASURE.M_3',
                'DIGITAL_DRAMS.NEXT.MEASURE.M_4',
                'DIGITAL_DRAMS.NEXT.MEASURE.M_5',
              ]}
            />
          </ProjectBubble>
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

export default DigitalDrams;
