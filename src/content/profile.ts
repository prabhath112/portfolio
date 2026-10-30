export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Pillar {
  title: string;
  text: string;
  tags: string[];
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
    'I build full-stack applications with .NET, Angular, and Azure: REST APIs, microservices, and cloud integrations. I also build AI tooling around Claude Code, with custom skills, agents, and MCP servers.',
  pillars: [
    {
      title: 'Backend and integrations',
      text: 'ASP.NET Core Web APIs with Swagger docs, webhooks, and microservices, plus integrations with legacy services.',
      tags: ['.NET', 'C#', 'REST', 'WCF'],
    },
    {
      title: 'Full-stack delivery',
      text: 'Angular front ends connected to dependable services, for business applications used in retail.',
      tags: ['Angular', 'TypeScript', 'SQL Server'],
    },
    {
      title: 'Cloud and observability',
      text: 'Azure App Service, Service Bus, Cosmos DB, and Application Insights. I trace production issues with KQL and work with CI/CD pipelines in Azure DevOps.',
      tags: ['Azure', 'KQL', 'Azure DevOps'],
    },
    {
      title: 'AI tooling',
      text: 'Custom Claude Code skills, agents, and hooks, plus MCP servers that connect LLM tooling to everyday workflows.',
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
      items: ['MSTest', 'Moq', 'FluentAssertions', 'Playwright', 'Agile/Scrum', 'Code review', 'Postman'],
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
