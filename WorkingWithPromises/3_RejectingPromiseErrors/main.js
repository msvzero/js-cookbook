export const main = () => {
    console.log('Before promise created');
    new Promise((resolve, reject) => {
        reject('Something went wrong')
    })
    .then((result) => {
        console.log(`Promise completed`);
    })
    .catch((error) => {
        console.error(error);
    })
}