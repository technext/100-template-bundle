
$(window).on("load", function() {
  var $grid = $('.grid').isotope({
    layoutMode: 'fitRows',
    fitRows: {
      gutter: -10
    }
  });

  // filter functions
  var filterFns = {
    
  };

  // bind filter button click
  $('#filters').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

    $(".background-list > li").click(function() {
     $(".cat-text").text($(this).text()); 
  });
});

$(window).scroll(function(){
  $(this).scrollTop()>500?
  $(".scroll-up").fadeIn():
  $(".scroll-up").fadeOut()
}),

$('a[href="#totop"]').click(function(){
  return $("html, body").animate({scrollTop:0},"slow"),!1
});