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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RtcC9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDWSxTQUFBLEVBQXNCLFVBQUEsRUFBWSxZQUFBLEVBQ2pELFdBQVcsRUFBZ0IsS0FBQSxFQUErQyxNQUFBLEVBQzdFLE1BQU0sZUFBQSxDQUFnQjtBQUd2QjtJQVNBOztPQUVHO0lBQ0gsd0JBQ0ssVUFBdUI7UUFadkIsWUFBTyxHQUVRLEVBQUEsQ0FBRztRQURsQixVQUFLLEdBRXNCLElBQUksWUFBQSxFQUFpQixDQUFHO1FBRG5ELFdBQU0sR0FFc0IsSUFBSSxZQUFBLEVBQWlCLENBQUc7UUFEcEQsV0FBTSxHQUVzQixJQUFJLFlBQUEsRUFBaUIsQ0FBRztRQURwRCxlQUFVLEdBRUcsSUFBQSxDQUFLO1FBRGxCLGNBQVMsR0FFRyxJQUFBLENBQUs7UUFLZCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQztJQUNMOztPQUVHO0lBQ0gsaUNBREssR0FDTDtJQUNJLENBQUM7SUFDTDs7T0FFRztJQUNILHdDQUhLLEdBR0w7UUFDUSxnQ0FBZ0M7UUFDaEMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBRXJCLDhDQUE4QztRQUM5QyxpQ0FBaUM7SUFDckMsQ0FBQztJQUNMOztPQUVHO0lBQ0gsK0NBTEssR0FLTDtRQUNRLENBQUMsQ0FMQyxJQUFDLENBQUksSUFBQyxDQUFJLENBQUMsS0FBQyxDQUFLLGNBQUMsQ0FBYyxDQUFDO0lBTXZDLENBQUM7SUFDTDs7T0FFRztJQUNILDZCQVBLLEdBT0w7UUFDUSxDQUFDLENBUEMsSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDLEtBQUMsQ0FBSyxNQUFDLENBQU0sQ0FBQztJQVEvQixDQUFDO0lBQ0w7O09BRUc7SUFDSCxrQ0FUSyxHQVNMO1FBQ1EsTUFBTSxDQVRDLElBQUEsQ0FBSyxLQUFDLElBQVEsSUFBQSxDQUFLLEtBQUMsQ0FBSyxPQUFDLENBQU87SUFVNUMsQ0FBQztJQUNMOztPQUVHO0lBQ0gsNkJBWEssR0FXTDtRQUNRLENBQUMsQ0FYQyxJQUFDLENBQUksSUFBQyxDQUFJLENBQUMsS0FBQyxDQUFLLE1BQUMsQ0FBTSxDQUFDO0lBWS9CLENBQUM7SUFDTDs7T0FFRztJQUNILCtDQWJLLEdBYUw7UUFBQSxpQkFZSztRQVhHLENBQUMsQ0FiQyxJQUFDLENBQUksSUFBQyxDQUFJLENBQUMsRUFBQyxDQUFFLGdCQUFDLEVBQWlCO1lBYzlCLEtBQUksQ0FiQyxLQUFDLENBQUssSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDO1FBYzFCLENBQUMsQ0FiQyxDQUFDO1FBZUgsQ0FBQyxDQWJDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxFQUFDLENBQUUsaUJBQUMsRUFBa0I7WUFjL0IsS0FBSSxDQWJDLE1BQUMsQ0FBTSxJQUFDLENBQUksSUFBQyxDQUFJLENBQUM7UUFjM0IsQ0FBQyxDQWJDLENBQUM7UUFlSCxDQUFDLENBYkMsSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDLEVBQUMsQ0FBRSxpQkFBQyxFQUFrQjtZQWMvQixLQUFJLENBYkMsTUFBQyxDQUFNLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQztRQWMzQixDQUFDLENBYkMsQ0FBQTtJQWNOLENBQUM7SUFDTDs7T0FFRztJQUNILCtCQWZLLEdBZUw7UUFDUSxDQUFDLENBZkMsSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDLEtBQUMsQ0FBSyxRQUFDLENBQVEsQ0FBQztJQWdCakMsQ0FBQztJQUNMOztPQUVHO0lBQ0gsb0NBakJLLEdBaUJMO1FBQ1Esc0NBQXNDO0lBQzFDLENBQUM7SUFoQkUseUJBQUEsR0FBb0M7UUFrQjNDLEVBakJFLElBQUEsRUFBTSxTQUFBLEVBQVcsSUFBQSxFQUFNLENBQUE7b0JBa0JyQiwwQkFBMEI7b0JBQzFCLFFBQVEsRUFqQkUsVUFBQTtvQkFrQlYsUUFBUSxFQWpCRSxpTEF1QlQ7aUJBQ0osRUFqQkMsRUFBRztLQWtCSixDQWpCQztJQWtCRjs7T0FFRztJQWxCRiw2QkFBQSxHQUFBLGNBQUEsT0FBQTtRQW9CRCxFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7S0FDbkIsRUFyQkEsQ0FxQkEsQ0FBQztJQWxCSyw2QkFBQSxHQUF5RDtRQW9CaEUsU0FBUyxFQW5CRSxDQUFBLEVBQUcsSUFBQSxFQUFNLEtBQUEsRUFBTSxFQUFFO1FBb0I1QixPQUFPLEVBbkJFLENBQUEsRUFBRyxJQUFBLEVBQU0sTUFBQSxFQUFPLEVBQUU7UUFvQjNCLFFBQVEsRUFuQkUsQ0FBQSxFQUFHLElBQUEsRUFBTSxNQUFBLEVBQU8sRUFBRTtRQW9CNUIsUUFBUSxFQW5CRSxDQUFBLEVBQUcsSUFBQSxFQUFNLE1BQUEsRUFBTyxFQUFFO1FBb0I1QixZQUFZLEVBbkJFLENBQUEsRUFBRyxJQUFBLEVBQU0sV0FBQSxFQUFhLElBQUEsRUFBTSxDQUFBLGFBQUUsRUFBYSxFQUFHLEVBQUU7UUFvQjlELFdBQVcsRUFuQkUsQ0FBQSxFQUFHLElBQUEsRUFBTSxXQUFBLEVBQWEsSUFBQSxFQUFNLENBQUEsWUFBRSxFQUFZLEVBQUcsRUFBRTtLQW9CM0QsQ0FuQkM7SUFvQkYscUJBQUM7Q0FoSEQsQUFnSEMsSUFBQTtTQTlHQSxjQUFBO0FBZ0hEO0lBQ0EsZ0JBQWdCO0lBQ2hCLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDMUI7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsZ0JBQWdCO0lBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBQ3BDLGdCQUFnQjtJQUNoQixjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQy9CLENBQUMiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiJ9