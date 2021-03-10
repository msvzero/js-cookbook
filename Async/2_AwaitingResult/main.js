export const main = async () => {
    console.log(`Before task`);
    const result = await getRandomNumber();
    console.log(`Received the value ${result}`);
    console.log(`After task`);
}

const getRandomNumber = () => { 
    return Math.random()
}

