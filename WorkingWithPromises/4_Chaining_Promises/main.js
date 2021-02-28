export const main = () => {
    new Promise((resolve) => {
        resolve(Math.random())
    })
    .then((result) => {
        return result >= 0.5
    })
    .then((isReadyForLaunch) => {
        if(isReadyForLaunch) {
            console.log('Start the countdown!!')
        } else {
            console.log('Abort the mision')
        }
    })
}