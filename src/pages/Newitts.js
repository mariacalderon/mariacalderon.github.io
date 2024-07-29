import { useTranslation } from "react-i18next";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectLink from "../components/ProjectLink";
import { BLUE_H3, H1, H4, NEWITTS_FIGMA_LINK, NEWITTS_LINK, NIKE_LINK, SPORTSDIRECT_LINK, SUBTITLE, TARGET_LINK } from "../utils/constants";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import ProjectBubble from "../components/ProjectBubble";
import BulletList from "../components/BulletList";

import { ReactComponent as ExternalLinkIcon } from '../assets/icons/external-link.svg';

const Newitts = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/newitts/";

  const navigateTo = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="bg-white">
      <ProjectHero 
        bkgColor='bg-newitts-gray'
        titleKey='NEWITTS.TITLE'
        subtitleKey=''
        heroImage='newitts/hero.png'
      />
      <ProjectContentWithMargins styling='pt-40 pb-36 sm:pt-16 sm:pb-16'>
        <ProjectDetails 
          projectTitle={t('AYOBA.PROFILE.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.UXUI'
          ]}
          team={[
            {
              count: 2,
              role: 'PROJECT_COMMON.TEAM.UXUI_DESIGN'
            }
          ]}
          tools={[
            'Figma Jam',
            'Figma',
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
          <ProjectLink url={NEWITTS_LINK} />
          <ProjectSectionTitle type={BLUE_H3} title='NEWITTS.OVERVIEW.TITLE' />
          <ProjectBodyText text='NEWITTS.OVERVIEW.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.PROJECT.TITLE' />
          <div className="flex flex-col gap-4">
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.MOBILE_FIRST.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.MOBILE_FIRST.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.NAVIGATION.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.NAVIGATION.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.ARCHITECTURE.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.ARCHITECTURE.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.CHECKOUT.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.CHECKOUT.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.BRANDING.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.BRANDING.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.UX.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.UX.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle title='NEWITTS.PROJECT.UI.TITLE' />
              <ProjectBodyText text='NEWITTS.PROJECT.UI.DESCRIPTION' />
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.CHALLENGE.TITLE' />
          <BulletList 
            ordered={true} 
            list={[
              'NEWITTS.CHALLENGE.PRIMARY.DESCRIPTION',
              'NEWITTS.CHALLENGE.SECONDARY.DESCRIPTION'
            ]}  
          />
        </div>
        <div className="flex flex-row gap-4 sm:flex-col">
          <div className="flex flex-col w-1/3 sm:w-full">
            <ProjectSectionTitle type={H1} title='NEWITTS.PROCESS.TITLE' />
            <ProjectBodyText text='NEWITTS.PROCESS.DESCRIPTION' styling='font-bold' />
          </div>
          <div className="relative w-2/3 sm:w-full">
            <img className="w-full" src={`${imgPathBase}process-interview.png`} alt='qualitative-research' />
            <div className="absolute bottom-0 px-12 pb-16 text-white sm:pb-4 sm:px-3">
              <ProjectSectionTitle type={H4} title='NEWITTS.PROCESS.RESEARCH.TITLE' />
              <ProjectBodyText text='NEWITTS.PROCESS.RESEARCH.DESCRIPTION' styling='text-white text-sm' />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 sm:flex-col">
          <div className="flex flex-col gap-2 w-1/3 sm:w-full">
            <img className="w-full" src={`${imgPathBase}process-audit.png`} alt='qualitative-research'/>
            <ProjectSectionTitle type={H4} title='NEWITTS.PROCESS.WEB_AUDIT.TITLE' />
            <ProjectBodyText text='NEWITTS.PROCESS.WEB_AUDIT.DESCRIPTION' styling='text-sm' />
          </div>
          <div className="flex flex-col gap-2 w-1/3 sm:w-full">
            <img className="w-full" src={`${imgPathBase}process-benchmark.png`} alt='qualitative-research'/>
            <ProjectSectionTitle type={H4} title='NEWITTS.PROCESS.BENCHMARK.TITLE' />
            <ProjectBodyText text='NEWITTS.PROCESS.BENCHMARK.DESCRIPTION' styling='text-sm' />
          </div>
          <div className="flex flex-col gap-2 w-1/3 sm:w-full">
            <img className="w-full" src={`${imgPathBase}process-wireframe.png`} alt='qualitative-research'/>
            <ProjectSectionTitle type={H4} title='NEWITTS.PROCESS.WIREFRAMES.TITLE' />
            <ProjectBodyText text='NEWITTS.PROCESS.WIREFRAMES.DESCRIPTION' styling='text-sm' />
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.INTERVIEWS.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.INTERVIEWS.SUBTITLE' />
            <ProjectBodyText text='NEWITTS.INTERVIEWS.DESCRIPTION' />
          </div>
          <img className="w-full" src={`${imgPathBase}interviews.png`} alt="interview-conclusions" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.AUDIT.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.AUDIT.SUBTITLE' />
            <ProjectBodyText text='NEWITTS.AUDIT.DESCRIPTION' />
          </div>
          <BulletList
            ordered={true}
            list={[
              'NEWITTS.AUDIT.ANALYSIS',
              'NEWITTS.AUDIT.JOURNEY',
              'NEWITTS.AUDIT.COMPATIBILITY'
            ]}
          />
          <img className="w-full" src={`${imgPathBase}audit.png`} alt="interview-conclusions" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.INSIGHTS.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.INSIGHTS.SUBTITLE' />
          </div>
          <div className="flex flex-col gap-8">
            <ProjectBubble
              title='NEWITTS.INSIGHTS.HOMEPAGE.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.HOMEPAGE.DESC_1',
                  'NEWITTS.INSIGHTS.HOMEPAGE.DESC_2',
                  'NEWITTS.INSIGHTS.HOMEPAGE.DESC_3',
                  'NEWITTS.INSIGHTS.HOMEPAGE.DESC_4'
                ]}
              />
            </ProjectBubble>
            <ProjectBubble
              title='NEWITTS.INSIGHTS.FEATURES.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.FEATURES.DESC_1',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_2',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_3',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_4',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_5',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_6',
                  'NEWITTS.INSIGHTS.FEATURES.DESC_7'
                ]}
              />
            </ProjectBubble>
            <ProjectBubble
              title='NEWITTS.INSIGHTS.PRODUCT.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.PRODUCT.DESC_1',
                  'NEWITTS.INSIGHTS.PRODUCT.DESC_2'
                ]}
              />
            </ProjectBubble>
            <ProjectBubble
              title='NEWITTS.INSIGHTS.CATEGORY.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.CATEGORY.DESC_1',
                  'NEWITTS.INSIGHTS.CATEGORY.DESC_2',
                  'NEWITTS.INSIGHTS.CATEGORY.DESC_3',
                  'NEWITTS.INSIGHTS.CATEGORY.DESC_4',
                  'NEWITTS.INSIGHTS.CATEGORY.DESC_5'
                ]}
              />
            </ProjectBubble>
            <ProjectBubble
              title='NEWITTS.INSIGHTS.CHECKOUT.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.CHECKOUT.DESC_1',
                  'NEWITTS.INSIGHTS.CHECKOUT.DESC_2'
                ]}
              />
            </ProjectBubble>
            <ProjectBubble
              title='NEWITTS.INSIGHTS.RESPONSIVE.TITLE'
            >
              <BulletList
                list={[
                  'NEWITTS.INSIGHTS.RESPONSIVE.DESC_1'
                ]}
              />
            </ProjectBubble>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.BENCHMARK.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <div>
              <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.BENCHMARK.SUBTITLE' />
              <span className="cursor-pointer text-link font-semibold text-xl sm:text-lg" onClick={() => {
                navigateTo(SPORTSDIRECT_LINK)
              }}>Sports Direct</span>
              <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.BENCHMARK.SUBTITLE_2' />
              <span className="cursor-pointer text-link font-semibold text-xl sm:text-lg" onClick={() => {
                navigateTo(NIKE_LINK)
              }}>Nike UK</span>
              <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.BENCHMARK.SUBTITLE_3' />
              <span className="cursor-pointer text-link font-semibold text-xl sm:text-lg" onClick={() => {
                navigateTo(TARGET_LINK)
              }}>Target.com</span>.
            </div>
            <ProjectBodyText text='NEWITTS.BENCHMARK.DESCRIPTION' />
          </div>
          <div className="flex flex-row gap-8 sm:flex-col">
            <div className="w-1/3 sm:w-full cursor-pointer" onClick={() => {
              navigateTo(SPORTSDIRECT_LINK)
            }}>
              <ProjectBubble>
                <img className="w-full" src={`${imgPathBase}benchmarking-sportsdirect.png`} alt="sports-direct" />
              </ProjectBubble>
            </div>
            <div className="w-1/3 sm:w-full cursor-pointer" onClick={() => {
              navigateTo(NIKE_LINK)
            }}>
              <ProjectBubble>
                <img className="w-full" src={`${imgPathBase}benchmarking-nike.png`} alt="nike" />
              </ProjectBubble>
            </div>
            <div className="w-1/3 sm:w-full cursor-pointer" onClick={() => {
              navigateTo(TARGET_LINK)
            }}>
              <ProjectBubble>
                <img className="w-full" src={`${imgPathBase}benchmarking-target.png`} alt="target" />
              </ProjectBubble>
            </div>
          </div>
          <ProjectBubble
            title='NEWITTS.BENCHMARK.KEY_FINDINGS.TITLE'
          >
            <BulletList
              list={[
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_1',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_2',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_3',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_4',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_5',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_6',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_7',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_8',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_9',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_10',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_11',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_12',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_13',
                'NEWITTS.BENCHMARK.KEY_FINDINGS.DESC_14'
              ]}
            />
          </ProjectBubble>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.WIREFRAMES.TITLE' />
          <ProjectBodyText text='NEWITTS.WIREFRAMES.DESCRIPTION' />
          <img className="w-full pt-8" src={`${imgPathBase}wireframes.png`} alt="wireframes" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.IDEATION.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.IDEATION.SUBTITLE' />
            <ProjectBodyText text='NEWITTS.IDEATION.DESCRIPTION' />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H4} title='NEWITTS.IDEATION.HERO_EXAMPLES' />
            <img className="w-full" src={`${imgPathBase}ideation-hero.png`} alt="hero-examples" />
            <ProjectSectionTitle type={H4} title='NEWITTS.IDEATION.CATEGORY_EXAMPLES.TITLE' />
            <ProjectBodyText text='NEWITTS.IDEATION.CATEGORY_EXAMPLES.DESCRIPTION' />
            <img className="w-full" src={`${imgPathBase}ideation-category.png`} alt="category-examples" />
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.TYPOGRAPHY.TITLE' />
          <div className="w-3/5 flex flex-col gap-4 pb-8 sm:w-full">
            <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.TYPOGRAPHY.SUBTITLE' />
          </div>
          <img className="w-full" src={`${imgPathBase}typography.png`} alt="typography" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='NEWITTS.UXUI.TITLE' />
          <div className="flex flex-row items-center gap-4 pb-8 sm:w-full sm:flex-col">
            <div className="w-3/5 sm:w-full">
              <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.UXUI.SUBTITLE' />
              <span className="cursor-pointer underline font-medium text-xl sm:text-lg" onClick={() => {
                navigateTo(NEWITTS_FIGMA_LINK)
              }}>
                {t('NEWITTS.UXUI.SUBTITLE_2')}
              </span>
              <ProjectSectionTitle type={SUBTITLE} title='NEWITTS.UXUI.SUBTITLE_3' />
            </div>
            <div className="w-2/5 flex justify-center cursor-pointer" onClick={() => {
              navigateTo(NEWITTS_FIGMA_LINK)
            }}>
              <ExternalLinkIcon />
            </div>
          </div>
          <img className="w-full" src={`${imgPathBase}design.png`} alt="design" />
        </div>
      </ProjectContentWithMargins>
    </div>
  )
}

export default Newitts;