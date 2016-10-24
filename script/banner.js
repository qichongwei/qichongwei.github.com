/**
 * Created by H on 2016/10/24.
 */
// 设置全局变量
    var index=0,indexnumber=$('.box div').length;
// 计时器
    var auto=setInterval(function () {
        if(index<indexnumber-1){
            index++;
        }else{
            $('.box').css('left','0');
            index=1;
        }
        changeTo(index);
    },2500);
// 滑进主容器清除计时器，滑出重置计时器；
    $('.container').hover(function () {
        $('.right').css('display','block');
        $('.left').css('display','block');
        clearInterval(auto);
    },function () {
        $('.right').css('display','none');
        $('.left').css('display','none');
        autobanner();
    });
    // 左点击进行换图
    $('.left').click(function () {
        index = (index > 0) ? (--index) : (indexnumber - 2);
        changeTo(index);
    });
//右点击进行换图
    $('.right').click(function () {
        index = (index < indexnumber - 1) ? (++index) : 1;
        changeTo(index);});
//下标点击切换图片
    $('.info').each(function (item) {
    $(this).click(function () {
            changeTo(item);
            index = item;
        });
    });
//重置计时器函数
    function autobanner() {
        auto=setInterval(function () {
            if(index<indexnumber-1){
                index++;
            }else{
                $('.box').css('left','0');
                index=1;
            }
            changeTo(index);
        },2500);
    }
//切换图片函数
    function changeTo(num){
    var goLeft = num * 400;
    $(".box").animate({left: "-" + goLeft + "px"},500);
    $(".icon a").removeClass("infoOn").eq(num).addClass("infoOn");

}

