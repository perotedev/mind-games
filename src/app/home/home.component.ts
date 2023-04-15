import { Component } from '@angular/core';
import { GameList } from './game-list';
import { GameDescription } from 'src/app/shared/interfaces/game-description';
import { applicationInfo }  from 'src/environment/constants'
import { HtmlUtils } from '../shared/utils/HtmlUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public games: Array<GameDescription> = GameList;
  public isMobile: boolean = HtmlUtils.isMobileDevice();
  public appName: string = applicationInfo.appName;
}
