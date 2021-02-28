
/**
 * We can see the difference in how the default member and the name members are imported. The name members appear inside the curly braces, 
 * and the name they are imported with matches their name in the module source file.
 * The default module, on the other hand, appears outside the braces, and can be assigned to any name. 
 */
import rocketName, {  COUNT_DOWN_DURATION, launch } from './saturn-v.js';
import falconName, { COUNT_DOWN_DURATION as falconCount, launch as falconLauch } from './falcon-heavy.js';

export const  main = () => {
    console.log(`This is a ${rocketName}`);
    console.log(`It will lounch in ${COUNT_DOWN_DURATION} seconds`);
    launch();
    console.log(`This is a ${falconName}`);
    console.log(`It will lounch in ${falconCount} seconds`);
    falconLauch();
}