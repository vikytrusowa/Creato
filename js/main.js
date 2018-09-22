'use strict';
(function ($) {
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'packery',
        packery: {
            gutter: 5
        }
    });


// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.button').on('click', function () {
        $('.filter-button-group').find('.button').removeClass('button__activ');
        $(this).addClass('button__activ');
    })



})(jQuery);