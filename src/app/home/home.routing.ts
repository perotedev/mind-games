import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
      path: '',
      title: 'Home - Rules Games',
      component: HomeComponent
    },
    {
      path: 'sound-game',
      loadChildren: () => import('../modules/sound-game/sound-game.module').then((m) => m.SoundGameModule),
    }
];

export const HomeRoutes = RouterModule.forChild(routes);