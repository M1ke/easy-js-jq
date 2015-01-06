$.fn.alertHTML=function(){
	this.each(function(){
		alert($(this).html());
	});
	return this;
};
$.fn.logHTML=function(){
	this.each(function(){
		console.log($(this).html());
	});
	return this;
};