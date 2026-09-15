export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Software Developer',
    company: 'EG India',
    period: 'April 2023 - Present',
    location: 'Mangaluru, Karnataka, India',
    highlights: [
      'Build and maintain full-stack features using C#, .NET, and Angular.',
      'Write and troubleshoot SQL queries for backend data.',
      'Use Git day to day: branches, reviews, the usual team workflow.',
      'Most of this I picked up on the job rather than in a classroom.',
    ],
  },
];
