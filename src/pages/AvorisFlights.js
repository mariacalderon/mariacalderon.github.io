import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectHero from "../components/ProjectHero";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ProjectDetails from "../components/ProjectDetails";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import ProjectBubble from "../components/ProjectBubble";
import ProjectFooter from "../components/ProjectFooter";
import { BLUE_H3, H1 } from "../utils/constants";

const AvorisFlights = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor="bg-avoris-cream"
        titleKey="AVORIS_FLIGHTS.TITLE"
        subtitleKey="AVORIS_FLIGHTS.SUBTITLE"
        titleColor="text-black"
      />
      <ProjectContentWithMargins styling="pt-40 pb-32 sm:pt-16">
        <ProjectDetails
          projectTitle={t('AVORIS_FLIGHTS.SUBTITLE')}
          roles={[
            'PROJECT_COMMON.ROLES.PRODUCT_DESIGNER'
          ]}
          team={[]}
          tools={[
            'Figma'
          ]}
          timing={[]}
          process={[]}
        />
        <div>
          <ProjectSectionTitle type={BLUE_H3} title='AVORIS_FLIGHTS.INTRO.OVERVIEW' />
          <ProjectBodyText text='AVORIS_FLIGHTS.INTRO.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.CONTEXT.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.CONTEXT.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.PROBLEM.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.PROBLEM.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.PROCESS.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.PROCESS.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.SOLUTION.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.SOLUTION.DESCRIPTION' />
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
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.RESULTS.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.RESULTS.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AVORIS_FLIGHTS.LEARNINGS.TITLE' />
          <ProjectBodyText text='AVORIS_FLIGHTS.LEARNINGS.DESCRIPTION' />
        </div>
      </ProjectContentWithMargins>
      <ProjectFooter />
    </div>
  )
}

export default AvorisFlights;
