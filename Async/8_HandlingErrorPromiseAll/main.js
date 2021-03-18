export const main = async () => {
    try { 
        const prelaunchChecks = [ 
          checkEngines, 
          checkFlightPlan, 
          checkNavigationSystem 
        ]; 
        await Promise.all(prelaunchChecks.map((check) => check()))
        console.log('All systems go, ready to launch'); 
      } catch (e) { 
        console.error('Aborting launch: '); 
        console.error(e); 
      } 
     
}


const checkEngines = () => {
    console.log('checking engine'); 
 
  return new Promise(function (resolve, reject) { 
    setTimeout(function () { 
      if (Math.random() > 0.5) { 
        reject(new Error('Engine check failed')); 
      } else { 
        console.log('Engine check completed'); 
        resolve(); 
      } 
    }, 250) 
  });
}

const checkFlightPlan = () => {
    console.log('checking flight plan'); 
 
  return new Promise(function (resolve, reject) { 
    setTimeout(function () { 
      if (Math.random() > 0.5) { 
        reject(new Error('Flight plan check failed')); 
      } else { 
        console.log('Flight plan check completed'); 
        resolve(); 
      } 
    }, 350) 
  }); 
}

const checkNavigationSystem = () => {
    console.log('checking navigation system'); 
 
  return new Promise(function (resolve, reject) { 
    setTimeout(function () { 
      if (Math.random() > 0.5) { 
        reject(new Error('Navigation system check failed')); 
      } else { 
        console.log('Navigation system check completed'); 
        resolve(); 
      } 
    }, 450) 
  }); 
}


