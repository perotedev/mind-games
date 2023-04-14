import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundGameComponent } from './sound-game.component';
import { SoundRoutes } from './sound-game.routing'
import { ReactiveFormsModule } from '@angular/forms';
import { KnowRuleComponent } from './know-rule/know-rule.component';


@NgModule({
  declarations: [
    SoundGameComponent,
    KnowRuleComponent
  ],
  imports: [
    CommonModule,
    SoundRoutes,
    ReactiveFormsModule
  ]
})
export class SoundGameModule { }
