/*global $, window, document, console*/
$(function () {

    'use strict';



    /* Custimize Header Height */

    var header = $('.header');

    header.height($(window).height());

    // handling resizing and background height
    $(window).resize(function () {
        header.height($(window).height());

        $('.slider').each(function () {
            $(this).css('padding-top', ($(window).height() - $('.slider div').height()) / 2);
        });
    });


    /* Toggling li.active classes */
    $('.navbar li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    /* Trigering BX Slider */
    $('.slider').bxSlider({
        mode: 'fade',
        pager: false
    });

    $('.slider').each(function () {
        $(this).css('padding-top', ($(window).height() - $('.slider div').height()) / 2);
    });


    // custom smooth scroll 
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 800);
    });

});
