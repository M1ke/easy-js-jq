;(function($){
	$.fn.dataAdd=function(key,num){
		this.data(key,(parseInt(this.data(key)) || 0)+num);
		return this;
	};
	$.fn.dataFunc=function(key,func){
		return this.data(key, func(this.data(key)));
	};
	$.fn.dataAttr=function(data,attr){
		attr=attr || data;
		return this.data(data, this.attr(attr));
	};
})(jQuery);