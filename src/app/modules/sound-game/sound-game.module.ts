import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundGameComponent } from './sound-game.component';
import { SoundRoutes } from './sound-game.routing'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SoundGameComponent
  ],
  imports: [
    CommonModule,
    SoundRoutes,
    ReactiveFormsModule
  ]
})
export class SoundGameModule { }
