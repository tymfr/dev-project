//轻量级jquery对联广告插件
//版权 优装网 www.youzhuang.net
//作者 逐月 zhuyue.cnblogs.com
//演示 http://www.youzhuang.net
//调用方法
//$("body").couplet({width:100,height:300,leftCouplet:"http://www.yzzmf.com/ad/left.swf",rightCouplet:"http://www.yzzmf.com/ad/right.swf"});});
//调用参数
//width:100,--宽 默认宽度100
//height:300,--总高 默认高度 300
//top:100,广告距顶部的高度
//leftCouplet:"图片或FLASH地址",左则flash地址或图片地址
//leftLink:"左则连接地址，广告是图片时需要";
//rightCouplet:"右则flash地址或图片地址",
//rightLink:"右则连接地址，广告是图片时需要"

jQuery.fn.couplet = function (settings) {

    settings = jQuery.extend({
        width: 143,
        height: 160,
        top: 260,
        leftCouplet: "",
        leftLink: "左则连接地址，广告是图片时需要"
    },
            settings);
    var s = this;
    //添加广告窗口
    s.append("<div id=\"left\" style=\"text-align:center;width:143px;left:30px;top:0px; position:absolute;z-index:9999;\"></div>");
    var left = s.children("#left");

    left.append("<div class=\"couplet\" id=\"leftCouplet\" style=\"height: 160px;padding-top:20px;\"></div>");
    var leftCouplet = left.children("#leftCouplet");
    //加载左则广告
    if (settings.leftCouplet.substring(settings.leftCouplet.lastIndexOf('.')).toLowerCase() == ".swf") {
        leftCouplet.append("<div><embed src=\"" + settings.leftCouplet + "\" width=\"" + settings.width + "\" height=\"" + settings.height + "\" </embed></div>");
    } else {
        leftCouplet.append("<a href='" + settings.leftLink + "' target='_blank'><img src=\"" + settings.leftCouplet + "\" width=\"" + settings.width + "\"  height=\"" + settings.height + "\"/></a>");
    }

    var intro = "<div class=\"intro\" style=\"text-align:center;padding:10px 0px;font-size:12px;cursor:pointer;font-weight:bold;color:; \"></label>";
    //左侧关闭按钮
    left.append(intro);

    //关闭按钮
    var closeBtn = "<div class='coupletClose' style='z-index:999;cursor;pointer;position:absolute;top:0px;right:0px;height:20px;width:20px;'><img width='20' height='20' src='x.png'/></div>";
    left.append(closeBtn);
    $(".coupletClose").click(function () {
        left.remove();
    });

    //显示对联
    show();

    function show() {
        var winTop = $(window).scrollTop();
        $("#left").animate({
            top: winTop + settings.top
        }, 300);
    };
    //滚动条事件
    $(window).scroll(function () {
        $("#left").stop();
        show();
    });

};