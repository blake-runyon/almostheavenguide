import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { BusinessComponent } from './pages/business/business.component';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'business/:id',
    component: BusinessProfileComponent
  }
];
