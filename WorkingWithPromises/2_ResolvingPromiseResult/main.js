export const main = () => {
    console.log('Before promise created');
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 5000)
    })
    .then((result) => {
        console.log(`Long running job returned: ${result}`);
    })
    console.log('After promise created');
}