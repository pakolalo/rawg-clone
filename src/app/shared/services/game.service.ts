import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameDetails } from '../models/game-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(
    private http: HttpClient,
  ) { }

  getGamesById(id: number): Observable<GameDetails> {
    const url = new URL(`https://api.rawg.io/api/`);
    return this.http.get<GameDetails>(url + `games/${id}`);
  }
}
