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
var tag_service_1 = require('../service/tag.service');
var newsinfo_1 = require('../model/newsinfo');
var page_1 = require('../model/page');
var NewsComponent = (function () {
    function NewsComponent(newsService, tagService, route, router) {
        this.newsService = newsService;
        this.tagService = tagService;
        this.route = route;
        this.router = router;
    }
    NewsComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges');
    };
    NewsComponent.prototype.ngOnInit = function () {
        var type = this.route.snapshot.params['type'];
        this.type = type;
        if (type == '0') {
            this.getNews(0, 1, 20, '', '');
            this.getHotTag(0, 1, 20);
        }
        else if (type == '1') {
            this.getNews(1, 1, 20, '', '');
            this.getHotTag(1, 1, 20);
        }
        else {
            this.getNews(1, 1, 20, '', '');
            this.getHotTag(1, 1, 20);
        }
        var isEnd = 1 + '';
    };
    NewsComponent.prototype.getHotTag = function (type, pageNumber, pageSize) {
        var _this = this;
        this.tagService.getHotTag(type, pageNumber, pageSize).then(function (res) {
            if ('000000' == res.code) {
                _this.tagList = res.data.list;
                _this.tagPage = new page_1.Page();
                _this.tagPage.last = res.data.last;
                _this.tagPage.pageNumber = res.data.pageNumber;
                _this.tagPage.pageSize = res.data.pageSize;
                _this.tagPage.total = res.data.total;
            }
        });
    };
    NewsComponent.prototype.getNews = function (type, pageNumber, pageSize, keyword, tagId) {
        var _this = this;
        this.keyword = keyword;
        this.tagId = tagId;
        this.newsService.getNews(type, pageNumber, pageSize, keyword, tagId).then(function (res) {
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
                    _this.page = new page_1.Page();
                    _this.page.last = res.data.last;
                    _this.page.pageNumber = res.data.pageNumber;
                    _this.page.pageSize = res.data.pageSize;
                    _this.page.total = res.data.total;
                    var number = res.data.pageNumber;
                    _this.pageList = new Array();
                    for (var i = 0; i < 5; i++) {
                        _this.pageList[i] = number++;
                    }
                }
            }
        });
    };
    NewsComponent.prototype.prep = function () {
        var page = this.page.pageNumber;
        if (page == 1) {
            alert("已经是第一页了！");
        }
        else {
            page--;
            this.getNews(this.type, page, 20, this.keyword, this.tagId);
        }
    };
    NewsComponent.prototype.pageSearch = function (page) {
        this.getNews(this.type, page, 20, this.keyword, this.tagId);
    };
    NewsComponent.prototype.last = function () {
        if (this.page.last == true) {
            alert("已经是最后一页了！");
            return;
        }
        var page = this.page.pageNumber;
        page++;
        this.getNews(this.type, page, 20, this.keyword, this.tagId);
    };
    NewsComponent.prototype.prepTag = function () {
        var page = this.tagPage.pageNumber;
        if (page == 1) {
        }
        else {
            page--;
            this.getHotTag(this.type, page, 20);
        }
    };
    NewsComponent.prototype.lastTag = function () {
        if (this.tagPage.last == true) {
            return;
        }
        var page = this.tagPage.pageNumber;
        page++;
        this.getHotTag(this.type, page, 20);
    };
    NewsComponent.prototype.queryByTag = function (tagId) {
        this.getNews(this.type, 1, 20, this.keyword, tagId);
    };
    NewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'news-app',
            templateUrl: '../html/newslist.html'
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, tag_service_1.TagService, router_1.ActivatedRoute, router_1.Router])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map