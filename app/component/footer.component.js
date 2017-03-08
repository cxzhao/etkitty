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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-app',
            styles: ["\n      .spacework{\n        margin-left:20px;\n      }\n  "],
            template: "\n  <div class=\"footer\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\"><h5 style=\"text-align: center\" class=\"span-footer\">@ETkitty.com</h5>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 span-footer\">\n\t\t\t\t<span class=\"span-footer\"><span class=\"spacework\"></span><span class=\"spacework\"></span><a\n\t\t\t\t\thref=\"work.html\">\u5408\u4F5C</a><span class=\"spacework\"></span><a\n\t\t\t\t\thref=\"about.html\">\u5173\u4E8E\u6211\u4EEC</a><span class=\"spacework\"></span><a\n\t\t\t\t\thref=\"contact.html\">\u8054\u7CFB\u6211\u4EEC</a><span class=\"spacework\"></span>\u9ED4ICP\u590714005169\u53F7-2\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map