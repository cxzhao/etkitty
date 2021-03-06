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
var MainComponent = (function () {
    //subscription: Subscription;
    function MainComponent(userService) {
        this.userService = userService;
        //this.subscription = userService.user$.subscribe();
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            template: "\n\t  <nav-app [user]=\"etuser\"></nav-app>\n\t  <router-outlet></router-outlet>\n    <login-modal-app [user]=\"etuser\"></login-modal-app>\n    <comment-modal-app></comment-modal-app>\n\t  <footer-app></footer-app>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map