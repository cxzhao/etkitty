"use strict";
var http_1 = require('@angular/http');
var const_1 = require('../model/const');
var BaseService = (function () {
    function BaseService() {
        this.headers = new http_1.Headers();
        this.postHeader = new http_1.Headers();
        this.postOptions = new http_1.RequestOptions({
            withCredentials: true,
            headers: this.postHeader
        });
        this.options = new http_1.RequestOptions({
            withCredentials: true,
            headers: this.headers
        });
        this.postHeader.append('Access-Control-Allow-Credentials', 'true');
        this.postHeader.append('Access-Control-Allow-Origin', const_1.origin);
        this.postHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Credentials', 'true');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', const_1.origin);
    }
    BaseService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map