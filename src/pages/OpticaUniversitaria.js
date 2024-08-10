import { useTranslation } from "react-i18next";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import { H1 } from "../utils/constants";
import BulletList from "../components/BulletList";
import ProjectBubble from "../components/ProjectBubble";

const OpticaUniversitaria = () => {

  const { t } = useTranslation();

  const imgPathBase = "/assets/imgs/optica-universitaria/";

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-optica-yellow"
        titleKey="OPTICA.TITLE"
        subtitleKey="OPTICA.SUBTITLE"
        titleColor="text-black"
        heroImage="optica-universitaria/hero.png"
      />
      <ProjectContentWithMargins styling="pt-40 sm:pt-16">
        <ProjectDetails
          projectTitle={t('OPTICA.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.UXUI'
          ]}
          team={[
            {
              count: 1,
              role: 'PROJECT_COMMON.TEAM.UXUI_DESIGN'
            }
          ]}
          tools={[
            'Figma',
            'Miro',
            'Protopie'
          ]}
          timing={[]}
          process={['emphatize', 'specify', 'ideate', 'handoff', 'verify']}
        />
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.CONTEXT.TITLE' />
          <ProjectBodyText text='OPTICA.CONTEXT.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.BUSINESS.TITLE' />
          <ProjectBodyText text='OPTICA.BUSINESS.DESCRIPTION' />
          <BulletList
            list={[
              'OPTICA.BUSINESS.KEY_GOALS.KG_1',
              'OPTICA.BUSINESS.KEY_GOALS.KG_2',
              'OPTICA.BUSINESS.KEY_GOALS.KG_3',
              'OPTICA.BUSINESS.KEY_GOALS.KG_4',
            ]}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.UX_RESEARCH.TITLE' />
          <ProjectBodyText text='OPTICA.UX_RESEARCH.DESCRIPTION' />
          <BulletList
            list={[
              'OPTICA.UX_RESEARCH.RESEARCH.RESEARCH_1',
              'OPTICA.UX_RESEARCH.RESEARCH.RESEARCH_2',
              'OPTICA.UX_RESEARCH.RESEARCH.RESEARCH_3',
              'OPTICA.UX_RESEARCH.RESEARCH.RESEARCH_4',
            ]}
          />
          <ProjectBubble
            title='OPTICA.UX_RESEARCH.KEY_INSIGHTS.TITLE'
          >
            <BulletList
              list={[
                'OPTICA.UX_RESEARCH.KEY_INSIGHTS.DESC',
                'OPTICA.UX_RESEARCH.KEY_INSIGHTS.DESC_2',
                'OPTICA.UX_RESEARCH.KEY_INSIGHTS.DESC_3',
                'OPTICA.UX_RESEARCH.KEY_INSIGHTS.DESC_4',
              ]}
            />
          </ProjectBubble>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.DESIGN_PROCESS.TITLE' />
          <BulletList
            list={[
              'OPTICA.DESIGN_PROCESS.DESC',
              'OPTICA.DESIGN_PROCESS.DESC_2',
              'OPTICA.DESIGN_PROCESS.DESC_3',
              'OPTICA.DESIGN_PROCESS.DESC_4',
            ]}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.VISUAL_DESIGN.TITLE' />
          <BulletList
            list={[
              'OPTICA.VISUAL_DESIGN.DESC',
              'OPTICA.VISUAL_DESIGN.DESC_2',
              'OPTICA.VISUAL_DESIGN.DESC_3',
              'OPTICA.VISUAL_DESIGN.DESC_4',
            ]}
          />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.ADDITIONAL_FEATURES.TITLE' />
          <BulletList
            list={[
              'OPTICA.ADDITIONAL_FEATURES.DESC',
              'OPTICA.ADDITIONAL_FEATURES.DESC_2',
              'OPTICA.ADDITIONAL_FEATURES.DESC_3',
            ]}
          />
        </div>
      </ProjectContentWithMargins>
      <div>
        <img className="w-full" src={`${imgPathBase}additional-features.png`} alt="try-on-glasses" />
      </div>
      <ProjectContentWithMargins>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.FACE_SHAPE.TITLE' />
          <div className="w-3/5">
            <ProjectBodyText text='OPTICA.FACE_SHAPE.DESC' />
          </div>
        </div>
      </ProjectContentWithMargins>
      <div className="pt-16">
        <img className="w-full" src={`${imgPathBase}face-shape.png`} alt="try-on-glasses" />
      </div>
      <div className="p-16 flex flex-row sm:flex-col-reverse items-center gap-8 sm:p-8">
        <div className="">
          {/* TODO: add video */}
          <img className="w-full" src={`/assets/imgs/homepage/optica-universitaria.png`} alt="try-on-glasses" />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='OPTICA.SUGGESTION.TITLE' />
          <ProjectBodyText text='OPTICA.SUGGESTION.DESC' />
        </div>
      </div>
      <div className="relative p-20 flex flex-row sm:flex-col gap-8 sm:p-8">
        <div className="bg-optica-salmon w-full h-screen absolute top-0 left-0"></div>
        <div className="w-1/3 sm:w-full z-10">
          <ProjectSectionTitle type={H1} title='OPTICA.SHOP.TITLE' styling='text-white' />
          <ProjectBodyText text='OPTICA.SHOP.DESC' styling='text-white font-semibold' />
        </div>
        <div className="w-2/3 sm:w-full z-10">
          <img className="w-full" src={`${imgPathBase}shop-online.png`} alt="shop-online" />
        </div>
      </div>
      <div className="relative p-20 flex flex-col gap-8 sm:p-8">
        <div className="bg-optica-gray w-full h-5/6 absolute top-32 left-0 sm:top-0 sm:h-full"></div>
        <div className="flex flex-row sm:flex-col-reverse items-center gap-32 sm:gap-8">
          <div className="w-2/3 sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-1.png`} alt="purchase-flow" />
          </div>
          <div className="w-full max-w-md sm:w-full z-10">
            <ProjectSectionTitle type={H1} title='OPTICA.PURCHASE_FLOW.TITLE' />
            <ProjectBodyText text='OPTICA.PURCHASE_FLOW.DESC' styling='font-semibold' />
          </div>
        </div>
        <div className="z-10 flex flex-wrap justify-center gap-12 sm:gap-6">
          <div className="w-[48%] sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-1.png`} alt="purchase-flow" />
          </div>
          <div className="w-[48%] sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-2.png`} alt="purchase-flow" />
          </div>
          <div className="w-[48%] sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-3.png`} alt="purchase-flow" />
          </div>
          <div className="w-[48%] sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-4.png`} alt="purchase-flow" />
          </div>
          <div className="w-[48%] sm:w-full z-10">
            <img className="w-full" src={`${imgPathBase}purchase-flow-5.png`} alt="purchase-flow" />
          </div>
        </div>
      </div>
      <ProjectContentWithMargins>
        <div className="pt-16 sm:pt-12">
          <ProjectSectionTitle type={H1} title='OPTICA.PROTOTYPE' />
        </div>
      </ProjectContentWithMargins>
    </div>
  )
}

export default OpticaUniversitaria;