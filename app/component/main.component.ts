import { Component} from '@angular/core';

import { NavComponent }  from '../component/nav.component';
import { FooterComponent } from '../component/footer.component';
import { RankComponent } from '../component/rank.component';
import { LoginModalComponent } from '../component/loginmodal.component';
import { CartoonDetailComponent } from '../component/cartoondetail.component';
import { CommentModalComponent } from '../component/commentmodal.component';
import { InformationComponent } from '../component/information.component';
import { NewsComponent } from '../component/news.component';
import { NewsDetailComponent } from '../component/newsdetail.component';
import { UserService }  from '../service/user.service';
import { User } from '../model/user';

import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'main-app',
  template: `
	  <nav-app [user]="etuser"></nav-app>
	  <router-outlet></router-outlet>
    <login-modal-app [user]="etuser"></login-modal-app>
    <comment-modal-app></comment-modal-app>
	  <footer-app></footer-app>
  `
})
export class MainComponent  {

  etuser:User;

  //subscription: Subscription;

  constructor(private userService:UserService){
    //this.subscription = userService.user$.subscribe();
  }



}
