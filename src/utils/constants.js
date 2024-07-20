import { Briefcase, Profile2User, Clock } from 'iconsax-react';

export const NAV_SECTIONS = [
  {
    id: 'portfolio',
    title: 'PORTFOLIO.TITLE',
    url: '/'
  },
  {
    id: 'aboutme',
    title: 'ABOUTME.TITLE',
    url: '/about'
  },
];

export const NAME = 'María Calderón Granda';
export const CONTACT_EMAIL = 'mariacalderongranda@gmail.com';
export const CONTACT_TEL = '+34 631 843 112';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/mariacalderongranda/';

export const PROJECTS = ['ayoba', 'newitts'];

export const SKILLS_KEYS  = [
  'ABOUTME.SKILLS.DESIGN_THINKING',
  'ABOUTME.SKILLS.DESIGN_SPRINT',
  'ABOUTME.SKILLS.LEAN_STARTUP',
  'ABOUTME.SKILLS.UX',
  'ABOUTME.SKILLS.PROTOTYPE',
  'ABOUTME.SKILLS.WIREFRAME',
  'ABOUTME.SKILLS.VISUAL_DESIGN',
  'ABOUTME.SKILLS.USER_PERSONAS',
  'ABOUTME.SKILLS.USER_JOURNEY',
  'ABOUTME.SKILLS.INFO_ARCH',
  'ABOUTME.SKILLS.INTER_DESIGN',
  'ABOUTME.SKILLS.USABILITY',
  'ABOUTME.SKILLS.AB_TEST',
  'ABOUTME.SKILLS.UI',
  'ABOUTME.SKILLS.RESPONSIVE',
  'ABOUTME.SKILLS.A11Y',
  'ABOUTME.SKILLS.HEURISTIC',
  'ABOUTME.SKILLS.TASK',
  'ABOUTME.SKILLS.AGILE',
  'ABOUTME.SKILLS.DESIGN_SYSTEMS',
];

export const TOOLS = [
  'Figma',
  'Protopie',
  'Pack Adobe',
  'InVision',
  'Marvel App',
  'Zeplin',
  'Maze',
  'Useberry',
  'Miro',
  'IA'
];

export const PROJECT_DETAILS_BASIC = [
  {
    id: 'roles',
    titleKey: "PROJECT_COMMON.INFO.ROLE",
    icon: <Briefcase size={48} color='rgb(var(--blue))' />
  },
  {
    id: 'team',
    titleKey: "PROJECT_COMMON.INFO.TEAM",
    icon: <Profile2User size={48} color='rgb(var(--blue))' />
  },
  {
    id: 'tools',
    titleKey: "PROJECT_COMMON.INFO.TOOLS",
    iconPath: "/assets/icons/tools.png"
  },
  {
    id: 'timing',
    titleKey: "PROJECT_COMMON.INFO.TIMING",
    icon: <Clock size={48} color='rgb(var(--blue))' />
  },
];

export const PROJECT_DETAIL_PROCESS = {
  titleKey: "PROJECT_COMMON.PROCESS.TITLE",
  sections: [
    {
      id: 'audit',
      titleKey: "PROJECT_COMMON.PROCESS.AUDIT",
      iconPath: "/assets/icons/file-text.png"
    },
    {
      id: 'emphatize',
      titleKey: "PROJECT_COMMON.PROCESS.EMPHATIZE",
      iconPath: "/assets/icons/heart.png"
    },
    {
      id: 'specify',
      titleKey: "PROJECT_COMMON.PROCESS.SPECIFY",
      iconPath: "/assets/icons/specify.png"
    },
    {
      id: 'ideate',
      titleKey: "PROJECT_COMMON.PROCESS.IDEATE",
      iconPath: "/assets/icons/edit.png"
    },
    {
      id: 'handoff',
      titleKey: "PROJECT_COMMON.PROCESS.HANDOFF",
      iconPath: "/assets/icons/clipboard.png"
    },
    {
      id: 'verify',
      titleKey: "PROJECT_COMMON.PROCESS.VERIFY",
      iconPath: "/assets/icons/check.png"
    },
  ]
};

export const AYOBA_LINK = "www.ayoba.me";