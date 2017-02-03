;(function($){
	$.fn.inputBlankArray=function(){
		// Note that this only replaces the first [\d+] in the name
		//i.e
		// name[2][5] => name[3][5]
		// name[2][2] => name[3][2]
		// name[][2] => name[][3]
		// name[key][2] => name[key][3]
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
