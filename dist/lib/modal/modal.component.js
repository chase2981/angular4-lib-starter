import { Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
var ModalComponent = (function () {
    /**
     * @param {?} elementRef
     */
    function ModalComponent(elementRef) {
        this.options = {};
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.loaded = new EventEmitter();
        this.classModal = true;
        this.classFade = true;
        this.elem = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngAfterViewInit = function () {
        // $(this.elem).modal($.extend({
        //     backdrop: true,
        //     keyboard: true,
        //     show: false
        // }, this.options));
        // this.modal = $(this.elem).data('bs.modal');
        // this.subscribeToModalEvents();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.handleHeightAdjustment = function () {
        $(this.elem).modal('handleUpdate');
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.hide = function () {
        $(this.elem).modal('hide');
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.isVisible = function () {
        return this.modal && this.modal.isShown;
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.show = function () {
        $(this.elem).modal('show');
    };
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ModalComponent.prototype.toggle = function () {
        $(this.elem).modal('toggle');
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = function () {
        //$(this.elem).data('bs.modal', null);
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    /* moduleId: module.id, */
                    selector: 'rd-modal',
                    template: "\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    "
                },] },
    ];
    /**
     * @nocollapse
     */
    ModalComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ModalComponent.propDecorators = {
        'options': [{ type: Input },],
        'shown': [{ type: Output },],
        'hidden': [{ type: Output },],
        'loaded': [{ type: Output },],
        'classModal': [{ type: HostBinding, args: ['class.modal',] },],
        'classFade': [{ type: HostBinding, args: ['class.fade',] },],
    };
    return ModalComponent;
}());
export { ModalComponent };
function ModalComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ModalComponent.ctorParameters;
    /** @type {?} */
    ModalComponent.propDecorators;
    /** @type {?} */
    ModalComponent.prototype.options;
    /** @type {?} */
    ModalComponent.prototype.shown;
    /** @type {?} */
    ModalComponent.prototype.hidden;
    /** @type {?} */
    ModalComponent.prototype.loaded;
    /** @type {?} */
    ModalComponent.prototype.classModal;
    /** @type {?} */
    ModalComponent.prototype.classFade;
    /** @type {?} */
    ModalComponent.prototype.elem;
    /** @type {?} */
    ModalComponent.prototype.modal;
}
//# sourceMappingURL=modal.component.js.map