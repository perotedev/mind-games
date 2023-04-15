import { Component } from '@angular/core';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import { QuestionDescription, questions } from './questions';
import Swal from 'sweetalert2';
import { applicationInfo } from 'src/environment/constants';

@Component({
  selector: 'app-know-rule',
  templateUrl: './know-rule.component.html',
  styleUrls: ['./know-rule.component.scss']
})
export class KnowRuleComponent {
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
  public textoPergunta: string = "";
  public typeQuestion: number = 0;
  public subType: number = 0;
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

    if (this.itens[this.itemAtual].toca){
      this.generateType0();
    } else {
      this.generateType1();
    }
  }

  private generateType0(): void {
    this.subType = Math.floor(Math.random() * 2);
    this.typeQuestion = 0;
    if (this.subType === 0) {
      this.textoPergunta = `"${this.itens[this.itemAtual].item}" toca quantas vezes?`
    } else {
      this.generateType1();
    }
  }

  private generateType1(): void {
    this.typeQuestion = 1;
    this.textoPergunta = `"${this.itens[this.itemAtual].item}" toca?`
  }

  public tryAnswer0(value: number): void {
    if (value === this.itens[this.itemAtual].toques){
      this.corretAnswer();
    } else {
      this.wrongAnswer();
    }
  }
  
  public tryAnswer1(value: boolean): void {
    if(value === this.itens[this.itemAtual].toca){
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
}
