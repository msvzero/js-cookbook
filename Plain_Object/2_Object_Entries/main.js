/* 
   Object.assign works well for copying properties from one object to another.
   However, we sometimes want to perform other operations based on the
   properties of an object. This recipe shows how to use Object.entries 
   to get an iterable of an object's properties.
*/

export const main = () => {
    console.log('Main');
    const object = {
        foo: Math.random(),
        bar: Math.random()
    }
    for (let [props, value] of Object.entries(object)) {
        console.log(props, value)
    }
}

/* 
Object.entries returns what is known as an iterable. 
These lists can be traversed with for-of loops. The items in this iterable 
are pairs of property names and values.  The props are foo and bar, while t
he value entries are their corresponding values for those props.

The syntax [prop, value] destructures this pair into individual variables 
that are then logged out. Alternatively, we could reference the entry prop 
and value as the zero and 1 index of an array, but the destructured syntax 
is a little more direct.
*/