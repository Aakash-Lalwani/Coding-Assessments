import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Error Handler Interceptor - Hands-On 8, Task 3, Step 90
 * Intercepts HTTP errors globally and handles them based on status code.
 * - 401: Navigate to login/home
 * - 500: Show global error notification
 */
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) {
        console.error('Unauthorized - redirecting to home');
        router.navigate(['/']);
      } else if (err.status === 500) {
        console.error('Server error - showing global notification');
        alert('A server error occurred. Please try again later.');
      }
      // Re-throw the error so the component can handle it too
      return throwError(() => err);
    })
  );
};
