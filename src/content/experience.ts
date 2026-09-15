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
      'Work with Azure SQL and Cosmos DB for backend data, alongside writing and troubleshooting SQL queries.',
      'Host and monitor services on Azure App Service, using Application Insights and Log Analytics to track performance and catch issues early.',
      'Maintain Azure DevOps pipelines for build and release.',
      'Use Git day to day: branches, reviews, the usual team workflow.',
      'Most of this I picked up on the job rather than in a classroom.',
    ],
  },
];
