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
  public cidadeAtual: string = "";
  public dicas: Array<string> = ["Venezuela", "Ottawa", "Luxemburgo", "Tailândia", "Argentina"];
  public transportes: Array<string> = ["Carro", "Moto", "Barco", "Avião", "Bicicleta", "Trem"];
  
  private indexTransporte: number = 0;
  private ruleIndex: number = 0;
  private gameRule: Array<string> = ['v', 'o', 'l', 't', 'a'];
  
  public onConfirm(value:string){
    if (value.replace(/\s/g, '').length > 3 && this.transporteIndex > -1){
      const entradaOriginal: string = value;
      const palavra: string = entradaOriginal.toLowerCase();
      const letra: string = palavra.normalize("NFD").replace(/\p{Diacritic}/gu, "").slice(0,1);
      let mensagem = `Você não chegou em ${entradaOriginal}`;

      this.palpites.unshift({
        input: `${entradaOriginal} de ${this.transportes[this.transporteIndex].toLowerCase()}`,
        result: this.gameRule[this.ruleIndex] === letra?"Chegou":"Não chegou",
      });
  
      if (this.palpites.length > 5){
        this.palpites.pop();
      }

      if (this.gameRule[this.ruleIndex] === letra){
        mensagem = `Você chegou em ${entradaOriginal}`;
        this.cidadeAtual = `Você está em ${entradaOriginal}`
        this.indexTransporte = Math.floor(Math.random() * this.transportes.length);
        this.showPopupResultado(mensagem, true);
        this.ruleIndex++;
      } else {
        this.showPopupResultado(mensagem, false);
      }

      if (this.ruleIndex > 4){
        this.ruleIndex = 0;
      }
    } else if (value.length < 4) {
      this.showAlert(
        "Digite um local de destino com pelo menos 4 letras!"
      )
    } else {
      this.showAlert(
        "Selecione um meio de transporte!"
      )
    }
  }

  public selectTransporte(index:number){
    this.transporteIndex = index;
  }

  public showDica(value:boolean): void {
    let dicaIndex: number = this.ruleIndex;
    if (dicaIndex > 4){
      dicaIndex = 0;
    }
    
    if (value){
      this.showAlert(`Seu próximo destino pode ser ${this.dicas[dicaIndex]} indo de ${this.getTipVeicle()}`)
    }
  }

  private getTipVeicle(): string {
    return this.transportes[this.indexTransporte].toLowerCase();
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
