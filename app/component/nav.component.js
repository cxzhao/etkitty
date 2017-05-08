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
var user_1 = require('../model/user');
var user_service_1 = require('../service/user.service');
var NavComponent = (function () {
    function NavComponent(userService) {
        this.userService = userService;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    NavComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.userService.user$.subscribe(function (res) {
            //console.log('接收到用户信息更新通知'+res.token);
            _this.user.name = res.name;
            _this.user.token = res.token;
            _this.user.isLogin = res.isLogin;
            _this.user.email = res.email;
            _this.user.headImage = res.headImage;
        });
    };
    NavComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().then(function (users) { return _this.user = users; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], NavComponent.prototype, "user", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-app',
            template: "<nav class=\"navbar-inverse navbar-default\"\n\tstyle=\"background-color: #006666\" role=\"navigation\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n\t\t\t\tdata-target=\"#example-navbar-collapse\">\n\t\t\t\t<span class=\"sr-only\">\u5207\u6362\u5BFC\u822A</span> <span class=\"icon-bar\"></span> <span\n\t\t\t\t\tclass=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/rank\">\u5916\u661F\u732B</a>\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"example-navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a routerLink=\"/rank\">\u63A8\u8350\u699C</a></li>\n\t\t\t\t<li><a routerLink=\"/article\">\u5916\u661F\u70ED\u8BC4</a></li>\n\t\t\t\t<li><a routerLink=\"/news/0\">\u6700\u65B0\u60C5\u62A5</a></li>\n\t\t\t\t<li><a routerLink=\"/news/1\">\u52A8\u6F2B\u8D44\u8BAF</a></li>\n\t\t\t\t<!-- \t\t\t\t\t\t<li><a href=\"#/recommend\">\u7F51\u53CB\u63A8\u8350</a></li> -->\n\t\t\t</ul>\n\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li class=\"dropdown\"><a href=\"javascript:vaid(0)\"\n\t\t\t\t\tclass=\"dropdown-toggle\" data-toggle=\"dropdown\">{{user?.name}}<span\n\t\t\t\t\t\tclass=\"caret\" id=\"userName\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" ng-click=\"gologinhtml()\"\n\t\t\t\t\t\t\ttarget=\"_blank\"> {{user?.isLogin == true ? '\u5DF2\u767B\u5F55' : '\u767B\u9646'}}</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"javascript:vaid(0)\" ng-click=\"loginOut()\">\u9000\u51FA</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" ng-click=\"gotoregister()\">{{user?.isLogin\n\t\t\t\t\t\t\t\t== true ? '\u5DF2\u6CE8\u518C' : '\u6CE8\u518C'}}</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"#/mycomment\">\u6211\u7684\u5916\u661F\u732B</a></li>\n\t\t\t\t\t</ul></li>\n\t\t\t</ul>\n\t\t\t<form class=\"navbar-form navbar-right\" role=\"search\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\u6D77\u8D3C\u738B\">\n\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\">\u641C\u7D22</button>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n</nav> "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map