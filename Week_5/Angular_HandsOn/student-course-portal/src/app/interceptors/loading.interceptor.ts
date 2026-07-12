import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

/**
 * Loading Interceptor - Hands-On 8, Task 3, Step 91
 * Shows/hides a global loading spinner during HTTP requests.
 * Uses finalize to ensure spinner is hidden whether request succeeds or fails
 * (equivalent to try/catch/finally).
 * Interceptors run in registration order for requests, reverse order for responses.
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Show spinner before request
  loadingService.show();

  return next(req).pipe(
    // finalize runs whether Observable completes or errors
    finalize(() => {
      loadingService.hide();
    })
  );
};
