$.fn.nextLoop=function(){
	var $next=this.next();
	if ($next.length>0){
		return $next;
	}
	else{
		return this.prevAll().first();
	}
};