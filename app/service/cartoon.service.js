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
var const_1 = require('../model/const');
var base_service_1 = require('./base.service');
require('rxjs/add/operator/toPromise');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var CartoonService = (function (_super) {
    __extends(CartoonService, _super);
    function CartoonService(http) {
        _super.call(this);
        this.http = http;
        this.cartoonQueryUrl = const_1.baseUrl + '/cartoon/query';
        this.cartoonLoveUrl = const_1.baseUrl + '/cartoon/love';
        this.cartoonDetailUrl = const_1.baseUrl + '/cartoon/detail';
    }
    CartoonService.prototype.getCartoon = function (type, keyword, pageNumber, pageSize, isEnd, area) {
        var url = this.cartoonQueryUrl + "?type=" + type + "&keyword=" + keyword + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize + "&isEnd=" + isEnd + "&area=" + area;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CartoonService.prototype.extractData = function (res) {
        return res.json();
    };
    CartoonService.prototype.love = function (cartoonId) {
        var userId = ng2_cookies_1.Cookie.get('id');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('cartoonId', cartoonId);
        urlSearchParams.append('userId', userId);
        console.log("cartoonId=" + cartoonId + ",userId=" + userId);
        return this.http.post(this.cartoonLoveUrl, urlSearchParams, this.postOptions).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    CartoonService.prototype.queryCartoonDetail = function (id) {
        var url = this.cartoonDetailUrl + "?cartoonId=" + id;
        return this.http.get(url, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    CartoonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartoonService);
    return CartoonService;
}(base_service_1.BaseService));
exports.CartoonService = CartoonService;
//# sourceMappingURL=cartoon.service.js.map