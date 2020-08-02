//object size (for pizza sizes)
function size(name){
	this.sizeName=name;
	}
//prototype for price of pizza sizes
size.prototype.sizePrice=function(){
	if(this.sizeName==="large"){
		return 900;
	}
	else if(this.sizeName==="medium"){
		return 650;
	}
	else if(this.sizeName==="small"){
		return 450;
	}
	else{
		alert("Please Input Pizza Size to continue");
		$("form").reset();
	}
}

//object crust (for pizza crusts)
function crust(name){
	this.crustName=name;
}
//prototype for price of pizza crusts
crust.prototype.crustPrice=function(){
	if(this.crustName==="crusty"){
		return 100;
	}
	else if(this.crustName==="stuffed"){
		return 200;
	}
	else if(this.crustName==="glutenFree"){
		return 150;
	}
	else{
		alert("Please Input Crust Type to continue");
	}
}

//object topping (for pizza toppings)
function topping(name){
	this.toppingName=name;
}
//prototype for price of pizza toppings (dependant on pizza sizes)
topping.prototype.toppingPrice=function(){
	if(this.toppingName==="none"){
		return 0;
	}
	else if((this.toppingName==="mushroom")&&($("#size").val()==="large")){
		return 250;
	}
	else if((this.toppingName==="mushroom")&&($("#size").val()==="medium")){
		return 160;
	}
	else if((this.toppingName==="mushroom")&&($("#size").val()==="small")){
		return 100;
	}
	else if((this.toppingName==="sausage")&&($("#size").val()==="large")){
		return 100;
	}
	else if((this.toppingName==="sausage")&&($("#size").val()==="medium")){
		return 65;
	}
	else if((this.toppingName==="sausage")&&($("#size").val()==="small")){
		return 35;
	}
	else if((this.toppingName==="onion")&&($("#size").val()==="large")){
		return 50;
	}
	else if((this.toppingName==="onion")&&($("#size").val()==="medium")){
		return 35;
	}
	else if((this.toppingName==="onion")&&($("#size").val()==="small")){
		return 20;
	}
	else if((this.toppingName==="beef")&&($("#size").val()==="large")){
		return 150;
	}
	else if((this.toppingName==="beef")&&($("#size").val()==="medium")){
		return 100;
	}
	else if((this.toppingName==="beef")&&($("#size").val()==="small")){
		return 70;
	}
	else if((this.toppingName==="chicken")&&($("#size").val()==="large")){
		return 200;
	}
	else if((this.toppingName==="chicken")&&($("#size").val()==="medium")){
		return 150;
	}
	else if((this.toppingName==="chicken")&&($("#size").val()==="small")){
		return 100;
	}
	else{
		alert("Please Input Topping Desired to continue");
	}
}

function pizzaTotal(){
	
}

$(document).ready(function() {
	$("#submit").click(function(event){
	event.preventDefault();
	
	var inputSize=$("#size").val();
	var inputCrust=$("#crust").val();
	var inputTopping=$("#topping").val();
	var inputAmountPizza=$("#quantity").val();

	var sizePizza = new size(inputSize);
	// sizePizza.sizePrice();									//test sizePrice
	var crustPizza = new crust(inputCrust);
	// crustPizza.crustPrice();								//test crustPrice
	var toppingPizza = new topping(inputTopping);
	// toppingPizza.toppingPrice();						//test toppingPrice

	if($("#size").val()==="selectDefault"){
		alert("Please Input Pizza Size to continue");
	}
	else if($("#crust").val()==="selectDefault"){
		alert("Please Input Pizza Crust to continue");
	}
	else if($("#topping").val()==="selectDefault"){
		alert("Please Input Pizza Toppings to continue");
	}
	else if($("#quantity").val()===""){
		alert("Please Input Amount of Pizzas you Want!");
	}
	
	else{
		var pizzaPrice = (parseInt(parseInt(inputAmountPizza)*(parseInt(sizePizza.sizePrice())+parseInt(crustPizza.crustPrice())+parseInt(toppingPizza.toppingPrice()))));
		// alert(pizzaPrice);				//test pizza order price
		$(".res").show();
		$("#listOrders").append("<p>Pizza Size '" +inputSize  + "' = " +sizePizza.sizePrice()
													+", Crust Size: '" +inputCrust  + "' = " +crustPizza.crustPrice()
													+", Topping: '" +inputTopping  + "' = " +toppingPizza.toppingPrice()
													+". Total for This Order : "+inputAmountPizza+" Pizza *"+"("
													+sizePizza.sizePrice()+"+"+crustPizza.crustPrice()+"+"
													+toppingPizza.toppingPrice()+")"+" = "
													+"<span class=\"totalPizza text-dark\">"+pizzaPrice+"</span>"+"</p>");
	}

	$("#confirm").click(function(){
		$("#submit").prop("disabled", true);
		$("#addPizza").prop("disabled", true);
		$("#checkout").show();
		$("#cancel").show();
	})
	$("#checkout").click(function(){
		// $(".deliver").show();
	})

	// var location = prompt('Please enter your Location');

  // $("").append("<p>"+"You will pay " + newTotal + "</p>");

});
});

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
