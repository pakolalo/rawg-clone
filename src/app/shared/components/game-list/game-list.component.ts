import { Component, OnInit, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { GameSearchService } from '../../services/game-search.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {

  $games = this.gameSearchService.$games;
  constructor(
    private gameSearchService: GameSearchService,
  ) {}

  ngOnInit(): void {
    this.gameSearchService.queryString$.pipe(
    switchMap((title: string) => this.gameSearchService.searchGames(title)))
    .subscribe({
      next:(data) => {
        this.gameSearchService.setGames(data.results);
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
