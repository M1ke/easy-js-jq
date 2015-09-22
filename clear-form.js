var clearForm = function($form){
	return $form.find('input:not([type="hidden"],[type="submit"])')
		.filter(':not([type="radio"],[type="checkbox"])').val('').change().end()
		.filter('[type="radio"],[type="checkbox"]').prop('checked',false).end().end()
	.find('select option:selected').prop('selected',false).end()
	.find('textarea').val('');
};

;(function($){
	$.fn.clearForm=function(text,el){
		if (!text) text='x';
		if (!el) el='fieldset';
		$('<a href="#" title="Clear form">'+text+'</a>').appendTo(this).click(function(e){
			e.preventDefault();
			clearForm($(this).closest(el));
		});
	};
})(jQuery);