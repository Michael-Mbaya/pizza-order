function size(name){
	this.sizeName=name;
	}
	size.prototype.sizePrice=function(){
		if(this.sizeName==="large"){
		return 1000;
	}
	}

$(document).ready(function() {
$("#submit").click(function(event){
	event.preventDefault();
	
	var inputSize=$("#size").val();
	var inputCrust=$("#crust").val();
	var inputTopping=$("#topping").val();
	var inputAmountPizza=parseInt($("#quantity").val());

	var sizePizza = new size(inputSize);
	// alert(sizePizza.sizePrice());
	alert(inputSize);
	alert(inputCrust);
	alert(inputTopping);
	alert(inputAmountPizza);

});
});
