"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bag_1 = require("./bag");
///////// Fakes /////////
var FakeFancyService = (function (_super) {
    __extends(FakeFancyService, _super);
    function FakeFancyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 'faked value';
        return _this;
    }
    return FakeFancyService;
}(bag_1.FancyService));
exports.FakeFancyService = FakeFancyService;
////////////////////////
// Straight Jasmine - no imports from Angular test libraries
describe('FancyService without the TestBed', function () {
    var service;
    beforeEach(function () { service = new bag_1.FancyService(); });
    it('#getValue should return real value', function () {
        expect(service.getValue()).toBe('real value');
    });
    it('#getAsyncValue should return async value', function (done) {
        service.getAsyncValue().then(function (value) {
            expect(value).toBe('async value');
            done();
        });
    });
    it('#getTimeoutValue should return timeout value', function (done) {
        service = new bag_1.FancyService();
        service.getTimeoutValue().then(function (value) {
            expect(value).toBe('timeout value');
            done();
        });
    });
    it('#getObservableValue should return observable value', function (done) {
        service.getObservableValue().subscribe(function (value) {
            expect(value).toBe('observable value');
            done();
        });
    });
});
// DependentService requires injection of a FancyService
describe('DependentService without the TestBed', function () {
    var service;
    it('#getValue should return real value by way of the real FancyService', function () {
        service = new bag_1.DependentService(new bag_1.FancyService());
        expect(service.getValue()).toBe('real value');
    });
    it('#getValue should return faked value by way of a fakeService', function () {
        service = new bag_1.DependentService(new FakeFancyService());
        expect(service.getValue()).toBe('faked value');
    });
    it('#getValue should return faked value from a fake object', function () {
        var fake = { getValue: function () { return 'fake value'; } };
        service = new bag_1.DependentService(fake);
        expect(service.getValue()).toBe('fake value');
    });
    it('#getValue should return stubbed value from a FancyService spy', function () {
        var fancy = new bag_1.FancyService();
        var stubValue = 'stub value';
        var spy = spyOn(fancy, 'getValue').and.returnValue(stubValue);
        service = new bag_1.DependentService(fancy);
        expect(service.getValue()).toBe(stubValue, 'service returned stub value');
        expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
        expect(spy.calls.mostRecent().returnValue).toBe(stubValue);
    });
});
var bag_2 = require("./bag");
describe('ReversePipe', function () {
    var pipe;
    beforeEach(function () { pipe = new bag_2.ReversePipe(); });
    it('transforms "abc" to "cba"', function () {
        expect(pipe.transform('abc')).toBe('cba');
    });
    it('no change to palindrome: "able was I ere I saw elba"', function () {
        var palindrome = 'able was I ere I saw elba';
        expect(pipe.transform(palindrome)).toBe(palindrome);
    });
});
var bag_3 = require("./bag");
describe('ButtonComp', function () {
    var comp;
    beforeEach(function () { return comp = new bag_3.ButtonComponent(); });
    it('#isOn should be false initially', function () {
        expect(comp.isOn).toBe(false);
    });
    it('#clicked() should set #isOn to true', function () {
        comp.clicked();
        expect(comp.isOn).toBe(true);
    });
    it('#clicked() should set #message to "is on"', function () {
        comp.clicked();
        expect(comp.message).toMatch(/is on/i);
    });
    it('#clicked() should toggle #isOn', function () {
        comp.clicked();
        expect(comp.isOn).toBe(true);
        comp.clicked();
        expect(comp.isOn).toBe(false);
    });
});
//# sourceMappingURL=bag.no-testbed.spec.js.map