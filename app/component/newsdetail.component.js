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
var router_1 = require('@angular/router');
var news_service_1 = require('../service/news.service');
require('rxjs/add/operator/switchMap');
var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, route, router) {
        this.newsService = newsService;
        this.route = route;
        this.router = router;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        this.newsId = '1234567890';
    };
    NewsDetailComponent.prototype.getNewsDetail = function (newsId) {
    };
    NewsDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'news-detail-app',
            templateUrl: '../html/news_detail.html'
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute, router_1.Router])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=newsdetail.component.js.map