$(document).ready(function(){
   
    $(".mainmenu>li").hover(
     function(){
         $(this).find(".submenu").stop().slideDown(200);
     },
        function(){
         $(this).find(".submenu").stop().slideUp(200);
     }
    )
    
    $(".btn-1").click(function(){
        $(".notice").show();
        $(".gallery").hide();
    })
    $(".btn-2").click(function(){
        $(".notice").hide();
        $(".gallery").show();
    })
    
    $(".popup").click(function(){
        $(".pop").show();
    })
    $(".close-btn").click(function(){
        $(".pop").hide();
    })
    
    
    
    function img_slide() {
        
        var num=0;
        var result;
        
        setInterval(function(){
            
            result=num*-800;
            console.log(num);
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
    img_slide();
    
});