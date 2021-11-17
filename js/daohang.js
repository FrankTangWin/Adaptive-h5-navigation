    jQuery(document).ready(function($) {
        $(".anniu").hover(function() {   //利用hover鼠标停留上面的时候,产生后续动作
            console.log("in");
            
            $("ul",this).slideDown("200");
            $(this).children('ul:first').addClass("hov");

        }, function() {                  //利用鼠标离开之后,产生后续的动作
            console.log("out");            
            $("ul",this).slideUp("100");
            $(this).children('ul:first').addClass("hov");
        });
     
 
                                       });

 //控制关闭手机端的下拉菜单
    function sjclose(argument) {
         $("#sjanniu").html('<img src="images/dakai.gif" id="dakai" onclick="sjopen()"  >') 
       console.log("Open")
         $(".anniu").slideUp("200");  
    
    }

 //控制打开手机端的下拉菜单
        function sjopen(argument) {
         $("#sjanniu").html('<img src="images/cha.gif" id="cha"  onclick="sjclose()" >') 
       console.log("Close")
        $(".anniu").slideDown("100");  
    
    }
        
 