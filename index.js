var server = require('./test');
var router = require('./router');

server.start(router.route);

console.log('node current version :' + process.version);
