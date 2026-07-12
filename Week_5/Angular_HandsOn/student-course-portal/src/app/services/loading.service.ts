import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * LoadingService - Hands-On 8, Task 3, Step 91
 * Manages global loading state via BehaviorSubject.
 * Used by the loading interceptor to show/hide spinner during HTTP requests.
 */
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }
}
