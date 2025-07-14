import { Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content';
import { Imprint } from './pages/imprint/imprint';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: Imprint }
];