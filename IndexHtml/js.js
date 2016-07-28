jQuery(document).ready(function ($) {


    //initialise Stellar.js
    $(window).stellar();
    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    var datas;
    var go=1;
    
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        datas = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
            datas = $(this).attr('data-slide');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
            datas = $(this).attr('data-slide');
        }
        
    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        go=dataslide;
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        go=dataslide;
        goToByScroll(dataslide);
    });
    
    
    $(window).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            if(go==2){
                e.preventDefault();
                goToByScroll(1);
                go=1;
            }
            else if(go==3){
                e.preventDefault();
                goToByScroll(2);
                go=2;
            }
            else if(go==4){
                e.preventDefault();
                goToByScroll(3);
                go=3;
            }   
            else if(go==5){
                e.preventDefault();
                goToByScroll(4);
                go=4;
            }   
        }
        else {
            if(go==1){
                e.preventDefault();
                goToByScroll(2);
                go=2;
            }
            else if(go==2){
                e.preventDefault();
                goToByScroll(3);
                go=3;
            }
            else if(go==3){
                e.preventDefault();
                goToByScroll(4);
                go=4;
            }
            else if(go==4){
                e.preventDefault();
                goToByScroll(5);
                go=5;
            }
        }
    });
    
    
    
});




$(function () {
    $('#slide1').delay(1000).fadeTo('slow', 0.9, function () {
        $(this).delay(200).fadeTo('slow',1.0, function() {
            $(this).delay(2000).fadeTo('slow',0.9,function() {
                $(this).delay(200).fadeTo('slow',1.0);
        });
    });
  });
});

$(function () {
    $('#slide2').delay(10000).fadeTo('slow', 0.9, function () {
        $(this).delay(200).fadeTo('slow',1.0, function() {
            $(this).delay(5000).fadeTo('slow',0.9,function() {
                $(this).delay(200).fadeTo('slow',1.0);
        });
    });
  });
});

$(function () {
    $('#slide3').delay(20000).fadeTo('slow', 0.9, function () {
    $(this).delay(200).fadeTo('slow',1.0);
  });
});

$(function () {
    $('#slide4').delay(20000).fadeTo('slow', 0.9, function () {
    $(this).delay(200).fadeTo('slow',1.0);
  });
});

$(function () {
    $('#slide5').delay(20000).fadeTo('slow', 0.9, function () {
    $(this).delay(200).fadeTo('slow',1.0);
  });
});