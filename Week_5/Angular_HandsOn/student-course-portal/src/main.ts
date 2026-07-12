import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/**
 * Application entry point - bootstraps the root component.
 * Uses standalone component API (modern Angular approach, no NgModule needed).
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
