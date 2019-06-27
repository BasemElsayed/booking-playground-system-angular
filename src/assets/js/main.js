/*global $, alert, console*/

$(function () {
    "use strict";
    
    var winHeight = $(window).height();

    $('.carousel img', '.headerContent').width($(window).width());
    $('.carousel-item','.carousel .carousel-inner', '.headerContent').height(winHeight);
    $('.carousel').carousel();


});