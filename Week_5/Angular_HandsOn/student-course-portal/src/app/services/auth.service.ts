import { Injectable } from '@angular/core';

/**
 * AuthService - Hands-On 7, Task 2, Step 75
 * Simple authentication service with hardcoded login state.
 * In a real app, this would validate credentials against a backend.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Hardcoded for demonstration - in real app, check token/session
  isLoggedIn = true;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
