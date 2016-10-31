$(document).ready(function() {
    qiWei();
    huanFu();
    close();
    color();
    hover();
    xianshi();
    morepro();
    nav();
    context();
    minSearch();
    mouseOver();
    fanhui();
    mouseOut();
    // qwe();

});
// 广告页关闭
function mouseOver() {
    $('.close').on('click', function() {
        $('.Advert').css('display', 'none');

    });
}

function mouseOut() {
    $('.search').focus(function() {
        $('.Label').css('display', 'none');
        $('#btn').css({
            'border': '1px solid #35b558',
            'background': '#35b558 url(http://s1.jikexueyuan.com/common/images/topsearch-icon2_8c8d8b0.png) center center no-repeat'
        });
    });
    $('.search').focusout(function() {
        $('.Label').css('display', 'block');
        $('#btn').css({
            'border': '0',
            'borderLeft': '1px solid #dfdfdf',
            'background': 'url(http://s1.jikexueyuan.com/common/images/topsearch-icon_e1f5df2.png) center center no-repeat'
        });
    });
}

function huanFu() {
    $('.navleft').hover(function() {
        $('.navout').css('display', 'block');
    }, function() { $('.navout').css('display', 'none'); });
    $('.navout').hover(function() {
        $('.navout').css('display', 'block');
    }, function() { $('.navout').css('display', 'none'); });
    $('.nava').each(function(value) {
        $(this).hover(function() {
            $('.navout1 div').eq(value).css('backgroundColor', '#dfdfdf');
            $('.navout1 span').eq(value).css('display', 'block');
        }, function() {
            $('.navout1 div').eq(value).css('backgroundColor', '#fff');
            $('.navout1 span').eq(value).css('display', 'none');

        })
    });
    $('.navout1 div').each(function(value) {
        $(this).hover(function() {
            $(this).css('backgroundColor', '#dfdfdf');
            $('.navout1 span').eq(value).css('display', 'block');
        }, function() {
            $(this).css('backgroundColor', '#fff');
            $('.navout1 span').eq(value).css('display', 'none');
        });
    });
}

function qiWei() {
    $('.lesson-list-li').each(function(value) {
        $(this).hover(function() {
            $('.lessonplay').eq(value).css('display', 'block');
            $('.cf-div1').eq(value).css('height', '170px');
            $('.cf-div1 p').eq(value).css({
                'display': 'block',
                'height': '52px',
                'opacity': '1'
            });
            $('.cf2-none').eq(value).css('display', 'block');
            $('.cf2-none1').eq(value).css('display', 'block');
            $('.cf2-none2').eq(value).css('display', 'block');

        }, function() {
            $('.lessonplay').eq(value).css('display', 'none');
            $('.cf-div1').eq(value).css('height', '88px');
            $('.cf-div1 p').eq(value).css({
                'display': 'none',
                'height': '0',
                'opacity': '0'
            });
            $('.cf2-none').eq(value).css('display', 'none');
            $('.cf2-none1').eq(value).css('display', 'none');
            $('.cf2-none2').eq(value).css('display', 'none');
        });


    });
    $('#guanbi').click(function() {
        $('.guanggao').css('display', 'none');
    });
}

function close() {
    $('.cf182 li').each(function(value) {
        $(this).hover(function() {
            $('.cf182 li').removeClass('on');
            $(this).addClass('on');
            $('.lesson-list').addClass('none');
            $('.lesson-list').eq(value).removeClass('none');
        })
    });
}

function color() {
    $('.way').each(function(value) {
        $(this).hover(function() {
            $('.way-infor').eq(value).css('opacity', '1');
        }, function() {
            $('.way-infor').eq(value).css('opacity', '0');
        });



    });
}
// 动画
function hover() {
    $('.card-transform').each(function(value) {
        $(this).hover(function() {
            $('.back').eq(value).css({
                'transform': 'rotateY(0deg)',
                'transition-duration': '0.6',
                'transition-timing-function': 'ease-in-out'
            });
            $('.front').eq(value).css({
                'transform': 'rotateY(180deg)',
                'transition-duration': '0.6',
                'transition-timing-function': 'ease-in-out'
            });
        }, function() {
            $('.back').eq(value).css({
                'transform': 'rotateY(-180deg)',
                'transition-duration': '0.6',
                'transition-timing-function': 'ease-in-out'
            });
            $('.front').eq(value).css({
                'transform': 'rotateY(0deg)',
                'transition-duration': '0.6',
                'transition-timing-function': 'ease-in-out'
            });
        });
    });
}

