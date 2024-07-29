import { useTranslation } from "react-i18next";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectLink from "../components/ProjectLink";
import { AYOBA_LINK, BLUE_H3, H1, H2, H2_UNDERLINE, H3 } from "../utils/constants";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import ProjectBubble from "../components/ProjectBubble";
import BulletList from "../components/BulletList";
import ProjectFooter from "../components/ProjectFooter";

const AyobaProfile = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/ayoba-profile/";

  return (
    <div className="bg-white">
      <ProjectHero 
        bkgColor='bg-ayoba-light-blue'
        titleKey='AYOBA.TITLE'
        titleColor='text-dark-blue'
        subtitleKey='AYOBA.PROFILE.SUBTITLE'
        heroImage='ayoba-profile/hero.png'
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
          <ProjectSectionTitle type={H1} title='AYOBA.PROFILE.CONTEXT.TITLE' />
          <ProjectBodyText text='AYOBA.PROFILE.CONTEXT.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AYOBA.PROFILE.BENCHMARK.TITLE' />
          <ProjectBodyText text='AYOBA.PROFILE.BENCHMARK.DESCRIPTION' />
          <img className="w-full pt-4" src={`${imgPathBase}benchmark.png`} alt="benchmark" />
        </div>
        <ProjectBubble
          title={'AYOBA.PROFILE.BENCHMARK.FINDINGS.TITLE'}
        >
          <div className="flex flex-col gap-4">
            <div>
              <ProjectSectionTitle type={H3} title={'AYOBA.PROFILE.BENCHMARK.FINDINGS.PERSONALIZATION.TITLE'} />
              <ProjectBodyText text={'AYOBA.PROFILE.BENCHMARK.FINDINGS.PERSONALIZATION.DESC'} />
            </div>
            <div>
              <ProjectSectionTitle type={H3} title={'AYOBA.PROFILE.BENCHMARK.FINDINGS.PRIVACY.TITLE'} />
              <ProjectBodyText text={'AYOBA.PROFILE.BENCHMARK.FINDINGS.PRIVACY.DESC'} />
            </div>
            <div>
              <ProjectSectionTitle type={H3} title={'AYOBA.PROFILE.BENCHMARK.FINDINGS.DISCOVERABILITY.TITLE'} />
              <ProjectBodyText text={'AYOBA.PROFILE.BENCHMARK.FINDINGS.DISCOVERABILITY.DESC'} />
            </div>
          </div>
        </ProjectBubble>
        <div>
          <ProjectSectionTitle type={H1} title={'AYOBA.PROFILE.BENCHMARK.AUDIT.TITLE'} />
          <img className="w-full" src={`${imgPathBase}audit.png`} alt="audit" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title={'AYOBA.PROFILE.BENCHMARK.BUSINESS.TITLE'} />
          <img className="w-full" src={`${imgPathBase}business-strategy.png`} alt="business-strategy" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title={'AYOBA.PROFILE.BENCHMARK.PRODUCT.TITLE'} />
          <img className="w-full" src={`${imgPathBase}product.png`} alt="product" />
          <ProjectSectionTitle type={H2} title={'AYOBA.PROFILE.BENCHMARK.PRODUCT.STAKEHOLDERS'} />
          <img className="w-full" src={`${imgPathBase}stakeholders.png`} alt="stakeholders" />
        </div>
        <div className="flex flex-col gap-4">
          <ProjectSectionTitle type={H1} title={'AYOBA.PROFILE.UX_RESEARCH.TITLE'} />
          <div>
            <ProjectSectionTitle type={H2} title={'AYOBA.PROFILE.UX_RESEARCH.OBJECTIVES.TITLE'} />
            <ProjectBodyText text={'AYOBA.PROFILE.UX_RESEARCH.OBJECTIVES.DESCRIPTION'} />
          </div>
          <div>
            <ProjectSectionTitle type={H2} title={'AYOBA.PROFILE.UX_RESEARCH.CURRENT_PROFILE.TITLE'} />
            <ProjectBodyText text={'AYOBA.PROFILE.UX_RESEARCH.CURRENT_PROFILE.DESCRIPTION'} />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ProjectSectionTitle type={H1} title={'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.TITLE'} />
          <ProjectBodyText text={'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.DESCRIPTION'} />
          <ProjectBubble
            title={'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.TITLE'}
          >
            <BulletList
              list={[
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC_2',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC_3',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC_4',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC_5',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.PAIN_POINTS.DESC_6'
            ]} />
          </ProjectBubble>
          <ProjectBubble
            title={'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.INSIGHTS.TITLE'}
          >
            <BulletList
              list={[
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.INSIGHTS.DESC',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.INSIGHTS.DESC_2',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.INSIGHTS.DESC_3',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.INSIGHTS.DESC_4'
            ]} />
          </ProjectBubble>
          <ProjectBubble
            title={'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.TITLE'}
          >
            <BulletList
              list={[
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC_2',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC_3',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC_4',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC_5',
              'AYOBA.PROFILE.UX_RESEARCH.INSIGHTS.SOLUTIONS.DESC_6'
            ]} />
          </ProjectBubble>
        </div>
      </ProjectContentWithMargins>
      <div className="px-16 pt-20 pb-16 sm:px-8">
        <ProjectSectionTitle type={H1} title='AYOBA.PROFILE.UX_RESEARCH.DESIGNS.TITLE' />
        <div className="flex flex-row gap-16 justify-evenly sm:flex-col">
          <div className="flex flex-col gap-4 items-center">
            <img className="w-4/5 sm:w-full" src={`${imgPathBase}up-and.png`} alt="user-profile-android" />
            <div className="font-semibold">
              {t('AYOBA.PROFILE.UX_RESEARCH.DESIGNS.USERPROFILE_PLATFORM', {platform: 'AND'})}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img className="w-4/5 sm:w-full" src={`${imgPathBase}up-ios.png`} alt="user-profile-ios" />
            <div className="font-semibold">
              {t('AYOBA.PROFILE.UX_RESEARCH.DESIGNS.USERPROFILE_PLATFORM', {platform: 'iOS'})}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img className="w-4/5 sm:w-full" src={`${imgPathBase}gp-and.png`} alt="group-profile-android" />
            <div className="font-semibold">
              {t('AYOBA.PROFILE.UX_RESEARCH.DESIGNS.GROUPPROFILE_PLATFORM', {platform: 'AND'})}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img className="w-4/5 sm:w-full" src={`${imgPathBase}gp-ios.png`} alt="group-profile-ios" />
            <div className="font-semibold">
              {t('AYOBA.PROFILE.UX_RESEARCH.DESIGNS.GROUPPROFILE_PLATFORM', {platform: 'iOS'})}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-gray px-16 pt-20 pb-16 sm:px-8 sm:pt-10 flex flex-col gap-16 sm:gap-8">
        <ProjectSectionTitle type={H2_UNDERLINE} title={'AYOBA.PROFILE.UX_RESEARCH.DESIGNS.USERPROFILE_PLATFORM'} variables={{platform: 'AND'}} />
        <img className="w-full" src={`${imgPathBase}userprofile-android.png`} alt="user-profile-android-flows" />
        <img className="w-full" src={`${imgPathBase}removesocial-android.png`} alt="user-profile-remove-social-android-flows" />
        <img className="w-full" src={`${imgPathBase}editprofileimg-android.png`} alt="user-profile-edit-profile-image-android-flows" />
        <img className="w-full" src={`${imgPathBase}editprofile-android.png`} alt="user-profile-edit-profile-android-flows" />
        <img className="w-full" src={`${imgPathBase}contactprofile-android.png`} alt="user-profile-contact-profile-android-flows" />
      </div>
      <div className="px-16 pt-20 pb-16 sm:px-8 sm:pt-10 flex flex-col gap-16 sm:gap-8">
        <ProjectSectionTitle type={H2_UNDERLINE} title={'AYOBA.PROFILE.UX_RESEARCH.DESIGNS.USERPROFILE_PLATFORM'} variables={{platform: 'iOS'}} />
        <img className="w-full" src={`${imgPathBase}userprofile-ios.png`} alt="user-profile-ios-flows" />
        <img className="w-full" src={`${imgPathBase}contactprofile-ios.png`} alt="user-profile-contact-profile-ios-flows" />
      </div>
      <div className="px-16 pt-20 pb-16 sm:px-8 sm:pt-10 flex flex-col gap-16 sm:gap-8 items-center">
        <ProjectSectionTitle type={H2_UNDERLINE} title={'AYOBA.PROFILE.UX_RESEARCH.DESIGNS.GROUPPROFILE'} variables={{platform: 'iOS'}} />
        <img className="w-4/5 sm:w-full" src={`${imgPathBase}groupprofile.png`} alt="group-profile-flows" />
      </div>
      <ProjectFooter />
    </div>
  )
}

export default AyobaProfile;