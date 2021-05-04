/* 
    Pulling attributes from an object is yet another repetitive task. There seems to be unnecessary 
    repetition. Newer versions of ECMAScript include a syntactic feature that makes this process less 
    onerous. This recipe demonstrates how to use object destructuring to pull new variables from 
    object props.
*/

export const main = () => {
    
    const object = { 
        prop1: 'some value', 
        prop2: 'some other value', 
        objectProp: { foo: 'bar' } 
    };
    const { prop1, prop2, objectProp } = object; 
    console.log(prop1); 
    console.log(prop2); 
    console.log(objectProp); 

}

/* 
Destructuring is syntactic shorthand. The names of the variables are used to reference properties 
on the object. The values are assigned to the variable of the corresponding name.

*/