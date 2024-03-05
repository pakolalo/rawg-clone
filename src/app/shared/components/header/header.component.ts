import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  activeMenu = false;

  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  };
}
