// #######################################
// ----- Apply Scrolled Theme to nav -----
// #######################################

$(window).scroll(function(){
    if( $(this).scrollTop() > 100 ){
        $(function() {
            var scrolling,
                stopped;
            if( $(this).scrollTop() > 20 ){
                $( window ).scroll(function() {
                    scrolling = true;
                    console.log(scrolling);
                    $(".back-to-top").fadeIn();
                    clearTimeout( $.data( this, "scrollCheck" ) );
                    $.data( this, "scrollCheck", setTimeout(function() {
                        stopped = true;
                        $(".back-to-top").fadeOut();
                    
                    }, 1050) );
                });
            }      
        });
    }
});

