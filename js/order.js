
$(".number-coupon:eq(0)").addClass("back-color");
$(".number-coupon").each(function(){
    $(this).click(function(){
        $(".number-coupon").removeClass("back-color")
        $(this).addClass("back-color") 
    })
})