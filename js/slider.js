import menuProductTemplate from './menuProduct.js';
import sliderTemplate from './sliderTemplate.js';
import bannerTemplate from './banner.js';



$(document).ready(function()
{
    $("#menuProduct").append($(menuProductTemplate))
});

$(document).ready(function()
{
    $("#bannerSlider").append($(bannerTemplate))
});

$(document).ready(function()
{
    $("#slider-1").append($(jQuery.trim(sliderTemplate)))
});
$(document).ready(function()
{
    $("#slider-2").append($(sliderTemplate))
});
$(document).ready(function()
{
    $("#slider-3").append($(sliderTemplate))
});
$(document).ready(function()
{
    $("#slider-4").append($(sliderTemplate))
});

$(document).ready(function(){
    $('.menu__product_body').slick({
        slidesToShow: 9,
        infinite: false,
        draggable: false,
        variableWidth: true,

    });
});

$(document).ready(function(){
    $('.banner__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });
});

$(document).ready(function(){
    $('.row-bottom').slick({
        slidesToShow: 4,
        infinite: false,
        draggable: false,
        responsive:[
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: true
    });
});
