export const main = async () => {
    console.log(`Before task`);
    getRandomNumber()
    .then(determineReadyToLaunch)
    .then(reportResults)
    
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