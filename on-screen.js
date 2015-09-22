;(function($){
	$.fn.isOnScreen=function(half){
		if (!this.is(':visible')){
			return false;
		}
		var docViewTop=$(window).scrollTop()
			,docViewBottom= docViewTop+$(window).height();
		var elemTop=this.offset().top
			,elemBottom= elemTop+this.height();
		return (elemBottom<=docViewBottom && elemTop>=docViewTop) || (elemBottom>=docViewBottom && elemTop<=docViewTop);
	};
})(jQuery);