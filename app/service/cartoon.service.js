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
var const_1 = require('../model/const');
require('rxjs/add/operator/toPromise');
var CartoonService = (function () {
    function CartoonService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.cartoonQueryUrl = const_1.baseUrl + '/cartoon/query';
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
    CartoonService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    CartoonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartoonService);
    return CartoonService;
}());
exports.CartoonService = CartoonService;
//# sourceMappingURL=cartoon.service.js.map