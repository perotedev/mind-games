import { Component, Input } from '@angular/core';
import { GameDescription } from '../interfaces/game-description';
import { Router } from '@angular/router';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: GameDescription;

  constructor(
    private router: Router
  ){}

  public openGame(): void {
    this.router.navigate([`/home/${this.game.route}`])
  }
}
