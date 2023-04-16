import { Component, OnInit } from '@angular/core';
import { GameList } from './game-list';
import { GameDescription } from 'src/app/shared/interfaces/game-description';
import { applicationInfo }  from 'src/environment/constants'
import { HtmlUtils } from '../shared/utils/HtmlUtils';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games: Array<GameDescription> = GameList;
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;

  constructor(private meta: Meta) { }
  
  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Regra do Jogo' });
    this.meta.updateTag({ name: 'description', content: 'Descubra a regra do jogo para vencer os desafios' });
    this.meta.updateTag({ name: 'og:description', content: 'Descubra a regra do jogo para vencer os desafios' });
    this.meta.updateTag({ name: 'og:url', content: 'https://perotedev.github.io/mind-games/home' });
  }
}
