const WORKER_COUNT = 5;

export const main = async () => {
    const worker =  new Worker('./worker.js');
    worker.onmessage = onMessage;
    const numbers = (new Array(100)).fill().map(Math.random) 
    worker.postMessage({ type: 'average', numbers}); 
     
}

//Captura el resultado que retorna el webworker
const onMessage = (message) => {
    const { result, type } = message.data;
    console.log(`Result for the operation ${type}: ${result}`);
}


