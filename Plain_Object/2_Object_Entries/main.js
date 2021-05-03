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
