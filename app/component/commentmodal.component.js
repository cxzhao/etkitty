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
var CommentModalComponent = (function () {
    function CommentModalComponent(userService) {
        this.userService = userService;
    }
    CommentModalComponent.prototype.ngOnInit = function () {
    };
    CommentModalComponent.prototype.open = function () {
        jQuery("#commentModal").modal({
            keyboard: false,
            show: true,
            backdrop: 'static'
        });
    };
    CommentModalComponent.prototype.close = function () {
        jQuery("#commentModal").modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentModalComponent.prototype, "commentText", void 0);
    CommentModalComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            moduleId: module.id,
            selector: 'comment-modal-app',
            templateUrl: '../html/comment_modal.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], CommentModalComponent);
    return CommentModalComponent;
}());
exports.CommentModalComponent = CommentModalComponent;
//# sourceMappingURL=commentmodal.component.js.map