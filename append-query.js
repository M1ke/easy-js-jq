/*@include ../js-utils/string-append-query.js */

;(function($){
	$.fn.appendQuery = function(append){
		this.each(function(){
			$(this).attr('href', $(this).attr('href').appendQuery(append));
		});
		return this;
	};
})(jQuery);