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
var article_service_1 = require('../service/article.service');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var loginmodal_component_1 = require('../component/loginmodal.component');
var EditArticleComponent = (function () {
    function EditArticleComponent(articleServce, loginModal) {
        this.articleServce = articleServce;
        this.loginModal = loginModal;
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var editor = new wangEditor('#comment-text');
        editor.create();
    };
    EditArticleComponent.prototype.write = function () {
        var status = ng2_cookies_1.Cookie.get('status');
        if (status == 'true') {
        }
        else {
            this.loginModal.open();
        }
    };
    EditArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-article-app',
            templateUrl: "../html/edit_article.html"
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, loginmodal_component_1.LoginModalComponent])
    ], EditArticleComponent);
    return EditArticleComponent;
}());
exports.EditArticleComponent = EditArticleComponent;
//# sourceMappingURL=writearticle.component.js.map