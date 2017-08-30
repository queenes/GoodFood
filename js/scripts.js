var recipe1 = {
  name: "nelly",
  food: "kimchi-fried-rice",
  image:"assets/img/kimchi-fried-rice.jpg",
<<<<<<< HEAD
  instructions: "happy coocking",
=======
  instructions: "happy coocking ",
>>>>>>> 18638501075d5c5e1db7fababc16141ffb552fa6

};
var recipe2 = {
  name: "khalid",
  food: "chapati",
  image: "images/chapti.jpg",
  instructions: "ingredients: Serves:4  125g wholewhweatflour 1pinch salt  1 tablespoon olive oil 60ml water;     Method: prep:10minj Readyadyin:12min. " ,

};
var recipe3 = {
  name: "esther",
  food: "fluffy-pancakes",
  image:"img/",
  instructions: "eat some sanck",
};
var recipe4 = {
  name: "granton",
  image:"img/",
<<<<<<< HEAD
  food: "grilled chicken-lemon-herb",
  instructions: "in oder to cook it you need, bone-in, skin-on chicken pieces (breasts, legs, and/or thighs), about 2 lbs.",


};

=======
  food: "grilled-lemon-herb",
  instructions: "cook it!",

};
>>>>>>> 18638501075d5c5e1db7fababc16141ffb552fa6
var recipe5 = {
  name: "kanja",
  image:"img/",
  food: "",
  instructions: ""
};

var foods = [recipe1,recipe2,recipe3,recipe4,recipe5];

<<<<<<< HEAD

$(document).ready(function(){
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = foods[1];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);




  });


});

$(document).ready(function(){
=======

$(document).ready(function(){
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = foods[1];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);




  });


});

$(document).ready(function(){
>>>>>>> 18638501075d5c5e1db7fababc16141ffb552fa6
  $(".button-nelly").click(function(event) {
    event.preventDefault()
    var foodObj = foods[0];
    $(".thumbnail p.foods").text(foodObj.food);
    $(".thumbnail p.instruction").text(foodObj.instructions);




  });


});

$(document).ready(function(){
  $(".button-esther").click(function(event) {
    event.preventDefault()
    var foodObj = foods[2];
    $(".thumbnail p.snack").text(foodObj.food);
    $(".thumbnail p.lunch").text(foodObj.instructions);
  });



});


$(document).ready(function(){
  $(".button-grantone").click(function(event) {
    event.preventDefault()
    var foodObj = foods[3];
    $(".thumbnail p.dinner").text(foodObj.food);
    $(".thumbnail p.junk").text(foodObj.instructions);
  });



});
<<<<<<< HEAD
=======
©
>>>>>>> 18638501075d5c5e1db7fababc16141ffb552fa6
