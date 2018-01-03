var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var cloud = true;

var mongodbHost = '192.168.152.131';
var mongodbPort = '4088';

var authenticate ='';
var db;



if(cloud){
mongodbHost = 'ds141796.mlab.com';
mongodbPort = '41796';
authenticate = 'Ted_ming:ming94812@'
}

var mongodbDatabase = 'luckydraw';

var url = 'mongodb://'+authenticate + mongodbHost +':' + mongodbPort +'/' + mongodbDatabase;



app.get('/getList',function(req,res){
MongoClient.connect(url, function(err, client){
	if(err) return console.error(err);
	assert.equal(null,err);
	console.log("Connected correctly to server.");
	db = client.db(mongodbDatabase);
		db.collection('ShopInfo').find({},{fields:{_id: 0, validate: 0}}).toArray(function(err,results){
	if(err) return err;
	res.json(results);
	console.log(results);
	res.end();
});
client.close();

});


});

app.listen(4088,function(){
console.log("Service start");
});




