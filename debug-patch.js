/* The Titanium console.log functions require to be bound to the console object */
const debug = require("./node_modules/debug/src/browser.js");
debug.log = console.info.bind(console);
module.exports = debug;