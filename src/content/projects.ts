export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: 'azure-insights-dashboard',
    name: 'Azure Insights Dashboard',
    description: 'Internal observability tool at EG India.',
    highlights: [
      'Blazor Server dashboard (MudBlazor, ApexCharts) that runs KQL queries against Application Insights for 34 retail tenants, with exception clustering and cross-tenant anomaly detection.',
      'Integrated POS API test runner that runs .NET and Playwright suites against 3 Azure test slots.',
      'Telemetry queries packaged as an MCP server library so Claude Code can query the same data. Deployed on IIS.',
    ],
    tech: ['Blazor', 'MudBlazor', 'KQL', 'Application Insights', 'Playwright', 'MCP'],
  },
  {
    id: 'genkeyboard',
    name: 'GenKeyboard',
    description: 'AI writing keyboard for Android. Open source, Apache 2.0.',
    highlights: [
      'Forked FlorisBoard and added 9 AI writing actions (grammar, tone, paraphrase, translate, summarize) usable in any app.',
      'Cloudflare Worker backend routing 2 LLM providers (Gemini, OpenRouter) with per-device quotas.',
    ],
    tech: ['Android', 'Kotlin', 'Cloudflare Workers', 'Gemini', 'OpenRouter'],
    link: 'https://github.com/prabhath112/GenKeyboard',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    description: 'Personal AI assistant, work in progress and kept private.',
    highlights: [
      'A planner agent orchestrates tool-calling agents for calendar, email, and notifications.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'LLM tool-calling'],
  },
];
