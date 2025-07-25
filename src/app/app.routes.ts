import { Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content';
import { Imprint } from './pages/imprint/imprint';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: Imprint },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];