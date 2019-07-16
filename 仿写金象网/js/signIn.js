window.onload = function () {
    //指南内容
    var quideContent = document.getElementsByClassName('quideContent')[0];
    var quideContentList = [['新手入门', '购物指南', '配送服务', '支付方式', '售后保障'],
    [['新会员注册', '会员登录', '找回密码', '常见问题'], ['购物流程', '订单查询', '隐私保护', '服务协议'],
    ['配送说明', '验收与签收', '包装流程', '签约快递'], ['货到付款', '网上支付', '银行汇款', '优惠卷使用', '购物卡使用'],
    ['退换货政策', '退换货流程', '退款说明', '投诉及建议', '联系客服']]];
    //指南内容渲染
    function render2(id, arr, head, dataleft, dataright, data2left, data2right, footer) {
        var item = '';
        for (var i = 0; i < arr[0].length; i++) {
            item += head;
            item += dataleft + arr[0][i] + dataright;
            for (var j = 0; j < arr[1][i].length; j++) {
                item += data2left + arr[1][i][j] + data2right;
            }
            item += footer;
        }
        id.innerHTML = item;
    }
    render2(quideContent, quideContentList, '<dl>', '<dt>', '</dt>', '<dd><a href="javascript:void(0)">', '</a></dd>', '</dl>');
    // 验证函数
    function verity(id, cont, txt) {
        var timp1 = document.getElementsByClassName(id)[0];
        var timp2 = document.getElementsByClassName(cont)[0];
        timp1.onfocus = function () {
            this.parentElement.style.border = '1px solid #4496ee';
            timp2.style.display = 'block';
            timp2.style.background = '#f7f7f7';
            timp2.innerHTML = txt;
        }
        timp1.onblur = function () {
            this.parentElement.style.border = '1px solid #d9d9d9';
            timp2.style.display = 'none';
        }
    }
    verity('userName', 'userTip', '4-20位字符、支持汉字、字母、数字以及“-”“_”组合');
}