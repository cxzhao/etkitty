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
var user_service_1 = require('../service/user.service');
var user_1 = require('../model/user');
var LoginModalComponent = (function () {
    function LoginModalComponent(userService) {
        this.userService = userService;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.open = function () {
        jQuery("#loginModal").modal({
            keyboard: false,
            show: true,
            backdrop: 'static'
        });
        this.user = this.userService.getLoginStatus();
        if (this.user != null && this.user.isLogin == false) {
        }
    };
    LoginModalComponent.prototype.close = function () {
        jQuery("#loginModal").modal('hide');
    };
    LoginModalComponent.prototype.mlogin = function () {
        var _this = this;
        this.userService.login(this.email, jQuery.md5(this.password)).then(function (res) {
            var user = new user_1.User();
            if (res.isLogin == true) {
                _this.close();
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginModalComponent.prototype, "email", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginModalComponent.prototype, "password", void 0);
    LoginModalComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            moduleId: module.id,
            selector: 'login-modal-app',
            templateUrl: '../html/login_modal.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LoginModalComponent);
    return LoginModalComponent;
}());
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=loginmodal.component.js.map