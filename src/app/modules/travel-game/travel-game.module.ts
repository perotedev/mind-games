import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelGameComponent } from './travel-game.component';
import { TravelRoutes } from './travel-game.routing'
import { CommonGameModule } from 'src/app/shared/common-game/common-game.module';
import { KnowRuleComponent } from './know-rule/know-rule.component';

@NgModule({
  declarations: [
    TravelGameComponent,
    KnowRuleComponent
  ],
  imports: [
    CommonModule,
    TravelRoutes,
    CommonGameModule
  ]
})
export class TravelGameModule { }
