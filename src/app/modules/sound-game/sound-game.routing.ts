import { RouterModule, Routes } from '@angular/router';
import { SoundGameComponent } from './sound-game.component';

const routes: Routes = [
    {
      path: '',
      title: "Jogo dos Sons",
      component: SoundGameComponent
    }
];

export const SoundRoutes = RouterModule.forChild(routes);