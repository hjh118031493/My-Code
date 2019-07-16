window.onload = function () {
    //渲染数据函数(缺点：只能渲染同样单条数据)
    function render(id, arr, dataleft, dataright, data2, addLeft, addRight) {
        var item = '';
        for (var i = 0; i < arr.length; i++) {
            item += dataleft + arr[i] + dataright;
            if (data2 && i < arr.length - 1) {
                item += data2;
            }
        }
        if (addLeft && addRight) {
            id.innerHTML += addLeft + item + addRight;
        } else {
            id.innerHTML += item;
        }
    }
    //尾部导航节点数据
    var BottomNav = document.getElementsByClassName('BottomNav')[0];
    var BottomNavList = ['关于我们', '联系我们', '资质许可', '在线客服', '健康大讲堂', '全部商品', '全部分类', '健康百科', '快速找药', '网站地图'];
    render(BottomNav, BottomNavList, '<li><a href="javascript:void(0)">', '</a></li>', '<span>|</span>');
}