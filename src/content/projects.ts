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
