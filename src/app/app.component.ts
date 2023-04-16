import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  
  constructor(
    private meta: Meta
  ) {}
  
  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Regra do Jogo' });
    this.meta.updateTag({ name: 'description', content: 'Descubra a regra do jogo para vencer os desafios' });
    this.meta.updateTag({ name: 'og:description', content: 'Descubra a regra do jogo para vencer os desafios' });
    this.meta.updateTag({ name: 'og:url', content: 'https://perotedev.github.io/mind-games' });
    // this.meta.updateTag({ name: 'og:image', content: 'https://example.com/travel-game-image.jpg' });
  }
}
