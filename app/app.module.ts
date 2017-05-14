import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Routes,Router,ActivatedRoute,Params,RouterLink} from '@angular/router';
import { HttpModule}  from '@angular/http';

/*组件*/
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
import { ArticleComponent } from './component/article.component';
import { EditArticleComponent } from './component/writearticle.component';
/*服务*/
import { NewsService }  from './service/news.service';
import { TagService }  from './service/tag.service';
import { UserService }  from './service/user.service';
import { ArticleService }  from './service/article.service';
import { CommentService }  from './service/comment.service';
import { CartoonService }  from './service/cartoon.service';
import { LoveDirective }  from './directive/love.directive';
import { MasonryModule } from 'angular2-masonry';

const appRoutes: Routes = [
  { path: 'rank', component: RankComponent },
  { path: 'detail/:id',component: CartoonDetailComponent },
  { path: 'newsdetail/:id',component: NewsDetailComponent },
  { path: 'news/:type', component: NewsComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'editarticle', component: EditArticleComponent },
  { path: '', component: RankComponent },
  { path: '**', component: RankComponent }
];

@NgModule({
  imports:      [ BrowserModule,RouterModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes),MasonryModule],
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    RankComponent,
    LoginModalComponent,
    CommentModalComponent,
    CartoonDetailComponent,
    ArticleComponent,
    NewsComponent,InformationComponent,NewsDetailComponent,LoveDirective,EditArticleComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers:   [
    UserService,
    NewsService,
    NavComponent,
    TagService,
    CommentService,ArticleService,
    LoginModalComponent,
    CommentModalComponent,CartoonService

  ]
})
export class AppModule { }
