;(function($){
	var cls={};

	cls.shiftEnterSubmit=function(){
		return this.keyup(function(e){
			if (e.keyCode==13 && e.shiftKey){
				$(this).closest('form').submit();
				e.preventDefault();
			}
		});
	};

	$.fn.extend(cls);
})(window.jQuery);