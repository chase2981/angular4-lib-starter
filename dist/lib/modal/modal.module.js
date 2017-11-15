import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                    ],
                    declarations: [
                        ModalComponent
                    ],
                    exports: [
                        ModalComponent
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
export { ModalModule };
function ModalModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ModalModule.ctorParameters;
}
export { ModalComponent };
//# sourceMappingURL=modal.module.js.map