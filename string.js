;(function($){
	var cls={};

	cls.attrConcat=function(name,string){
		return this.attr(name,this.attr(name)+string);
	};

	cls.attrData=function(name,data){
		data=data || name;
		return this.attr(name,this.data(data));
	};

	cls.attrReplace=function(name,string,replace){
		return this.attr(name,this.attr(name).replace(string,replace));
	};

	cls.attrToggle=function(name,b,a){
		b=b || $(this).data('t-attr');
		a=a || $(this).data('t-attr-a');
		if (!a || a.length<1){
			a=$(this).attr(name);
			$(this).data('t-attr-a',a);
		}
		return this.attr(name,$(this).attr(name)==a ? b : a);
	};

	function set(el,func,val,name){
		if (val.length>0){
			if (!name){
				name=val;
			}
			el[func](name,val);
		}
		return el;
	}

	cls.attrSet=function(name,val){
		return set(this,'attr',val,name);
	};

	cls.dataSet=function(name,val){
		return set(this,'data',val,name);
	};

	cls.htmlSet=function(val){
		return set(this,'html',val);
	};

	cls.textSet=function(val){
		return set(this,'text',val);
	};

	cls.textAppend=function(string){
		return this.text(this.text()+string);
	};

	cls.textPrepend=function(string){
		return this.text(string+this.text());
	};

	cls.textToggle=function(b,a){
		b=b||$(this).data('t-text');
		a=a||$(this).data('t-text-a');
		if (!a || a.length<1){
			a=$(this).text();
			$(this).data('t-text-a',a);
		}
		return this.text($(this).text()==a ? b : a);
	};

	cls.valConcat=function(string){
		return this.val(this.val()+string);
	};

	cls.valReplace=function(string,replace){
		return this.val(this.val().replace(string,replace));
	};

	$.fn.extend(cls);
})(jQuery);