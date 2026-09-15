export interface EducationEntry {
  institution: string;
  credential: string;
  period: string;
}

export const profile = {
  name: 'Prabhath Kumar',
  role: 'Junior Software Developer',
  location: 'Mangaluru, Karnataka, India',
  summary:
    "I'm a software developer at EG India, working full-stack in C#, .NET, Angular, and SQL. I joined right out of college and picked things up fast, mostly by doing.",
  bio: [
    "I build features end to end at EG India: backend logic in .NET, UI in Angular, and the SQL work in between. Most of what I know about shipping real software I learned on the job rather than in a classroom.",
    'Outside work I maintain a couple of side projects: GenKeyboard, an Android keyboard app, and a personal AI assistant I call Oracle.',
  ],
  education: [
    {
      institution: 'Shri Madhwa Vadiraja Institute of Technology & Management, Bantakal',
      credential: 'BE, Computer Science',
      period: '2018 - 2022',
    },
    {
      institution: 'Internshala Trainings',
      credential: 'Angular Certification Course',
      period: '2024',
    },
  ] as EducationEntry[],
  skills: ['C#', '.NET', 'Angular', 'SQL', 'Azure', 'JavaScript', 'Git'],
  links: {
    github: 'https://github.com/prabhath112',
    linkedin: 'https://www.linkedin.com/in/prabhath007/',
    email: 'prabhath.kumar2000@gmail.com',
  },
};
