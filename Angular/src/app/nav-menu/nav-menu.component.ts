import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor() {
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login() {
    alert('login nav-menu');
  }

  logout() {
    alert('logout nav-menu');
  }

  get identityClaims() {
    return false;
  }

  get isAdmin() {
    return false;
  }
}
