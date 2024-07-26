import { Briefcase, Profile2User, Clock } from 'iconsax-react';
import { ReactComponent as Tools } from '../assets/icons/tools.svg';
import { ReactComponent as FileText } from '../assets/icons/file-text.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Specify } from '../assets/icons/specify.svg';
import { ReactComponent as Edit } from '../assets/icons/edit.svg';
import { ReactComponent as Clipboard } from '../assets/icons/clipboard.svg';
import { ReactComponent as Check } from '../assets/icons/check.svg';

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

export const MCG_LOGO = "Maria Granda";
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
    icon: <Tools size={48} color='rgb(var(--blue))' />
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
      icon: <FileText size={48} color='rgb(var(--blue))' />
    },
    {
      id: 'emphatize',
      titleKey: "PROJECT_COMMON.PROCESS.EMPHATIZE",
      icon: <Heart size={48} color='rgb(var(--blue))' />
    },
    {
      id: 'specify',
      titleKey: "PROJECT_COMMON.PROCESS.SPECIFY",
      icon: <Specify size={48} color='rgb(var(--blue))' />
    },
    {
      id: 'ideate',
      titleKey: "PROJECT_COMMON.PROCESS.IDEATE",
      icon: <Edit size={48} color='rgb(var(--blue))' />
    },
    {
      id: 'handoff',
      titleKey: "PROJECT_COMMON.PROCESS.HANDOFF",
      icon: <Clipboard size={48} color='rgb(var(--blue))' />
    },
    {
      id: 'verify',
      titleKey: "PROJECT_COMMON.PROCESS.VERIFY",
      icon: <Check size={48} color='rgb(var(--blue))' />
    },
  ]
};

export const AYOBA_LINK = "www.ayoba.me";

export const H1 = "h1";
export const H2 = "h2";
export const H3 = "h3";
export const H4 = "h4";
export const BLUE_H3 = "blue_h3";
export const H2_BUBBLE = "h2_bubble";
export const H2_UNDERLINE = "h2_underline";