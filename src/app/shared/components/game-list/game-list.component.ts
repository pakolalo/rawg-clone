import { Component, OnInit, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

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
    this.gameService.queryString$.pipe(
    switchMap((title: string) => this.gameService.searchGames(title)))
    .subscribe({
      next:(data) => {
        this.gameService.setGames(data.results);
      }
    })
    // this.gameService.searchGames()
    // .subscribe({
    // next:(data) => {
    //   this.gameService.setGames(data.results)
    // }
    // })
  }

}

// this.gameService.searchGames()
//     .subscribe((data) => {
//       this.gameService.setGames(data.results);
//     }

//     )
