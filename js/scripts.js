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


var foods = [recipe1,recipe2,recipe3,recipe4,];


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

var recipe_one = {
  food: "potaoes",
  image:"images/fries.jpg",
  instructions: "ingredients \
potatoes ( potatoes with a high dry matter content, such as Russet or Maris Piper work best.)\
cooking oil\
Paper towels\
salt\
Procedure\
Peel potatoes\
Slice potatoes into thin straw-like pieces.\
Wash well with water to remove excess starch.\
Place fries in a pan with water and simmer or par boil on the stove for about 15 mins.\
Sieve and dry fries off.\
Deep fry at 175°C in vegetable oil, lard or dripping for 4 to 5 minutes to a light golden crisp.\
Remove and place on plate with paper towels to absorb the leftover cooking oil.\
Transfer to another plate if necessary\
Add salt and shake to ensure all French fries are evenly salted.",

};
var recipe_two = {
  food: "Rice",
  instructions:
  `What You Need\
  measuring cup\
  water\
  saucepan with lid\
  salt\
  rice\
  wooden spoon\
  fork\
  Follow These Steps\

  Boil water and add salt\
  Pour water (for every cup of rice, use 1 3/4 cups of water) into a large saucepan with a tight-fitting lid. Bring to a boil. Mix 1 teaspoon salt into the water.\
  Pour in rice\
  Add it to the boiling water.\
  Stir once, or just enough to separate the rice\
  Use a wooden spoon to separate any clumps. Don’t over-stir: That can cause the rice to become sticky.\
  Cover the pot and simmer\
  Be sure the lid fits tightly on the pot. Turn down the heat to its lowest setting. Let rice simmer for about 18 minutes, then remove from heat and allow the rice to steam in the pot for another 5 minutes.\
  Fluff rice with a fork\
  Just before serving, gently fluff the rice with a fork to separate the grains.\

  Tip: Don’t uncover the saucepan or stir the rice during cooking. If it’s done before you’re ready to serve it, place a folded towel over the saucepan, replace the lid, and set aside. The towel will absorb excess moisture and condensation, helping prevent overcooked and mushy rice.\
  `,

};
var recipe_three = {
  food: "chicken",
  image:"img/fried-chicken",
  instructions: `Pinoy Style Fried Chicken\n
Prep time\n
10 mins\n
Cook time\n
25 mins\
Total time\
35 mins\

Author: Vanjo Merano\
Serves: 4\
Ingredients\
3 to 4 lbs. chicken, cut into serving pieces\
2½ tablespoons coarse sea salt\
½ teaspoon ground black pepper\
2 teaspoons garlic powder\
1 teaspoon onion powder\
¾ cup all-purpose flour\
1½ cooking oil\
Instructions\
Combine salt, ground black pepper, garlic powder, and onion powder in a large mixing bowl.\
Arrange the chicken slices in the same mixing bowl. Rub the salt mixture all over the chicken ensuring that each piece is well covered. Cover the bowl. Refrigerate for 3 to 5 hours.\
Heat the cooking oil in a pan.\
Meanwhile, put the flour in a resealable bag. Add 2 to 3 pieces of chicken in the bag. Seal and shake. Make sure that the chicken pieces are covered will flour.\
Once the oil gets hot, pan-fry the chicken in medium heat for 5 minutes. Turn the chicken over and fry the other side for 5 minutes.\
Turn the chicken over for the second time and fry both sides again for 4 minutes.\
Remove the chicken from the pan. Let the excess oil drip, then transfer to a serving plate.\
Serve with banana ketchup and white rice.\
Share and enjoy!\
Nutrition Information\
Serving size: 4`,
};
var recipe_four = {
  food:"shrimps",
  image:"images/shrimps.jpg",
  instructions:"INGREDIENTS\
8 tablespoons (1 stick) unsalted butter, divided\
1 1/2 pounds medium shrimp, peeled and deveined\
Kosher salt and freshly ground black pepper, to taste\
5 cloves garlic, minced \
1/4 cup chicken stock \
Juice of 1 lemon, or more, to taste\
2 tablespoons chopped fresh parsley leaves\

DIRECTIONS\
Melt 2 tablespoons butter in a large skillet over medium high heat.\
Add shrimp, salt and pepper, to taste. Cook, stirring occasionally, until pink, about 2-3 minutes; set aside.\
Add garlic to the skillet, and cook, stirring frequently, until fragrant, about 1 minute. Stir in chicken stock and lemon juice. Bring to a boil; reduce heat and simmer until reduced by half, about 1-2 minutes. Stir in remaining 6 tablespoons butter, 1 tablespoon at a time, until melted and smooth.\
Stir in shrimp and gently toss to combine.\
Serve immediately, garnished with parsley leaves, if desired.\
",
};


var recipes = [recipe_one,recipe_two,recipe_three,recipe_four];


$(document).ready(function(){
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = recipes[0];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);




  });


});

$(document).ready(function(){
  $(".button-esther").click(function(event) {
    event.preventDefault()
    var foodObj = recipes[1];
    $(".thumbnail p.snack").text(foodObj.food);
    $(".thumbnail p.lunch").text(foodObj.instructions);




  });


});

$(document).ready(function(){
  $(".button-grantone").click(function(event) {
    event.preventDefault()
    var foodObj = recipes[2];
    $(".thumbnail p.dinner").text(foodObj.food);
    $(".thumbnail p.junk").text(foodObj.instructions);
  });



});
$(document).ready(function(){
  $(".button-shrimps").click(function(event) {
    event.preventDefault()
    var foodObj = recipes[3];
    $(".thumbnail p.shrimps").text(foodObj.food);
    $(".thumbnail p.sea").text(foodObj.instructions);
  });
