import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundGameComponent } from './sound-game.component';
import { SoundRoutes } from './sound-game.routing'


@NgModule({
  declarations: [
    SoundGameComponent
  ],
  imports: [
    CommonModule,
    SoundRoutes
  ]
})
export class SoundGameModule { }