function xianshi() {
    $('.lesson-card').each(function(value) {
        $(this).hover(function() {
            $('.describe').eq(value).css({
                'visibility': 'visible',
                'opacity': '1'
            });
        }, function() {
            $('.describe').eq(value).css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        });
    });
}

function morepro() {
    $('.one-wiki').each(function() {
        $(this).hover(function() {
            $('.one-wiki').eq(1).css({
                'borderLeft': '1px solid transparent',
                'borderRight': '1px solid transparent'
            });
            $(this).css('border', '1px solid rgb(53, 181, 88)');
        }, function() {
            $('.one-wiki').eq(1).css({
                'borderLeft': '1px solid transparent',
                'borderRight': '1px solid transparent'
            });
            $(this).css('border', '1px solid rgb(228, 228, 228)');
        })
    });
    $(".one-wiki p,.one-wiki span,.one-wiki h3").hover(function() {
        $(this).css('color', '#35b558');
    }, function() { $(this).css('color', '#999'); });
    $('.fengmian').each(function(value) {
        $(this).hover(function() {
            $(this).css({
                'transform-origin': '0% 45% 0px',
                'transform': 'rotateY(19deg)',
                'transition-duration': '1.5',
                'transition-property': 'all',
                'transition-timing-function': 'ease'
            });
            $('.look').eq(value).css('display', 'block');
        }, function() {
            $(this).css({
                'transform-origin': '0% 45% 0px',
                'transform': 'rotateY(0deg)',
                'transition-duration': '1.5',
                'transition-property': 'all',
                'transition-timing-function': 'ease'
            });
            $('.look').eq(value).css('display', 'none');
        });
    });
}

function context() {
    $('.hover1').each(function(value) {
        $(this).hover(function() {
            $(".lesson-list-show").eq(value).css('display', 'block');
        }, function() {
            $(".lesson-list-show").eq(value).css('display', 'none');
        });
    });
    $('.lesson-list-show').each(function(value) {
        $(this).hover(function() {
            $(this).css('display', 'block');
        }, function() {
            $(this).css('display', 'none');
        });
    });
}

function minSearch() {
    $('.start-list li').eq(4).hover(function() {
        $('.title').eq(4).css('color', '#35b558');
        $('.download').css('backgroundPosition', ' 30px -117px');
    }, function() {
        $('.title').eq(4).css('color', '#000');
        $('.download').css('backgroundPosition', ' -5px -117px');
    });
    $('.start-list li').eq(5).hover(function() {
        $('.title').eq(5).css('color', '#35b558');
        $('.known').css('backgroundPosition', ' 30px  -144px');
    }, function() {
        $('.title').eq(5).css('color', '#000');
        $('.known').css('backgroundPosition', ' -5px  -144px');
    });
    $('.start-list li').eq(6).hover(function() {
        $('.title').eq(6).css('color', '#35b558');
        $('.occupation').css('backgroundPosition', ' 30px -173px');
    }, function() {
        $('.title').eq(6).css('color', '#000');
        $('.occupation').css('backgroundPosition', ' -5px -173px');
    });
    $('.start-list li').eq(7).hover(function() {
        $('.title').eq(7).css('color', '#35b558');
        $('.vip').css('backgroundPosition', ' 30px -202px');
    }, function() {
        $('.title').eq(7).css('color', '#000');
        $('.vip').css('backgroundPosition', ' -5px -202px');
    });
    $('.start-list li').eq(0).hover(function() {
        $('.start-list').css('display', 'none');
        $('.move-list').css('display', 'block');
        $('.type-list li').each(function() { $(this).removeClass('active'); });
        $('.question').addClass('active');
        $('.tab-content').each(function() { $(this).css('display', 'none'); });
        $('.tab-content').eq(0).css('display', 'block');
    });
    $('.start-list li').eq(1).hover(function() {
        $('.start-list').css('display', 'none');
        $('.move-list').css('display', 'block');
        $('.type-list li').each(function() { $(this).removeClass('active'); });
        $('.wiki1').addClass('active');
        $('.tab-content').each(function() { $(this).css('display', 'none'); });
        $('.tab-content').eq(1).css('display', 'block');
    });
    $('.start-list li').eq(2).hover(function() {
        $('.start-list').css('display', 'none');
        $('.move-list').css('display', 'block');
        $('.type-list li').each(function() { $(this).removeClass('active'); });
        $('.lession').addClass('active');
        $('.tab-content').each(function() { $(this).css('display', 'none'); });
        $('.tab-content').eq(2).css('display', 'block');
    });
    $('.start-list li').eq(3).hover(function() {
        $('.start-list').css('display', 'none');
        $('.move-list').css('display', 'block');
        $('.type-list li').each(function() { $(this).removeClass('active'); });
        $('.group').addClass('active');
        $('.tab-content').each(function() { $(this).css('display', 'none'); });
        $('.tab-content').eq(3).css('display', 'block');
    });
    $('.type-list li').each(function(value) {
        $(this).hover(function() {
            $('.tab-content').each(function() {
                $(this).css('display', 'none');
            });
            $('.tab-content').eq(value).css('display', 'block');
        });
        $(this).hover(function() {
            $('.type-list li').removeClass('active');
            $(this).addClass('active');
        });
    });
    $('.move-list').hover(function() {
        $('.start-list').css('display', 'none');
    }, function() {
        $('.start-list').css('display', 'block');
        $('.move-list').css('display', 'none');
    });




}

