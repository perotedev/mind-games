import { Component } from '@angular/core';
import { InputValue } from 'src/app/shared/common-game/common-game.component';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import { applicationInfo } from 'src/environment/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tunnel-game',
  templateUrl: './tunnel-game.component.html',
  styleUrls: ['./tunnel-game.component.scss']
})
export class TunnelGameComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public palpites: Array<InputValue> = [];
  public dicas: Array<string> = [
    "Caminhão passa pelo túnel.", 
    "Viola não passa pelo túnel.",
    "Carro não passa pelo túnel", 
    "Ônibus passa pelo túnel.", 
    "Lápis passa pelo túnel"
  ];

  public onConfirm(value:string){
    if (value.replace(/\s/g, '').length > 1){
      const entradaOriginal: string = value;
      const accent: boolean = this.hasAcent(entradaOriginal.toLocaleLowerCase());     
      let mensagem = `${entradaOriginal} não passa pelo túnel.`;

      if (accent) {
        mensagem = `${entradaOriginal} passa pelo túnel.`;
      }

      this.palpites.unshift({
          input: entradaOriginal,
          result: (accent)?"Passa":"Não passa",
      });
    
      if (this.palpites.length > 5){
        this.palpites.pop();
      }
  
      this.showPopupResultado(
        mensagem,
        accent
      );
    }
  }

  private hasAcent(palavra:string): boolean {
    const accents = ['á', 'ã', 'â', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú', 'ü'];
    for (let i = 0; i < palavra.length; i++) {
      if (accents.includes(palavra[i])) {
        return true;
      }
    }
    return false;    
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
