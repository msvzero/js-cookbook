console.log('hello from the worker');

this.onmessage = (message) => {
    console.log(`Message Recieved: ${message.data.type}`);
}