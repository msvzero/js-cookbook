export const falconName = "Falcon-Heavy";

export const COUNT_DOWN_DURATION = 10;


export const launch = () => {
    console.log(`Launching in ${COUNT_DOWN_DURATION}`);
    launchSequence();
}

const launchSequence = () => {
    let currCount = COUNT_DOWN_DURATION;
    const countDownInterval = setInterval(() => {
        currCount --;
        if(0 < currCount) {
            console.log(currCount);
        } else {
            console.log('Liftoff!!');
            clearInterval(countDownInterval)
        }
    }, 1000);
}

export default falconName;