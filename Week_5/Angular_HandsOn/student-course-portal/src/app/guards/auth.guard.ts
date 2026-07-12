import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * AuthGuard - Hands-On 7, Task 2, Steps 75-76
 * Protects routes that require authentication.
 * Redirects to home page if user is not logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return true;  // Allow navigation
    }
    // Redirect to home page if not logged in
    this.router.navigate(['/']);
    return false;
  }
}
