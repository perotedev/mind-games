import { RouterModule, Routes } from '@angular/router';
import { TravelGameComponent } from './travel-game.component'
import { KnowRuleComponent } from './know-rule/know-rule.component';

const routes: Routes = [
    {
      path: '',
      title: "Volta ao Mundo",
      component: TravelGameComponent
    },
    {
        path: 'know-rule',
        title: 'Descobri a Regra',
        component: KnowRuleComponent
    }
];

export const TravelRoutes = RouterModule.forChild(routes);