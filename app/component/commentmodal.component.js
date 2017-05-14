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
        this.halfstar = ['很差5.5分', '还行6.5分', '一般7.5分', '推荐8.5分', '力荐9.5分'];
        this.star = ['很差6分', '还行7分', '一般8分', '推荐9分', '力荐10分'];
        this.score = [6, 7, 8, 9, 10];
        this.halfscore = [5.5, 6.5, 7.5, 8.5, 9.5];
        this.list = [0, 0, 0, 0, 0];
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
    CommentModalComponent.prototype.clickStart = function (index) {
        var key = "start-" + index;
        var count = this.list[index - 1];
        if ('undefined' == typeof (count)) {
            count = 1;
            this.list[index - 1] = count;
        }
        else {
            count = count + 1;
            this.list[index - 1] = count;
        }
        for (var i = 1; i < index; i++) {
            $("#start-" + i).css("color", "#FF6600");
        }
        if (index == 1) {
            if (count == 15) {
                count = 1;
                this.list[index - 1] = count;
            }
            if (count > 2) {
                var lowscore = 6 - 0.5 * (count - 2);
                $("#span-score").html("很差" + lowscore + "分");
                this.userScore = lowscore;
                //颜色变化
                if ((count % 2) == 0) {
                    $("#start-" + index).css("color", "#FF6600");
                }
                else {
                    $("#start-" + index).css("color", "#FFCC00");
                }
            }
            else {
                if ((count % 2) == 0) {
                    $("#start-" + index).css("color", "#FF6600");
                    $("#span-score").html(this.star[index - 1]);
                    this.userScore = this.score[index - 1];
                }
                else {
                    $("#start-" + index).css("color", "#FFCC00");
                    $("#span-score").html(this.halfstar[index - 1]);
                    this.userScore = this.halfscore[index - 1];
                }
            }
        }
        else {
            if ((count % 2) == 0) {
                $("#start-" + index).css("color", "#FF6600");
                $("#span-score").html(this.star[index - 1]);
                this.userScore = this.score[index - 1];
            }
            else {
                $("#start-" + index).css("color", "#FFCC00");
                $("#span-score").html(this.halfstar[index - 1]);
                this.userScore = this.halfscore[index - 1];
            }
        }
        for (var i = index + 1; i <= 5; i++) {
            $("#start-" + i).css("color", "#666666");
        }
    };
    CommentModalComponent.prototype.overStart = function (index) {
        for (var i = 1; i < index; i++) {
            $("#start-" + i).css("color", "#FF6600");
        }
        $("#start-" + index).css("color", "#FFCC00");
        for (var i = index + 1; i <= 5; i++) {
            $("#start-" + i).css("color", "#666666");
        }
        $("#span-score").html(this.halfstar[index - 1]);
        this.userScore = this.halfscore[index - 1];
    };
    /*评论*/
    CommentModalComponent.prototype.submitComment = function () {
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
            templateUrl: '../html/comment_modal.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], CommentModalComponent);
    return CommentModalComponent;
}());
exports.CommentModalComponent = CommentModalComponent;
//# sourceMappingURL=commentmodal.component.js.map