/* 
   In a previous recipe, we saw how to use Object.assign to combine objects. It gets the job done, 
   but by using newer ECMAScript syntax we can do this in a more compact way. In this recipe, 
   we'll see how to use the new spread operator to combine objects.
*/

export function main() { 
    const object1 = { 
      prop1: 'some value', 
      prop2: 'some other value', 
    } 
    const object2 = { 
      prop2: 'some overriding value', 
      objectProp: { foo: 'bar' } 
    } 
    const anotherProp = Math.random(); 
   
    const combinedObject = { ...object1, ...object2, anotherProp }; 
    console.log(combinedObject); 
  } 

/* 
The spread operator spreads out the enumerable properties of an object so that they are all 
referenced when structuring the new object. Like Object.assign, the values are given priority 
from right to left, and the last property is handled in the sane way as with object structuring 
in a prior recipe.

*/