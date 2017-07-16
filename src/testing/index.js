"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
__export(require("./jasmine-matchers"));
__export(require("./router-stubs"));
///// Short utilities /////
/** Wait a tick, then detect changes */
function advance(f) {
    testing_1.tick();
    f.detectChanges();
}
exports.advance = advance;
/**
 * Create custom DOM event the old fashioned way
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 * Although officially deprecated, some browsers (phantom) don't accept the preferred "new Event(eventName)"
 */
function newEvent(eventName, bubbles, cancelable) {
    if (bubbles === void 0) { bubbles = false; }
    if (cancelable === void 0) { cancelable = false; }
    var evt = document.createEvent('CustomEvent'); // MUST be 'CustomEvent'
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}
exports.newEvent = newEvent;
// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
exports.ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 }
};
/** Simulate element click. Defaults to mouse left-button click event. */
function click(el, eventObj) {
    if (eventObj === void 0) { eventObj = exports.ButtonClickEvents.left; }
    if (el instanceof HTMLElement) {
        el.click();
    }
    else {
        el.triggerEventHandler('click', eventObj);
    }
}
exports.click = click;
//# sourceMappingURL=index.js.map