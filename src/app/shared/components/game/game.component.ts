import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  @Input({required: true}) game!: Game;

}
