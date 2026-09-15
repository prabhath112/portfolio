import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Prabhath Kumar' },
  { path: 'about', component: About, title: 'About | Prabhath Kumar' },
  { path: 'experience', component: Experience, title: 'Experience | Prabhath Kumar' },
  { path: 'projects', component: Projects, title: 'Projects | Prabhath Kumar' },
  { path: 'contact', component: Contact, title: 'Contact | Prabhath Kumar' },
  { path: '**', redirectTo: '' },
];
