import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  constructor(private meta: Meta) { }
  
  ngOnInit() {
    this.meta.addTag({ name: 'title', content: 'Regra do Jogo' });
    this.meta.addTag({ name: 'description', content: 'Descubra a regra do jogo para vencer os desafios' });
    // this.meta.addTag({ name: 'image', content: 'https://example.com/travel-game-thumbnail.jpg' });
  }
}
