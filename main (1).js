navigator.serviceworker.register('./sw.js').then(function(registration)){
    console.log('excellent,registerd with scope:',registration.scope);

    
});