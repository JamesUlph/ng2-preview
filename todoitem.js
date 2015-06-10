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
var TodoItem = (function () {
    function TodoItem() {
        this.name = 'Alice';
        this.newtodo = '';
    }
    TodoItem.prototype.onMount = function () {
        console.log('mount');
    };
    TodoItem.prototype.enterTodo = function ($event, newtodo) {
        if ($event.which != 13)
            return;
        console.log(newtodo.value);
        this.newtodo = newtodo.value;
        newtodo.value = '';
    };
    TodoItem.prototype.tummyTime = function () {
    };
    TodoItem.prototype.handleClick = function () {
        console.log(this.items);
    };
    TodoItem = __decorate([
        angular2_1.Component({
            selector: 'todo-item',
            properties: {
                'item': 'item'
            }
        }),
        angular2_1.View({
            template: "\n \n  <span>{{item}}</span>\n \n   \n  \n  ",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
})();
exports.default = TodoItem;
