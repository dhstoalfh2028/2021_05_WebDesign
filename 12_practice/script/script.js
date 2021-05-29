$(document).ready(function () {

    $(".tab1").click(function () {
        $(".notice").show();
        $(".gallery").hide();
    })
    $(".tab2").click(function () {
        $(".notice").hide();
        $(".gallery").show();
    })

    $(".notice>p>a").click(function () {
        $(".pop").show();
        $(".bg").show();
    })
    $(".pop-btn").click(function () {
        $(".pop").hide();
        $(".bg").hide();
    })
    
    $(".bg").click(function(){
        $(".pop").hide();
        $(".bg").hide();
    })

    $(".mainmenu>li").hover(
        function(){
            $(".submenu").stop().slideDown(200);
        },
        function(){
            $(".submenu").stop().slideUp(200);
        }
    );


});
