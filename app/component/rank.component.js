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
var cartoon_service_1 = require('../service/cartoon.service');
var type_service_1 = require('../service/type.service');
var newsinfo_1 = require('../model/newsinfo');
var page_1 = require('../model/page');
var CartoonSearch_1 = require('../model/CartoonSearch');
var loginmodal_component_1 = require('../component/loginmodal.component');
var commentmodal_component_1 = require('../component/commentmodal.component');
var RankComponent = (function () {
    function RankComponent(loginModal, commentmodal, newsService, cartoonService, typeService) {
        this.loginModal = loginModal;
        this.commentmodal = commentmodal;
        this.newsService = newsService;
        this.cartoonService = cartoonService;
        this.typeService = typeService;
    }
    RankComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges');
    };
    RankComponent.prototype.ngOnInit = function () {
        this.getNews();
        var isEnd = 1 + '';
        this.getCartoon('', '', 1, 20, isEnd, 'japan');
        this.getType();
        console.log('ngOnInit');
    };
    RankComponent.prototype.getType = function () {
        var _this = this;
        this.typeService.getType().then(function (res) {
            if (res.code == '000000') {
                _this.typeArray = res.data;
            }
        });
    };
    RankComponent.prototype.getCartoon = function (type, keyword, pageNumber, pageSize, isEnd, area) {
        var _this = this;
        this.cartoon = new CartoonSearch_1.CartoonSearch();
        this.cartoon.type = type;
        this.cartoon.keyword = keyword;
        this.cartoon.isEnd = isEnd;
        this.cartoon.area = area;
        this.cartoonService.getCartoon(type, keyword, pageNumber, pageSize, isEnd, area).then(function (res) {
            if (res.code == '000000') {
                _this.cartoonArray = res.data.list;
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
        });
    };
    RankComponent.prototype.getCartoonByType = function (type) {
        var area = '';
        var isEnd = '';
        jQuery('input:checkbox[name=area]:checked').each(function (i) {
            if (0 == i) {
                area = jQuery(this).val();
            }
            else {
                area += ("," + jQuery(this).val());
            }
        });
        jQuery('input:checkbox[name=isEnd]:checked').each(function (i) {
            if (0 == i) {
                isEnd = jQuery(this).val();
            }
            else {
                isEnd += ("," + jQuery(this).val());
            }
        });
        if (type == '0') {
            this.getCartoon('', '', 1, 20, isEnd, area);
        }
        else {
            this.getCartoon(type, '', 1, 20, isEnd, area);
        }
    };
    RankComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews(1, 1, 5, '', '').then(function (res) {
            if ('000000' == res.code) {
                var data = res.data.list;
                if (data != null) {
                    _this.newsArray = new Array();
                    for (var i = 0; i < data.length; i++) {
                        var news = new newsinfo_1.NewsInfo();
                        news.id = data[i].id;
                        news.title = data[i].title;
                        news.image = data[i].newsImage;
                        news.time = data[i].createTime;
                        _this.newsArray[i] = news;
                    }
                }
            }
        });
        this.newsService.getNews(0, 1, 5, '', '').then(function (res) {
            if ('000000' == res.code) {
                var data = res.data.list;
                if (data != null) {
                    _this.infoArray = new Array();
                    for (var i = 0; i < data.length; i++) {
                        var news = new newsinfo_1.NewsInfo();
                        news.id = data[i].id;
                        news.title = data[i].title;
                        news.image = data[i].newsImage;
                        news.time = data[i].createTime;
                        _this.infoArray[i] = news;
                    }
                }
            }
        });
    };
    RankComponent.prototype.masonry = function () {
        var $container = jQuery('.result');
        $container.imagesLoaded(function () {
            $container.masonry({
                columnWidth: '.result-item',
                itemSelector: '.result-item',
                isAnimated: true
            });
        });
    };
    RankComponent.prototype.reloadmasonry = function () {
        var $container = jQuery('.result');
        $container.imagesLoaded(function () {
            $container.masonry('destroy');
            $container.masonry();
        });
    };
    RankComponent.prototype.prep = function () {
        var page = this.page.pageNumber;
        if (page == 1) {
            alert("已经是第一页了！");
        }
        else {
            page--;
            this.getCartoon(this.cartoon.type, this.cartoon.type, page, 20, this.cartoon.isEnd, this.cartoon.area);
        }
    };
    RankComponent.prototype.pageSearch = function (page) {
        this.getCartoon(this.cartoon.type, this.cartoon.type, page, 20, this.cartoon.isEnd, this.cartoon.area);
    };
    RankComponent.prototype.last = function () {
        if (this.page.last == true) {
            alert("已经是最后一页了！");
            return;
        }
        var page = this.page.pageNumber;
        page++;
        this.getCartoon(this.cartoon.type, this.cartoon.type, page, 20, this.cartoon.isEnd, this.cartoon.area);
    };
    RankComponent.prototype.comment = function (id) {
        this.loginModal.open();
        //this.commentmodal.open();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RankComponent.prototype, "cartoonArray", void 0);
    RankComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rank-app',
            templateUrl: '../html/rank.html',
            providers: [cartoon_service_1.CartoonService, type_service_1.TypeService, loginmodal_component_1.LoginModalComponent, commentmodal_component_1.CommentModalComponent]
        }), 
        __metadata('design:paramtypes', [loginmodal_component_1.LoginModalComponent, commentmodal_component_1.CommentModalComponent, news_service_1.NewsService, cartoon_service_1.CartoonService, type_service_1.TypeService])
    ], RankComponent);
    return RankComponent;
}());
exports.RankComponent = RankComponent;
//# sourceMappingURL=rank.component.js.map