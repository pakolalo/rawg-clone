import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameIdResolver } from './shared/resolvers/game-id.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'games/:id',
        resolve: {
          game: GameIdResolver,
        },
        component: GameDetailComponent
      }
    ]
  }
];
