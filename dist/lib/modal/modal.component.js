(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ModalComponent = (function () {
        /**
         * @param {?} elementRef
         */
        function ModalComponent(elementRef) {
            this.options = {};
            this.shown = new core_1.EventEmitter();
            this.hidden = new core_1.EventEmitter();
            this.loaded = new core_1.EventEmitter();
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
            { type: core_1.Component, args: [{
                        /* moduleId: module.id, */
                        selector: 'rd-modal',
                        template: "\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    "
                    },] },
        ];
        /**
         * @nocollapse
         */
        ModalComponent.ctorParameters = function () { return [
            { type: core_1.ElementRef, },
        ]; };
        ModalComponent.propDecorators = {
            'options': [{ type: core_1.Input },],
            'shown': [{ type: core_1.Output },],
            'hidden': [{ type: core_1.Output },],
            'loaded': [{ type: core_1.Output },],
            'classModal': [{ type: core_1.HostBinding, args: ['class.modal',] },],
            'classFade': [{ type: core_1.HostBinding, args: ['class.fade',] },],
        };
        return ModalComponent;
    }());
    exports.ModalComponent = ModalComponent;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RtcC9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsc0NBR3VCO0lBR3ZCO1FBU0E7O1dBRUc7UUFDSCx3QkFDSyxVQUF1QjtZQVp2QixZQUFPLEdBRVEsRUFBQSxDQUFHO1lBRGxCLFVBQUssR0FFc0IsSUFBSSxtQkFBQSxFQUFpQixDQUFHO1lBRG5ELFdBQU0sR0FFc0IsSUFBSSxtQkFBQSxFQUFpQixDQUFHO1lBRHBELFdBQU0sR0FFc0IsSUFBSSxtQkFBQSxFQUFpQixDQUFHO1lBRHBELGVBQVUsR0FFRyxJQUFBLENBQUs7WUFEbEIsY0FBUyxHQUVHLElBQUEsQ0FBSztZQUtkLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxDQUFDO1FBQ0w7O1dBRUc7UUFDSCxpQ0FESyxHQUNMO1FBQ0ksQ0FBQztRQUNMOztXQUVHO1FBQ0gsd0NBSEssR0FHTDtZQUNRLGdDQUFnQztZQUNoQyxzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFFckIsOENBQThDO1lBQzlDLGlDQUFpQztRQUNyQyxDQUFDO1FBQ0w7O1dBRUc7UUFDSCwrQ0FMSyxHQUtMO1lBQ1EsQ0FBQyxDQUxDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxLQUFDLENBQUssY0FBQyxDQUFjLENBQUM7UUFNdkMsQ0FBQztRQUNMOztXQUVHO1FBQ0gsNkJBUEssR0FPTDtZQUNRLENBQUMsQ0FQQyxJQUFDLENBQUksSUFBQyxDQUFJLENBQUMsS0FBQyxDQUFLLE1BQUMsQ0FBTSxDQUFDO1FBUS9CLENBQUM7UUFDTDs7V0FFRztRQUNILGtDQVRLLEdBU0w7WUFDUSxNQUFNLENBVEMsSUFBQSxDQUFLLEtBQUMsSUFBUSxJQUFBLENBQUssS0FBQyxDQUFLLE9BQUMsQ0FBTztRQVU1QyxDQUFDO1FBQ0w7O1dBRUc7UUFDSCw2QkFYSyxHQVdMO1lBQ1EsQ0FBQyxDQVhDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxLQUFDLENBQUssTUFBQyxDQUFNLENBQUM7UUFZL0IsQ0FBQztRQUNMOztXQUVHO1FBQ0gsK0NBYkssR0FhTDtZQUFBLGlCQVlLO1lBWEcsQ0FBQyxDQWJDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxFQUFDLENBQUUsZ0JBQUMsRUFBaUI7Z0JBYzlCLEtBQUksQ0FiQyxLQUFDLENBQUssSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDO1lBYzFCLENBQUMsQ0FiQyxDQUFDO1lBZUgsQ0FBQyxDQWJDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxFQUFDLENBQUUsaUJBQUMsRUFBa0I7Z0JBYy9CLEtBQUksQ0FiQyxNQUFDLENBQU0sSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDO1lBYzNCLENBQUMsQ0FiQyxDQUFDO1lBZUgsQ0FBQyxDQWJDLElBQUMsQ0FBSSxJQUFDLENBQUksQ0FBQyxFQUFDLENBQUUsaUJBQUMsRUFBa0I7Z0JBYy9CLEtBQUksQ0FiQyxNQUFDLENBQU0sSUFBQyxDQUFJLElBQUMsQ0FBSSxDQUFDO1lBYzNCLENBQUMsQ0FiQyxDQUFBO1FBY04sQ0FBQztRQUNMOztXQUVHO1FBQ0gsK0JBZkssR0FlTDtZQUNRLENBQUMsQ0FmQyxJQUFDLENBQUksSUFBQyxDQUFJLENBQUMsS0FBQyxDQUFLLFFBQUMsQ0FBUSxDQUFDO1FBZ0JqQyxDQUFDO1FBQ0w7O1dBRUc7UUFDSCxvQ0FqQkssR0FpQkw7WUFDUSxzQ0FBc0M7UUFDMUMsQ0FBQztRQWhCRSx5QkFBQSxHQUFvQztZQWtCM0MsRUFqQkUsSUFBQSxFQUFNLGdCQUFBLEVBQVcsSUFBQSxFQUFNLENBQUE7d0JBa0JyQiwwQkFBMEI7d0JBQzFCLFFBQVEsRUFqQkUsVUFBQTt3QkFrQlYsUUFBUSxFQWpCRSxpTEF1QlQ7cUJBQ0osRUFqQkMsRUFBRztTQWtCSixDQWpCQztRQWtCRjs7V0FFRztRQWxCRiw2QkFBQSxHQUFBLGNBQUEsT0FBQTtZQW9CRCxFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1NBQ25CLEVBckJBLENBcUJBLENBQUM7UUFsQkssNkJBQUEsR0FBeUQ7WUFvQmhFLFNBQVMsRUFuQkUsQ0FBQSxFQUFHLElBQUEsRUFBTSxZQUFBLEVBQU0sRUFBRTtZQW9CNUIsT0FBTyxFQW5CRSxDQUFBLEVBQUcsSUFBQSxFQUFNLGFBQUEsRUFBTyxFQUFFO1lBb0IzQixRQUFRLEVBbkJFLENBQUEsRUFBRyxJQUFBLEVBQU0sYUFBQSxFQUFPLEVBQUU7WUFvQjVCLFFBQVEsRUFuQkUsQ0FBQSxFQUFHLElBQUEsRUFBTSxhQUFBLEVBQU8sRUFBRTtZQW9CNUIsWUFBWSxFQW5CRSxDQUFBLEVBQUcsSUFBQSxFQUFNLGtCQUFBLEVBQWEsSUFBQSxFQUFNLENBQUEsYUFBRSxFQUFhLEVBQUcsRUFBRTtZQW9COUQsV0FBVyxFQW5CRSxDQUFBLEVBQUcsSUFBQSxFQUFNLGtCQUFBLEVBQWEsSUFBQSxFQUFNLENBQUEsWUFBRSxFQUFZLEVBQUcsRUFBRTtTQW9CM0QsQ0FuQkM7UUFvQkYscUJBQUM7S0FoSEQsQUFnSEMsSUFBQTtJQTlHQSx3Q0FBQTtJQWdIRDtRQUNBLGdCQUFnQjtRQUNoQixjQUFjLENBQUMsVUFBVSxDQUFDO1FBQzFCOzs7V0FHRztRQUNILGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDOUIsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDOUIsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2pDLGdCQUFnQjtRQUNoQixjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUMvQixnQkFBZ0I7UUFDaEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEMsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2hDLGdCQUFnQjtRQUNoQixjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxnQkFBZ0I7UUFDaEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzlCLGdCQUFnQjtRQUNoQixjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIifQ==