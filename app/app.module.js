"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
/*组件*/
var app_component_1 = require('./app.component');
var main_component_1 = require('./component/main.component');
var nav_component_1 = require('./component/nav.component');
var footer_component_1 = require('./component/footer.component');
var rank_component_1 = require('./component/rank.component');
var loginmodal_component_1 = require('./component/loginmodal.component');
var cartoondetail_component_1 = require('./component/cartoondetail.component');
var commentmodal_component_1 = require('./component/commentmodal.component');
var information_component_1 = require('./component/information.component');
var news_component_1 = require('./component/news.component');
var newsdetail_component_1 = require('./component/newsdetail.component');
var article_component_1 = require('./component/article.component');
var writearticle_component_1 = require('./component/writearticle.component');
/*服务*/
var news_service_1 = require('./service/news.service');
var tag_service_1 = require('./service/tag.service');
var user_service_1 = require('./service/user.service');
var article_service_1 = require('./service/article.service');
var comment_service_1 = require('./service/comment.service');
var love_directive_1 = require('./directive/love.directive');
var appRoutes = [
    { path: 'rank', component: rank_component_1.RankComponent },
    { path: 'detail', component: cartoondetail_component_1.CartoonDetailComponent },
    { path: 'newsdetail/:id', component: newsdetail_component_1.NewsDetailComponent },
    { path: 'news/:type', component: news_component_1.NewsComponent },
    { path: 'article', component: article_component_1.ArticleComponent },
    { path: 'editarticle', component: writearticle_component_1.EditArticleComponent },
    { path: '', component: rank_component_1.RankComponent },
    { path: '**', component: rank_component_1.RankComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                nav_component_1.NavComponent,
                footer_component_1.FooterComponent,
                rank_component_1.RankComponent,
                loginmodal_component_1.LoginModalComponent,
                commentmodal_component_1.CommentModalComponent,
                cartoondetail_component_1.CartoonDetailComponent,
                article_component_1.ArticleComponent,
                news_component_1.NewsComponent, information_component_1.InformationComponent, newsdetail_component_1.NewsDetailComponent, love_directive_1.LoveDirective, writearticle_component_1.EditArticleComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                user_service_1.UserService,
                news_service_1.NewsService,
                nav_component_1.NavComponent,
                tag_service_1.TagService,
                comment_service_1.CommentService, article_service_1.ArticleService,
                loginmodal_component_1.LoginModalComponent,
                commentmodal_component_1.CommentModalComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map