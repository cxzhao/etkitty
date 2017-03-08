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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var news_service_1 = require("../service/news.service");
var comment_service_1 = require("../service/comment.service");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var loginmodal_component_1 = require("../component/loginmodal.component");
require("rxjs/add/operator/switchMap");
var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, commentService, route, router, loginModal) {
        this.newsService = newsService;
        this.commentService = commentService;
        this.route = route;
        this.router = router;
        this.loginModal = loginModal;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.newsId = id;
        this.userId = ng2_cookies_1.Cookie.get('id');
        this.getNewsDetail(id);
        this.getComment(1, 20, id, 0);
    };
    NewsDetailComponent.prototype.getNewsDetail = function (newsId) {
        var _this = this;
        this.newsService.getDetail(newsId).then(function (res) {
            if (res.code == '000000') {
                _this.news = res.data;
            }
        }).catch();
    };
    NewsDetailComponent.prototype.getComment = function (page, size, objId, type) {
        var _this = this;
        this.pageNumber = page;
        this.commentService.getComment(page, size, objId, type).then(function (res) {
            if (res.code == '000000') {
                _this.commentList = res.data.list;
                _this.isLast = res.data.last;
            }
        }).catch();
    };
    NewsDetailComponent.prototype.saveComment = function () {
        var _this = this;
        var status = ng2_cookies_1.Cookie.get('status');
        console.log(this.comment);
        if (status == 'true') {
            this.commentService.saveComment(this.newsId, this.comment, '2').then(function (res) {
                if (res.code == '000000') {
                    console.log('评论成功');
                    _this.getComment(1, 20, _this.newsId, 0);
                }
                else {
                    console.log('评论失败');
                }
            }).catch();
        }
        else {
            this.loginModal.open();
        }
    };
    NewsDetailComponent.prototype.reply = function () {
        var _this = this;
        var status = ng2_cookies_1.Cookie.get('status');
        if (status == 'true') {
            this.commentService.reply(this.objId, this.replyContext, 2, this.objUserId).then(function (res) {
                if (res.code != '000000') {
                    alert("评论失败");
                }
                else {
                    _this.getComment(1, 20, _this.newsId, 0);
                }
            }).catch();
        }
        else {
            this.loginModal.open();
        }
    };
    NewsDetailComponent.prototype.love = function (newsComment) {
        console.log(newsComment.id);
        this.commentService.love(newsComment.id).then(function (res) {
            if (res.code == '000000') {
                newsComment.agree++;
            }
        }).catch();
    };
    NewsDetailComponent.prototype.showReply = function (comment) {
        this.objUserId = comment.userId;
        this.objId = comment.id;
        if (comment.isShow == undefined) {
            comment.isShow = true;
        }
        else {
            if (comment.isShow == true) {
                comment.isShow = false;
            }
            else {
                comment.isShow = true;
            }
        }
    };
    NewsDetailComponent.prototype.childReplyShow = function (comment, reply) {
        this.objUserId = reply.userId;
        this.objId = comment.id;
        if (comment.isShow == undefined) {
            comment.isShow = true;
        }
        else {
            if (comment.isShow == true) {
                comment.isShow = false;
            }
            else {
                comment.isShow = true;
            }
        }
    };
    NewsDetailComponent.prototype.prep = function () {
        if (this.pageNumber == 1) {
            return;
        }
        this.getComment(this.pageNumber - 1, 20, this.newsId, 0);
    };
    NewsDetailComponent.prototype.next = function () {
        if (this.isLast == true) {
            alert("已经是最后的评论了");
        }
        else {
            this.getComment(this.pageNumber + 1, 20, this.newsId, 0);
        }
    };
    NewsDetailComponent.prototype.deleteComment = function (id, objectId, type) {
        var _this = this;
        this.commentService.deleteComment(id, objectId, type).then(function (res) {
            if (res.code != '000000') {
                alert(res.message);
            }
            else {
                _this.getComment(_this.pageNumber, 20, _this.newsId, 0);
            }
        }).catch();
    };
    return NewsDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewsDetailComponent.prototype, "comment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewsDetailComponent.prototype, "replyContext", void 0);
NewsDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'news-detail-app',
        templateUrl: '../html/news_detail.html'
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService, comment_service_1.CommentService, router_1.ActivatedRoute, router_1.Router, loginmodal_component_1.LoginModalComponent])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=newsdetail.component.js.map