// In this recipe, we'll see how a final then call to execute some code in both successful and failing fulfillment states.
export const main = () => {
    console.log(`Before promise created`);
    Promise.resolve(Math.random() > 0.5)
    .then(addBoosters)
    .then(() => {
        console.log(`Ready to launch`);
    })
    .catch(console.error)
    .then(() => console.log('Time to inform the press.')); 
    


   
}

const addBoosters = (shouldFail) => {
    if(shouldFail) {
        throw new Error('Unable to add Booters');
    }

    return {
        boosters: [{ 
            count: 2, 
            fuelType: 'solid' 
          }, { 
            count: 1, 
            fuelType: 'liquid' 
        }] 
    };
}