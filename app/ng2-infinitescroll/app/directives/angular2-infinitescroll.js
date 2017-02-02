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
var common_1 = require("@angular/common");
var InfiniteScroll = (function () {
    function InfiniteScroll(element) {
        this.element = element;
        this.OnScrollMethod = new core_1.EventEmitter();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    InfiniteScroll.prototype.onScroll = function () {
        this._count++;
        if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
            this.OnScrollMethod.emit(null);
        }
        else {
            if (this._count % this.scrollTrigger === 0) {
                this.OnScrollMethod.emit(null);
            }
        }
    };
    return InfiniteScroll;
}());
__decorate([
    core_1.Input('ScrollDistance'),
    __metadata("design:type", Number)
], InfiniteScroll.prototype, "scrollTrigger", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InfiniteScroll.prototype, "OnScrollMethod", void 0);
InfiniteScroll = __decorate([
    core_1.Directive({
        selector: '[InfiniteScroll]',
        providers: [common_1.NgModel],
        host: {
            '(scroll)': 'onScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], InfiniteScroll);
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=angular2-infinitescroll.js.map