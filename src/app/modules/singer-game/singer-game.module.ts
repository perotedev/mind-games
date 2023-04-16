import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingerGameComponent } from './singer-game.component';
import { SingerRoutes } from './singer-game.routing'
import { CommonGameModule } from 'src/app/shared/common-game/common-game.module';
import { KnowRuleComponent } from './know-rule/know-rule.component';

@NgModule({
  declarations: [
    SingerGameComponent,
    KnowRuleComponent
  ],
  imports: [
    CommonModule,
    SingerRoutes,
    CommonGameModule
  ]
})
export class SingerGameModule { }
