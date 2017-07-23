"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
var testing_1 = require("@angular/core/testing");
var Observable_1 = require("rxjs/Observable");
describe('Angular async helper', function () {
    var actuallyDone = false;
    beforeEach(function () { actuallyDone = false; });
    afterEach(function () { expect(actuallyDone).toBe(true, 'actuallyDone should be true'); });
    it('should run normal test', function () { actuallyDone = true; });
    it('should run normal async test', function (done) {
        setTimeout(function () {
            actuallyDone = true;
            done();
        }, 0);
    });
    it('should run async test with task', testing_1.async(function () { setTimeout(function () { actuallyDone = true; }, 0); }));
    it('should run async test with successful promise', testing_1.async(function () {
        var p = new Promise(function (resolve) { setTimeout(resolve, 10); });
        p.then(function () { actuallyDone = true; });
    }));
    it('should run async test with failed promise', testing_1.async(function () {
        var p = new Promise(function (resolve, reject) { setTimeout(reject, 10); });
        p.catch(function () { actuallyDone = true; });
    }));
    // Use done. Cannot use setInterval with async or fakeAsync
    // See https://github.com/angular/angular/issues/10127
    it('should run async test with successful delayed Observable', function (done) {
        var source = Observable_1.Observable.of(true).delay(10);
        source.subscribe(function (val) { return actuallyDone = true; }, function (err) { return fail(err); }, done);
    });
    // Cannot use setInterval from within an async zone test
    // See https://github.com/angular/angular/issues/10127
    // xit('should run async test with successful delayed Observable', async(() => {
    //   const source = Observable.of(true).delay(10);
    //   source.subscribe(
    //     val => actuallyDone = true,
    //     err => fail(err)
    //   );
    // }));
    // // Fail message: Error: 1 periodic timer(s) still in the queue
    // // See https://github.com/angular/angular/issues/10127
    // xit('should run async test with successful delayed Observable', fakeAsync(() => {
    //   const source = Observable.of(true).delay(10);
    //   source.subscribe(
    //     val => actuallyDone = true,
    //     err => fail(err)
    //   );
    //   tick();
    // }));
});
//# sourceMappingURL=async-helper.spec.js.map