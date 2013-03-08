every =  function (items,option,callback) {	
	if(!isNaN(option)){
		return (callback((option),items[option]));
	}else if(Object.prototype.toString.call(option) === '[object Array]' ){
		for(i=0;i<option.length;i++){
			(callback(option[i],items[option[i]]));
		}
	}else {
		  return $.each(items,function(index,item){
	    		(option(index,item));
			})		
	};
};
