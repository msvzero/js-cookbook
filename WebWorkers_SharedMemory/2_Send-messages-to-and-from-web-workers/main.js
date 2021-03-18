const WORKER_COUNT = 5;

export const main = async () => {
    for(let index = 0; index < WORKER_COUNT; index++) {
        const worker = new Worker('./worker.js');
        worker.onmessage = onMessage
        worker.postMessage({type: 'ping', index})
    }
     
}


const onMessage = (message) => {
    const { type, index } = message.data;
    console.log(`Main recieved a message ${type} from index ${index}`);
}


