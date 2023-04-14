import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
      path: '',
      title: 'Home - Rules Games',
      component: HomeComponent
    }
];

export const HomeRoutes = RouterModule.forChild(routes);