(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "@angular/forms", "./modal.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var forms_1 = require("@angular/forms");
    var modal_component_1 = require("./modal.component");
    var ModalModule = (function () {
        function ModalModule() {
        }
        ModalModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [
                            forms_1.FormsModule,
                            common_1.CommonModule,
                        ],
                        declarations: [
                            modal_component_1.ModalComponent
                        ],
                        exports: [
                            modal_component_1.ModalComponent
                        ],
                        providers: []
                    },] },
        ];
        /**
         * @nocollapse
         */
        ModalModule.ctorParameters = function () { return []; };
        return ModalModule;
    }());
    exports.ModalModule = ModalModule;
    function ModalModule_tsickle_Closure_declarations() {
        /** @type {?} */
        ModalModule.decorators;
        /**
         * @nocollapse
         * @type {?}
         */
        ModalModule.ctorParameters;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RtcC9saWIvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsc0NBQWtCO0lBQ2xCLDBDQUFzQjtJQUV0Qix3Q0FBcUI7SUFFckIscURBQXdCO0lBQ3hCO1FBQUE7UUFxQkEsQ0FBQztRQW5CaUMsc0JBQUEsR0FBb0M7WUFEdEUsRUFFRSxJQUFBLEVBQU0sZUFBQSxFQUFVLElBQUEsRUFBTSxDQUFBO3dCQUR0QixPQUFPLEVBRUU7NEJBRFAsbUJBQVc7NEJBQ1gscUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUVFOzRCQURaLGdDQUFjO3lCQUNmO3dCQUNELE9BQU8sRUFFRTs0QkFEUCxnQ0FBYzt5QkFDZjt3QkFDRCxTQUFTLEVBRUUsRUFEVjtxQkFDRixFQUVDLEVBQUc7U0FESixDQUVDO1FBREY7O1dBRUc7UUFDRiwwQkFBQSxHQUFBLGNBQUEsT0FBQSxFQUNBLEVBREEsQ0FDQSxDQUFDO1FBQ0Ysa0JBQUM7S0FyQkQsQUFxQkMsSUFBQTtJQW5CQSxrQ0FBQTtJQXFCRDtRQUNBLGdCQUFnQjtRQUNoQixXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3ZCOzs7V0FHRztRQUNILFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDM0IsQ0FBQyIsImZpbGUiOiJtb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIn0=