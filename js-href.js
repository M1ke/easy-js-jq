/*@include ../js-utils/query-fragment.js */

;(function($){
	$.fn.jsHref = function(data){
		this.click(function(e){
			query=parent.location.hash ? queryFragmentGet(parent.location.hash) : {};
			query[data] = $(this).data(data);
			parent.location.hash = queryFragment(query);
			e.preventDefault();
		});
		return this;
	};
})(jQuery);
