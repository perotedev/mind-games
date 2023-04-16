import { Component } from '@angular/core';
import { HtmlUtils } from '../../../shared/utils/HtmlUtils';
import { applicationInfo } from '../../../../environment/constants';
import { QuestionDescription, questions } from './questions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-know-rule',
  templateUrl: './know-rule.component.html',
  styleUrls: ['./know-rule.component.scss']
})
export class KnowRuleComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public textoPergunta: string = "";
  public qtdAnswers: number = 1;
  private itens: Array<QuestionDescription> = questions;
  private itemsVisitados: Array<number> = [];
  private itemAtual: number;

  constructor(){
    this.itemAtual = Math.floor(Math.random() * this.itens.length);
    this.selectQuestion();
  }

  private generateItem(){
    while (this.itemsVisitados.includes(this.itemAtual)){
      this.itemAtual = Math.floor(Math.random() * this.itens.length);
    }
    this.itemsVisitados.push(this.itemAtual);
  }

  private selectQuestion(): void {
    this.generateItem();
    this.textoPergunta = `"${this.itens[this.itemAtual].name}" sabe cantar?`
  }

  public tryAnswer(value: boolean): void {
    if (value === this.itens[this.itemAtual].canta){
      this.corretAnswer();
    } else {
      this.wrongAnswer();
    }
  }

  private corretAnswer(){
    Swal.fire({
      title: "Resposta Correta",
      icon: "success",
      confirmButtonText: "OK",
    });

    this.selectQuestion();

    if (this.qtdAnswers < 21){
      this.addCount();
    }
  }

  private wrongAnswer(){
    Swal.fire({
      title: "Resposta Errada",
      icon: "error",
      confirmButtonText: "OK",
    });

    this.back();
  }

  private addCount(): void {
    this.qtdAnswers ++;
  }

  public back(): void {
    HtmlUtils.previusPage();
  }

  public share(): void {
    HtmlUtils.share(
      "Jogo dos Cantores",
      "Eu consegui descobrir a regra do jogo! E você, consegue?",
      "https://perotedev.github.io/mind-games/home/singer-game"
    );
  }
}