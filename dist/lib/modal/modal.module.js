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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RtcC9saWIvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsc0NBQWtCO0lBQ2xCLDBDQUFzQjtJQUV0Qix3Q0FBcUI7SUFFckIscURBQXdCO0lBa0JmLHlCQWxCQSxnQ0FBQSxDQWtCQTtJQWpCVDtRQUFBO1FBcUJBLENBQUM7UUFuQmlDLHNCQUFBLEdBQW9DO1lBRHRFLEVBRUUsSUFBQSxFQUFNLGVBQUEsRUFBVSxJQUFBLEVBQU0sQ0FBQTt3QkFEdEIsT0FBTyxFQUVFOzRCQURQLG1CQUFXOzRCQUNYLHFCQUFZO3lCQUNiO3dCQUNELFlBQVksRUFFRTs0QkFEWixnQ0FBYzt5QkFDZjt3QkFDRCxPQUFPLEVBRUU7NEJBRFAsZ0NBQWM7eUJBQ2Y7d0JBQ0QsU0FBUyxFQUVFLEVBRFY7cUJBQ0YsRUFFQyxFQUFHO1NBREosQ0FFQztRQURGOztXQUVHO1FBQ0YsMEJBQUEsR0FBQSxjQUFBLE9BQUEsRUFDQSxFQURBLENBQ0EsQ0FBQztRQUNGLGtCQUFDO0tBckJELEFBcUJDLElBQUE7SUFuQkEsa0NBQUE7SUFxQkQ7UUFDQSxnQkFBZ0I7UUFDaEIsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN2Qjs7O1dBR0c7UUFDSCxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQzNCLENBQUMiLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiJ9