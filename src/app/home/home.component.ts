import { Component } from '@angular/core';
import { GameList } from './game-list';
import { GameDescription } from 'src/app/shared/interfaces/game-description';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public games: Array<GameDescription> = GameList;
}
