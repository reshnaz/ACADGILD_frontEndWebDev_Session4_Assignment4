var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecor(name, age) {
    return function (target // Name of class decorator is applied on.
    ) {
        console.log("classDecor with parameters ('" + name + "', " + age + ") applied onto: ", target);
    };
}
function MethodDecor(value) {
    return function (target, // The prototype of the class
        propertyKey, // Method name
        descriptor) {
        //Below will replace whatever is defined in actual method.
        console.log("MethodDecor with a parameter applied onto: ", target, propertyKey, descriptor, descriptor.value);
    };
}
var myClass = /** @class */ (function () {
    function myClass() {
        console.log("Hey there!");
    }
    myClass.prototype.sampleMethod = function () {
        return "Sample method!";
    };
    __decorate([
        MethodDecor(true)
    ], myClass.prototype, "sampleMethod", null);
    myClass = __decorate([
        classDecor("Ram", 22)
    ], myClass);
    return myClass;
}());
var obj = new myClass();
obj.sampleMethod();
