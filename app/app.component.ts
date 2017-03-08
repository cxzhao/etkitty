import { Component } from '@angular/core';
import { MainComponent } from './component/main.component';

@Component({
  selector: 'my-app',
  template: `
	  <main-app></main-app>
  `,
})
export class AppComponent  { name = 'Angular'; }
