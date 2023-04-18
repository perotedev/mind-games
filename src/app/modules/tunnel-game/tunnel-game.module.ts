import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunnelGameComponent } from './tunnel-game.component';
import { TunnelRoutes } from './tunnel-game.routing';
import { CommonGameModule } from 'src/app/shared/common-game/common-game.module';
import { KnowRuleComponent } from './know-rule/know-rule.component';


@NgModule({
  declarations: [
    TunnelGameComponent,
    KnowRuleComponent
  ],
  imports: [
    CommonModule,
    TunnelRoutes,
    CommonGameModule
  ]
})
export class TunnelGameModule { }
