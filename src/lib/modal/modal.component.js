var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
var ModalComponent = (function () {
    function ModalComponent(elementRef) {
        this.options = {};
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.loaded = new EventEmitter();
        this.classModal = true;
        this.classFade = true;
        this.elem = elementRef.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        $(this.elem).modal($.extend({
            backdrop: true,
            keyboard: true,
            show: false
        }, this.options));
        this.modal = $(this.elem).data('bs.modal');
        this.subscribeToModalEvents();
    };
    ModalComponent.prototype.handleHeightAdjustment = function () {
        $(this.elem).modal('handleUpdate');
    };
    ModalComponent.prototype.hide = function () {
        $(this.elem).modal('hide');
    };
    ModalComponent.prototype.isVisible = function () {
        return this.modal && this.modal.isShown;
    };
    ModalComponent.prototype.show = function () {
        $(this.elem).modal('show');
    };
    ModalComponent.prototype.subscribeToModalEvents = function () {
        var _this = this;
        $(this.elem).on('shown.bs.modal', function () {
            _this.shown.emit(null);
        });
        $(this.elem).on('hidden.bs.modal', function () {
            _this.hidden.emit(null);
        });
        $(this.elem).on('loaded.bs.modal', function () {
            _this.loaded.emit(null);
        });
    };
    ModalComponent.prototype.toggle = function () {
        $(this.elem).modal('toggle');
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        //$(this.elem).data('bs.modal', null);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "options", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalComponent.prototype, "shown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalComponent.prototype, "hidden", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ModalComponent.prototype, "loaded", void 0);
    __decorate([
        HostBinding('class.modal'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "classModal", void 0);
    __decorate([
        HostBinding('class.fade'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "classFade", void 0);
    ModalComponent = __decorate([
        Component({
            selector: 'rd-modal',
            template: '<div></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map