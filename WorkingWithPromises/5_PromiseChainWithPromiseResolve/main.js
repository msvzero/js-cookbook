export const main = () => {
    Promise.resolve({})
    .then((rocket) => {
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
    })
    .then((rocket) => {
        console.log(`Boosters attached`);
        console.log(rocket)
    })
}