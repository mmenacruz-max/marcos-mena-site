export const site = {
  headshot: '/images/headshot.png',
  name: 'Marcos Mena Cruz',
  title: 'SMB Account Executive, Industrials · Amazon Business · Toronto',
  tagline:
    'I run a 1,000-account, $25M territory in the Industrials segment at Amazon Business, and I built the AI agents and Redshift dashboards that help me grow it 45% year over year.',
  email: 'mmenacruz@gmail.com',
  phone: '+1 (647) 569-2214',
  linkedin: 'https://www.linkedin.com/in/marcos-mena-cruz/',
  location: 'Toronto, ON',
  blogLabel: 'Thought Leadership',
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Thought Leadership' },
] as const;

export const metrics = [
  {
    value: '$1.4M+',
    label: 'Pipeline generated',
    detail: 'From production AI sales agents',
  },
  {
    value: '107%',
    label: 'H1 2026 plan attainment',
    detail: '$800K vs $750K goal, with 137% on $824K net-new in FY2025',
  },
  {
    value: '$25M',
    label: 'Annual GMS target',
    detail: 'Gross Merchandise Sales goal for the territory each year',
  },
  {
    value: '1,000',
    label: 'Managed accounts',
    detail: 'Industrials SMB book: businesses with 150 employees or less',
  },
] as const;

export const about = [
  "I'm a Small Business Account Executive at Amazon Business in Toronto, in the Industrials segment. I manage a 1,000-account territory worth $25M, with a mandate to grow it 45% year over year, and I built the AI agents and Redshift dashboards that help me do it.",
  "When the GTM team didn't have the resources to build a Health of Business dashboard for SMB, I taught myself SQL and built one. That became the foundation for two production AI agents on Claude that now help account executives across North America and LATAM see their territories more clearly.",
  "I came to Canada from Havana, Cuba when I was 12. My family immigrated through the skilled worker program, and it's one of the best decisions my parents ever made. Before Amazon Business I was at Peggy (an AI-driven art startup) and Fulfil.io (where I was the founding BDR hire). I also run Oleos & Canvas, an online gallery representing 15 contemporary Cuban artists, as a side project.",
  "Outside of work I play hockey in the Toronto Gay Hockey Association with my partner. As a Cuban on ice skates, I'm closer to the national team of Cuba for hockey than most people will be to their own national team. I'm a fantasy nerd (The Wheel of Time is my favorite book) who plays League of Legends and RPGs with friends, and I collect paintings and ceramics from local Cuban artists of exceptional talent.",
] as const;

export const blogIntro =
  'Thoughts on AI in sales, building agents in the field, and what AEs can ship without waiting for a central tools team.';

export const projectsIntro =
  'Two production AI agents I built on Claude, paired with a custom Redshift dashboard. Built to scale account intelligence across the SMB Canada territory, now adopted by AEs across North America and LATAM.';

export const defaultMeta = {
  title: 'Marcos Mena Cruz',
  description:
    'Small Business Account Executive at Amazon Business in Toronto, Industrials segment. Built two production AI sales agents on Claude, now used by AEs across North America and LATAM, to scale a 1,000-account, $25M territory.',
  ogImage: '/og-default.png',
};
