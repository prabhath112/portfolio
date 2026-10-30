import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { profile } from '../../../content/profile';

// Matches the 0.45s per-step animation delay in home.scss.
const STEP_MS = 450;

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

  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    afterNextRender(() => this.walk());
    inject(DestroyRef).onDestroy(() => this.clearTimers());
  }

  select(index: number): void {
    this.clearTimers();
    this.selected.set(index);
  }

  replay(): void {
    this.clearTimers();
    this.running.set(false);
    this.timers.push(
      setTimeout(() => {
        this.running.set(true);
        this.walk();
      }, 40),
    );
  }

  /** Steps the caption through each node in time with the connector animation. */
  private walk(): void {
    this.selected.set(0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    for (let i = 1; i < this.nodes.length; i++) {
      this.timers.push(setTimeout(() => this.selected.set(i), i * STEP_MS));
    }
  }

  private clearTimers(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }
}
