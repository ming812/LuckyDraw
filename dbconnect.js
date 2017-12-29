var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var cloud = true;

var mongodbHost = '192.168.152.128';
var mongodbPort = '4088';

var authenticate ='';
var db;



if(cloud){
mongodbHost = 'ds141796.mlab.com';
mongodbPort = '41796';
authenticate = 'Ted_ming:ming94812@'
}

var mongodbDatabase = 'luckydraw';

var url = 'mongodb://'+authenticate + mongodbHost +':' + mongodbPort + '/' + mongodbDatabase;

MongoClient.connect(url, function(err, database){
	if(err) return console.error(err);
	assert.equal(null,err);
	console.log("Connected correctly to server.");
	global.db = database;	
});

app.get('/getList',function(req,res){
	db.collection('ShopInfo').find({},{"style" : "Rice"}).limit(3).toArray(function(err,results){
	if(err) return err;
	res.json(results);
	db.close();
	res.end(results);
	exit(0);
});

});

app.listen(4088,function(){
console.log("Service start");
})




