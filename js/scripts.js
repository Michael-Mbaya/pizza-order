function size(name){
	this.sizeName=name;
	}
	size.prototype.sizePrice=function(){
		if(this.sizeName==="large"){
		return 1000;
	}
	}


$("#submit").click(function(event){
	event.preventDefault();
	
	var inputSize=$("#size").val();

	var sizePizza = new size(inputSize);
	console.log(sizePizza.sizePrice());

});

