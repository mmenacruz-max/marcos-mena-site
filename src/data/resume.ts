export interface ResumeRole {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const resumeHeader = {
  name: 'Marcos Mena Cruz',
  contact: 'mmenacruz@gmail.com | +1 (647) 569-2214 | LinkedIn',
};

export const experience: ResumeRole[] = [
  {
    title: 'Account Executive, SMB Industrials',
    company: 'Amazon Business',
    location: 'Toronto, ON',
    period: 'Jan 2025 to Present',
    bullets: [
      'Revenue Performance: Managed a 1,000-account territory generating $25M in annual sales, growing 45% YoY. Ended 2025 at 105% of plan and 137% attainment on $824K net-new business; tracking 107% of H1 2026 plan ($800K vs. $750K goal).',
      'AI Agent Development: Shipped two production AI sales agents on Claude Opus 4.7 that scaled prospecting and account intelligence across a 22,000-account territory, generating $1.4M+ in pipeline.',
      'Fast-Growing Accounts Agent: Applied custom logic to two years of spend data to separate organic growth from seasonality and one-time spot buys. Surfaced 10 accounts growing 240% YoY representing $560K in opportunities.',
      'Health of Business Agent: Wrote complex SQL against Amazon Business\'s Redshift warehouse to score thousands of accounts and flag early churn-risk signals. From 300 emails: 20 meetings (6.7%) and $270K pipeline, plus two ~$300K enterprise deals ($600K). Productized into dashboards now used by AEs across North America and LATAM.',
      'Cross-Functional Execution: Partnered with implementations, solutions architects, and delivery experience teams to ship custom enterprise integrations and stand up last-mile delivery routes to remote locations for key clients; led a Vancouver Fulfillment Centre tour for top accounts that drove $500K across 10 deals (including 2 enterprise expansions).',
      'Glamazon ERG Leadership: Chair of Community and Engagement, Ontario. Managed a $55K annual budget delivering programming across operations and corporate populations.',
    ],
  },
  {
    title: 'Full Cycle Account Executive',
    company: 'Peggy',
    location: 'Toronto, ON',
    period: '2024 to 2025',
    bullets: [
      'Full-Cycle Sales: Drove full-cycle sales for an AI-driven startup ($10M pre-seed) enabling artists to certify artworks and secure re-sale royalties via AI verification; managed 10 to 15 active opportunities and consistently met monthly quota.',
      'AI-Driven Outreach: Built custom outbound workflows in Clay to deliver tailored prospect messaging and automate outreach to non-profit art auctions ($5K to $50K auction value), paired with Smartlead for sequenced engagement of upcoming events.',
      'Event Execution: Led end-to-end project management of high-profile online art auctions across artists, collectors, and charity stakeholders, executing a $70K GMV event.',
    ],
  },
  {
    title: 'Business Development Representative',
    company: 'Fulfil.io',
    location: 'Toronto, ON',
    period: '2022 to 2023',
    bullets: [
      'Founding BDR Hire: First BDR hire for a direct-to-consumer ERP startup, consistently exceeding the monthly quota of 5 qualified leads and the quarterly target of $500K added to top-of-funnel pipeline.',
      'Outbound Strategy: Built multi-channel outbound strategies (LinkedIn, email, phone) tailored to customer pain points using Salesforce, Sales Navigator, and Apollo.io; drove a 40% lift in organic traffic via SEO and represented the company in the field at major industry events.',
    ],
  },
  {
    title: 'Founder',
    company: 'Oleos & Canvas Online Art Gallery',
    location: 'Toronto, ON',
    period: '2021 to Present',
    bullets: [
      'AI-Powered Launch: Launched an online gallery on Shopify (site custom-built with AI-generated code) representing 15 contemporary Cuban artists including 3 National Award Winners; deployed AI-driven outreach workflows to secure corporate sponsorships from Amazon Canada, Pernod Ricard, and Sunwing.',
      'International Trade Missions: Participated in trade missions to New York and Mexico, securing meetings with MoMA, The Guggenheim, The Met, and the Canadian Trade Commissioner Service. Featured speaker at the CGLCC National Symposium at CN Tower.',
    ],
  },
];

export const education = {
  school: 'University of Toronto',
  degree: 'Honours Bachelor of Arts, dual major in English and Political Science',
  period: '2016 to 2020',
  coursework:
    'Fundamentals of Accounting and Finance, Economics, Management, International Business Relations',
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Sales & GTM',
    items: [
      'Enterprise B2B Sales',
      'Consultative Selling',
      'Full-Cycle Sales',
      'Strategic Account Planning',
      'Cross-Functional Stakeholder Management',
      'Custom Enterprise Integrations',
    ],
  },
  {
    category: 'Data & Automation',
    items: [
      'Claude Opus 4.7',
      'AI Agent Development',
      'SQL',
      'Redshift',
      'Sales Workflow Automation',
      'Clay',
      'Dashboarding',
      'Data-Driven Prospecting',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Salesforce',
      'HubSpot',
      'Sales Navigator',
      'Apollo.io',
      'Smartlead',
      'Shopify',
    ],
  },
  {
    category: 'Languages',
    items: ['English / Spanish (Bilingual)'],
  },
];
