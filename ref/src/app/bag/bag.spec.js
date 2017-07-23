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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bag_1 = require("./bag");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Forms symbols imported only for a specific test below
var forms_2 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("../../testing");
beforeEach(testing_2.addMatchers);
////////  Service Tests  /////////////
describe('use inject helper in beforeEach', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [bag_1.FancyService] });
        // `TestBed.get` returns the injectable or an
        //  alternative object (including null) if the service provider is not found.
        //  Of course it will be found in this case because we're providing it.
        service = testing_1.TestBed.get(bag_1.FancyService, null);
    });
    it('should use FancyService', function () {
        expect(service.getValue()).toBe('real value');
    });
    it('should use FancyService', function () {
        expect(service.getValue()).toBe('real value');
    });
    it('test should wait for FancyService.getAsyncValue', testing_1.async(function () {
        service.getAsyncValue().then(function (value) { return expect(value).toBe('async value'); });
    }));
    it('test should wait for FancyService.getTimeoutValue', testing_1.async(function () {
        service.getTimeoutValue().then(function (value) { return expect(value).toBe('timeout value'); });
    }));
    it('test should wait for FancyService.getObservableValue', testing_1.async(function () {
        service.getObservableValue().subscribe(function (value) { return expect(value).toBe('observable value'); });
    }));
    // Must use done. See https://github.com/angular/angular/issues/10127
    it('test should wait for FancyService.getObservableDelayValue', function (done) {
        service.getObservableDelayValue().subscribe(function (value) {
            expect(value).toBe('observable delay value');
            done();
        });
    });
    it('should allow the use of fakeAsync', testing_1.fakeAsync(function () {
        var value;
        service.getAsyncValue().then(function (val) { return value = val; });
        testing_1.tick(); // Trigger JS engine cycle until all promises resolve.
        expect(value).toBe('async value');
    }));
});
describe('use inject within `it`', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [bag_1.FancyService] });
    });
    it('should use modified providers', testing_1.inject([bag_1.FancyService], function (service) {
        service.setValue('value modified in beforeEach');
        expect(service.getValue()).toBe('value modified in beforeEach');
    }));
    it('test should wait for FancyService.getTimeoutValue', testing_1.async(testing_1.inject([bag_1.FancyService], function (service) {
        service.getTimeoutValue().then(function (value) { return expect(value).toBe('timeout value'); });
    })));
});
describe('using async(inject) within beforeEach', function () {
    var serviceValue;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [bag_1.FancyService] });
    });
    beforeEach(testing_1.async(testing_1.inject([bag_1.FancyService], function (service) {
        service.getAsyncValue().then(function (value) { return serviceValue = value; });
    })));
    it('should use asynchronously modified value ... in synchronous test', function () {
        expect(serviceValue).toBe('async value');
    });
});
/////////// Component Tests //////////////////
describe('TestBed Component Tests', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed
            .configureTestingModule({
            imports: [bag_1.BagModule],
        })
            .compileComponents();
    }));
    it('should create a component with inline template', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.Child1Component);
        fixture.detectChanges();
        expect(fixture).toHaveText('Child');
    });
    it('should create a component with external template', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.ExternalTemplateComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('from external template');
    });
    it('should allow changing members of the component', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.MyIfComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('MyIf()');
        fixture.componentInstance.showMore = true;
        fixture.detectChanges();
        expect(fixture).toHaveText('MyIf(More)');
    });
    it('should create a nested component bound to inputs/outputs', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.IoParentComponent);
        fixture.detectChanges();
        var heroes = fixture.debugElement.queryAll(platform_browser_1.By.css('.hero'));
        expect(heroes.length).toBeGreaterThan(0, 'has heroes');
        var comp = fixture.componentInstance;
        var hero = comp.heroes[0];
        testing_2.click(heroes[0]);
        fixture.detectChanges();
        var selected = fixture.debugElement.query(platform_browser_1.By.css('p'));
        expect(selected).toHaveText(hero.name);
    });
    it('can access the instance variable of an `*ngFor` row component', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.IoParentComponent);
        var comp = fixture.componentInstance;
        var heroName = comp.heroes[0].name; // first hero's name
        fixture.detectChanges();
        var ngForRow = fixture.debugElement.query(platform_browser_1.By.directive(bag_1.IoComponent)); // first hero ngForRow
        var hero = ngForRow.context['hero']; // the hero object passed into the row
        expect(hero.name).toBe(heroName, 'ngRow.context.hero');
        var rowComp = ngForRow.componentInstance;
        // jasmine.any is an "instance-of-type" test.
        expect(rowComp).toEqual(jasmine.any(bag_1.IoComponent), 'component is IoComp');
        expect(rowComp.hero.name).toBe(heroName, 'component.hero');
    });
    it('should support clicking a button', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.ButtonComponent);
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button'));
        var span = fixture.debugElement.query(platform_browser_1.By.css('span')).nativeElement;
        fixture.detectChanges();
        expect(span.textContent).toMatch(/is off/i, 'before click');
        testing_2.click(btn);
        fixture.detectChanges();
        expect(span.textContent).toMatch(/is on/i, 'after click');
    });
    // ngModel is async so we must wait for it with promise-based `whenStable`
    it('should support entering text in input box (ngModel)', testing_1.async(function () {
        var expectedOrigName = 'John';
        var expectedNewName = 'Sally';
        var fixture = testing_1.TestBed.createComponent(bag_1.InputComponent);
        fixture.detectChanges();
        var comp = fixture.componentInstance;
        var input = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        expect(comp.name).toBe(expectedOrigName, "At start name should be " + expectedOrigName + " ");
        // wait until ngModel binds comp.name to input box
        fixture.whenStable().then(function () {
            expect(input.value).toBe(expectedOrigName, "After ngModel updates input box, input.value should be " + expectedOrigName + " ");
            // simulate user entering new name in input
            input.value = expectedNewName;
            // that change doesn't flow to the component immediately
            expect(comp.name).toBe(expectedOrigName, "comp.name should still be " + expectedOrigName + " after value change, before binding happens");
            // dispatch a DOM event so that Angular learns of input value change.
            // then wait while ngModel pushes input.box value to comp.name
            input.dispatchEvent(testing_2.newEvent('input'));
            return fixture.whenStable();
        })
            .then(function () {
            expect(comp.name).toBe(expectedNewName, "After ngModel updates the model, comp.name should be " + expectedNewName + " ");
        });
    }));
    // fakeAsync version of ngModel input test enables sync test style
    // synchronous `tick` replaces asynchronous promise-base `whenStable`
    it('should support entering text in input box (ngModel) - fakeAsync', testing_1.fakeAsync(function () {
        var expectedOrigName = 'John';
        var expectedNewName = 'Sally';
        var fixture = testing_1.TestBed.createComponent(bag_1.InputComponent);
        fixture.detectChanges();
        var comp = fixture.componentInstance;
        var input = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        expect(comp.name).toBe(expectedOrigName, "At start name should be " + expectedOrigName + " ");
        // wait until ngModel binds comp.name to input box
        testing_1.tick();
        expect(input.value).toBe(expectedOrigName, "After ngModel updates input box, input.value should be " + expectedOrigName + " ");
        // simulate user entering new name in input
        input.value = expectedNewName;
        // that change doesn't flow to the component immediately
        expect(comp.name).toBe(expectedOrigName, "comp.name should still be " + expectedOrigName + " after value change, before binding happens");
        // dispatch a DOM event so that Angular learns of input value change.
        // then wait a tick while ngModel pushes input.box value to comp.name
        input.dispatchEvent(testing_2.newEvent('input'));
        testing_1.tick();
        expect(comp.name).toBe(expectedNewName, "After ngModel updates the model, comp.name should be " + expectedNewName + " ");
    }));
    it('ReversePipeComp should reverse the input text', testing_1.fakeAsync(function () {
        var inputText = 'the quick brown fox.';
        var expectedText = '.xof nworb kciuq eht';
        var fixture = testing_1.TestBed.createComponent(bag_1.ReversePipeComponent);
        fixture.detectChanges();
        var comp = fixture.componentInstance;
        var input = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        var span = fixture.debugElement.query(platform_browser_1.By.css('span')).nativeElement;
        // simulate user entering new name in input
        input.value = inputText;
        // dispatch a DOM event so that Angular learns of input value change.
        // then wait a tick while ngModel pushes input.box value to comp.text
        // and Angular updates the output span
        input.dispatchEvent(testing_2.newEvent('input'));
        testing_1.tick();
        fixture.detectChanges();
        expect(span.textContent).toBe(expectedText, 'output span');
        expect(comp.text).toBe(inputText, 'component.text');
    }));
    // Use this technique to find attached directives of any kind
    it('can examine attached directives and listeners', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.InputComponent);
        fixture.detectChanges();
        var inputEl = fixture.debugElement.query(platform_browser_1.By.css('input'));
        expect(inputEl.providerTokens).toContain(forms_2.NgModel, 'NgModel directive');
        var ngControl = inputEl.injector.get(forms_2.NgControl);
        expect(ngControl).toEqual(jasmine.any(forms_2.NgControl), 'NgControl directive');
        expect(inputEl.listeners.length).toBeGreaterThan(2, 'several listeners attached');
    });
    it('BankAccountComponent should set attributes, styles, classes, and properties', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.BankAccountParentComponent);
        fixture.detectChanges();
        var comp = fixture.componentInstance;
        // the only child is debugElement of the BankAccount component
        var el = fixture.debugElement.children[0];
        var childComp = el.componentInstance;
        expect(childComp).toEqual(jasmine.any(bag_1.BankAccountComponent));
        expect(el.context).toBe(childComp, 'context is the child component');
        expect(el.attributes['account']).toBe(childComp.id, 'account attribute');
        expect(el.attributes['bank']).toBe(childComp.bank, 'bank attribute');
        expect(el.classes['closed']).toBe(true, 'closed class');
        expect(el.classes['open']).toBe(false, 'open class');
        expect(el.styles['color']).toBe(comp.color, 'color style');
        expect(el.styles['width']).toBe(comp.width + 'px', 'width style');
        // Removed on 12/02/2016 when ceased public discussion of the `Renderer`. Revive in future?
        // expect(el.properties['customProperty']).toBe(true, 'customProperty');
    });
});
describe('TestBed Component Overrides:', function () {
    it('should override ChildComp\'s template', function () {
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.Child1Component],
        })
            .overrideComponent(bag_1.Child1Component, {
            set: { template: '<span>Fake</span>' }
        })
            .createComponent(bag_1.Child1Component);
        fixture.detectChanges();
        expect(fixture).toHaveText('Fake');
    });
    it('should override TestProvidersComp\'s FancyService provider', function () {
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.TestProvidersComponent],
        })
            .overrideComponent(bag_1.TestProvidersComponent, {
            remove: { providers: [bag_1.FancyService] },
            add: { providers: [{ provide: bag_1.FancyService, useClass: FakeFancyService }] },
        })
            .createComponent(bag_1.TestProvidersComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('injected value: faked value', 'text');
        // Explore the providerTokens
        var tokens = fixture.debugElement.providerTokens;
        expect(tokens).toContain(fixture.componentInstance.constructor, 'component ctor');
        expect(tokens).toContain(bag_1.TestProvidersComponent, 'TestProvidersComp');
        expect(tokens).toContain(bag_1.FancyService, 'FancyService');
    });
    it('should override TestViewProvidersComp\'s FancyService viewProvider', function () {
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.TestViewProvidersComponent],
        })
            .overrideComponent(bag_1.TestViewProvidersComponent, {
            // remove: { viewProviders: [FancyService]},
            // add:    { viewProviders: [{ provide: FancyService, useClass: FakeFancyService }] },
            // Or replace them all (this component has only one viewProvider)
            set: { viewProviders: [{ provide: bag_1.FancyService, useClass: FakeFancyService }] },
        })
            .createComponent(bag_1.TestViewProvidersComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('injected value: faked value');
    });
    it('injected provider should not be same as component\'s provider', function () {
        // TestComponent is parent of TestProvidersComponent
        var TestComponent = (function () {
            function TestComponent() {
            }
            return TestComponent;
        }());
        TestComponent = __decorate([
            core_1.Component({ template: '<my-service-comp></my-service-comp>' })
        ], TestComponent);
        // 3 levels of FancyService provider: module, TestCompomponent, TestProvidersComponent
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent, bag_1.TestProvidersComponent],
            providers: [bag_1.FancyService]
        })
            .overrideComponent(TestComponent, {
            set: { providers: [{ provide: bag_1.FancyService, useValue: {} }] }
        })
            .overrideComponent(bag_1.TestProvidersComponent, {
            set: { providers: [{ provide: bag_1.FancyService, useClass: FakeFancyService }] }
        })
            .createComponent(TestComponent);
        var testBedProvider;
        var tcProvider;
        var tpcProvider;
        // `inject` uses TestBed's injector
        testing_1.inject([bag_1.FancyService], function (s) { return testBedProvider = s; })();
        tcProvider = fixture.debugElement.injector.get(bag_1.FancyService);
        tpcProvider = fixture.debugElement.children[0].injector.get(bag_1.FancyService);
        expect(testBedProvider).not.toBe(tcProvider, 'testBed/tc not same providers');
        expect(testBedProvider).not.toBe(tpcProvider, 'testBed/tpc not same providers');
        expect(testBedProvider instanceof bag_1.FancyService).toBe(true, 'testBedProvider is FancyService');
        expect(tcProvider).toEqual({}, 'tcProvider is {}');
        expect(tpcProvider instanceof FakeFancyService).toBe(true, 'tpcProvider is FakeFancyService');
    });
    it('can access template local variables as references', function () {
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.ShellComponent, bag_1.NeedsContentComponent, bag_1.Child1Component, bag_1.Child2Component, bag_1.Child3Component],
        })
            .overrideComponent(bag_1.ShellComponent, {
            set: {
                selector: 'test-shell',
                template: "\n        <needs-content #nc>\n          <child-1 #content text=\"My\"></child-1>\n          <child-2 #content text=\"dog\"></child-2>\n          <child-2 text=\"has\"></child-2>\n          <child-3 #content text=\"fleas\"></child-3>\n          <div #content>!</div>\n        </needs-content>\n        "
            }
        })
            .createComponent(bag_1.ShellComponent);
        fixture.detectChanges();
        // NeedsContentComp is the child of ShellComp
        var el = fixture.debugElement.children[0];
        var comp = el.componentInstance;
        expect(comp.children.toArray().length).toBe(4, 'three different child components and an ElementRef with #content');
        expect(el.references['nc']).toBe(comp, '#nc reference to component');
        // Filter for DebugElements with a #content reference
        var contentRefs = el.queryAll(function (de) { return de.references['content']; });
        expect(contentRefs.length).toBe(4, 'elements w/ a #content reference');
    });
});
describe('Nested (one-deep) component override', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.ParentComponent, FakeChildComponent]
        })
            .compileComponents();
    }));
    it('ParentComp should use Fake Child component', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.ParentComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('Parent(Fake Child)');
    });
});
describe('Nested (two-deep) component override', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.ParentComponent, FakeChildWithGrandchildComponent, FakeGrandchildComponent]
        })
            .compileComponents();
    }));
    it('should use Fake Grandchild component', function () {
        var fixture = testing_1.TestBed.createComponent(bag_1.ParentComponent);
        fixture.detectChanges();
        expect(fixture).toHaveText('Parent(Fake Child(Fake Grandchild))');
    });
});
describe('Lifecycle hooks w/ MyIfParentComp', function () {
    var fixture;
    var parent;
    var child;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [bag_1.MyIfChildComponent, bag_1.MyIfParentComponent]
        })
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(bag_1.MyIfParentComponent);
            parent = fixture.componentInstance;
        });
    }));
    it('should instantiate parent component', function () {
        expect(parent).not.toBeNull('parent component should exist');
    });
    it('parent component OnInit should NOT be called before first detectChanges()', function () {
        expect(parent.ngOnInitCalled).toBe(false);
    });
    it('parent component OnInit should be called after first detectChanges()', function () {
        fixture.detectChanges();
        expect(parent.ngOnInitCalled).toBe(true);
    });
    it('child component should exist after OnInit', function () {
        fixture.detectChanges();
        getChild();
        expect(child instanceof bag_1.MyIfChildComponent).toBe(true, 'should create child');
    });
    it('should have called child component\'s OnInit ', function () {
        fixture.detectChanges();
        getChild();
        expect(child.ngOnInitCalled).toBe(true);
    });
    it('child component called OnChanges once', function () {
        fixture.detectChanges();
        getChild();
        expect(child.ngOnChangesCounter).toBe(1);
    });
    it('changed parent value flows to child', function () {
        fixture.detectChanges();
        getChild();
        parent.parentValue = 'foo';
        fixture.detectChanges();
        expect(child.ngOnChangesCounter).toBe(2, 'expected 2 changes: initial value and changed value');
        expect(child.childValue).toBe('foo', 'childValue should eq changed parent value');
    });
    // must be async test to see child flow to parent
    it('changed child value flows to parent', testing_1.async(function () {
        fixture.detectChanges();
        getChild();
        child.childValue = 'bar';
        return new Promise(function (resolve) {
            // Wait one JS engine turn!
            setTimeout(function () { return resolve(); }, 0);
        })
            .then(function () {
            fixture.detectChanges();
            expect(child.ngOnChangesCounter).toBe(2, 'expected 2 changes: initial value and changed value');
            expect(parent.parentValue).toBe('bar', 'parentValue should eq changed parent value');
        });
    }));
    it('clicking "Close Child" triggers child OnDestroy', function () {
        fixture.detectChanges();
        getChild();
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button'));
        testing_2.click(btn);
        fixture.detectChanges();
        expect(child.ngOnDestroyCalled).toBe(true);
    });
    ////// helpers ///
    /**
     * Get the MyIfChildComp from parent; fail w/ good message if cannot.
     */
    function getChild() {
        var childDe; // DebugElement that should hold the MyIfChildComp
        // The Hard Way: requires detailed knowledge of the parent template
        try {
            childDe = fixture.debugElement.children[4].children[0];
        }
        catch (err) { }
        // DebugElement.queryAll: if we wanted all of many instances:
        childDe = fixture.debugElement
            .queryAll(function (de) { return de.componentInstance instanceof bag_1.MyIfChildComponent; })[0];
        // WE'LL USE THIS APPROACH !
        // DebugElement.query: find first instance (if any)
        childDe = fixture.debugElement
            .query(function (de) { return de.componentInstance instanceof bag_1.MyIfChildComponent; });
        if (childDe && childDe.componentInstance) {
            child = childDe.componentInstance;
        }
        else {
            fail('Unable to find MyIfChildComp within MyIfParentComp');
        }
        return child;
    }
});
////////// Fakes ///////////
var FakeChildComponent = (function () {
    function FakeChildComponent() {
    }
    return FakeChildComponent;
}());
FakeChildComponent = __decorate([
    core_1.Component({
        selector: 'child-1',
        template: "Fake Child"
    })
], FakeChildComponent);
var FakeChildWithGrandchildComponent = (function () {
    function FakeChildWithGrandchildComponent() {
    }
    return FakeChildWithGrandchildComponent;
}());
FakeChildWithGrandchildComponent = __decorate([
    core_1.Component({
        selector: 'child-1',
        template: "Fake Child(<grandchild-1></grandchild-1>)"
    })
], FakeChildWithGrandchildComponent);
var FakeGrandchildComponent = (function () {
    function FakeGrandchildComponent() {
    }
    return FakeGrandchildComponent;
}());
FakeGrandchildComponent = __decorate([
    core_1.Component({
        selector: 'grandchild-1',
        template: "Fake Grandchild"
    })
], FakeGrandchildComponent);
var FakeFancyService = (function (_super) {
    __extends(FakeFancyService, _super);
    function FakeFancyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 'faked value';
        return _this;
    }
    return FakeFancyService;
}(bag_1.FancyService));
FakeFancyService = __decorate([
    core_1.Injectable()
], FakeFancyService);
//# sourceMappingURL=bag.spec.js.map