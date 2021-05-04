/* 
We've seen in previous recipes how to avoid having properties overridden. There are situations where 
we might not want a property to be read. Recall the Object.entries method, which creates an iterator 
of all the properties and values on the object. Well, that's not precisely true. It creates an 
iterator of all the enumerable properties.
In this recipe, we'll see how to create properties that won't be included in the iterator.
*/

export const main = () => {
    const bookAuthors = {
        "Star's End": "Rose Clarke",
        "Three Body Problem": "Liu Cixin",
        "Houston Houston, Do you Read?": "James Tiptree Jr"
    }

    Object.defineProperty(bookAuthors, 'visibleProp', {
        enumerable: true,
        value: Math.random()
    });

    Object.defineProperty(bookAuthors, 'invisibleProp', {
        value: () => console.log('This function is hidden.')
    });

    for (const [prop, value] of Object.entries(bookAuthors)) {
        console.log(prop, value)
    }
    bookAuthors.invisibleProp();

}

/* 
The key values defined as literals on the object are enumerable as before. The next two properties 
are more interesting. The first property, visibleProp, explicitly sets the enumerable attribute to 
true, and appears in the list. The invisibleProp property is not explicitly set; the default value 
is false. Only the enumerable properties appear in the iterator.

*/