/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var MyThing = (function () {
    function MyThing() {
        this.name = 'Alice';
        this.newtodo = '';
    }
    MyThing.prototype.onMount = function () {
        console.log('mount');
    };
    MyThing.prototype.enterTodo = function ($event, newtodo) {
        if ($event.which != 13)
            return;
        console.log(newtodo.value);
        this.newtodo = newtodo.value;
        newtodo.value = '';
    };
    MyThing.prototype.tummyTime = function () {
        alert(this.fred);
    };
    MyThing = __decorate([
        angular2_1.Component({
            selector: 'my-thing',
            properties: {
                'fred': 'fred'
            }
        }),
        angular2_1.View({
            template: "<h1 (click)=\"tummyTime()\">{{fred}} {{ name }}</h1>\n  <input id=\"new-todo\" placeholder=\"What?\" autofocus #newtodo\n  (keyup)=\"enterTodo($event,newtodo)\">\n  <span>{{newtodo}}</span>\n  <span>{{fred}}</span>\n  " // Defines the inline template for the component
        }), 
        __metadata('design:paramtypes', [])
    ], MyThing);
    return MyThing;
})();
exports.default = MyThing;
