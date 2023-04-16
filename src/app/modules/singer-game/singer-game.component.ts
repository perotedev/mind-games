import { InputValue } from 'src/app/shared/common-game/common-game.component';
import { applicationInfo } from './../../../environment/constants';
import { HtmlUtils } from './../../shared/utils/HtmlUtils';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singer-game',
  templateUrl: './singer-game.component.html',
  styleUrls: ['./singer-game.component.scss']
})
export class SingerGameComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public palpites: Array<InputValue> = [];
  public dicas: Array<string> = [
    "Miguel sabe cantar.", 
    "Fátima sabe cantar.", 
    "Douglas sabe cantar.", 
    "Solange sabe cantar.", 
    "Simaria sabe cantar."
  ];

  private notes: Array<string> = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

  public onConfirm(value:string){
    if (value.replace(/\s/g, '').length > 4){
      const entradaOriginal: string = value;
      let palavra: string = entradaOriginal.toLowerCase();
      palavra = palavra.normalize("NFD").replace(/\p{Diacritic}/gu, "")
      palavra = palavra.slice(0,3);
      if (palavra !== 'sol'){
        palavra = palavra.slice(0,2);
      }

      let mensagem = `${entradaOriginal} não sabe cantar.`;
      if (this.notes.includes(palavra)){
        mensagem = `${entradaOriginal} sabe cantar.`
      }
  
      this.palpites.unshift({
        input: entradaOriginal,
        result: this.notes.includes(palavra)?"Sabe cantar":"Não sabe cantar ",
      });
  
      if (this.palpites.length > 5){
        this.palpites.pop();
      }
  
      this.showPopupResultado(
        mensagem,
        this.notes.includes(palavra)
      );
    }
  }

  private showPopupResultado(mensagem: string, canta:boolean): void {
    let iconText: any = canta?"success":"error";
    Swal.fire({
      title: mensagem,
      icon: iconText,
      confirmButtonText: "OK",
    });
  }
}
