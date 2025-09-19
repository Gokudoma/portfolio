import { Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content';
import { Imprint } from './pages/imprint/imprint';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';

/**
 * Defines the routing configuration for the application.
 * Each route maps a URL path to a specific component.
 * - The root path '' displays the MainContentComponent.
 * - The '/impressum' path displays the Imprint component.
 * - The '/privacy-policy' path displays the PrivacyPolicyComponent.
 * @type {Routes}
 */
export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: Imprint },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
