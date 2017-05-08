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
var article_service_1 = require('../service/article.service');
var tag_service_1 = require('../service/tag.service');
var page_1 = require('../model/page');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var loginmodal_component_1 = require('../component/loginmodal.component');
var ArticleComponent = (function () {
    function ArticleComponent(articleServce, tagService, loginModal) {
        this.articleServce = articleServce;
        this.tagService = tagService;
        this.loginModal = loginModal;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.queryArticle(1, 20, '', '');
        this.queryTag(1, 20);
        this.queryHot(1, 10);
    };
    ArticleComponent.prototype.queryArticle = function (pageNumber, pageSize, keyword, tagId) {
        var _this = this;
        this.articleServce.query(pageNumber, pageSize, keyword, tagId).then(function (res) {
            if (res.code == '000000') {
                _this.articleList = res.data.list;
                _this.pageNumber = res.data.pageNumber;
                _this.isLast = res.data.last;
                var size = _this.pageNumber + 4;
                var number = _this.pageNumber;
                _this.pageList = new Array();
                for (var i = 0; i < 5; i++) {
                    _this.pageList[i] = number++;
                }
            }
        }).catch();
    };
    ArticleComponent.prototype.queryTag = function (pageNumber, pageSize) {
        var _this = this;
        this.tagService.getHotTag(0, pageNumber, pageSize).then(function (res) {
            if (res.code == '000000') {
                _this.tagList = res.data.list;
                _this.tagPage = new page_1.Page();
                _this.tagPage.last = res.data.last;
                _this.tagPage.pageNumber = res.data.pageNumber;
                _this.tagPage.pageSize = res.data.pageSize;
                _this.tagPage.total = res.data.total;
            }
        }).catch();
    };
    ArticleComponent.prototype.queryHot = function (pageNumber, pageSize) {
        var _this = this;
        this.articleServce.hot(pageNumber, pageSize).then(function (res) {
            if (res.code = '000000') {
                _this.hotList = res.data.list;
                _this.isLastHot = res.data.last;
                _this.pageNumberHot = res.data.pageNumber;
            }
        }).catch();
    };
    ArticleComponent.prototype.prep = function () {
        var page = this.pageNumber;
        if (page == 1) {
            alert("已经是第一页了！");
        }
        else {
            page--;
            this.queryArticle(page, 20, '', '');
        }
    };
    ArticleComponent.prototype.currentPage = function (page) {
        alert(page);
        this.queryArticle(page, 20, '', '');
    };
    ArticleComponent.prototype.next = function () {
        if (this.isLast == true) {
            alert("已经是最后一页了！");
            return;
        }
        var page = this.pageNumber;
        page++;
        this.queryArticle(page, 20, '', '');
    };
    ArticleComponent.prototype.prepTag = function () {
        var page = this.tagPage.pageNumber;
        if (page == 1) {
        }
        else {
            page--;
            this.queryTag(page, 20);
        }
    };
    ArticleComponent.prototype.lastTag = function () {
        if (this.tagPage.last == true) {
            return;
        }
        var page = this.tagPage.pageNumber;
        page++;
        this.queryTag(page, 20);
    };
    ArticleComponent.prototype.queryByTag = function (tagId) {
        this.queryArticle(1, 20, '', tagId);
    };
    ArticleComponent.prototype.nextHotArticle = function () {
        if (this.isLastHot == true) {
            return;
        }
        this.queryHot(this.pageNumberHot + 1, 10);
    };
    ArticleComponent.prototype.write = function () {
        var status = ng2_cookies_1.Cookie.get('status');
        if (status == 'true') {
        }
        else {
            this.loginModal.open();
        }
    };
    ArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-list-app',
            templateUrl: "../html/article.html"
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, tag_service_1.TagService, loginmodal_component_1.LoginModalComponent])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map