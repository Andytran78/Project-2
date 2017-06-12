// Make a get request to our api route that will return every book
$.get("/api/listings", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
        if(data[i].available) {

    // Create a parent div to hold book data
            var wellSection = $("<div>");
            // Add a class to this div: 'well'
            wellSection.addClass("well");
            // Add an id to the well to mark which well it is
            wellSection.attr("id", "book-well-" + i);

            // var proposeButton = $("<button>Propose a Trade</button>");
            // proposeButton.attr("id", "proposeButton-" + data[i].id);

             // Append the well to the well section
            $("#availableBooks").append(wellSection);

            // Now  we add our book data to the well we just placed on the page
            $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
            $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h3>");
            $("#book-well-" + i).append("<h3> Preferred Genre for Trade:" + data[i].preferred_genre + "</h3>");
            $("#book-well-" + i).append("<button class='propose' data-id='" + data[i].id + "'>Propose a Trade</button>")




            // $("#book-well-" + i).append("<form><div class='form-group'>" +
            //                             "<h5>Title of Book You Would Like to Trade</h5>" +
            //                             "<input id='proposeBookTitle'" + i + " placeholder='Enter Title Here'></div><div class='form-group'>" +
            //                             "<h5>Author of Book You Would Like to Trade</h5>" +
            //                             "<input id='proposeBookAuthor'" + i + " placeholder='Enter Author Here'></div>" +
            //                             "<button id='proposeTrade-" + i + "' class='btn btn-primary btn-lg'>Propose Trade</button" +
            //                             "</form>" );

        }
    }
$(".propose").on("click", function(event) {
                event.preventDefault();
                $("#availableBooks").empty();
                $("#availableBooks").show();
                var proposeId = {
                    id: $(this).attr("data-id")
                };
                console.log(proposeId.id);
                $.get("/api/listings/" + proposeId.id)
                .done(function(results) {
                console.log(results);

        });
    });

});
