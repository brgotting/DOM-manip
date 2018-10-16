$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Yo Yo</li>");

    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>fair well</li>");

    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });

  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>My b</li>");

    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });

  });

  $("li").css("background-color", "green");
});
