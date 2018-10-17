"use strict";
exports.__esModule = true;
var Stuffy = /** @class */ (function () {
    function Stuffy(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    Stuffy.prototype.about = function () {
        return "name: " + this.name + ", type: " + this.type + ", color " + this.color;
    };
    Object.defineProperty(Stuffy.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stuffy.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Stuffy;
}());
exports.Stuffy = Stuffy;
var g = new Stuffy("George", "Bear", "Brown");
console.log(g.about());
console.log(g.getName);
