;(function($){
	$.fn.inputBlankArray=function(){
		this.find('[name]').each(function(){
			var name = $(this).attr('name');
			var findNum = new RegExp('\\[([0-9]+)\\]');
			var foundNums = name.match(findNum);
			if (!foundNums || !foundNums[1]){
				return;
			}
			var num = 1*foundNums[1];
			num++;
			name = name.replace(findNum, '['+num+']');
			$(this).attr('name', name);
		});
		return this;
	};
})(jQuery);
