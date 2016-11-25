$( document ).ready(function() {

    // hide all card bottom sections 
    $('.card-bottom-section').hide();
    // slide toggle bottom sections.
    $('.dropdown-btn').on('click', function() {
        $el = $(this);
        $el.next().slideToggle();
        // toggle text
        var text = $el.text();
        $el.text(text == "Read More" ? "Read Less" : "Read More");
    });
});