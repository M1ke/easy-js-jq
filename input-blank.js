;(function($){
	$.fn.inputBlankArray=function(){
		this.find('[name]').each(function(){
		    $(this).attr('name',$(this).attr('name').replace(/\[[0-9]*\]/g,'[]'));
		});
		return this;
	};
})(jQuery);