
export interface Program {
  id: string;
  title: string;
  description: string;
  target: string;
  impact: string;
  icon: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Programs = 'programs',
  Donate = 'donate',
  Contact = 'contact'
}
