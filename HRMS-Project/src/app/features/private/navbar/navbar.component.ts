import { Component } from '@angular/core';
import { loggedInUser } from '@shared/constants/global.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  userId: string | number = loggedInUser.id;

  logOut(){
    localStorage.clear()
  }
}
