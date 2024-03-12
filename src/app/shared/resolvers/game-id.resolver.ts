import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { GameDetails } from "../models/game-details.model";
import { GameService } from "../services/game.service";

@Injectable()
export class GameIdResolver implements Resolve<Observable<GameDetails>> {

  constructor(
    private gameService: GameService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GameDetails> {
    return this.gameService.getGamesById(route.params['id'])
  }
}
