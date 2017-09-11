// install Node.js require extension for `.marko` files
// require this as close as possible to the beginning of the file
require('marko/node-require');

var fs = require('fs');

var http = require('http');
var hello = require('./hello');
var port = 8081;

http.createServer((req, res) => {
    // let the browser know html is coming
    res.setHeader('content-type', 'text/html');

    // render the output to the `res` output stream
    hello.render({ name:'Marko' }, res);
}).listen(port);
