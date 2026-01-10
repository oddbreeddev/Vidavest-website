
import React from 'react';
import { Program } from './types';

export const BRAND_COLORS = {
  purple: '#8E44AD',
  gold: '#F3C77A',
  bgMain: '#0B0B0F',
  bgCard: '#14141C'
};

export const PROGRAMS: Program[] = [
  {
    id: 'skill-builders',
    title: 'Skill Builders Program',
    description: 'Empowering school leavers and talented youths with the tools to monetize their vocational skills.',
    target: 'Skilled Youths',
    impact: 'Direct equipment funding and business formalization.',
    icon: '🛠️'
  },
  {
    id: 'innovators-launch',
    title: 'Innovators Launch',
    description: 'A platform for university graduates to pitch business prototypes and receive seed capital.',
    target: 'University Graduates',
    impact: 'Scaling innovative prototypes into market-ready startups.',
    icon: '🚀'
  },
  {
    id: 'ceo-transition',
    title: 'Transition to CEO (NYSC)',
    description: 'Transforming the service year into a launchpad for future industry leaders and corporate giants.',
    target: 'NYSC Members',
    impact: 'Post-service entrepreneurship funding and mentorship.',
    icon: '🎓'
  },
  {
    id: 'business-advancement',
    title: 'Business Advancement Program',
    description: 'Strategic advisory and growth capital for existing small businesses looking to scale.',
    target: 'Small Business Owners',
    impact: 'Increased revenue streams and operational efficiency.',
    icon: '📈'
  }
];

export const CORE_VALUES = [
  { title: 'Integrity', description: 'We operate with honesty, transparency, and accountability.', icon: '⚖️' },
  { title: 'Empowerment', description: 'Knowledge and opportunity are at the heart of everything we do.', icon: '💡' },
  { title: 'Excellence', description: 'We are committed to quality service and continuous improvement.', icon: '🏆' },
  { title: 'Trust', description: 'We build long-term relationships based on reliability and clarity.', icon: '🤝' },
  { title: 'Impact', description: 'Our success is measured by the positive outcomes we create.', icon: '🌍' }
];
