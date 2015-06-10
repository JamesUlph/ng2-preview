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
var thing_1 = require('./thing');
var todocontainer_1 = require('./todocontainer');
var ballistix_footer_1 = require('./ballistix-footer');
var ballistix_pager_1 = require('./ballistix-pager');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = 'Alice';
        this.newtodo = '';
        this.items = [];
        this.items.push("test1");
        this.items.push("test2");
        this.items.push("test3");
    }
    MyAppComponent.prototype.handleClear = function () {
        this.items = [];
    };
    MyAppComponent.prototype.handleAdd = function () {
        this.items.push("xyz");
    };
    MyAppComponent.prototype.enterTodo = function ($event, newtodo) {
        if ($event.which != 13)
            return;
        console.log(newtodo.value);
        this.newtodo = newtodo.value;
        newtodo.value = '';
    };
    MyAppComponent.prototype.tummyTime = function () {
        alert('time for tummy time!');
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app' // Defines the <my-app></my-app> tag
        }),
        angular2_1.View({
            template: "<h1 (click)=\"tummyTime()\">Helloeee {{ name }}</h1>\n  <input id=\"new-todo\" placeholder=\"What?\" autofocus #newtodo\n  (keyup)=\"enterTodo($event,newtodo)\">\n  <span>{{newtodo}}</span>\n  <my-thing fred=\"test\"></my-thing>\n  \n  <button type=\"button\" (click)=\"handleAdd()\">Add</button>\n  <button (click)=\"handleClear()\" [disabled]=\"items.length==0\">Clear item(s)</button>\n   <ballistix-pager [items]=\"items.length\" [perpage]=\"5\"></ballistix-pager>\n   <ballistix-pager [items]=\"items.length\" ></ballistix-pager>\n  <todo-container [items]=\"items\"></todo-container>\n  \n \n  <ballistix-footer></ballistix-footer>\n \n  ",
            directives: [thing_1.default, todocontainer_1.default, ballistix_footer_1.default, ballistix_pager_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
