export const main = async () => {
    console.log(`Before task`);
    const randomNumber = await getRandomNumber();
    const ready = await determineReadyToLaunch(randomNumber);
    await reportResults(ready);
    console.log(`After task`);
}


const getRandomNumber = async() => { 
    console.log('Getting a random number.');
    return Math.random();
}

const determineReadyToLaunch = async(porcentage) => {
    console.log('Determining Ready to launch.');
    return porcentage > 0.5
}

const reportResults = async (isReadyToLaunch) => {
    if(isReadyToLaunch) {
        console.log('Rocket ready to launch. Initiate countdown');
    } else {
        console.log('Rocket is not ready. Abort mission');
    }
}