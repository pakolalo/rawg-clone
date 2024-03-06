import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private http = inject(HttpClient);

  constructor() { }

  getGames() {
    const url = new URL(`https://api.rawg.io/api/games`);
  }
}
