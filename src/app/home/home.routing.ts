import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
      path: '',
      title: 'Regra do Jogo',
      component: HomeComponent
    },
    {
      path: 'sound-game',
      loadChildren: () => import('../modules/sound-game/sound-game.module').then((m) => m.SoundGameModule)
    },
    {
      path: 'singer-game',
      loadChildren: () => import('../modules/singer-game/singer-game.module').then((m) => m.SingerGameModule)
    },
    {
      path: 'travel-game',
      loadChildren: () => import('../modules/travel-game/travel-game.module').then((m) => m.TravelGameModule)
    },
    {
      path: 'tunnel-game',
      loadChildren: () => import('../modules/tunnel-game/tunnel-game.module').then((m) => m.TunnelGameModule)
    }
];

export const HomeRoutes = RouterModule.forChild(routes);