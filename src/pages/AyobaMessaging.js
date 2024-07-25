import { useTranslation } from "react-i18next";
import ProjectDetails from "../components/ProjectDetails";
import ProjectHero from "../components/ProjectHero";
import ProjectLink from "../components/ProjectLink";
import { AYOBA_LINK, BLUE_H3, H1, H2, H2_BUBBLE, H2_UNDERLINE, H3 } from "../utils/constants";
import ProjectSectionTitle from "../components/ProjectSectionTitle";
import ProjectBodyText from "../components/ProjectBodyText";
import BulletList from "../components/BulletList";
import ProjectBubble from "../components/ProjectBubble";
import ProjectContentWithMargins from "../components/ProjectContentWithMargin";
import ImageTextItem from "../components/ImageTextItem";
import ProjectFooter from "../components/ProjectFooter";

const AyobaMessaging = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <ProjectHero
        bkgColor='bg-ayoba-blue'
        titleKey='AYOBA.TITLE'
        subtitleKey='AYOBA.MESSAGING.SUBTITLE'
        heroImage='ayoba-messaging/hero.png'
      />
      <ProjectContentWithMargins styling='pt-40 sm:pt-16'>
        <ProjectDetails 
          projectTitle={t('AYOBA.MESSAGING.SUBTITLE')}
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
              count: 5,
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
              count: 4,
              timeUnit: 'PROJECT_COMMON.TIMING.MONTHS'
            },
            {
              count: 0,
              timeUnit: 'PROJECT_COMMON.TIMING.ITERATIONS'
            },
          ]}
          process={['audit', 'emphatize', 'specify', 'ideate', 'handoff', 'verify']}
        />
        <div>
          <ProjectLink url={AYOBA_LINK} />
          <ProjectSectionTitle type={BLUE_H3} title='AYOBA.OVERVIEW.TITLE' />
          <ProjectBodyText text='AYOBA.OVERVIEW.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.CONTEXT.TITLE' />
          <ProjectBodyText text='AYOBA.MESSAGING.CONTEXT.DESCRIPTION' />
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.CHALLENGE.TITLE' />
          <div className="flex flex-col gap-6">
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.CHALLENGE.PRIMARY_CHALLENGE.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.CHALLENGE.PRIMARY_CHALLENGE.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.CHALLENGE.TEAM_COLLABORATION.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.CHALLENGE.TEAM_COLLABORATION.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.CHALLENGE.ACCESSIBILITY.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.CHALLENGE.ACCESSIBILITY.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.CHALLENGE.LEARNABILITY.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.CHALLENGE.LEARNABILITY.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.CHALLENGE.PLATFORMS.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.CHALLENGE.PLATFORMS.DESCRIPTION' />
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.APPROACH.TITLE' />
          <div className="flex flex-col gap-6">
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.AUDIT.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.AUDIT.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.RESEARCH.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.RESEARCH.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.PRODUCT_PYRAMID.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.PRODUCT_PYRAMID.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.WORKSHOP.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.WORKSHOP.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.IDEATION.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.IDEATION.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.PROTOTYPES.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.PROTOTYPES.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.FINAL_ITERATION.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.FINAL_ITERATION.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.SYSTEMS.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.SYSTEMS.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.HANDOFF.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.HANDOFF.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.QA.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.QA.DESCRIPTION' />
            </div>
            <div>
              <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.APPROACH.METRICS.TITLE' />
              <ProjectBodyText text='AYOBA.MESSAGING.APPROACH.METRICS.DESCRIPTION' />
            </div>
          </div>
        </div>
        <div>
          <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.AUDIT.TITLE' />
          <ProjectBodyText text='AYOBA.MESSAGING.AUDIT.DESCRIPTION' />
          <BulletList styling='text-body pt-4' list={[
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.USERPROFILE',
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.PRINCIPLES',
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.INTERACTION',
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.COGNITIVE',
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.USABILITY',
            'AYOBA.MESSAGING.AUDIT.BULLET_LIST.ACCESSIBILITY',
          ]}/>
        </div>
        <div className="flex flex-col gap-8">
          <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.AUDIT.LEGEND.TITLE' />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
              <div className="w-56 text-white bg-red py-2 px-8 rounded-full">
                {t('AYOBA.MESSAGING.AUDIT.LEGEND.CRITICAL.TITLE')}
              </div>
              <ProjectBodyText text='AYOBA.MESSAGING.AUDIT.LEGEND.CRITICAL.DESCRIPTION' />
            </div>
            <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
              <div className="w-56 text-white bg-yellow py-2 px-8 rounded-full">
                {t('AYOBA.MESSAGING.AUDIT.LEGEND.AVERAGE.TITLE')}
              </div>
              <ProjectBodyText text='AYOBA.MESSAGING.AUDIT.LEGEND.AVERAGE.DESCRIPTION' />
            </div>
            <div className="flex flex-row gap-3 items-center text-center sm:flex-col">
              <div className="w-56 text-white bg-green py-2 px-8 rounded-full">
                {t('AYOBA.MESSAGING.AUDIT.LEGEND.LOW.TITLE')}
              </div>
              <ProjectBodyText text='AYOBA.MESSAGING.AUDIT.LEGEND.LOW.DESCRIPTION' />
            </div>
          </div>
          <div>
            <img className="w-full" src="/assets/imgs/ayoba-messaging/audit-legend.png" alt="audit-legend" />
          </div>
          <ProjectBubble title='AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.TITLE'>
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_2',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_3',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_4',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_5',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_6',
                'AYOBA.MESSAGING.AUDIT.KEY_INSIGHTS.DESC_7',
              ]}
            />
          </ProjectBubble>
        </div>
        <div className="flex flex-col gap-4">
          <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.ARCHITECTURE.TITLE' />
          <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.ARCHITECTURE.SITE_MAP.TITLE' />
          <ProjectBodyText text='AYOBA.MESSAGING.ARCHITECTURE.SITE_MAP.DESCRIPTION' />
        </div>
      </ProjectContentWithMargins>
      <img className="w-full" src="/assets/imgs/ayoba-messaging/information-architecture.png" alt="information-architecture" />
      <ProjectContentWithMargins styling='pb-16'>
        <div className="flex flex-col gap-6">
          <div>
            <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.UX_RESEARCH.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.UX_RESEARCH.DESCRIPTION' />
          </div>
          <div>
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.DEMOGRAPHICS.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.UX_RESEARCH.DEMOGRAPHICS.DESCRIPTION' />
            <div className="flex flex-row justify-center items-center p-10 gap-64 sm:flex-col sm:gap-4">
              <img className="w-[20%]" src="/assets/imgs/ayoba-messaging/demographic-1.png" alt="demographic-1" />
              <img className="w-[20%]" src="/assets/imgs/ayoba-messaging/demographic-2.png" alt="demographic-2" />
            </div>
            <ProjectBodyText text='AYOBA.MESSAGING.UX_RESEARCH.DEMOGRAPHICS.DESCRIPTION_2' />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.FEATURES.TITLE' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/most-used-features.png" alt="most-used-features-by-country" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.BEHAVIOUR.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.UX_RESEARCH.BEHAVIOUR.DESCRIPTION' />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.MEDIA_BEHAVIOUR.TITLE' />
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'AYOBA.MESSAGING.UX_RESEARCH.MEDIA_BEHAVIOUR.DESC',
                'AYOBA.MESSAGING.UX_RESEARCH.MEDIA_BEHAVIOUR.DESC_2',
                'AYOBA.MESSAGING.UX_RESEARCH.MEDIA_BEHAVIOUR.DESC_3',
                'AYOBA.MESSAGING.UX_RESEARCH.MEDIA_BEHAVIOUR.DESC_4',
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.TITLE' />
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.DESC',
                'AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.DESC_2',
                'AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.DESC_3',
                'AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.DESC_4',
                'AYOBA.MESSAGING.UX_RESEARCH.VOICE_MESSAGING.DESC_5',
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.ACCESSIBILITY.TITLE' />
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'AYOBA.MESSAGING.UX_RESEARCH.ACCESSIBILITY.DESCRIPTION',
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.UX_RESEARCH.OTHERS.TITLE' />
            <ProjectSectionTitle type={H3} title='AYOBA.MESSAGING.UX_RESEARCH.OTHERS.SUBTITLE' />
            <BulletList
              styling='flex flex-col gap-4'
              list={[
                'AYOBA.MESSAGING.UX_RESEARCH.OTHERS.DESC',
                'AYOBA.MESSAGING.UX_RESEARCH.OTHERS.DESC_2',
                'AYOBA.MESSAGING.UX_RESEARCH.OTHERS.DESC_3',
                'AYOBA.MESSAGING.UX_RESEARCH.OTHERS.DESC_4',
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.COMPETITORS.TITLE' />
            <ProjectSectionTitle type={H2} title='AYOBA.MESSAGING.COMPETITORS.APPS.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.COMPETITORS.APPS.DESCRIPTION' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/most-apps.png" alt="most-popular-apps-africa" />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/competitors-whatsapp.png" alt="competitors-whatsapp" />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/competitors-messaging.png" alt="competitors-messaging" />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/competitors-telegram.png" alt="competitors-telegram" />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/competitors-moya.png" alt="competitors-moya" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.INSIGHTS.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.INSIGHTS.DESCRIPTION' />
            <ProjectBubble title='AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.TITLE'>
              <BulletList
                styling='flex flex-col gap-4'
                list={[
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_2',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_3',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_4',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_5',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_6',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_7',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_8',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_9',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_10',
                  'AYOBA.MESSAGING.INSIGHTS.PAIN_POINTS.DESC_11',
                ]}
              />
            </ProjectBubble>
            <ProjectBubble title='AYOBA.MESSAGING.INSIGHTS.INSIGHTS.TITLE'>
              <BulletList
                styling='flex flex-col gap-4'
                list={[
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC',
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC_2',
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC_3',
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC_4',
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC_5',
                  'AYOBA.MESSAGING.INSIGHTS.INSIGHTS.DESC_6',
                ]}
              />
            </ProjectBubble>
            <ProjectBubble title='AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.TITLE'>
              <BulletList
                styling='flex flex-col gap-4'
                list={[
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_2',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_3',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_4',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_5',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_6',
                  'AYOBA.MESSAGING.INSIGHTS.SOLUTIONS.DESC_7',
                ]}
              />
            </ProjectBubble>
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.PRODUCT_PYRAMID.TITLE' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/pyramid.png" alt="product-pyramid" />
            <ProjectBodyText text='AYOBA.MESSAGING.PRODUCT_PYRAMID.DESCRIPTION' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/pyramid-steps.png" alt="product-pyramid-steps" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.WORKSHOP.TITLE' />
            <ProjectBodyText text='AYOBA.MESSAGING.WORKSHOP.DESCRIPTION' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/workshop-intro.png" alt="workshop" />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/workshop-innovations.png" alt="workshop-innovations" />
          </div>
        </div>
      </ProjectContentWithMargins>
      <img className="w-full" src="/assets/imgs/ayoba-messaging/messaging-design-header.png" alt="new-messaging-design" />
      <ProjectContentWithMargins styling="py-10 gap-4">
        <ProjectBodyText text='AYOBA.MESSAGING.NEW_DESIGN.DISCLAIMER' />
        <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.NEW_DESIGN.TOKENS' />
        <img className="w-full" src="/assets/imgs/ayoba-messaging/new-branding-tokens.png" alt="new-branding-tokens" />
        <ProjectSectionTitle type={H1} title='AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.TITLE' />
        <div className="pr-16 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_BUBBLE} title='AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.TITLE' />
            <ImageTextItem
              imageOnRight={false}
              image='/assets/imgs/ayoba-messaging/new-design-feedchat.png'
              image_alt='new-design-feedchat'
              styling='justify-between'
            >
              <BulletList 
                styling='text-lg'
                list={[
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.DESC',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.DESC_2',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.DESC_3',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.DESC_4',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.FEED_CHAT.DESC_5'
                ]}
              />
            </ImageTextItem>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full justify-end">
              <div className="w-full max-w-72">
                <ProjectSectionTitle type={H2_BUBBLE} title='AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.TITLE' />
              </div>
            </div>
            <ImageTextItem
              imageOnRight={true}
              image='/assets/imgs/ayoba-messaging/new-design-p2pchat.png'
              image_alt='new-design-p2pchat'
              styling='justify-between'
            >
              <BulletList 
                styling='text-lg'
                list={[
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_2',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_3',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_4',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_5',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_6',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_7',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_8',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.P2P_CHAT.DESC_9'
                ]}
              />
            </ImageTextItem>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full justify-start">
              <ProjectSectionTitle type={H2_BUBBLE} title='AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.TITLE' />
            </div>
            <ImageTextItem
              imageOnRight={false}
              image='/assets/imgs/ayoba-messaging/new-design-reactions.png'
              image_alt='new-design-reactions'
              styling='justify-between'
            >
              <BulletList 
                styling='text-lg'
                list={[
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.DESC',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.DESC_2',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.DESC_3',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.DESC_4',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.REACTIONS.DESC_5'
                ]}
              />
            </ImageTextItem>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full justify-end">
              <div className="w-full max-w-72">
                <ProjectSectionTitle type={H2_BUBBLE} title='AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.TITLE' />
              </div>
            </div>
            <ImageTextItem
              imageOnRight={true}
              image='/assets/imgs/ayoba-messaging/new-design-stories.png'
              image_alt='new-design-stories'
              styling='justify-between'
            >
              <BulletList 
                styling='text-lg'
                list={[
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC_2',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC_3',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC_4',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC_5',
                  'AYOBA.MESSAGING.NEW_DESIGN.NEW_DESIGN.STORIES.DESC_6'
                ]}
              />
            </ImageTextItem>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.CHAT_LIST' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-chatlist.png" alt="chat-list-design" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.TEXT_BUBBLES' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-textbubbles.png" alt="text-bubbles-design" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.BEHAVIOUR_BUBBLES' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-behaviourbubbles.png" alt="behaviour-bubbles-design" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.DATA_STATES' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-datastates.png" alt="data-states-design" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.VIDEO_STATES' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-videobubbles.png" alt="video-states-design" />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSectionTitle type={H2_UNDERLINE} title='AYOBA.MESSAGING.NEW_DESIGN.ELEMENTS.CARDS_CHAT' />
            <img className="w-full" src="/assets/imgs/ayoba-messaging/new-design-elements-cardschat.png" alt="cards-chat-design" />
          </div>
        </div>
      </ProjectContentWithMargins>
      <img className="w-full" src="/assets/imgs/ayoba-messaging/messaging-flows.png" alt="messaging-flows" />
      <ProjectFooter />
    </div>
  )
}

export default AyobaMessaging;