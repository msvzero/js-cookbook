// In this recipe, we'll see how Promises.catch can handle errors that are reported by being thrown or through rejection.
export const main = () => {
    console.log(`Before promise created`);
    const rocket = {};
    Promise.resolve(rocket)
    .then(addBoosters)
    .catch(console.error);

    Promise.resolve(rocket)
    .then(performGuidanceDiagnostic)
    .catch(console.error)

   
}


const addBoosters = (rocket) => {
    throw new Error(`Unable to add boosters`);
}


const performGuidanceDiagnostic = (rocket) => {
    return new Promise ((reject) => {
        reject(new Error('Unable to finish guidance diagnostic'))
    })
} 