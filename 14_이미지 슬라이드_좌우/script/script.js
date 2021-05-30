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

    $(".bg").click(function () {
        $(".pop").hide();
        $(".bg").hide();
    })

    $(".mainmenu>li").hover(
        function () {
            $(this).find(".submenu").stop().slideDown(200);
        },
        function () {
            $(this).find(".submenu").stop().slideUp(200);
        }
    )

    function func1() {

        var num = 0;
        var result;
        setInterval(function () {
            result = num * -1000;
            num++;
            console.log(result);
            if(num==3){
                num=0;
            }
            $(".slider").stop().animate({
                left:result+'px'
            });
        },2000);
    }
    func1();

});
