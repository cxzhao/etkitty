"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var base_service_1 = require('./base.service');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
require('rxjs/add/operator/toPromise');
var const_1 = require('../model/const');
var CommentService = (function (_super) {
    __extends(CommentService, _super);
    function CommentService(http) {
        _super.call(this);
        this.http = http;
        this.commentUrl = const_1.baseUrl + '/etcom/query';
        this.url = const_1.baseUrl + '/tag/hotTag';
        this.saveUrl = const_1.baseUrl + '/etcom/save';
        this.loveUrl = const_1.baseUrl + '/etcom/love';
        this.replyUrl = const_1.baseUrl + '/etcom/reply';
        this.deleteUrl = const_1.baseUrl + '/etcom/delete';
    }
    CommentService.prototype.getComment = function (page, size, objId, type) {
        var url = this.commentUrl + "?objectId=" + objId + "&pageNumber=" + page + "&pageSize=" + size + "&type=" + type;
        return this.http.get(url, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.extractData = function (res) {
        return res.json();
    };
    CommentService.prototype.saveComment = function (newsId, comment, type) {
        if (comment == '' || comment == null) {
            return;
        }
        var status = ng2_cookies_1.Cookie.get('status');
        if (status == 'true') {
            var userId = ng2_cookies_1.Cookie.get('id');
            console.log('userId=' + userId);
            var urlSearchParams = new http_1.URLSearchParams();
            urlSearchParams.append('objectId', newsId);
            urlSearchParams.append('userId', userId);
            urlSearchParams.append('context', comment);
            urlSearchParams.append('type', type);
            return this.http.post(this.saveUrl, urlSearchParams, this.postOptions).toPromise()
                .then(this.extractData).catch(this.handleError);
        }
        else {
            return;
        }
    };
    /*回复*/
    CommentService.prototype.reply = function (objId, context, type, objUserId) {
        var userId = ng2_cookies_1.Cookie.get('id');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('objId', objId);
        urlSearchParams.append('userId', userId);
        urlSearchParams.append('objUserId', objUserId);
        urlSearchParams.append('context', context);
        return this.http.post(this.replyUrl, urlSearchParams, this.postOptions).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    /*喜欢*/
    CommentService.prototype.love = function (objId) {
        var userId = ng2_cookies_1.Cookie.get('id');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('id', objId);
        urlSearchParams.append('userId', userId);
        console.log("id=" + objId + ",userId=" + userId);
        return this.http.post(this.loveUrl, urlSearchParams, this.postOptions).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    /*删除评论*/
    CommentService.prototype.deleteComment = function (id, objectId, type) {
        var userId = ng2_cookies_1.Cookie.get('id');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('id', id);
        urlSearchParams.append('userId', userId);
        urlSearchParams.append('objectId', objectId);
        urlSearchParams.append('type', type);
        return this.http.post(this.deleteUrl, urlSearchParams, this.postOptions).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommentService);
    return CommentService;
}(base_service_1.BaseService));
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map