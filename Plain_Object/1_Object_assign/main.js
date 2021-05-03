/* 
    Combining the properties from different objects is a fairly common task. 
    Doing this value by value is limited and tedious, because each property has to be enumerated. 
    This recipe demonstrates how to do the same thing with the Object.assign method.
*/

export const main = () => {
    console.log('Main');
    const object = {};
    const otherObject = {
        foo: 'original value',
        bar: 'another value'
    };

    Object.assign(object, otherObject,  {
        foo: 'override value'
    });

    console.log(object);
    
}
/*
    The Object assign method iterates over all the properties of the 
    objects passed to it. Then it assigns them to the leftmost object. 
    Priority is given to properties on rightmost objects. So, you can see 
    that the value of foo comes from the anonymous object. The leftmost 
    object is mutated by the values from the right, while the other objects 
    are left unchanged.
*/