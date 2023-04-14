import { Component, Input } from '@angular/core';
import { GameDescription } from '../interfaces/game-description';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: GameDescription;
}
