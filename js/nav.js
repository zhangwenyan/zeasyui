var navScript = $("script").last();
$(function () {
    (function () {
        var navbar = $("<nav>").addClass("navbar navbar-default").insertBefore($(document.body.firstChild));
        navbar.attr("role", "navigation");

        var container = $("<div>").addClass("container-fluid").appendTo(navbar);
        var navHeader = $("<div>").addClass("navbar-header").appendTo(container);
        var navBrand = $("<a>zeasyui</a>").addClass("navbar-brand").attr("href", ".").appendTo(navHeader);

        var collapse = $("<div>").addClass("collapse navbar-collapse").appendTo(container);
        var nav = $("<div>").addClass("nav navbar-nav").appendTo(collapse);

        var menus = [
            {
                text: "首页",
                flag: "home",
                href: "."
            }, {
                text: "API文档",
                flag:"api",
                href:"api.html"
            }, {
                text: "示例",
                flag:"example",
                href:"example.html"
            }, {
                text: "快速入门",
                flag:"quickGetStart",
                href:"quickGetStart.html"
            }, {
                text: "下载",
                flag:"download",
                href:"download.html"
            },
            {
                text: "博客",
                flag: "bbs",
                href: "http://blog.appx.top",
                target: "_blank"
            },
           {
                text: "关于",
                flag: "about",
                href: "about.html"
            }
    ]
    ;
    var flag = navScript.attr("flag");
    menus.forEach(function (menu) {
        var li = $("<li>").appendTo(nav);
        $("<a>" + menu.text + "</a>").attr("href", menu.href).attr("target", menu.target).appendTo(li);
        if (flag && menu.flag == flag) {
            li.addClass("active");
        }
    });

    var navRight =$("<div>").addClass("nav pull-right").appendTo(collapse);
    var li = $("<li>").appendTo(navRight);
    $('<div class="btn btn-group"><span><iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=zhangwenyan&repo=zeasyui&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="80px" height="30px"></iframe></span><span><iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=zhangwenyan&repo=zeasyui&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="80px" height="30px"></iframe></span></div>').appendTo(li);

})();

})







