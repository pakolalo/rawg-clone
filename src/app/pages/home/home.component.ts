import { Component } from '@angular/core';
import { GameListComponent } from '../../shared/components/game-list/game-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
