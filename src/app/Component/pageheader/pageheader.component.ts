import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageheader',
  imports: [],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.css',
})
export class PageheaderComponent {
displayname!:string
  constructor( private router: Router){
    this.displayname=sessionStorage.getItem('username')!;
  }
  get username(): string | null {
    return sessionStorage.getItem('username');
  }

  logout() {
    if (this.username != null) {
      //print the username in the alert message
      const confirmation = confirm(`Are you sure you want to logout? ${this.username}`);
      if (confirmation) {
        sessionStorage.removeItem('username');
        this.router.navigateByUrl('/login');
      }
    } else {
      alert('No user is logged in.');
    }
  }
}

