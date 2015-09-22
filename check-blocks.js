/*@include check.js */

;(function($){
	$.fn.checkBlocks=function(el){
		if (!el){
			el='label';
		}
		this.find(el).unbind('click').click(function(){
			$(this).toggleClass('sel').siblings('input').check();
		}).addClass('click').siblings('input').hide().filter(':checked').siblings(el).addClass('sel');
		return this;
	};
})(jQuery);