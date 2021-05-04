/* 
    It's not always ideal to have methods that can be overridden. By default, properties that are 
    assigned to an object can be reassigned. We need another option to add functions to an object 
    so they won't be changed.

    In this recipe, we'll see how to add non-writable properties to an object with Object.defineProperty.

*/

export const main = () => {
    const obj = {};
    Object.defineProperty(obj, 'method1', {
        writable: false,
        value: () => {
            console.log('Hello from method one.')
        }
    });
    obj.method1();
    // throws error 
    obj.method1 = () => console.log('Override of method 1.'); 

}

/* 
    In this recipe, we see that object properties are not simple key-value pairs. They have 
    attributes that governern their behavior. One of these properties is writable. This property 
    means that we can reassign the value afterwards. By default, this property is set to true;
     using Object.defineProperty we can see other values.

*/