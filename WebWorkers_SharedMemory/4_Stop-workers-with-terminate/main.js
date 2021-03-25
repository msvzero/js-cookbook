const WORKER_COUNT = 5;

export const main = async () => {
    const totalWorkers = 10; 
    const workers = []; 
 
    for (let i = 0; i < totalWorkers; i++) { 
        const worker = new Worker('./worker.js'); 
        worker.onmessage = (msg) => onComplete(msg, workers); 
        workers.push(worker); 
    } 
    
    workers.map((worker, index) => { 
        workers[index].postMessage({ index }); 
    }); 
     
}


const onComplete = (message, workers) =>  { 
    const { index, timeout } = message.data; 
    workers.map((w) => w.terminate()); 
   
    console.log( `Result from worker ${index} after timeout ${timeout}`); 
  }  

/**
 * All 10 workers are instructed to post a message after their given timeout but, 
 * as you can see, only a single worker actually posts a message back to the main 
 * thread. This is because, after this first worker posts, we call terminate on all 
 * of the workers. This means that they will stop immediately, and unless another 
 * worker has already posted, it never will. So, we will almost always see a single 
 * message posted. It is possible that one or two other workers will post before 
 * being terminated.
 */