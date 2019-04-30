//移动端兼容JS，勿动！！！！！！！！！！
var view_timer = null;
function viewPort(d, c) {
    var a = document.getElementById("viewport");
    a && document.head.removeChild(a);
    c || (c = 640);
    a = parseInt(window.screen.width) / c;
    if (/Android (\d+\.\d+)/.test(d)) {
        var b = document.createElement("meta");
        b.name = "viewport";
        b.id = "viewport";
        2.3 < parseFloat(RegExp.$1) ? b.content = "width=" + c + ", initial-scale = " + a + ",user-scalable=1, minimum-scale = " + a + ", maximum-scale = " + a + ", target-densitydpi=device-dpi" : b.content = '"width=' + c + ", target-densitydpi=device-dpi"
    } else {
        b = document.createElement("meta");
        b.name = "viewport";
        b.id = "viewport";
        if ("-90" == window.orientation || "90" == window.orientation) a = window.screen.height / c;
        b.content = "width=" + c + ", initial-scale = " + a + " ,minimum-scale = " + a + ", maximum-scale = " + a + ", user-scalable=no, target-densitydpi=device-dpi"
    }
    document.head.appendChild(b)
}
viewPort(navigator.userAgent);
window.onresize = function() {
    clearTimeout(view_timer);
    view_timer = setTimeout(function() {
        viewPort(navigator.userAgent)
    }, 500)
};