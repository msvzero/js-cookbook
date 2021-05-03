/* 
   JavaScript has a complex relationship with equality. It is common knowledge that 
   using === is preferable to == because it gives more predictable results, 
   and in most cases === behaves as expected. Unfortunately, due to quirks in 
   the JavaScript type system, there are some frustrating edge cases.  
   In this recipe, we'll see how to use Object.is to get expected results 
   for comparisons.
*/

export const main = () => {
    const obj1 = {};
    const obj2 = {};

    console.log('obj1 === obj2', obj1 === obj2);
    console.log('obj1 is obj2', Object.is(obj1, obj2));
    console.log('obj2 === obj2', obj2 === obj2);
    console.log('obj2 is obj2', Object.is(obj2, obj2));
    console.log('undefined === undefined', undefined === 
    undefined);
    console.log('undefined is undefined', Object.is(undefined, 
    undefined));
    console.log('null === undefined', null === undefined);
    console.log('null is undefined', Object.is(null, undefined));

    // Special cases (from MDN documentation)
    console.log('Special Cases:');
    console.log('0 === -0', 0 === -0);
    console.log('0 is -0', Object.is(0, -0));
    console.log('-0 === -0', -0 === -0);
    console.log('-0 is -0', Object.is(-0, -0));
    console.log('NaN === NaN', NaN === NaN);
    console.log('NaN is NaN', Object.is(NaN, NaN));
}

/* 
The Object.is method has a different specification from the === operator. 
You can see that they agree most of the time, but there are certain edge 
cases where they disagree.  The initial test cases (the object, null, and 
undefined comparison) all agree, but we start to see some differences 
when we hit corner cases. You can see the differences between a positive 
and negative zero comparison, as well as a NaN comparison.
*/