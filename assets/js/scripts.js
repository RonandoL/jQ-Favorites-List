$(document).ready(function() {
    $("#list-items").html(localStorage.getItem("listItems")); // refresh not fucking working

    $("#the-form").submit(function(event) {
        event.preventDefault();
        var item = $("#list-input").val();

        if (item) {
            $("#list-items").append("<li>" + item + "<a href='#' class='delete'>x</a><hr></li>");
            $("#show").show();
        }
        localStorage.setItem("listItems", $("#list-items").html()); // saves input to localStorage
        $("#list-input").val("");  // removes value from input
    });

  // Remove List item
    $(document).on("click", ".delete", function() { // .on() to work with dynamic element <li>
        $(this).parent().slideUp(300, function() { // grabbing the parent of the x that was clicked on
            $(this).remove();  // removing the parent of the clicked on x
            localStorage.setItem("listItems", $("#list-items").html());  // saves input to localStorage
        });
    });
});
