import { Component, signal } from '@angular/core';
import { profile } from '../../../content/profile';

interface TraceNode {
  name: string;
  tech: string;
  note: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly profile = profile;

  readonly nodes: TraceNode[] = [
    { name: 'Interface', tech: 'Angular, TypeScript', note: 'Angular screens for business workflows, kept simple to use and easy to maintain.' },
    { name: 'API', tech: '.NET, ASP.NET Core', note: 'REST APIs with Swagger docs, webhooks, and microservices on Azure App Service.' },
    { name: 'Messaging', tech: 'Azure Service Bus', note: 'Event-driven hand-offs between services, so one slow step does not block the rest.' },
    { name: 'Data', tech: 'SQL Server, Cosmos DB', note: 'Relational and document storage, with queries written and tuned by hand.' },
    { name: 'Telemetry', tech: 'Application Insights, KQL', note: 'When something breaks, I trace the request back through every layer to the root cause.' },
  ];

  readonly selected = signal(0);
  readonly running = signal(true);

  select(index: number): void {
    this.selected.set(index);
  }

  replay(): void {
    this.running.set(false);
    setTimeout(() => this.running.set(true), 40);
  }
}
