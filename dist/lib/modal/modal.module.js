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
    exports.ModalComponent = modal_component_1.ModalComponent;
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
//# sourceMappingURL=modal.module.js.map