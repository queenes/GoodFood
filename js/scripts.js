var recipe1 = {
  name: "nelly",
  food: "chapati",
  image:"",
  instructions: "",

}
var recipe2 = {
  name: "khalid",
  food: "chapati",
  instructions: "ingredients: Serves:4  125g wholewhweatflour 1pinch salt  1 tablespoon olive oil 60ml water;     Method: prep:10minj Readyadyin:12min. " ,

};
var recipe3 = {
  name: "esther",
  food: "chapati",
  image:"img/",
  instructions: ""
};
var recipe4 = {
  name: "granton",
  image:"img/",
  food: "chapati",
  instructions: "",

};
var recipe5 = {
  name: "kanja",
  image:"img/",
  food: "chapati",
  instructions: ""
};

var foods = [recipe1,recipe2,recipe3,recipe4,recipe5];


$(document).ready(function(){
  $(".button-khalid").click(function() {
    // event.preventDefault()
    var foodObj = foods[1];
    $(".khalid .food").text(foodObj.food);
    $(".khalid .instructions").text(foodObj.instructions);
    for(var i =0; i<foods.length; i++);
      if(foods[i]===foodObj;
        foods[i].image.hide()




  });


});
