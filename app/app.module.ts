import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Routes,Router,ActivatedRoute,Params,RouterLink} from '@angular/router';
import { HttpModule}  from '@angular/http';

import { AppComponent }  from './app.component';
import { MainComponent }  from './component/main.component';
import { NavComponent }  from './component/nav.component';
import { FooterComponent } from './component/footer.component';
import { RankComponent } from './component/rank.component';
import { LoginModalComponent } from './component/loginmodal.component';
import { CartoonDetailComponent } from './component/cartoondetail.component';
import { CommentModalComponent } from './component/commentmodal.component';
import { InformationComponent } from './component/information.component';
import { NewsComponent } from './component/news.component';
import { NewsDetailComponent } from './component/newsdetail.component';
import { NewsService }  from './service/news.service';
import { TagService }  from './service/tag.service';
import { UserService }  from './service/user.service';

import { CommentService }  from './service/comment.service';

import { LoveDirective }  from './directive/love.directive';

const appRoutes: Routes = [
  { path: 'rank', component: RankComponent },
  { path: 'detail',component: CartoonDetailComponent },
  { path: 'newsdetail/:id',component: NewsDetailComponent },
  { path: 'news', component: NewsComponent },
  { path: 'info', component: InformationComponent },
  { path: '', component: RankComponent },
  { path: '**', component: RankComponent }

];

@NgModule({
  imports:      [ BrowserModule,RouterModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    RankComponent,
    LoginModalComponent,
    CommentModalComponent,
    CartoonDetailComponent,
    NewsComponent,InformationComponent,NewsDetailComponent,LoveDirective
  ],
  bootstrap:    [
    AppComponent
  ],
  providers:   [
    UserService,
    NewsService,
    NavComponent,
    TagService,
    CommentService,
    LoginModalComponent,
    CommentModalComponent
  ]
})
export class AppModule { }
