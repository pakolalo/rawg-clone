import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {
  $games = this.gameService.$games;
  constructor(
    private gameService: GameService,
  ) {}

  ngOnInit(): void {
    this.gameService.searchGames()
    .subscribe((data) => {
      this.gameService.setGames(data.results);
    }

    )
  }

}
