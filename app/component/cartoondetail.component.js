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
var core_1 = require("@angular/core");
var loginmodal_component_1 = require("../component/loginmodal.component");
var cartoon_service_1 = require("../service/cartoon.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var CartoonDetailComponent = (function () {
    function CartoonDetailComponent(loginModal, cartoonService, route, router) {
        this.loginModal = loginModal;
        this.cartoonService = cartoonService;
        this.route = route;
        this.router = router;
    }
    CartoonDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.id = id;
        this.queryCartoonDetail(id);
    };
    CartoonDetailComponent.prototype.queryCartoonDetail = function (id) {
        var _this = this;
        this.cartoonService.queryCartoonDetail(id).then(function (res) {
            if (res.code == '000000') {
                _this.cartoon = res.data;
                _this.score = res.data.score;
                console.log(_this.cartoon.name);
                if (_this.cartoon.isEnd != null) {
                    if (_this.cartoon.isEnd == 0) {
                        _this.isEnd = "连载中";
                    }
                    else {
                        _this.isEnd = "完结";
                    }
                }
                else {
                    _this.isEnd = "连载中";
                }
                _this.role = '';
                _this.akira = '';
                _this.director = '';
                for (var i = 0; i < res.data.roleList.length; i++) {
                    if (i == 0) {
                        _this.role += res.data.roleList[i].roleName;
                    }
                    else {
                        _this.role += "，" + res.data.roleList[i].roleName;
                    }
                }
                for (var i = 0; i < res.data.akiraList.length; i++) {
                    if (i == 0) {
                        _this.akira += res.data.akiraList[i].akiraName;
                    }
                    else {
                        _this.akira += "，" + res.data.akiraList[i].akiraName;
                    }
                }
                for (var i = 0; i < res.data.directorList.length; i++) {
                    if (i == 0) {
                        _this.director += res.data.directorList[i].directorName;
                    }
                    else {
                        _this.director += "，" + res.data.directorList[i].directorName;
                    }
                }
                if (_this.director == '' || _this.director == 'null') {
                    _this.isShowDirector = false;
                }
                else {
                    _this.isShowDirector = true;
                }
                if (res.data.author == '' || res.data.author == 'null') {
                    _this.isShowAuthor = true;
                }
                else {
                    _this.isShowAuthor = true;
                }
            }
        }).catch();
    };
    return CartoonDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CartoonDetailComponent.prototype, "cartoon", void 0);
CartoonDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cartoon-detail-app',
        templateUrl: "../html/cartoondetail.html"
    }),
    __metadata("design:paramtypes", [loginmodal_component_1.LoginModalComponent, cartoon_service_1.CartoonService, router_1.ActivatedRoute, router_1.Router])
], CartoonDetailComponent);
exports.CartoonDetailComponent = CartoonDetailComponent;
//# sourceMappingURL=cartoondetail.component.js.map