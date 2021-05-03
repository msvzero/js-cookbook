/* 
    Defining methods on object literals has always been possible with normal key-value pairs. 
    More recent versions of ECMAScript have added a shorthand that mimics the syntax for defining 
    methods on classes.

    In this recipe, we'll see that we can create and override methods on object literals using either 
    technique.
*/

export const main = () => {
    const obj = {
        method0: function() {
            console.log('Hello, from method one');
        },
        method1() {
            console.log('Hello, from method one')
        }
    }

    obj.method0();
    obj.method1();

    obj.method0 = () => console.log('Override of metho 0.');
    obj.method1 = () => console.log('Override of metho 1.');

    obj.method0();
    obj.method1();

}

/* 
As we saw previously, the two syntaxes are equivalent. The two methods are 
defined as properties with function values, and because they don't have any 
attributes that prevent it, they can be overridden. Both method0 and method1 
are defined on the initial object and executed immediately thereafter.

Next, we assign a new function value to those properties of the same object. 
So when they are called again, the new functions are executed, rather than 
the originals.
*/