;(function($){
	$.fn.check=function(type){
		var type=type||'toggle';
		return this.each(function(){
			var start=this.checked;
			switch(type){
				case 'off':
					this.checked=false;
				break;
				case 'on':
					this.checked=true;
				break;
				case 'toggle':
					this.checked=!this.checked;
				break;
			}
			if (this.checked!=start){
				$(this).change();
			}
		});
	};
})(jQuery);