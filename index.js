$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    $('.responseNo').on('mouseenter', function(event) {
        var $this = $(this);
        var offset = $this.offset();
        var xPos = event.pageX - offset.left;
        var yPos = event.pageY - offset.top;
        var mx = $this.outerWidth() / 2;
        var my = $this.outerHeight() / 2;

        var translateX = '';
        var translateY = '';

        if (yPos < my) { // top
            translateY = 'translateY(50px)'; // Increase the distance
        } else if (yPos > my) { // bottom
            translateY = 'translateY(-50px)'; // Increase the distance
        }

        if (xPos < mx) { // left
            translateX = 'translateX(50px)'; // Increase the distance
        } else if (xPos > mx) { // right
            translateX = 'translateX(-50px)'; // Increase the distance
        }

        $this.css('transform', translateX + ' ' + translateY);
    });

    $('.responseNo').on('mouseleave', function() {
        $(this).css('transform', '');
    });

});


