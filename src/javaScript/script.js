$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollX> 800){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }


    });
     
    // toggle menu/navBar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        // console.log("nav bar trigger");
        
    });

});