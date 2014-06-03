$(window).load(function(){
    // Create white loading screen with loading gif
    $("#dvLoading").fadeOut(2000,function(){$(this).hide()});
});
$(document).ready(function(){
    
    // Initialize Bootstrap Tabs
    $('#tabs').tab();    
    
	
    ////////////////
    // Triggering animated.css at the right time
    ///////////////
	var wpOffset = 80,
        $portfolioContainer = $('.portfolio-container'),
        $articleContainer = $('.article-container'),
        isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    if (!isMobile) {
        $.fn.waypoint.defaults = {
            context: window,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        $('.animated').waypoint(function () {
            var elem = $(this),
                animation = elem.data('animation'),
                timeout;
            if (!elem.hasClass('visible') && elem.attr('data-animation') !== undefined) {
                if (elem.attr('data-animation-delay') !== undefined) {
                    timeout = elem.data('animation-delay');

                    setTimeout(function () {
                        elem.addClass(animation + " visible");
                    }, timeout);
                } else {
                    elem.addClass(elem.data('animation') + " visible");
                }
            }
        }, { offset: wpOffset + '%' });
    } else {
        $('.animated').removeClass('animated');
    }

    //////////////
    // IE9 Input placeholder text
    //////////////
    if(navigator.appVersion.match(/MSIE [\d.]+/)){
        var placeholderText = 'Your name *';
        $('#name').val(placeholderText);
        $('#name').blur(function(){
            $(this).val() == '' ? $(this).val(placeholderText) : false;
        });
        $('#name').focus(function(){
            $(this).val() == placeholderText ? $(this).val('') : false;
        });

        var placeholderText2 = 'Your e-mail address *';
        $('#email').val(placeholderText2);
        $('#email').blur(function(){
            $(this).val() == '' ? $(this).val(placeholderText2) : false;
        });
        $('#email').focus(function(){
            $(this).val() == placeholderText2 ? $(this).val('') : false;
        });

        var placeholderText3 = 'Subject';
        $('#subject').val(placeholderText3);
        $('#subject').blur(function(){
            $(this).val() == '' ? $(this).val(placeholderText3) : false;
        });
        $('#subject').focus(function(){
            $(this).val() == placeholderText3 ? $(this).val('') : false;
        });

        var placeholderText4 = "What's on your mind? *";
        $('#message').val(placeholderText4);
        $('#message').blur(function(){
            $(this).val() == '' ? $(this).val(placeholderText4) : false;
        });
        $('#message').focus(function(){
            $(this).val() == placeholderText4 ? $(this).val('') : false;
        });
    }
});