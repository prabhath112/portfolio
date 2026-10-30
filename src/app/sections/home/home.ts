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
    { name: 'Interface', tech: 'Angular, TypeScript', note: 'Angular and TypeScript front ends for business workflows.' },
    { name: 'API', tech: '.NET, ASP.NET Core', note: 'ASP.NET Core REST APIs, webhooks, and microservices hosted on Azure App Service.' },
    { name: 'Messaging', tech: 'Azure Service Bus', note: 'Event-driven communication between services using Azure Service Bus.' },
    { name: 'Data', tech: 'SQL Server, Cosmos DB', note: 'SQL Server and Cosmos DB for relational and document data.' },
    { name: 'Telemetry', tech: 'Application Insights, KQL', note: 'Application Insights and KQL queries for tracing production issues back through the layers.' },
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
