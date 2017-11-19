(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./modal.module", "./modal.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modal_module_1 = require("./modal.module");
    exports.ModalModule = modal_module_1.ModalModule;
    var modal_component_1 = require("./modal.component");
    exports.ModalComponent = modal_component_1.ModalComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RtcC9saWIvbW9kYWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSwrQ0FBcUI7SUFBWixxQ0FBQSxXQUFBLENBQUE7SUFDVCxxREFBd0I7SUFBZiwyQ0FBQSxjQUFBLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=