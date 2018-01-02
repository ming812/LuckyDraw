

function Input(){
	var value;
	var showMessage;
	this.setValue = function(Inputvalue){
		value =Inputvalue;
	};

	this.printValue = function(){
		showMessage = 'The value is '  + value
	};

	this.getMessage = function(){
		return showMessage.toString();
	};
	
//exports.message = showMessage;
	
};

module.exports = Input;


