const WORKER_COUNT = 5;

export const main = async () => {

  const NUM_COUNT = 2048;
  const BYTES_FOR_32_BIT = 4;
  const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
  const MAX_NUMBER = 1024;
  const WORKER_COUNT = 10; 

  //create workers
  let workers = [];
  console.log('Creating workers');
  for (let i = 0; i < WORKER_COUNT; i++) {
    const worker = new Worker('./worker.js');
    worker.onmessage = onMessage;
    workers = workers.concat(worker);
  }

  //create buffer and add data
  const sab = new SharedArrayBuffer(ARRAY_SIZE);
  const intBuffer = new Int32Array(sab);

  //fill with random numbers
  console.log('Filling Int buffer');
  intBuffer.forEach((currentItem, index) => {
      intBuffer[index] = (Math.random()* MAX_NUMBER) + 1
  });

  //Post these messages to each of the workers
  workers.forEach((worker, workerIndex) => {
    worker.postMessage({ type: 'load-array', array: sab });
    worker.postMessage({ type: 'load-indices', workerIndex,
    workerCount: WORKER_COUNT });
    worker.postMessage({ type: 'calculate-sum' });
    worker.postMessage({ type: 'calculate-average' });
  });;
     
   function onMessage(message) { 
    const { 
      type, 
      result, 
      workerIndex, 
      startIndex, 
      endIndex, 
      windowSize 
    } = message.data; 
    console.log(`Result from worker operation { 
      type: ${type}, 
      result: ${result}, 
      workerIndex: ${workerIndex}, 
      startIndex: ${startIndex}, 
      endIndex: ${endIndex}, 
      windowSize: ${windowSize} 
    }`); 

  } 
}

/**
 * How it works...
Shared array buffers can be shared across any number of worker threads. In order to calculate portions of the result, 
we need to divide the results equitably between the threads. That's what the 'load-indices' case of the worker onMessage listener does.

We can use the size of the array and the total worker count to get the window size. We take the floor so that we don't go beyond the 
index of the array. This is also because you can't have a partial index: they are integers.

Next, we use the current worker index to get the startIndex (basically picking up where the previous worker left off). To get the end 
index, we need to know if this is the last worker. If not, we use the window size. If it is, we need to take all of the remaining values.

Once we have our array slice, each worker calculates the sums and averages of those portions as they would with the entire array. 
Then the results and the worker info are posted to the main thread
 */


