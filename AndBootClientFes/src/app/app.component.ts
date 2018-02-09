import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUser : string;
  isAuthenticated = false;

  login() {
    this.currentUser = 'Andrii';
    this.isAuthenticated = true;
  }

  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
  }}