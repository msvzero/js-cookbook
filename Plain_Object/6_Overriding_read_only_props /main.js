/* 
Creating a non-writable property isn't the final word. In some cases, it is still possible to 
rewrite these properties. Thankfully, it is not something that is likely to be done by accident. 
In this recipe, we'll see how to define and redefine non-writable props with Object.define.
*/

export const main = () => {
    const obj = {};
    Object.defineProperty(obj, 'prop1', {
       writable: false,
       configurable: true,
       value: Math.random()
    });
    console.log(obj.prop1)

    Object.defineProperty(obj, 'prop1',{
        writable: false,
        configurable: false,
        value: Math.random()
    });
    console.log(obj.prop1)

    Object.defineProperty(obj, 'prop1',{
        value: Math.random()
    });
    console.log(obj.prop1)

}

/* 
Writable is only part of the equation. Setting writable to false means that the property can be 
reassigned normally. By default, it cannot be redefined with Object.defineProperty. However, if 
configurable is set to true, then the property can be redefined. Once the configurable attribute 
is set to false, then we can no longer redefine it.

*/