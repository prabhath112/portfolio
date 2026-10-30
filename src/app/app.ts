import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Privacy } from './sections/privacy/privacy';
import { ConsentBanner } from './layout/consent-banner/consent-banner';

@Component({
  imports: [Header, Footer, Home, About, Experience, Projects, Contact, Privacy, ConsentBanner],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
