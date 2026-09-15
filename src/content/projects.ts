export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: 'genkeyboard',
    name: 'GenKeyboard',
    description:
      'An Android keyboard app forked from FlorisBoard with AI writing tools added on top. Handles the usual keyboard-app groundwork (layouts, themes, clipboard, dictionaries) plus a writing-assist layer built on top of it.',
    tech: ['Android', 'Kotlin'],
    link: 'https://github.com/prabhath112/GenKeyboard',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    description:
      "A personal AI assistant I'm building for myself: a FastAPI backend paired with a React frontend. It runs multiple specialized agents that plan and carry out tasks with minimal supervision, coordinating between them rather than relying on one big model doing everything. Agents call out to real tools and services (calendar, email, notifications) through a structured tool-calling layer, similar to how MCP servers expose tools to LLMs. Still a work in progress, kept private for now.",
    tech: ['FastAPI', 'React', 'TypeScript', 'Multi-agent orchestration', 'LLM tool-calling'],
  },
];
