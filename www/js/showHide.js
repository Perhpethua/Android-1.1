$('#toggle').click(function() {
    $('#container > .toggleMe').slideToggle();
    $(this).text(function(i,txt) {
        return txt === "PREVIOUS" ? "NEXT" : "PREVIOUS";
    });
});
