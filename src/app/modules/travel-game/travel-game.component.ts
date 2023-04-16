import { Component } from '@angular/core';
import { InputValue } from 'src/app/shared/common-game/common-game.component';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import { applicationInfo } from 'src/environment/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-travel-game',
  templateUrl: './travel-game.component.html',
  styleUrls: ['./travel-game.component.scss']
})
export class TravelGameComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public palpites: Array<InputValue> = [];
  public transporteIndex: number = -1;
  public dicas: Array<string> = [
    "Venezuela", 
    "Ottawa", 
    "Luxemburgo", 
    "Tailândia", 
    "Argentina"
  ];

  public transportes: Array<string> = [
    "Carro", "Moto", "Navio", "Avião", "Bicicleta", "Trem"
  ]
  
  private ruleIndex: number = 1;
  private gameRule: Array<string> = ['v', 'o', 'l', 't', 'a'];
  
  public onConfirm(value:string){
    if (value.replace(/\s/g, '').length > 3 && this.transporteIndex > -1){
      const entradaOriginal: string = value;
      const palavra: string = entradaOriginal.toLowerCase();
      const letra: string = palavra.normalize("NFD").replace(/\p{Diacritic}/gu, "").slice(0,1);
      let mensagem = `Você não chegou em ${entradaOriginal}.`;

      this.palpites.unshift({
        input: entradaOriginal,
        result: this.gameRule[this.ruleIndex] === letra?"Chegou":"Não chegou",
      });
  
      if (this.palpites.length > 5){
        this.palpites.pop();
      }

      if (this.gameRule[this.ruleIndex] === letra){
        mensagem = `Você chegou em ${entradaOriginal}.`;
        this.showPopupResultado(mensagem, true);
        this.ruleIndex++;
      } else {
        this.showPopupResultado(mensagem, false);
      }

      if (this.ruleIndex > 4){
        this.ruleIndex = 0;
      }
    } else {
      this.showAlert(
        "Digite um DESTINO e selecione um MEIO DE TRANSPORTE!"
      )
    }
  }

  public selectTransporte(index:number){
    this.transporteIndex = index;
  }

  private showPopupResultado(mensagem: string, chegou:boolean): void {
    let iconText: any = chegou?"success":"error";
    Swal.fire({
      title: mensagem,
      icon: iconText,
      confirmButtonText: "OK",
    });
  }

  private showAlert(mensagem:string){
    Swal.fire({
      title: mensagem,
      icon: "info",
      confirmButtonText: "OK",
    });
  }
}
