function classDecor(name: string, age: number) {
    return function(
        target: Function // Name of class decorator is applied on.
    ) {
        console.log("classDecor with parameters ('" + name + "', " + age + ") applied onto: ", target);
    }
}

function MethodDecor(value:boolean){
return function(    
        target: Object, // The prototype of the class
        propertyKey: string, // Method name
        descriptor: TypedPropertyDescriptor<any>){
            //Below will replace whatever is defined in actual method.
    console.log("MethodDecor with a parameter applied onto: ", target, propertyKey, descriptor, descriptor.value);
}
}

@classDecor(`Ram`, 22) 
class myClass{
    constructor(){
        console.log(`Hey there!`);
    }

    @MethodDecor(true)
    sampleMethod() {
        return `Sample method!`;
    }
}

let obj = new myClass();
obj.sampleMethod();
