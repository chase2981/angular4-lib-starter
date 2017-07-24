/**
 * Generated bundle index. Do not edit.
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./public_api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var public_api_1 = require("./public_api");
    exports.ModalModule = public_api_1.ModalModule;
    exports.ModalComponent = public_api_1.ModalComponent;
});
