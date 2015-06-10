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
var BallistixPager = (function () {
    function BallistixPager() {
        this.perpage = 10;
        this.current = 0;
        console.log(this.its);
    }
    BallistixPager.prototype.setPage = function (i) {
        if (i.idx == this.current)
            return;
        console.log('set page ', i);
        this.current = i.idx;
    };
    BallistixPager.prototype.getIt = function () {
        this.its = [];
        var p = this.items / this.perpage;
        for (var i = 0; i < p; i++) {
            var ob = {};
            ob.idx = i;
            ob.selected = this.current == i;
            this.its.push(ob);
        }
        return this.its;
    };
    BallistixPager = __decorate([
        angular2_1.Component({
            selector: 'ballistix-pager',
            properties: {
                items: 'items',
                perpage: 'perpage'
            } //,
        }),
        angular2_1.View({
            template: "\n  <div>Pager</div>\n  {{items}}\n  \n  \n  <ul>\n  <li class=\"pager\" *for=\"#t of getIt()\" (click)=\"setPage(t)\" [class.sel]=\"t.selected\"  > \n  <span  >\n  {{t.idx}}\n  </span>\n  </li>\n  </ul>\n  \n  ",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], BallistixPager);
    return BallistixPager;
})();
exports.default = BallistixPager;
