import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonGameComponent } from './common-game.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommonGameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonGameComponent
  ]
})
export class CommonGameModule { }
