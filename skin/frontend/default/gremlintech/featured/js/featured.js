var featuredCatLinksMobile = {

    topLinks: null,
    topLinksWrapper: null,
    topLinkWrap:'<ul class="dropdown menu featured-categories-wrapper" data-dropdown-menu><li></li></ul>',
    topLinkBefore: '<a href="" class="cats-menu">Categories Menu</a>',
    dropdown : null,

    init : function() {
        this.topLinks = $j('.featured-categories');
        this.topLinksWrapper = $j('.featured-categories-wrapper');
    },
    createDropdown: function() {
        if(this.topLinksWrapper.length  == 0 && this.topLinks.length > 0) {

            //wrap the structure
            this.topLinks.wrap(this.topLinkWrap);
            this.topLinksWrapper = $j('.featured-categories-wrapper');
            //add a new a tag for dropdown
            $j('.featured-categories-wrapper >  li > ul').before(this.topLinkBefore);

            //initialize foundation dropdown on the element
            this.dropdown = new Foundation.DropdownMenu(this.topLinksWrapper);
        }
    },

    destroyDropdown: function(){
        this.topLinksWrapper = $j('.featured-categories-wrapper');

        if(this.topLinksWrapper.length  > 0 && this.topLinks.length > 0) {
            this.topLinksWrapper.foundation('destroy');
            $j('.featured-categories-wrapper .cats-menu').remove();
            this.topLinks.unwrap().unwrap().removeClass('first-sub vertical');
        }

    }
};

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

    featuredCatLinksMobile.init();
    featuredCatLinksMobile.createDropdown();

});