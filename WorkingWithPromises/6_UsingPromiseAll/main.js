export const main = () => {
    console.log(`Before promise created`);
    const rocket = {};
    Promise.all([
        Promise.resolve(rocket).then(addBoosters),
        Promise.resolve(rocket).then(performGuidanceDiagnostic),
        Promise.resolve(rocket).then(loadCargo)
    ])
    .then((result) => {
        console.log(`Rocket is ready for launch`);
        console.log(result)
    })

   
}

const addBoosters = (rocket) => {
    console.log(`Attaching boosters`);
    rocket.boosters = [
        {
            count: 2,
            fuelType: 'solid'
        },
        {
            count: 1,
            fuelType: 'liquit'
        }
    ]
    return rocket;

}

const performGuidanceDiagnostic = (rocket) => {
    console.log('Performing guidance diagnostic');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Guidance diagnostic complete`);
            rocket.guidanceDiagnostic = "Completed";
            resolve(rocket);
        }, 2000)
    })
}

const loadCargo  = (rocket) => {
    console.log(`Loading satellite`);
    rocket.cargoBay = [{name: 'Communication Satellite'}];
    return rocket;
}


// Promise.all([ 
//     findAstronomers, 
//     findAvailableTechnicians, 
//     findAvailableEquipment 
//   ]).then(function ([astronomers, technicians, equipment]) { 
//     // use results for astronomers, technicians, and equipment 
//   }); 