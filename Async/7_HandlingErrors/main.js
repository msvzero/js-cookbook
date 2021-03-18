export const main = async () => {
    console.log(`Before check`);

    try {
        await addBoosters();
        await performGuidanceDiagnostic();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    console.log(`After check`);
     
}


const addBoosters = () => {
    throw new Error('Unable to add booters');
}

const performGuidanceDiagnostic = () => {
    throw new Error('Unable to finish guidance diagnostic');
}


