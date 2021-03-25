const WORKER_COUNT = 5;

export const main = async () => {

   const NUM_COUNT = 2048;
   const BYTES_FOR_32_BIT = 4;
   const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
   const MAX_NUMBER = 1024;

   const sab = new SharedArrayBuffer(ARRAY_SIZE);
   const worker = new Worker('./worker.js'); 
   
   worker.onmessage = onMessage;
   worker.postMessage({ type: 'load-array', array: sab });; 

   //Fill the intBuffer with random numbers
   const intBuffer = new Int32Array(sab);
   intBuffer.forEach((value, index) => {
       intBuffer[index] = Math.random() * MAX_NUMBER;
   });
   worker.postMessage({ type: 'calculate-sum' });
   worker.postMessage({ type: 'calculate-average'}); 

   //Calculate and print the sum of the values in the array
   const sum = intBuffer.reduce((acc, number) => acc + number, 0);
   console.log('Sum: ', sum)

     
   function onMessage(message) { 
        const { result, type } = message.data; 
        console.log('result from worker operation: %s', type, result); 
  } 
}


