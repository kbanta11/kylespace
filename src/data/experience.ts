export type Role = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
};

export type EarlierRole = {
  title: string;
  org: string;
  dates: string;
};

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    org: 'Gladly',
    dates: 'Nov 2024 — present',
    bullets: [
      'Architected a real-time sync layer between an AI-automation platform and a Go/Postgres backend, enabling clean AI-to-human conversation handoffs.',
      'Engineered a high-concurrency queue positioning engine in Go, extending wait-time routing rules to voice and phone channels.',
      'Led the spec and build of an AI-Commerce ETL pipeline on AWS (Spark, Airflow), moving product discovery onto Google Merchant Center feeds.',
    ],
  },
  {
    title: 'Lead Software Engineer',
    org: 'Sizzle.fi',
    dates: 'May 2023 — Apr 2024',
    bullets: [
      'Co-founded a DeFi aggregator and led architecture and full-stack development in TypeScript, React, GCP and PostgreSQL.',
      'Managed a cross-functional team across code quality, test coverage, agile practice and CI/CD.',
      'Integrated multiple DeFi protocols with real-time processing of on-chain data and contract interactions.',
    ],
  },
  {
    title: 'Blockchain Software Engineer',
    org: 'Kongregate',
    dates: 'May 2022 — May 2023',
    bullets: [
      'Upgraded the legacy platform from Rails 4 to Rails 6, making it 40% faster with materially less downtime.',
      'Built and maintained 10,000+ unit tests, cutting platform outages by 25%.',
      'Managed Docker images across environments to shorten release times.',
    ],
  },
  {
    title: 'Sr. Data Engineer & BI Analyst',
    org: 'sterkly',
    dates: 'May 2018 — Apr 2022',
    bullets: [
      'Designed real-time ETL on AWS (S3, EC2, Lambda, Kinesis) into Snowflake, hitting 99% data accuracy and 50% faster processing.',
      'Led the on-prem to cloud migration, cutting infrastructure costs 20% while improving uptime.',
      'Partnered with leadership on analytics that grew revenue 300% and opened three new revenue streams.',
    ],
  },
];

export const earlierRoles: EarlierRole[] = [
  { title: 'BI Consultant', org: 'ViacomCBS (BET+)', dates: 'Aug — Dec 2021' },
  { title: 'BI Consultant', org: 'LootCrate', dates: 'Apr — Sep 2021' },
  { title: 'Software Developer', org: 'Digital Measures', dates: 'Jan 2016 — Apr 2018' },
  { title: 'Actuarial Intern', org: 'Pacific Life', dates: 'Summer 2014' },
  { title: 'Actuarial Sales Analytics Intern', org: 'Assurant Health', dates: '2013' },
];

export const resumeIntro = '10+ years across full-stack product, cloud infrastructure and data engineering.';
