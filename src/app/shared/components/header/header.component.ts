import { Component, Input, OnInit } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { GameSearchService } from '../../services/game-search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, CommonModule, FormsModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  activeMenu = false;
  query: string = '';
  queryChange$: Subject<string> = new Subject<string>();

  @Input() toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  };

  constructor(
    private gameSearchService: GameSearchService,
  ) {}

  ngOnInit(): void {
    this.subscribeToInputChanges()
  }

  subscribeToInputChanges() {
    this.queryChange$.pipe(debounceTime(500), distinctUntilChanged())
    .subscribe({
      next:(query: string) => {
        this.gameSearchService.setQueryString(query);
      }
    })
  }


}
