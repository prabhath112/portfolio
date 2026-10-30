export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Pillar {
  title: string;
  text: string;
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface EducationEntry {
  institution: string;
  credential: string;
  period: string;
}

export const profile = {
  name: 'Prabhath Kumar',
  role: 'Junior Software Developer',
  tagline: 'Full-stack developer. Azure, .NET, and Angular.',
  location: 'Mangaluru, Karnataka, India',
  summary:
    'I build retail point-of-sale and back-office systems at EG India: .NET services, Angular screens, and Azure integrations. I also write the tooling that makes my team faster, including custom Claude Code skills, agents, and MCP servers.',
  stats: [
    { value: '3+', label: 'years in full-stack development' },
    { value: '19', label: 'retail chains on the POS apps I work on' },
    { value: '30+', label: 'retail tenants served by my microservices' },
    { value: '150+', label: 'Jira tickets delivered' },
  ] as Stat[],
  pillars: [
    {
      title: 'Backend and integrations',
      text: 'ASP.NET Core Web APIs with Swagger docs, partner webhooks, and integrations with legacy WCF and SOAP services, across 6 .NET microservices.',
      tags: ['.NET', 'C#', 'REST', 'WCF'],
    },
    {
      title: 'Full-stack delivery',
      text: 'Angular screens connected to dependable services for retail POS and back-office applications.',
      tags: ['Angular', 'TypeScript', 'SQL Server'],
    },
    {
      title: 'Cloud and observability',
      text: 'Azure App Service, Service Bus, Cosmos DB, and Application Insights. I trace production issues with KQL and keep CI/CD running in Azure DevOps.',
      tags: ['Azure', 'KQL', 'Azure DevOps'],
    },
    {
      title: 'AI tooling',
      text: 'Custom Claude Code skills, agents, and hooks, plus MCP servers wired to Jira, Confluence, and Zephyr for team workflows.',
      tags: ['Claude Code', 'MCP', 'LLM APIs'],
    },
  ] as Pillar[],
  skillGroups: [
    { label: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'KQL'] },
    {
      label: 'Backend',
      items: ['.NET', 'ASP.NET Core Web API', 'REST', 'Webhooks', 'Microservices', 'Entity Framework', 'WCF', 'SOAP', 'WPF'],
    },
    { label: 'Frontend', items: ['Angular', 'HTML5', 'CSS3', 'Bootstrap'] },
    {
      label: 'Cloud and DevOps',
      items: ['Azure App Service', 'Service Bus', 'Cosmos DB', 'Application Insights', 'Azure DevOps CI/CD', 'GitHub Actions'],
    },
    { label: 'Databases', items: ['SQL Server', 'Azure SQL', 'Cosmos DB', 'MySQL'] },
    {
      label: 'Testing and practices',
      items: ['MSTest', 'Moq', 'FluentAssertions', 'Playwright', 'Agile/Scrum', 'Code review', 'Jira', 'Postman'],
    },
    { label: 'AI tooling', items: ['Claude Code skills, agents, hooks', 'MCP servers', 'LLM APIs'] },
    { label: 'Familiar with', items: ['Blazor', 'MudBlazor', 'Kotlin', 'Python', 'React'] },
  ] as SkillGroup[],
  education: [
    {
      institution: 'Shri Madhwa Vadiraja Institute of Technology and Management (VTU), Udupi',
      credential: 'B.E. in Computer Science and Engineering',
      period: 'Aug 2022',
    },
    {
      institution: 'Internshala',
      credential: 'Angular Certification',
      period: '2024',
    },
  ] as EducationEntry[],
  skills: ['C#', '.NET', 'Angular', 'Azure', 'SQL', 'TypeScript', 'MCP'],
  links: {
    github: 'https://github.com/prabhath112',
    linkedin: 'https://www.linkedin.com/in/prabhath007/',
    email: 'prabhath.kumar2000@gmail.com',
  },
};
