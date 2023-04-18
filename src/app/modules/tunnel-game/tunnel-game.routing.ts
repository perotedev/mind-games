import { KnowRuleComponent } from './know-rule/know-rule.component';
import { TunnelGameComponent } from './tunnel-game.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      title: "Túnel Invisível",
      component: TunnelGameComponent
    },
    {
        path: 'know-rule',
        title: 'Descobri a Regra',
        component: KnowRuleComponent
    }
];

export const TunnelRoutes = RouterModule.forChild(routes);