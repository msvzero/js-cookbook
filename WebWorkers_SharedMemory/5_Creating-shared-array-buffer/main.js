const WORKER_COUNT = 5;

export const main = async () => {

   const NUM_COUNT = 2048;
   const BYTES_FOR_32_BIT = 4;
   const ARRAY_SIZE = NUM_COUNT * BYTES_FOR_32_BIT;
   const MAX_NUMBER = 1024;

   const sab = new SharedArrayBuffer(ARRAY_SIZE);
   const intBuffer = new Int32Array(sab);

   //Fill the intBuffer with random numbers

   intBuffer.forEach((value, index) => {
       intBuffer[index] = Math.random() * MAX_NUMBER;
   });

   //Calculate and print the sum of the values in the array
   const sum = intBuffer.reduce((acc, number) => acc + number, 0);
   console.log('Sum: ', sum)

     
}


/**
It feels a little unnatural to be thinking about byte size when working in 
JavaScript, but it's necessary for working with SharedArrayBuffer. 
The preceding example creates an array of 2,048 32-bit integers. So in order 
to create a SharedArray buffer we have to calculate how much memory 
2,048 32-bit integers will take up. This is done with simple multiplication.
Once we have ARRAY_SIZE we can allocate the memory.

Now that we have the array, we need to cast it as some type in order to read and 
write from it. We're using Int32Array, so when we perform array access operations
he values will be cast as 32-bit integers.

When filling the array, we simply loop over each number and multiply a random 
number by the MAX_NUMBER; the resulting value is cast as a 32-bit integer 
(the decimal value is lost). Next, summing is done with the array's reduce 
function, and we log out the results.

A nice feature of the Int32Array is that it has all of the Array methods as well.
 So we can perform map, join, index, includes, and so on with the new data type.
 */