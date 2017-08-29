var recipe1 = {
  name: "nelly",
  food: "kimchi-fried-rice",
  image:"assets/img/kimchi-fried-rice.jpg",
  instructions: ""


}
var recipe2 = {
  name: "khalid",
  food: "chapati",
  image: "images/chapti.jpg",
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
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = foods[1];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);

$(document).ready(function()){

}
   $(".button-nelly").click(function(event)){
    event.preventDefault()
    var foodObj2 = foods[0];
   $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions)
  }





  });


});
