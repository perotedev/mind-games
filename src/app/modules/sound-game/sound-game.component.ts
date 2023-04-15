import { Component } from '@angular/core';
import { InputValue } from 'src/app/shared/common-game/common-game.component';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import { applicationInfo } from 'src/environment/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sound-game',
  templateUrl: './sound-game.component.html',
  styleUrls: ['./sound-game.component.scss']
})
export class SoundGameComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public palpites: Array<InputValue> = [];
  public dicas: Array<string> = [
    "Paralelepipedo toca e toca três vezes.", 
    "Brasil toca e toca uma vez.", 
    "Trompete toca e toca uma vez.", 
    "Violão não toca.", 
    "Mapa toca e toca duas vezes."
  ];

  public onConfirm(value:string){
    if (value.replace(/\s/g, '').length > 1){
      const entradaOriginal: string = value;
      const palavra: string = entradaOriginal.toLowerCase();
      let mensagem = `${entradaOriginal} não toca.`;
      let toques = this.getQtdToques(palavra);     

      if (toques > 0) {
        mensagem = `${entradaOriginal} toca.`;
      }

      this.palpites.unshift({
          input: entradaOriginal,
          result: (toques > 0)?"Toca":"Não Toca",
      });
    
      if (this.palpites.length > 5){
        this.palpites.pop();
      }
  
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
      title: mensagem,
      icon: iconText,
      confirmButtonText: "OK",
    });
  }
}
