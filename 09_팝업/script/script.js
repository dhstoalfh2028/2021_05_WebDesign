$(document).ready(function () {
    $(".layerpopup").click(function () {
        $(".layer").show(),
        $(".layer-bg").show();
    });
    
    $(".close-btn").click(function() {
        $(".layer").hide(),
        $(".layer-bg").hide();
    });
});
