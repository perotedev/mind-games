import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import Swal from 'sweetalert2';

interface InputValue {
  palavra: string;
  toca: boolean;
}

@Component({
  selector: 'app-sound-game',
  templateUrl: './sound-game.component.html',
  styleUrls: ['./sound-game.component.scss']
})
export class SoundGameComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public formGroup: FormGroup;
  public palpites: Array<InputValue> = [];
  public dicaAtual: number = 0;
  public dicas: Array<string> = [
    "Paralelepipedo toca e toca três vezes.", 
    "Brasil toca e toca uma vez.", 
    "Trompete toca e toca uma vez.", 
    "Violão não toca.", 
    "Mapa toca e toca duas vezes."
  ];

  constructor(
    private formBuilder: FormBuilder
  ){
    this.initForm();
  }

  private initForm(){
    this.formGroup = this.formBuilder.group({
      inputValue: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  public onSubmitForm(){
    if (this.formGroup.valid){
      const entradaOriginal: string = this.formGroup.get('inputValue')?.value;
      const palavra: string = entradaOriginal.toLowerCase();
      let mensagem = `${entradaOriginal} não toca.`;
      let toques = this.getQtdToques(palavra);     

      if (toques > 0) {
        mensagem = `${entradaOriginal} toca.`;
      }

      this.palpites.unshift({
          palavra: entradaOriginal,
          toca: toques > 0,
      });
    
      if (this.palpites.length > 5){
        this.palpites.pop();
      }
  
      this.initForm();
      this.showPopupResultado(
        mensagem,
        toques > 0
      );
    }
  }

  private getQtdToques(palavra:string): number {
    let toques: number = 0;
    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra.charAt(i);
      if (letra === "p" || letra === "b" || letra === "m") {
        toques++;
      }
    }

    if (palavra.charAt(palavra.length - 1) === "m") {
      toques--;
    }

    return toques;
  }

  private showPopupResultado(mensagem: string, toca:boolean): void {
    let iconText: any = toca?"success":"error";
    Swal.fire({
      title: "Jogo dos Sons",
      text: mensagem,
      icon: iconText,
      confirmButtonText: "OK",
    });
  }

  public showDica(): void {
    if (this.dicaAtual>4){
      this.dicaAtual = 0;
    }
    
    Swal.fire({
      title: "Jogo dos Sons",
      text: this.dicas[this.dicaAtual],
      icon: "info",
      confirmButtonText: "OK",
    });
    this.dicaAtual++;
  }
}
