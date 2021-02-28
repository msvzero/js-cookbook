export const main = () => {
    console.log('Before promise created');
    new Promise((resolve) => {
        console.log('Executing promise');
        resolve();
    })
    .then(() => {
        console.log('Finish promise');
    })
    console.log('After promise created');
}