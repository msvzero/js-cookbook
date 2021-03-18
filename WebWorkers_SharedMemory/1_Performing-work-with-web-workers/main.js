export const main = async () => {
    console.log(`Hello! from main.`);
    const worker = new Worker('worker.js');
    worker.postMessage({type: 'hello-message'})
     
}



