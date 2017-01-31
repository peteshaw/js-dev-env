//this file is not transpiled and must use commonJS and ES5

//transpile babel before tests run
require('babel-register');

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
