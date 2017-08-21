$(function() {
    $.stellar({
        verticalScrolling: true,
        parallaxBackgrounds: true,
        responsive: true,
        scrollProperty: 'scroll',
        positionProperty: 'position'
    }).stellar('refresh');
});