export const main = async () => {

    const enginePromise =  checkEngine();
    const flightPlanPromise = checkFlightPlan();
    const navSystemPromise = checkNavigationSystem();

    const engineOk = await enginePromise;
    const flightPlanOk = await flightPlanPromise;
    const navigationOk = await navSystemPromise;

    if(engineOk && flightPlanOk && navigationOk) {
        console.log(`All system go, ready to launch`);
    } else {
        console.log(`Abort the launch`);
        if(!engineOk) {
            console.log(`Engine not ready`);
        } 
        if(!flightPlanOk) {
            console.log(`Error found in flight plan`);
        } 
        if(!navigationOk) {
            console.log(`Error found in navigation systems`);
        } 
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