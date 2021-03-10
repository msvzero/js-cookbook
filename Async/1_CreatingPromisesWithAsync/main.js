export const main = () => {
    console.log(`Before task`);
    someTask()
    .then(() => {
        console.log(`After task completed`);
    })
    console.log(`After task`);
}

const someTask = async () => { //La palabra async le indica al 'run-time' que se va retornar un Promise
    console.log(`Performing some task`);
}

