"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var modal_component_1 = require("./modal.component");
var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
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
