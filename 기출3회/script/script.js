$(document).ready(function(){

    $(".mainmenu>li").hover(
        function(){
            $(this).find(".submenu").stop().slideDown(200);
        },
        function(){
            $(this).find(".submenu").stop().slideUp(200);
        }
    );

    $(".tab>.btn1").click(function(){
        $(".notice").show();
        $(".gallery").hide();
    })
    $(".tab>.btn2").click(function(){
        $(".notice").hide();
        $(".gallery").show();
    })

    $(".notice>a").click(function(){
        $(".popup").show();
    })
    $(".close-btn").click(function(){
        $(".popup").hide();
    })

    function img_slide() {

        var num = 0;

        setInterval(function () {

            
            if(num == 3){
                num =0 ;
            }

            // $('.slider p').hide();
            $('.slider p').eq(-num).stop().fadeOut();
            $('.slider p').eq(num).stop().fadeIn();
            console.log(num);
            num++;

        }, 1000);

    }
    img_slide();

});