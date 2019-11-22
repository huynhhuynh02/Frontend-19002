
$(document).ready(function () {
    $(".header-right-search").click(function () {
        $(".header-right-search").animate({
            'width': '60%',
        }, 500)
        $(this).css('border-bottom', '1px solid #333');
    });
    $('body').click(function (event) {
        if (!$(event.target).closest('.header-right-search').length) {
            $(".header-right-search").animate({
                'width': '60px',
            }, 500)
            $('.header-right-search').css('border-bottom', 'none');
        }
    });
})
// Đặt giá trị cho từng slide sau đó import và mỗi điều kiện (rãnh vãi chưởng)
var slide1 = $(".slide-child").eq(0);
var slide2 = $(".slide-child").eq(1);
var slide3 = $(".slide-child").eq(2);
var curren = 0;
slide1.show();
$(document).ready(function () {
    setInterval(function () {

        if (curren == 0) {
            slide1.show();
            slide2.hide();
            slide3.hide();
            curren++;
        } else if (curren == 1) {
            slide1.hide();
            slide2.show();
            slide3.hide();
            curren++;
        } else if (curren == 2) {
            slide1.hide();
            slide2.hide();
            slide3.show();
            curren = 0;
        }
    }, 5000);
    var chay = setInterval(function(){
       $(".access-child-number").html(dem++);
        if(dem==51){
         clearInterval(chay)
       }
    },10)
   
})
// Lấy id gắn trực tiếp vào bottom sau đó remove class tiếp theo add lại class đó cho phần tử tiếp theo
var idbtn = 0;
$(".slide-bottom-btn-child").click(function () {
    idbtn = $(this).attr("id-btn-slide");
    $(".slide-bottom-child").removeClass("showslide");
    $(".slide-bottom-btn-child").removeClass("btncolor");
    $(".slide-bottom-btn-child").eq($(this).attr("id-btn-slide")).addClass("btncolor");
    $(".slide-bottom-child").eq(idbtn).addClass("showslide");
})
var dem=0
$(".access-child-number").html(dem);
