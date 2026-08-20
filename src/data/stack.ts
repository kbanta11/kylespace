export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: 'languages',
    items: ['TypeScript', 'Node.js', 'React', 'Python', 'Go', 'SQL', 'Ruby / Rails', 'Dart / Flutter'],
  },
  {
    label: 'technologies',
    items: ['AWS', 'GCP', 'Docker', 'PostgreSQL', 'Redis', 'Snowflake', 'Firebase'],
  },
  {
    label: 'core areas',
    items: [
      'API design',
      'cloud infrastructure',
      'scalability',
      'data engineering',
      'CI/CD',
      'monitoring',
    ],
  },
];
