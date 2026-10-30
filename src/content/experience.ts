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
      'Developed full-stack features for retail point-of-sale (POS) and back-office applications used by 19 retail chains: .NET Web APIs, Angular screens, and integrations with legacy WCF and SOAP services.',
      'Built REST APIs with Swagger docs and partner webhook endpoints across 6 .NET microservices on Azure App Service serving 30+ retail tenants, using Azure Service Bus events, Cosmos DB, SQL Server, and Blob Storage.',
      'Upgraded LIP (Integration Platform) packages with multiple scheduled jobs from v3 to v4: converted projects, migrated configuration and settings, refactored jobs, and updated Azure DevOps pipelines.',
      'Ported solutions to .NET 10 from .NET Framework 4.8, .NET 6, .NET 8, and .NET Standard 2.0, aligning NuGet packages.',
      'Delivered 150+ Jira tickets across 10+ repositories, using Application Insights, Log Analytics (KQL), and POS transaction logs to trace root causes across API, desktop POS, and integration jobs.',
      'Resolved complex production issues across 6 Azure cloud services, from data defects to performance bottlenecks.',
      'Created 11 custom Claude Code skills and 2 agents for team workflows (Jira change requests, Zephyr test cases, .NET and LIP upgrades, POS log decoding, code review), wired to Jira, Confluence, and Zephyr MCP servers.',
      'Configured 15 Claude Code hook events that compress large tool outputs and block oversized reads to save tokens.',
    ],
  },
  {
    role: 'Freelance Web and Android Developer',
    company: 'Self-employed',
    period: '2020 - 2022',
    location: 'Udupi, Karnataka',
    highlights: [
      'Delivered responsive websites and Android apps for small-business clients over 2 years using WordPress, PHP, and Java.',
    ],
  },
];
