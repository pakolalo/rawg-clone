import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, SearchResult } from '../models/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  $games: WritableSignal<Game[]> = signal([]);

  private http = inject(HttpClient);

  constructor() { }

  searchGames():Observable<SearchResult> {
    const url = new URL(`https://api.rawg.io/api/`);
    return this.http.get<SearchResult>(url + 'games')
  }

  setGames(games: Game[]) {
    this.$games.set(games);
  }
}
