import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Game, SearchResult } from '../models/game.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSearchService {

  $games: WritableSignal<Game[]> = signal([]);
  private queryString :BehaviorSubject<string> = new BehaviorSubject<string>('');
  public queryString$ = this.queryString.asObservable();


  private http = inject(HttpClient);

  constructor() { }

  searchGames(title: string = ''):Observable<SearchResult> {
    const params = new HttpParams({fromObject: {search: title}})
    const url = new URL(`https://api.rawg.io/api/`);
    return this.http.get<SearchResult>(url + 'games',
    {params})
  }

  setGames(games: Game[]) {
    this.$games.set(games);
  }

  setQueryString(queryString: string) {
    this.queryString.next(queryString);
  }

}
