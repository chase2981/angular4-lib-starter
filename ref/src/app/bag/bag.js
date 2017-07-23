"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:forin */
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
////////// The App: Services and Components for the tests. //////////////
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
////////// Services ///////////////
var FancyService = (function () {
    function FancyService() {
        this.value = 'real value';
    }
    FancyService.prototype.getValue = function () { return this.value; };
    FancyService.prototype.setValue = function (value) { this.value = value; };
    FancyService.prototype.getAsyncValue = function () { return Promise.resolve('async value'); };
    FancyService.prototype.getObservableValue = function () { return Observable_1.Observable.of('observable value'); };
    FancyService.prototype.getTimeoutValue = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve('timeout value'); }, 10);
        });
    };
    FancyService.prototype.getObservableDelayValue = function () {
        return Observable_1.Observable.of('observable delay value').delay(10);
    };
    return FancyService;
}());
FancyService = __decorate([
    core_1.Injectable()
], FancyService);
exports.FancyService = FancyService;
var DependentService = (function () {
    function DependentService(dependentService) {
        this.dependentService = dependentService;
    }
    DependentService.prototype.getValue = function () { return this.dependentService.getValue(); };
    return DependentService;
}());
DependentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [FancyService])
], DependentService);
exports.DependentService = DependentService;
/////////// Pipe ////////////////
/*
 * Reverse the input string.
*/
var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (s) {
        var r = '';
        for (var i = s.length; i;) {
            r += s[--i];
        }
        ;
        return r;
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    core_1.Pipe({ name: 'reverse' })
], ReversePipe);
exports.ReversePipe = ReversePipe;
//////////// Components /////////////
var BankAccountComponent = (function () {
    function BankAccountComponent() {
    }
    return BankAccountComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BankAccountComponent.prototype, "bank", void 0);
__decorate([
    core_1.Input('account'),
    __metadata("design:type", String)
], BankAccountComponent.prototype, "id", void 0);
BankAccountComponent = __decorate([
    core_1.Component({
        selector: 'bank-account',
        template: "\n   Bank Name: {{bank}}\n   Account Id: {{id}}\n "
    })
], BankAccountComponent);
exports.BankAccountComponent = BankAccountComponent;
/** A component with attributes, styles, classes, and property setting */
var BankAccountParentComponent = (function () {
    function BankAccountParentComponent() {
        this.width = 200;
        this.color = 'red';
        this.isClosed = true;
    }
    return BankAccountParentComponent;
}());
BankAccountParentComponent = __decorate([
    core_1.Component({
        selector: 'bank-account-parent',
        template: "\n   <bank-account\n      bank=\"RBC\"\n      account=\"4747\"\n      [style.width.px]=\"width\"\n      [style.color]=\"color\"\n      [class.closed]=\"isClosed\"\n      [class.open]=\"!isClosed\">\n   </bank-account>\n "
    })
], BankAccountParentComponent);
exports.BankAccountParentComponent = BankAccountParentComponent;
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.isOn = false;
    }
    ButtonComponent.prototype.clicked = function () { this.isOn = !this.isOn; };
    Object.defineProperty(ButtonComponent.prototype, "message", {
        get: function () { return "The light is " + (this.isOn ? 'On' : 'Off'); },
        enumerable: true,
        configurable: true
    });
    return ButtonComponent;
}());
ButtonComponent = __decorate([
    core_1.Component({
        selector: 'button-comp',
        template: "\n    <button (click)=\"clicked()\">Click me!</button>\n    <span>{{message}}</span>"
    })
], ButtonComponent);
exports.ButtonComponent = ButtonComponent;
var Child1Component = (function () {
    function Child1Component() {
        this.text = 'Original';
    }
    return Child1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Child1Component.prototype, "text", void 0);
Child1Component = __decorate([
    core_1.Component({
        selector: 'child-1',
        template: "<span>Child-1({{text}})</span>"
    })
], Child1Component);
exports.Child1Component = Child1Component;
var Child2Component = (function () {
    function Child2Component() {
    }
    return Child2Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Child2Component.prototype, "text", void 0);
Child2Component = __decorate([
    core_1.Component({
        selector: 'child-2',
        template: '<div>Child-2({{text}})</div>'
    })
], Child2Component);
exports.Child2Component = Child2Component;
var Child3Component = (function () {
    function Child3Component() {
    }
    return Child3Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Child3Component.prototype, "text", void 0);
Child3Component = __decorate([
    core_1.Component({
        selector: 'child-3',
        template: '<div>Child-3({{text}})</div>'
    })
], Child3Component);
exports.Child3Component = Child3Component;
var InputComponent = (function () {
    function InputComponent() {
        this.name = 'John';
    }
    return InputComponent;
}());
InputComponent = __decorate([
    core_1.Component({
        selector: 'input-comp',
        template: "<input [(ngModel)]=\"name\">"
    })
], InputComponent);
exports.InputComponent = InputComponent;
/* Prefer this metadata syntax */
// @Directive({
//   selector: 'input[value]',
//   host: {
//     '[value]': 'value',
//     '(input)': 'valueChange.emit($event.target.value)'
//   },
//   inputs:  ['value'],
//   outputs: ['valueChange']
// })
// export class InputValueBinderDirective {
//   value: any;
//   valueChange: EventEmitter<any> = new EventEmitter();
// }
// As the styleguide recommends
var InputValueBinderDirective = (function () {
    function InputValueBinderDirective() {
        this.valueChange = new core_1.EventEmitter();
    }
    InputValueBinderDirective.prototype.onInput = function (value) { this.valueChange.emit(value); };
    return InputValueBinderDirective;
}());
__decorate([
    core_1.HostBinding(),
    core_1.Input(),
    __metadata("design:type", Object)
], InputValueBinderDirective.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputValueBinderDirective.prototype, "valueChange", void 0);
__decorate([
    core_1.HostListener('input', ['$event.target.value']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InputValueBinderDirective.prototype, "onInput", null);
InputValueBinderDirective = __decorate([
    core_1.Directive({ selector: 'input[value]' })
], InputValueBinderDirective);
exports.InputValueBinderDirective = InputValueBinderDirective;
var InputValueBinderComponent = (function () {
    function InputValueBinderComponent() {
        this.name = 'Sally'; // initial value
    }
    return InputValueBinderComponent;
}());
InputValueBinderComponent = __decorate([
    core_1.Component({
        selector: 'input-value-comp',
        template: "\n    Name: <input [(value)]=\"name\"> {{name}}\n  "
    })
], InputValueBinderComponent);
exports.InputValueBinderComponent = InputValueBinderComponent;
var ParentComponent = (function () {
    function ParentComponent() {
    }
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-comp',
        template: "Parent(<child-1></child-1>)"
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
var IoComponent = (function () {
    function IoComponent() {
        this.selected = new core_1.EventEmitter();
    }
    IoComponent.prototype.click = function () { this.selected.emit(this.hero); };
    return IoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Hero)
], IoComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IoComponent.prototype, "selected", void 0);
IoComponent = __decorate([
    core_1.Component({
        selector: 'io-comp',
        template: "<div class=\"hero\" (click)=\"click()\">Original {{hero.name}}</div>"
    })
], IoComponent);
exports.IoComponent = IoComponent;
var IoParentComponent = (function () {
    function IoParentComponent() {
        this.heroes = [{ name: 'Bob' }, { name: 'Carol' }, { name: 'Ted' }, { name: 'Alice' }];
    }
    IoParentComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    return IoParentComponent;
}());
IoParentComponent = __decorate([
    core_1.Component({
        selector: 'io-parent-comp',
        template: "\n  <p *ngIf=\"!selectedHero\"><i>Click to select a hero</i></p>\n  <p *ngIf=\"selectedHero\">The selected hero is {{selectedHero.name}}</p>\n  <io-comp\n    *ngFor=\"let hero of heroes\"\n    [hero]=hero\n    (selected)=\"onSelect($event)\">\n  </io-comp>\n  "
    })
], IoParentComponent);
exports.IoParentComponent = IoParentComponent;
var MyIfComponent = (function () {
    function MyIfComponent() {
        this.showMore = false;
    }
    return MyIfComponent;
}());
MyIfComponent = __decorate([
    core_1.Component({
        selector: 'my-if-comp',
        template: "MyIf(<span *ngIf=\"showMore\">More</span>)"
    })
], MyIfComponent);
exports.MyIfComponent = MyIfComponent;
var TestProvidersComponent = (function () {
    function TestProvidersComponent(fancyService) {
        this.fancyService = fancyService;
    }
    return TestProvidersComponent;
}());
TestProvidersComponent = __decorate([
    core_1.Component({
        selector: 'my-service-comp',
        template: "injected value: {{fancyService.value}}",
        providers: [FancyService]
    }),
    __metadata("design:paramtypes", [FancyService])
], TestProvidersComponent);
exports.TestProvidersComponent = TestProvidersComponent;
var TestViewProvidersComponent = (function () {
    function TestViewProvidersComponent(fancyService) {
        this.fancyService = fancyService;
    }
    return TestViewProvidersComponent;
}());
TestViewProvidersComponent = __decorate([
    core_1.Component({
        selector: 'my-service-comp',
        template: "injected value: {{fancyService.value}}",
        viewProviders: [FancyService]
    }),
    __metadata("design:paramtypes", [FancyService])
], TestViewProvidersComponent);
exports.TestViewProvidersComponent = TestViewProvidersComponent;
var ExternalTemplateComponent = (function () {
    function ExternalTemplateComponent(service) {
        this.service = service;
    }
    ExternalTemplateComponent.prototype.ngOnInit = function () {
        if (this.service) {
            this.serviceValue = this.service.getValue();
        }
    };
    return ExternalTemplateComponent;
}());
ExternalTemplateComponent = __decorate([
    core_1.Component({
        selector: 'external-template-comp',
        templateUrl: './bag-external-template.html'
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [FancyService])
], ExternalTemplateComponent);
exports.ExternalTemplateComponent = ExternalTemplateComponent;
var InnerCompWithExternalTemplateComponent = (function () {
    function InnerCompWithExternalTemplateComponent() {
    }
    return InnerCompWithExternalTemplateComponent;
}());
InnerCompWithExternalTemplateComponent = __decorate([
    core_1.Component({
        selector: 'comp-w-ext-comp',
        template: "\n  <h3>comp-w-ext-comp</h3>\n  <external-template-comp></external-template-comp>\n  "
    })
], InnerCompWithExternalTemplateComponent);
exports.InnerCompWithExternalTemplateComponent = InnerCompWithExternalTemplateComponent;
var BadTemplateUrlComponent = (function () {
    function BadTemplateUrlComponent() {
    }
    return BadTemplateUrlComponent;
}());
BadTemplateUrlComponent = __decorate([
    core_1.Component({
        selector: 'bad-template-comp',
        templateUrl: './non-existent.html'
    })
], BadTemplateUrlComponent);
exports.BadTemplateUrlComponent = BadTemplateUrlComponent;
var NeedsContentComponent = (function () {
    function NeedsContentComponent() {
    }
    return NeedsContentComponent;
}());
__decorate([
    core_1.ContentChildren('content'),
    __metadata("design:type", Object)
], NeedsContentComponent.prototype, "children", void 0);
NeedsContentComponent = __decorate([
    core_1.Component({ selector: 'needs-content', template: '<ng-content></ng-content>' })
], NeedsContentComponent);
exports.NeedsContentComponent = NeedsContentComponent;
///////// MyIfChildComp ////////
var MyIfChildComponent = (function () {
    function MyIfChildComponent() {
        this.value = '';
        this.valueChange = new core_1.EventEmitter();
        this.changeLog = [];
        this.ngOnInitCalled = false;
        this.ngOnChangesCounter = 0;
        this.ngOnDestroyCalled = false;
    }
    Object.defineProperty(MyIfChildComponent.prototype, "childValue", {
        get: function () { return this.value; },
        set: function (v) {
            if (this.value === v) {
                return;
            }
            this.value = v;
            this.valueChange.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    MyIfChildComponent.prototype.ngOnInit = function () {
        this.ngOnInitCalled = true;
        this.changeLog.push('ngOnInit called');
    };
    MyIfChildComponent.prototype.ngOnDestroy = function () {
        this.ngOnDestroyCalled = true;
        this.changeLog.push('ngOnDestroy called');
    };
    MyIfChildComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            this.ngOnChangesCounter += 1;
            var prop = changes[propName];
            var cur = JSON.stringify(prop.currentValue);
            var prev = JSON.stringify(prop.previousValue);
            this.changeLog.push(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    return MyIfChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MyIfChildComponent.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MyIfChildComponent.prototype, "valueChange", void 0);
MyIfChildComponent = __decorate([
    core_1.Component({
        selector: 'my-if-child-1',
        template: "\n    <h4>MyIfChildComp</h4>\n    <div>\n      <label>Child value: <input [(ngModel)]=\"childValue\"> </label>\n    </div>\n    <p><i>Change log:</i></p>\n    <div *ngFor=\"let log of changeLog; let i=index\">{{i + 1}} - {{log}}</div>"
    })
], MyIfChildComponent);
exports.MyIfChildComponent = MyIfChildComponent;
///////// MyIfParentComp ////////
var MyIfParentComponent = (function () {
    function MyIfParentComponent() {
        this.ngOnInitCalled = false;
        this.parentValue = 'Hello, World';
        this.showChild = false;
        this.toggleLabel = 'Unknown';
    }
    MyIfParentComponent.prototype.ngOnInit = function () {
        this.ngOnInitCalled = true;
        this.clicked();
    };
    MyIfParentComponent.prototype.clicked = function () {
        this.showChild = !this.showChild;
        this.toggleLabel = this.showChild ? 'Close' : 'Show';
    };
    return MyIfParentComponent;
}());
MyIfParentComponent = __decorate([
    core_1.Component({
        selector: 'my-if-parent-comp',
        template: "\n    <h3>MyIfParentComp</h3>\n    <label>Parent value:\n      <input [(ngModel)]=\"parentValue\">\n    </label>\n    <button (click)=\"clicked()\">{{toggleLabel}} Child</button><br>\n    <div *ngIf=\"showChild\"\n         style=\"margin: 4px; padding: 4px; background-color: aliceblue;\">\n      <my-if-child-1  [(value)]=\"parentValue\"></my-if-child-1>\n    </div>\n  "
    })
], MyIfParentComponent);
exports.MyIfParentComponent = MyIfParentComponent;
var ReversePipeComponent = (function () {
    function ReversePipeComponent() {
        this.text = 'my dog has fleas.';
    }
    return ReversePipeComponent;
}());
ReversePipeComponent = __decorate([
    core_1.Component({
        selector: 'reverse-pipe-comp',
        template: "\n    <input [(ngModel)]=\"text\">\n    <span>{{text | reverse}}</span>\n  "
    })
], ReversePipeComponent);
exports.ReversePipeComponent = ReversePipeComponent;
var ShellComponent = (function () {
    function ShellComponent() {
    }
    return ShellComponent;
}());
ShellComponent = __decorate([
    core_1.Component({ template: '<div>Replace Me</div>' })
], ShellComponent);
exports.ShellComponent = ShellComponent;
var BagComponent = (function () {
    function BagComponent() {
    }
    return BagComponent;
}());
BagComponent = __decorate([
    core_1.Component({
        selector: 'bag-comp',
        template: "\n    <h1>Specs Bag</h1>\n    <my-if-parent-comp></my-if-parent-comp>\n    <hr>\n    <h3>Input/Output Component</h3>\n    <io-parent-comp></io-parent-comp>\n    <hr>\n    <h3>External Template Component</h3>\n    <external-template-comp></external-template-comp>\n    <hr>\n    <h3>Component With External Template Component</h3>\n    <comp-w-ext-comp></comp-w-ext-comp>\n    <hr>\n    <h3>Reverse Pipe</h3>\n    <reverse-pipe-comp></reverse-pipe-comp>\n    <hr>\n    <h3>InputValueBinder Directive</h3>\n    <input-value-comp></input-value-comp>\n    <hr>\n    <h3>Button Component</h3>\n    <button-comp></button-comp>\n    <hr>\n    <h3>Needs Content</h3>\n    <needs-content #nc>\n      <child-1 #content text=\"My\"></child-1>\n      <child-2 #content text=\"dog\"></child-2>\n      <child-2 text=\"has\"></child-2>\n      <child-3 #content text=\"fleas\"></child-3>\n      <div #content>!</div>\n    </needs-content>\n  "
    })
], BagComponent);
exports.BagComponent = BagComponent;
//////// Aggregations ////////////
exports.bagDeclarations = [
    BagComponent,
    BankAccountComponent, BankAccountParentComponent,
    ButtonComponent,
    Child1Component, Child2Component, Child3Component,
    ExternalTemplateComponent, InnerCompWithExternalTemplateComponent,
    InputComponent,
    InputValueBinderDirective, InputValueBinderComponent,
    IoComponent, IoParentComponent,
    MyIfComponent, MyIfChildComponent, MyIfParentComponent,
    NeedsContentComponent, ParentComponent,
    TestProvidersComponent, TestViewProvidersComponent,
    ReversePipe, ReversePipeComponent, ShellComponent
];
exports.bagProviders = [DependentService, FancyService];
////////////////////
////////////
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var BagModule = (function () {
    function BagModule() {
    }
    return BagModule;
}());
BagModule = __decorate([
    core_2.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: exports.bagDeclarations,
        providers: exports.bagProviders,
        entryComponents: [BagComponent],
        bootstrap: [BagComponent]
    })
], BagModule);
exports.BagModule = BagModule;
//# sourceMappingURL=bag.js.map