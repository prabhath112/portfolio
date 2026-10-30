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
    period: 'Apr 2023 - Present',
    location: 'Mangaluru, Karnataka',
    highlights: [
      'Build full-stack features for enterprise retail applications: .NET Web APIs, Angular front ends, and integrations with legacy services.',
      'Design REST APIs with Swagger docs and webhook endpoints as .NET microservices on Azure App Service, using Service Bus events, Cosmos DB, SQL Server, and Blob Storage.',
      'Migrate legacy solutions to .NET 10 and modernize scheduled integration jobs and Azure DevOps pipelines.',
      'Diagnose production issues with Application Insights and Log Analytics (KQL), tracing root causes across services.',
      'Build custom Claude Code skills, agents, and hooks that automate team workflows, connected through MCP servers.',
    ],
  },
  {
    role: 'Freelance Web and Android Developer',
    company: 'Self-employed',
    period: '2020 - 2022',
    location: 'Udupi, Karnataka',
    highlights: [
      'Delivered responsive websites and Android apps for small-business clients using WordPress, PHP, and Java.',
    ],
  },
];
