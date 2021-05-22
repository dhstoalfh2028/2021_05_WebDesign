$(document).ready(function () {

    $(".menu>ul>li").mouseover(function () {
        $(".submenu").stop().slideDown(200);
    });

    $(".menu>ul>li").mouseout(function () {
        $(".submenu").stop().slideUp(200);
    });

})
