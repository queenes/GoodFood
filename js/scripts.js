var recipe1 = {
  name: "nelly",
  food: "kimchi-fried-rice",
  image:"assets/img/kimchi-fried-rice.jpg",
  instructions: "happy cooking ",

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
  instructions: "eat some snack",
};
var recipe4 = {
  name: "granton",
  image:"img/",
  food: "grilled-lemon-herb",
  instructions: "cook it!",

};
var recipe5 = {
  name: "kanja",
  image:"img/",
  food: "",
  instructions: ""
};

var foods = [recipe1,recipe2,recipe3,recipe4,recipe5];


$(document).ready(function(){
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = foods[1];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);




 });


});

$(document).ready(function(){
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


$(document).ready(function() {
  $("form#subscribe_form").submit(function(event) {
    event.preventDefault();
    var emailAddress = $("#subscribe_form_input").val();
    var notification = emailAddress + " has been successfully added to our email list. Thank you!";
    $("#email-output").text(notification)
  });

});

$(document).ready(function() {
  $("form#subscribe_form").submit(function(event) {
    event.preventDefault();
    var emailAddress = $("#subscribe_form_input").val();
    var notification = emailAddress + " has been successfully added to our email list. Thank you!";
    $("#email-output").text(notification)
  });

});
