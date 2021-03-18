export const main = async () => {

    const prelaunchCheks =  [
        checkEngine(),
        checkFlightPlan(),
        checkNavigationSystem()
    ]

    const checkResults = await Promise.all(prelaunchCheks);
    // Once we have this result, we can use the Array.prototype.reduce method in order to create a single Boolean value that can be used in a conditional
    const readyToLaunch = checkResults.reduce((acc, curr) => acc && curr);
    if (readyToLaunch) { 
        console.log('All systems go, ready to launch'); 
    } else { 
        console.error('Something went wrong, abort the launch'); 
    } 
     
}

const checkEngine = () => {
    console.log(`Checking Engine`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Engine check completed`);
            resolve(Math.random() < 0.9);
        }, 250)
    })
}

const checkFlightPlan = () => {
    console.log(`Checking Flight Plan`);
    return new Promise((resolve) => {
        console.log(`Flight plan check completed`);
        resolve(Math.random() < 0.9)
    }, 350)
}


const checkNavigationSystem = () => {
    console.log(`Checking navigation system`);
    return new Promise((resolve) => {
        console.log(`Navigation system check completed`);
        resolve(Math.random() < 0.9)
    }, 450)
}