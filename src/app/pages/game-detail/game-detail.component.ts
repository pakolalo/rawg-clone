import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetails } from '../../shared/models/game-details.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit {
  gameDetails: GameDetails | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.gameDetails = this.route.snapshot.data['game'] as GameDetails;
  }
}
