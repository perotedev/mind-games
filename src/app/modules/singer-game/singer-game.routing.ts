import { KnowRuleComponent } from './know-rule/know-rule.component';
import { SingerGameComponent } from './singer-game.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      title: "Jogo dos Cantores",
      component: SingerGameComponent
    },
    {
        path: 'know-rule',
        title: 'Descobri a Regra',
        component: KnowRuleComponent
    }
];

export const SingerRoutes = RouterModule.forChild(routes);