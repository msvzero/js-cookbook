

const global = this;
const timeout = Math.floor(Math.random() * 10000); 

global.onmessage = (message) => { 
  const data = message.data; 
  const result = { 
    index: data.index, 
    timeout: timeout 
  }; 
 
  // console.log('data: ', result)
  setTimeout(() => global.postMessage(result), timeout) 
};  