function Coffe(toppings, size){
  this.toppings = toppings,
  this.size = size
}

Coffe.prototype.toppingsBasedAmount = function(){
    if(this.toppings.length != 0){
      var toppingPrice = this.toppings.length *60;
      return toppingPrice;
    }else {
      alert("please choose your addons !!")
    }
  }

Coffe.prototype.sizeBasedAmount = function(){
  if (this.size === "exp"){
    return 100;
  } else if(this.size === "cap"){
    return 120;
  } else if(this.size === "Lat"){
    return 100;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Coffe.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost =tBasedAmt +sizeBasedAmt;
  $("#displayTotalCost").html(totalCost);
}

var coffe;
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $("#displayToppings").text(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
   $("#displayName").text(inputtedName);
   $("#displaySize").text(inputtedSize);

   coffe = new Coffe(toppingArray,inputtedSize);

   var toppingBasedAmt = coffe.toppingsBasedAmount();
   var sizeBasedAmt = coffe.sizeBasedAmount();
   coffe.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });
});
