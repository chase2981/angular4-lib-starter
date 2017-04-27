import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    HttpModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = function () { return []; };
function AppModule_tsickle_Closure_declarations() {
    /** @type {?} */
    AppModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppModule.ctorParameters;
}
//# sourceMappingURL=app.module.js.map