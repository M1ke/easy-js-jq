keyNavigate=function(key,$list){
	if (key==13){
	    $list.find('.sel').each(function(){
	        var $link=$(this).find('a');
	        if ($link.length>0){
	            $link.click();
	        }
	        else {
	            $(this).click();
	        }
	        $(this).removeClass('sel');
	    });
		return true;
	}
	if (key==40 || key==38){
	    $list.each(function(){
	        var $focus=$(this).find('li.sel');
	        if ($focus.length>0){
	            $focus.removeClass('sel')[key==38 ? 'prevAll' : 'nextAll'](':visible').first().addClass('sel');
	        }
	        else {
	            $(this).find('li:visible:'+(key==38 ? 'last' : 'first')).addClass('sel');
	        }
	    });
	    return true;
	}
	if (key==187 || key==189){
		var $clone=$list.parent().next('.form-clone-button');
		if ($clone.length>0){
			$clone.click();
			return true;
		}
	}
};