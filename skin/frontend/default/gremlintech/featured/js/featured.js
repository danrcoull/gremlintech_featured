$j(document).ready(function(){
    $j('.slider-5').each(function() {
        $j(this)
            .on('init', function(slick) {
                var grid = $j('.products-grid');
                grid.each(function(){
                    new Foundation.Equalizer($j(this));
                })
            })
            .slick({
                lazyLoad: 'ondemand',
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 979,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 770,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
    });
    $j('.slider-2').each(function() {
        $j(this)
            .on('init', function(slick) {
                var grid = $j('.products-grid');
                grid.each(function(){
                    new Foundation.Equalizer($j(this));
                })
            })
            .slick({
                lazyLoad: 'ondemand',
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 979,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 770,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
    });

    $j("ul.category li").on('click', function () {
        $j('ul.category li.active').removeClass('active');
        $j('.featured-grid').removeClass('active');
        id = $j(this).attr('data-cat-id');
        $j(this).addClass('active');

        $j('.category-' + id).addClass('active');

        if ( $j('.products-grid').length ) {
            new Foundation.Equalizer($j('.products-grid')).applyHeight();
        }

    });


});