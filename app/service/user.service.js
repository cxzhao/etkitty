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
var user_1 = require('../model/user');
var base_service_1 = require('./base.service');
require('rxjs/add/operator/toPromise');
var const_1 = require('../model/const');
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        _super.call(this);
        this.http = http;
        this.url = const_1.baseUrl + '/user/me';
        this.loginUrl = const_1.baseUrl + '/user/login';
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.url, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getLoginStatus = function () {
        return null;
    };
    UserService.prototype.login = function (mail, pass) {
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('email', mail);
        urlSearchParams.append('password', pass);
        var param = urlSearchParams.toString();
        return this.http.post(this.loginUrl, param, this.postOptions).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json().data;
        var user = new user_1.User();
        if (res.json().code == '000000' || res.json().code == '000004') {
            user.name = body.name;
            user.token = body.token;
            user.headImage = body.headImage;
            user.email = body.email;
        }
        if (res.json().code == '000000') {
            user.isLogin = true;
        }
        else {
            user.isLogin = false;
        }
        return user;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}(base_service_1.BaseService));
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map