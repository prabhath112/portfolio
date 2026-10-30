import { Component, DestroyRef, inject, signal } from '@angular/core';
import { profile } from '../../../content/profile';

// Matches the per-step animation delay in home.scss.
const STEP_MS = 1400;

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
  readonly running = signal(false);
  readonly phase = signal<'idle' | 'playing' | 'done'>('idle');

  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => this.clearTimers());
  }

  select(index: number): void {
    this.clearTimers();
    this.phase.set('done');
    this.selected.set(index);
  }

  /** Plays the request through each node, one step at a time. */
  play(): void {
    this.clearTimers();
    this.running.set(false);
    this.phase.set('playing');
    this.selected.set(0);
    this.timers.push(
      setTimeout(() => {
        this.running.set(true);
        for (let i = 1; i < this.nodes.length; i++) {
          this.timers.push(setTimeout(() => this.selected.set(i), i * STEP_MS));
        }
        this.timers.push(setTimeout(() => this.phase.set('done'), (this.nodes.length - 1) * STEP_MS + 600));
      }, 40),
    );
  }

  private clearTimers(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }
}
