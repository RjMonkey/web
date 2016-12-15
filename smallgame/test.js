/**
 * Created by future on 16-9-20.
 *
 */
var images = "", count = 50;
for(var i = 1; i <= count; i++)
    images += '<img src="http://thecodeplayer.com/u/uifaces/'+i+'.jpg" />';
$(".grid").append(images);

var d = 0; //延时
var ry, tz, s; //定义转换参数
$(".animate").on("click", function(){
    $("img").each(function(){
        d = Math.random()*1000; //1ms to 1000ms delay
        $(this).delay(d).animate({opacity: 0}, {
            step: function(n){
                s = 1-n; //scale - will animate from 0 to 1
                $(this).css("transform", "scale("+s+")");
            },
            duration: 1000
        })
    }).promise().done(function(){
        storm(); //淡出效果全部完成时调用
    })
})



function storm(){
    $("img").each(function(){
        d = Math.random()*1000;
        $(this).delay(d).animate({opacity: 1}, {
            step: function(n){
                //rotating the images on the Y axis from 360deg to 0deg
                ry = (1-n)*360;
                //translating the images from 1000px to 0px
                tz = (1-n)*1000;
                //applying the transformation
                $(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
            },
            duration: 3000,
            easing: 'easeOutQuint'
        })
    })
}