function fanhui() {
    $('.bannerbo1').click(
        function() {
            $('.swiper-wrapper a').each(function(value) {
                if (parseFloat($(this).position().left) < -4310) {
                    $(this).css('left', -159.667 * (value - 6) + 'px');
                }
            });
            $('.swiper-wrapper a').each(function(value) {
                var width = parseFloat($(this).css('left'));
                $(this).animate({ 'left': width - 159.6667 + 'px' }, 400);
            });
        });
    $('.bannerbo2').click(
        function() {
            $('.swiper-wrapper a').each(function(value) {
                if (parseFloat($(this).position().left) > 5108) {
                    $(this).css('left', -159.667 * (value + 1) + 'px');
                }
            });
            $('.swiper-wrapper a').each(function() {
                var width = parseFloat($(this).css('left'));
                $(this).animate({ 'left': width + 159.6667 + 'px' }, 400);
            });

        }
    );
    $('.bannerbo3').click(
        function() {
            $('.swiper-wrapper1 a').each(function(value) {
                if (parseFloat($(this).position().left) < -4310) {
                    $(this).css('left', -159.667 * (value - 6) + 'px');
                }
            });
            $('.swiper-wrapper1 a').each(function(value) {
                var width = parseFloat($(this).css('left'));
                $(this).animate({ 'left': width - 159.6667 + 'px' }, 400);
            });
        });
    $('.bannerbo4').click(
        function() {
            $('.swiper-wrapper1 a').each(function(value) {
                if (parseFloat($(this).position().left) > 5108) {
                    $(this).css('left', -159.667 * (value + 1) + 'px');
                }
            });
            $('.swiper-wrapper1 a').each(function(value) {
                var width = parseFloat($(this).css('left'));
                $(this).animate({ 'left': width + 159.6667 + 'px' }, 400);
            });

        }
    );
}

