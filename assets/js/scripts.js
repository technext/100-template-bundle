// external js: isotope.pkgd.js


// init Isotope
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



// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
/*$(document).ready(function(){
        $('.dropdown-toggle').dropdown()
    });*/


