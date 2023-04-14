import { RouterModule, Routes } from '@angular/router';
import { SoundGameComponent } from './sound-game.component';
import { KnowRuleComponent } from './know-rule/know-rule.component';

const routes: Routes = [
    {
      path: '',
      title: "Jogo dos Sons",
      component: SoundGameComponent
    },
    {
        path: 'know-rule',
        title: 'Descobri a Regra',
        component: KnowRuleComponent
    }
];

export const SoundRoutes = RouterModule.forChild(routes);