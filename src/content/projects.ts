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
      'A personal AI assistant I am building for myself: a FastAPI backend paired with a React frontend, handling notifications, scheduling, and email integration through agentic automation. Still a work in progress, kept private for now.',
    tech: ['FastAPI', 'React', 'TypeScript'],
  },
];
