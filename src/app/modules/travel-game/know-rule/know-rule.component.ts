import { Component } from '@angular/core';
import { HtmlUtils } from 'src/app/shared/utils/HtmlUtils';
import { applicationInfo } from 'src/environment/constants';
import { QuestionDescription, questions_0, questions_1 } from './questions';
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
  public currentQuestion: QuestionDescription;
  public currentIndex: number = 0;
  private questions: Array<QuestionDescription> = [];

  constructor(){
    const historyNumber: number = Math.floor(Math.random() * 2);
    if (historyNumber === 0){
      this.questions = questions_0;
    } else {
      this.questions = questions_1;
    }
    this.setCurrentQuestion();
  }

  private setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentIndex];
    this.textoPergunta = this.currentQuestion.question;
  }

  public tryAnswer(value: boolean): void {
    if (value === this.currentQuestion.chega){
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

    if (this.currentIndex < 18){
      this.addCount();
    }

    if (this.currentIndex < 17){
      this.setCurrentQuestion();
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
    this.currentIndex ++;
  }

  public back(): void {
    HtmlUtils.previusPage();
  }
}
