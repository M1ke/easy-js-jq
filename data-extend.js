$.fn.dataAdd=function(key,num){
	this.data(key,parseInt(this.data(key))+num);
	return this;
};