
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
  Contact = 'contact',
  Admin = 'admin',
  Privacy = 'privacy',
  Terms = 'terms',
  Cookies = 'cookies'
}

export interface Submission {
  id: string;
  type: 'funding' | 'partnership' | 'newsletter';
  tier?: string;
  fullName?: string;
  email: string;
  phone?: string;
  amount?: string;
  status?: 'pending' | 'reviewing' | 'approved' | 'declined';
  createdAt: string;
  aiReview?: string;
}
