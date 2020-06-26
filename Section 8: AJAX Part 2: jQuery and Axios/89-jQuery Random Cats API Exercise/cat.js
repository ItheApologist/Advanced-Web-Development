$.getJSON("http://aws.random.cat/meow")
    .done(function(data) {
        $("img").attr("src", data.file)
    })
    .fail(function() {
        console.log("Something Went Wrong")
    })