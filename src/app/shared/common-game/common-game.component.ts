import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HtmlUtils } from '../utils/HtmlUtils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface InputValue {
  input: string;
  result: string;
}

@Component({
  selector: 'common-game',
  templateUrl: './common-game.component.html',
  styleUrls: ['./common-game.component.scss']
})
export class CommonGameComponent {
  @Input() gameName: string = "";
  @Input() intructions: string = "";
  @Input() questionsRoute: string = "";
  @Input() tips: Array<string> = [];
  @Input() userInputs: Array<InputValue> = [];
  @Input() nativeTips: boolean = true;
  @Input() showInputs: boolean = true;
  @Output() onConfirm: EventEmitter<string> = new EventEmitter<string>;
  @Output() onTip: EventEmitter<boolean> = new EventEmitter<boolean>;

  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public formGroup: FormGroup;
  private currentTip: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.initForm();
  }

  private initForm(){
    this.formGroup = this.formBuilder.group({
      inputValue: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  public onClickConfirm(): void {
    if (this.formGroup.valid){
      this.onConfirm.emit(this.formGroup.get('inputValue')?.value);
      this.initForm();
    }
  }

  public goToQuestions(): void {
    this.router.navigate([this.questionsRoute]);
  }

  public goBack(): void {
    HtmlUtils.previusPage();
  }

  public showDica(): void {
    if (this.nativeTips){
      if (this.currentTip>4){
        this.currentTip = 0;
      }
  
      Swal.fire({
        title: this.tips[this.currentTip],
        icon: "info",
        confirmButtonText: "OK"
      });
      this.currentTip++;
    } else {
      this.onTip.emit(true);
    }
  }
}
