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
var news_service_1 = require('../service/news.service');
var tag_service_1 = require('../service/tag.service');
var newsinfo_1 = require('../model/newsinfo');
var InformationComponent = (function () {
    function InformationComponent(newsService, tagService) {
        this.newsService = newsService;
        this.tagService = tagService;
    }
    InformationComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges');
    };
    InformationComponent.prototype.ngOnInit = function () {
        this.getNews(0, 1, 20);
        this.getHotTag(1, 1, 20);
        var isEnd = 1 + '';
    };
    InformationComponent.prototype.getHotTag = function (type, pageNumber, pageSize) {
        var _this = this;
        this.tagService.getHotTag(type, pageNumber, pageSize).then(function (res) {
            if ('000000' == res.code) {
                _this.tagList = res.data.list;
            }
        });
    };
    InformationComponent.prototype.getNews = function (type, pageNumber, pageSize) {
        var _this = this;
        this.newsService.getNews(type, pageNumber, pageSize).then(function (res) {
            if ('000000' == res.code) {
                var data = res.data.list;
                if (data != null) {
                    _this.newsArray = new Array();
                    for (var i_1 = 0; i_1 < data.length; i_1++) {
                        var news = new newsinfo_1.NewsInfo();
                        news.id = data[i_1].id;
                        news.title = data[i_1].title;
                        news.image = data[i_1].newsImage;
                        news.time = data[i_1].createTime;
                        news.source = data[i_1].source;
                        news.introduction = data[i_1].introduction;
                        news.readCount = data[i_1].readCount;
                        _this.newsArray[i_1] = news;
                    }
                    var number = res.data.pageNumber;
                    _this.pageList = new Array();
                    for (var i = 0; i < 5; i++) {
                        _this.pageList[i] = number++;
                        console.log('--------------' + number + '-----------');
                    }
                }
            }
        });
    };
    InformationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'info-app',
            templateUrl: '../html/newslist.html'
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, tag_service_1.TagService])
    ], InformationComponent);
    return InformationComponent;
}());
exports.InformationComponent = InformationComponent;
//# sourceMappingURL=information.component.js.map