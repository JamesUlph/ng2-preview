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
var BallistixFooter = (function () {
    function BallistixFooter() {
    }
    BallistixFooter = __decorate([
        angular2_1.Component({
            selector: 'ballistix-footer' // Defines the <my-app></my-app> tag
        }),
        angular2_1.View({
            template: "\n  <div>Footer</div>\n  ",
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], BallistixFooter);
    return BallistixFooter;
})();
exports.default = BallistixFooter;
