
$(document).ready(function() {

    $("button").on("click", function() {
      var content = $("input").val();
      $("ul").append("<li>" + content + " </li>");
  

    $("li").on("click", function() {
	$(this).animate({
		 opacity: 0.0,
         paddingLeft: '+=80'
                    }, 500, function() {
                        $(this).remove();
                    });
                });
	    });

});




