import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Auth Interceptor - Hands-On 8, Task 3, Steps 88-89
 * Adds Authorization header to all outgoing HTTP requests.
 * Registered in app.config.ts with provideHttpClient(withInterceptors([...])).
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request and add Authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  return next(authReq);
};
