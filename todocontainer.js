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
var todoitem_1 = require('./todoitem');
var TodoContainer = (function () {
    function TodoContainer() {
        this.name = 'Alice';
        this.newtodo = '';
    }
    TodoContainer.prototype.onMount = function () {
        console.log('mount');
    };
    TodoContainer.prototype.enterTodo = function ($event, newtodo) {
        if ($event.which != 13)
            return;
        console.log(newtodo.value);
        this.newtodo = newtodo.value;
        newtodo.value = '';
    };
    TodoContainer.prototype.tummyTime = function () {
    };
    TodoContainer.prototype.handleClick = function ($event) {
        console.log(this.items);
        console.log($event.target.value);
    };
    TodoContainer.prototype.handleAdd = function () {
        for (var i = 0; i < 10; i++) {
            this.items.push('xxx' + i);
        }
    };
    TodoContainer = __decorate([
        angular2_1.Component({
            selector: 'todo-container',
            properties: {
                'items': 'items'
            }
        }),
        angular2_1.View({
            template: "<h1 (click)=\"tummyTime()\">Item(s) list</h1>\n  \n  <span>{{newtodo}}</span>\n  <span>{{fred}}</span>\n  {{items.length}} item(s)\n  <button type=\"button\" (click)=\"handleClick($event)\" [disabled]=\"items.length==0\">Clear</button>\n  \n  <button type=\"button\" (click)=\"handleAdd()\">Add lots</button>\n  \n  <select (change)=\"handleClick($event)\">\n  <option *for=\"#todo of items\">{{todo}}</option>\n  </select>\n  \n  <ul>\n  <li *for=\"#todo of items\">\n  <todo-item [item]=\"todo\"></todo-item>\n  {{todo}}\n  </li>\n</ul>  \n  ",
            directives: [angular2_1.For, todoitem_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoContainer);
    return TodoContainer;
})();
exports.default = TodoContainer;
