import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Main entry point for the Angular application.
 * This file bootstraps the root component (`App`) with the provided application configuration (`appConfig`).
 */
bootstrapApplication(App, appConfig);
