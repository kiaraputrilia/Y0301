$(document).ready(function(){
		   
    $( '#showTitleOne' ).hover(function() {
        if($( '#titleOne' ).is(":visible")){
            $( '#titleOne' ).fadeOut(200);
            $(".highlight, .active").css({
            "color": 'rgb(100, 70, 255)'
        }).removeClass("night");		   
        } else{
            $( '#titleOne' ).fadeIn();
            $(".highlight, .active").css({
            "color": "black"
        }).addClass("night");		   
        }
     });
     
    });
