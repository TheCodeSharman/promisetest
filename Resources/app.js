var Mocha = require("ti-mocha"); 
let mocha = new Mocha({
    ui: 'bdd',
    reporter: 'ti-spec'
});


/* works outside of mocha 
Promise.reject( new Error("test error"))
    .then( () => Ti.API.info("execution shouldn't get here")) // adding any then() calls before the catch() triggers the error
    .catch( (err) => Ti.API.info(`caught error ${err}`)); */

mocha.addFile('promise_spec.js');
mocha.run();