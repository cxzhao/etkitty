import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	  <nav-app></nav-app>
	  <router-outlet></router-outlet>
    <login-modal-app></login-modal-app>
    <comment-modal-app></comment-modal-app>
	  <footer-app></footer-app>
  `,
})
export class AppComponent  { name = 'Angular'; }
