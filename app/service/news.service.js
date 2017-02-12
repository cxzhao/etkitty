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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var const_1 = require('../model/const');
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.newsUrl = const_1.baseUrl + '/news/query';
    }
    NewsService.prototype.getNews = function (type, pageNumber, pageSize, keyword, tagId) {
        var url = this.newsUrl + "?type=" + type + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize + "&status=1&keyword=" + keyword + "&tagId=" + tagId;
        return this.http.get(url, { headers: this.headers }).toPromise()
            .then(this.extractNewsData)
            .catch(this.handleError);
    };
    NewsService.prototype.extractNewsData = function (res) {
        return res.json();
    };
    NewsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map