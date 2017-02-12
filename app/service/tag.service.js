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
require('rxjs/add/operator/toPromise');
var const_1 = require('../model/const');
var TagService = (function (_super) {
    __extends(TagService, _super);
    function TagService(http) {
        _super.call(this);
        this.http = http;
        this.url = const_1.baseUrl + '/tag/hotTag';
    }
    TagService.prototype.getHotTag = function (type, pageNumber, pageSize) {
        var tagUrl = this.url + "?type=" + type + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize;
        return this.http.get(this.url, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TagService.prototype.extractData = function (res) {
        return res.json();
    };
    TagService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TagService);
    return TagService;
}(base_service_1.BaseService));
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map