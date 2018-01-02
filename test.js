var fs = require("fs");
var Input = require('./input');
var http = require('http');
var url = require('url');


fs.readFile('input.txt', function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});

function start(route){
function onRequest(request,response){
var pathname = url.parse(request.url).pathname;
console.log("Request for "+ pathname + " received.");
route(pathname);
response.writeHead(200, {"Content-Type": "text/plain"});
input = new Input();
input.setValue('Success');
input.printValue()
response.write(input.getMessage());
response.end();
}

http.createServer(onRequest).listen(4088);

console.log("Program end");
}

exports.start = start;
