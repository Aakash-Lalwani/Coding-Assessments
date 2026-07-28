import { Injectable } from '@angular/core';

/**
 * NotificationService - Hands-On 6, Task 2, Step 67
 * This service is provided at the component level (not root).
 * Each component instance gets its own separate instance - useful for
 * isolated state per component, such as a form wizard with multiple steps.
 */
@Injectable()
export class NotificationService {
  private notifications: string[] = [];

  add(message: string): void {
    this.notifications.push(message);
    console.log('Notification added:', message);
  }

  getAll(): string[] {
    return [...this.notifications];
  }

  clear(): void {
    this.notifications = [];
  }
}