function nav() {
    $('.coop').each(function(value) {
        $(this).hover(function() {
            $('.banner-left3').eq(value).css('display', 'block');
            $('.banner-right3').eq(value).css('display', 'block');
        }, function() {
            $('.banner-left3').eq(value).css('display', 'none');
            $('.banner-right3').eq(value).css('display', 'none');
        });
    });
    $('.focuswork-wrap').hover(function() {
        $('.arrow').css('display', 'block');
    }, function() { $('.arrow').css('display', 'none'); });
    $('.arrow-left').click(function() {
        $('.focuswork-wrap li').each(function(value) {
            if (parseFloat($(this).position().left) < -186.5) {
                $(this).css('left', -186.5 * (value - 3) + 'px');
            }
        });
        $('.focuswork-wrap li').each(function(value) {
            var width = parseFloat($(this).css('left'));
            $(this).animate({ 'left': width - 186.5 + 'px' }, 400);
        });
    });
    $('.arrow-right').click(function() {
        $('.focuswork-wrap li').each(function(value) {
            if (parseFloat($(this).position().left) > 745) {
                $(this).css('left', -186.5 * (value + 1) + 'px');
            }
        });
        $('.focuswork-wrap li').each(function() {
            var width = parseFloat($(this).css('left'));
            $(this).animate({ 'left': width + 186.5 + 'px' }, 400);
        });

    });
    // $('.index-banner').hover(function() {
    //     $('.banner-1').css('display', 'block');
    //
    // }, function() { $('.banner-1').css('display', 'none'); });

    // $('#banner-left').click(function() {
    //     $('.index-bannerbox a').each(function(value) {
    //         if (parseFloat($(this).position().left) == -2240) {
    //             $(this).css('left', -560 * (value - 1) + 'px');
    //         }
    //     });
    //     $('.index-bannerbox a').each(function(value) {
    //         var width = parseFloat($(this).css('left'));
    //         $(this).animate({ 'left': width - 560 + 'px' }, 400); });
    //     $('.index-bannerbox a').each(function(value) {
    //         if (parseFloat($(this).position().left) == 0) {
    //             $('.swiper-pagination-switch').each(function() {
    //                 $(this).removeClass('swiper-active-switch');
    //             });
    //             $('.swiper-pagination-switch').eq(value - 1).addClass('swiper-active-switch');
    //         }
    //     });
    //
    // });
    // $('#banner-right').click(function() {
    //     $('.index-bannerbox a').each(function(value) {
    //         if (parseFloat($(this).position().left) == 2240) {
    //             $(this).css('left', -560 * (value + 1) + 'px');
    //         }
    //     });
    //     $('.index-bannerbox a').each(function() {
    //         var width = parseFloat($(this).css('left'));
    //         $(this).animate({ 'left': width + 560 + 'px' }, 400);
    //     });
    //     $('.index-bannerbox a').each(function(value) {
    //         if (parseFloat($(this).position().left) == 0) {
    //             $('.swiper-pagination-switch').each(function() {
    //                 $(this).removeClass('swiper-active-switch');
    //             });
    //             $('.swiper-pagination-switch').eq(value - 1).addClass('swiper-active-switch');
    //         }
    //     });
    // });

}

// function qwe() {
//     timer = setInterval(function() {
//         $('.index-bannerbox a').each(function(value) {
//             if (parseFloat($(this).position().left) == 2240) {
//                 $(this).css('left', -560 * (value + 1) + 'px');
//             }
//         });
//         $('.index-bannerbox a').each(function() {
//             var width = parseFloat($(this).css('left'));
//             $(this).animate({ 'left': width + 560 + 'px' }, 400);
//         });
//         $('.index-bannerbox a').each(function(value) {
//             if (parseFloat($(this).position().left) == 0) {
//                 $('.swiper-pagination-switch').each(function() {
//                     $(this).removeClass('swiper-active-switch');
//                 });
//                 $('.swiper-pagination-switch').eq(value - 1).addClass('swiper-active-switch');
//             }
//         });
//     }, 3000);
//     $('.index-banner').hover(function() {
//         clearInterval(timer);
//     }, function() { setTimeout(qwe(), 1000); });
//
//
//
// }
var index=0,indexnumber=$('.index-bannerbox>a').length;
// 计时器
var auto=setInterval(function () {
    if(index<indexnumber-1){
        index++;
    }else{
        $('.index-bannerbox').css('left','0');
        index=1;
    }
    changeTo(index);
},2500);
// 滑进主容器清除计时器，滑出重置计时器；
$('.index-banner').hover(function () {
    $('.banner-1').css('display','block');
    clearInterval(auto);
},function () {
    $('.banner-1').css('display','none');
    autobanner();
});
// 左点击进行换图
$('#banner-left').click(function () {
    index = (index > 0) ? (--index) : (indexnumber - 2);
    changeTo(index);
});
//右点击进行换图
$('#banner-right').click(function () {
    index = (index < indexnumber - 1) ? (++index) : 1;
    changeTo(index);});
//下标点击切换图片
$('.swiper-pagination-switch').each(function (item) {
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
            $('.index-bannerbox').css('left','0');
            index=1;
        }
        changeTo(index);
    },2500);
}
//切换图片函数
function changeTo(num){
    var goLeft = num * 560;
    $(".index-bannerbox").animate({left: "-" + goLeft + "px"},500);

}
