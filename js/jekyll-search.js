function emptyResultsContainer () {
    $("#results-container").empty();
}

function JekyllSearch(){
    var items = [];
    $.getJSON( "/jekyll_demo/search.json", function( data ) {
        $.each( data, function( key, val ) {
            items.push( "<li><a href='" + val.url + "'>" +val.title + "</a></li>" );
            //$.each( val, function( key2, val2 ) {
                //items.push( "<li id='" + key2 + "'>" +val2 + "</li>" );
            //});
        });
    });
    $("#search-input").keyup(function(){
        $("#search-input").css("background-color","pink");
        var text = document.getElementById('search-input').value;
        emptyResultsContainer ()
        if (text.length > 0) {
            var re = new RegExp(text, "gi");
            $.each(items, function( index, value ) {
                console.log(value);
                var res = value.match(re);
                console.log(res);
                if(res != null) {
                    $("#results-container").append(value);
                }
            }); 
        }
        else {
            $("#search-input").css("background-color","white");
        }
    });
}