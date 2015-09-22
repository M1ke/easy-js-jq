/*@include ../js-utils/query-to-object.js.js */

;(function($){
	$.fn.serializeObject=function(){
		return this.serializeArray().query2DToObject();
	};

	$.fn.unserialize=function(data){
	    var $form=$(this);
	    $.each(data,function(key,value){
	        if (typeof value=='object'){
	            if (value.constructor.name=='Array'){
	                var $inputs=$form.find('[name^="'+key+'"]')
	                	,type=$inputs.first().attr('type');
	                if (type=='checkbox' || type=='radio'){
	                    $inputs.each(function(){
	                        if (value.indexOf($(this).val())>-1){
	                            $(this).prop('checked',true);
	                        }
	                    });
	                }
	                else {
	                    $inputs.each(function(index){
	                        $(this).val(value[index]);
	                    })
	                }
	            }
	            else {
	                $.each(value,function(subKey,subVal){
	                    $form.find('[name="'+key+'['+subKey+']"]').unserializeInput(subVal);
	                });
	            }
	        }
	        else {
	            $form.find('[name="'+key+'"]').unserializeInput(value);
	        }
	    });
	};

	$.fn.unserializeInput=function(val){
	    return this.each(function(){
	        var type=$(this).attr('type');
	        if (type=='radio' || type=='checkbox'){
	            $(this).prop('checked',(val==$(this).val()));
	        }
	        else {
	            $(this).val(val);
	        }
	    });
	    return this;
	};
})(jQuery);