var Mocha = require("ti-mocha"); 
let mocha = new Mocha({
    ui: 'bdd',
    reporter: 'ti-spec'
});
mocha.addFile('promise_spec.js');
mocha.run();