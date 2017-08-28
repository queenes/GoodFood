$(document).ready(function() {
  $(".menu").click(function(event) {
    $(".menulist").toggle();
    event.preventDefault();
  });

  $("form#subscribe_form").submit(function(event) {
    event.preventDefault();
    var emailAddress = $("#subscribe_form_input").val();
    var notification = emailAddress + " has been successfully added to our email list. Thank you!";
    $("#email-output").text(notification)
  });

});
